'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

// Collects the styles emotion generates during server rendering and flushes
// them into the HTML stream, so the page is styled before hydration
export default function EmotionRegistry({ children }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = [];
    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({ name: serialized.name, isGlobal: !selector });
      }

      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];

      return prevInserted;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const inserted = flush().filter(
      ({ name }) => typeof cache.inserted[name] === 'string'
    );
    if (inserted.length === 0) {
      return null;
    }

    // Global styles get their own tags, matching what emotion's <Global>
    // looks for on hydration so it can replace them when they change (e.g.
    // when theme-ui switches the color mode)
    const globals = inserted.filter(({ isGlobal }) => isGlobal);
    const names = inserted
      .filter(({ isGlobal }) => !isGlobal)
      .map(({ name }) => name);

    return (
      <>
        {globals.map(({ name }) => (
          <style
            key={name}
            data-emotion={`${cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: cache.inserted[name] }}
          />
        ))}
        {names.length > 0 && (
          <style
            data-emotion={`${cache.key} ${names.join(' ')}`}
            dangerouslySetInnerHTML={{
              __html: names.map((name) => cache.inserted[name]).join(''),
            }}
          />
        )}
      </>
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
