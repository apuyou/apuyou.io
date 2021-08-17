const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withMDX({
    experimental: { esmExternals: true },
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
);
