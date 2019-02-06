const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'FyndX',
    description: 'Fynd best development articles',
    siteUrl: 'https://fyndx.io', // full path to blog - no ending slash
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
              quality: 100,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://fyndx.io',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-XXXX-Y',
    //     // Puts tracking script in the head instead of the body
    //     head: true,
    //     // IP anonymization for GDPR compliance
    //     anonymize: true,
    //     // Disable analytics for users with `Do Not Track` enabled
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ['/preview/**'],
    //     // Specifies what percentage of users should be tracked
    //     sampleRate: 100,
    //     // Determines how often site speed tracking beacons will be sent
    //     siteSpeedSampleRate: 10,
    //   },
    // },
  ],
};
