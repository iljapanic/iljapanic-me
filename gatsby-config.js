require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://iljapanic.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ilja Panic`,
        short_name: `iljapanic`,
        start_url: `/`,
        background_color: `#0F43A9`,
        theme_color: `#0F43A9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
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
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/index.css`],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_LIBRARY,
            tableName: `books`,
            tableView: `published`,
            queryName: `books`,
            mapping: { cover: `fileNode` },
            tableLinks: [`authors`, `tags`],
          },
          {
            baseId: process.env.AIRTABLE_BASE_LIBRARY,
            tableName: `authors`,
            tableView: `sorted`,
            queryName: `authors`,
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
