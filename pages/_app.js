import '@fontsource/crimson-text';
import '@fontsource/rosario';
import { ThemeProvider } from 'theme-ui';

import Layout from 'components/layout';
import theme from 'theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
