import '@fontsource/crimson-text';
import '@fontsource/rosario';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import './globals.css';

import Layout from 'components/layout';
import config from 'data/config';

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
    <html lang="en" dir="ltr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataOrganization),
          }}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
