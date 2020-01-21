require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Ilja Panic`,
    description: `designing for the web and beyond`,
    author: `@iljapanic`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require(`postcss-custom-media`),
          require(`postcss-css-variables`),
          require(`postcss-hexrgba`),
          require(`postcss-color-function`),
          require(`postcss-calc`),
          require(`autoprefixer`)
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text`,
        path: `${__dirname}/src/text/`
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID_LIBRARY,
            tableName: `authors`,
            tableView: `sorted`,
            queryName: `authors`,
            tableLinks: [`books`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_LIBRARY,
            tableName: `tags`,
            tableView: `tagsBooks`,
            queryName: `tagsBooks`,
            tableLinks: [`books`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_LIBRARY,
            tableName: `books`,
            tableView: `published`,
            queryName: `books`,
            mapping: { cover: `fileNode` },
            tableLinks: [`authors`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FEED,
            tableName: `tags`,
            tableView: `sorted`,
            queryName: `tagsFeed`,
            mapping: { notes: `text/markdown` },
            tableLinks: [`feed`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FEED,
            tableName: `feed`,
            tableView: `published`,
            queryName: `feed`,
            mapping: { notes: `text/markdown` },
            tableLinks: [`tags`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FAVORITES,
            tableName: `tags`,
            tableView: `sorted`,
            queryName: `tagsFavorites`,
            tableLinks: [`newsletters`, `podcasts`, `mac`, `chrome`, `websites`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FAVORITES,
            tableName: `newsletters`,
            tableView: `published`,
            queryName: `newsletters`,
            tableLinks: [`tags`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FAVORITES,
            tableName: `podcasts`,
            tableView: `published`,
            queryName: `podcasts`,
            tableLinks: [`tags`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FAVORITES,
            tableName: `mac`,
            tableView: `published`,
            queryName: `mac`,
            tableLinks: [`tags`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FAVORITES,
            tableName: `chrome`,
            tableView: `published`,
            queryName: `chrome`,
            tableLinks: [`tags`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID_FAVORITES,
            tableName: `websites`,
            tableView: `published`,
            queryName: `websites`,
            tableLinks: [`tags`]
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Inter', 'Inter var'],
          urls: ['https://rsms.me/inter/inter.css']
        },
        typekit: {
          id: 'kgn3qha'
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: null
            }
          }
        ]
      }
    }
  ]
};
