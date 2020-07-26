const path = require('path');
const config = require('./data/config');

module.exports = {
  siteMetadata: {
    title: config.legalName,
    description: config.description,
    author: config.author,
    ...config,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-external-links`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.legalName,
        short_name: 'starter',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './static/favicon/favicon-512.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          Components: path.resolve(__dirname, 'src/components'),
          Common: path.resolve(__dirname, 'src/components/common'),
          Static: path.resolve(__dirname, 'static/'),
          Theme: path.resolve(__dirname, 'src/components/theme'),
          Data: path.resolve(__dirname, 'data/config'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
          ],
        },
      },
    },
  ],
};
