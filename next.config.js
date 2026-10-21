const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // These read their own files from disk at runtime and cannot be bundled
  serverExternalPackages: ['esbuild', 'remark-prism'],
  // Next externalizes next-mdx-remote by default, which loads a second copy of
  // React for the v3 client component
  transpilePackages: ['next-mdx-remote'],
});
