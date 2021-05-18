require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Ilja Panić',
    description:
      'Ilja is a design technologist researching complex systems. He helps people and organizations understand technology.',
    author: '@iljapanic',
    siteUrl: `https://iljapanic.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          `/notes/*`,
          `/feed/*`,
          `/favorites/*`,
          `/services/*`,
          `/projects/*`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `iljapanic.com`,
        customDomain: `stats.iljapanic.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['National 2, Tiempos'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://iljapanic.com`,
        noQueryString: true,
        noHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/essays`,
        name: `essays`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/notes`,
        name: `notes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/talks`,
        name: `talks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/garden`,
        name: `garden`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/courses`,
        name: `courses`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/components/layoutDefault.js'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-relative-images`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: null,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
              quality: 85,
            },
          },
        ],
      },
    },
    `gatsby-plugin-mdx-embed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ilja Panić`,
        short_name: `iljapanic`,
        start_url: `/`,
        background_color: `#9a2e22`,
        theme_color: `#9a2e22`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require(`postcss-preset-env`)({
            stage: 1,
            importFrom: './src/css/core/variables.css',
          }),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_LIBRARY,
            tableName: `books`,
            tableView: `published`,
            queryName: `books`,
            mapping: { cover: `fileNode` },
            tableLinks: [`people`, `tags`],
          },
          {
            baseId: process.env.AIRTABLE_BASE_LIBRARY,
            tableName: `people`,
            tableView: `sorted`,
            queryName: `people`,
            tableLinks: [`books`],
          },
          {
            baseId: process.env.AIRTABLE_BASE_LIBRARY,
            tableName: `tags`,
            tableView: `tagsBooks`,
            queryName: `tagsBooks`,
            tableLinks: [`books`],
          },
        ],
      },
    },
  ],
}
