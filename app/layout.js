import '@fontsource/crimson-text';
import '@fontsource/rosario';
import 'prism-themes/themes/prism-vsc-dark-plus.css';

import Layout from 'components/layout';
import Providers from 'components/providers';
import config from 'data/config';

// Same script as theme-ui's InitializeColorMode, which cannot be imported in a
// server component: applies the stored color mode before the first paint
const initializeColorMode = `(function() { try {
  var mode = localStorage.getItem('theme-ui-color-mode');
  if (!mode) return
  document.documentElement.classList.add('theme-ui-' + mode);
} catch (e) {} })();`;

const structuredDataOrganization = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  legalName: config.legalName,
  url: config.url,
  logo: config.logo,
  founders: [
    {
      '@type': 'Person',
      name: config.legalName,
    },
  ],
  sameAs: [
    config.socialLinks.twitter,
    config.socialLinks.linkedin,
    config.socialLinks.github,
  ],
};

export const metadata = {
  metadataBase: new URL(config.url),
  title: config.title,
  description: config.description,
  openGraph: {
    url: '/',
    type: 'website',
    title: config.title,
    description: config.description,
    images: '/thumbnail.png',
  },
  twitter: {
    card: 'summary',
    creator: config.twitterUsername,
    site: config.url,
    title: config.title,
    description: config.description,
  },
  other: {
    image: '/thumbnail.png',
    'twitter:image:src': '/thumbnail.png',
  },
};

export default function RootLayout({ children }) {
  return (
    // The color mode script adds a class to <html> before hydration
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: initializeColorMode }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataOrganization),
          }}
        />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
