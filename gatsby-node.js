const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`./src/templates/articleTemplate.js`)
  const noteTemplate = path.resolve(`./src/templates/noteTemplate.js`)
  const talkTemplate = path.resolve(`./src/templates/talkTemplate.js`)
  const projectTemplate = path.resolve(`./src/templates/projectTemplate.js`)
  const workshopTemplate = path.resolve(`./src/templates/workshopTemplate.js`)
  const feedTemplate = path.resolve(`./src/templates/feedTemplate.js`)
  const feedListTemplate = path.resolve(`./src/templates/feedListTemplate.js`)
  const result = await graphql(`
    {
      articles: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/articles/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      notes: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/notes/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      talks: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/talks/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      projects: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      workshops: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/workshops/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      courses: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/courses/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      feed: allAirtable(
        filter: { table: { eq: "feed" } }
        sort: { fields: data___created, order: DESC }
      ) {
        edges {
          node {
            id
            data {
              title
              category
              url
              notes
              slug
              created
              tags {
                data {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.articles.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: articleTemplate,
      context: {},
    })
  })
  result.data.notes.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: noteTemplate,
      context: {},
    })
  })
  result.data.talks.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: talkTemplate,
      context: {},
    })
  })
  result.data.projects.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {},
    })
  })
  result.data.workshops.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: workshopTemplate,
      context: {},
    })
  })
  result.data.courses.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: workshopTemplate,
      context: {},
    })
  })

  result.data.feed.edges.forEach(({ node }) => {
    createPage({
      path: `/feed/${node.data.slug}`,
      component: feedTemplate,
      context: {
        slug: node.data.slug,
      },
    })
  })

  const feedPosts = result.data.feed.edges
  const feedPostsPerPage = 4
  const feedNumPages = Math.ceil(feedPosts.length / feedPostsPerPage)

  Array.from({ length: feedNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/feed` : `/feed/${i + 1}`,
      component: feedListTemplate,
      context: {
        limit: feedPostsPerPage,
        skip: i * feedPostsPerPage,
        feedNumPages,
        currentPage: i + 1,
      },
    })
  })
}
