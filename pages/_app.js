import '@fontsource/crimson-text';
import '@fontsource/rosario';
import { ThemeProvider } from 'theme-ui';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import 'prism-themes/themes/prism-vsc-dark-plus.css';

import Layout from 'components/layout';
import SEO from 'components/seo';
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
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
