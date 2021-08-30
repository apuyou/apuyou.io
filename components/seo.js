/** @jsxImportSource theme-ui */

import Head from 'next/head';
import { useRouter } from 'next/router';

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

export default function SEO({
  title = config.title,
  description = config.description,
}) {
  const { pathname } = useRouter();

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="image" content="/thumbnail.png" />

      <meta property="og:url" content={`${config.url}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/thumbnail.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={config.twitterUsername} />
      <meta name="twitter:site" content={config.url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content="/thumbnail.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataOrganization),
        }}
      ></script>
      <title>{title}</title>
    </Head>
  );
}
