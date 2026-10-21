'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { v4 as uuid } from 'uuid';

import EmotionRegistry from 'components/emotion-registry';
import theme from 'theme';

export default function Providers({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    let deviceId = localStorage.getItem('device-id');
    if (!deviceId) {
      deviceId = uuid();
      localStorage.setItem('device-id', deviceId);
    }
    fetch('/api/view', {
      method: 'POST',
      body: JSON.stringify({
        device_id: deviceId,
        referrer: document.referrer,
        pathname,
      }),
    });
  }, [pathname]);

  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EmotionRegistry>
  );
}
