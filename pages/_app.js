import '@fontsource/crimson-text';
import '@fontsource/rosario';
import { ThemeProvider } from 'theme-ui';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Layout from 'components/layout';
import theme from 'theme';

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

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
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
