const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`./src/templates/articleTemplate.js`)
  const noteTemplate = path.resolve(`./src/templates/noteTemplate.js`)
  const talkTemplate = path.resolve(`./src/templates/talkTemplate.js`)
  const result = await graphql(`
    {
      articles: allMdx(
        filter: { fileAbsolutePath: { regex: "/(articles)/.*\\\\.mdx$/" } }
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
        filter: { fileAbsolutePath: { regex: "/(notes)/.*\\\\.mdx$/" } }
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
        filter: { fileAbsolutePath: { regex: "/(talks)/.*\\\\.mdx$/" } }
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
}
