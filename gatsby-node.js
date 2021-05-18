const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`./src/templates/articleTemplate.js`)
  const gardenTemplate = path.resolve(`./src/templates/gardenTemplate.js`)
  const noteTemplate = path.resolve(`./src/templates/noteTemplate.js`)
  const talkTemplate = path.resolve(`./src/templates/talkTemplate.js`)
  const projectTemplate = path.resolve(`./src/templates/projectTemplate.js`)
  const courseTemplate = path.resolve(`./src/templates/courseTemplate.js`)
  const result = await graphql(`
    {
      essays: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/essays/" }
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
      garden: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/garden/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              slug
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
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.essays.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: articleTemplate,
      context: {},
    })
  })
  result.data.garden.edges.forEach(({ node }) => {
    createPage({
      path: `/garden/${node.frontmatter.slug}/`,
      component: gardenTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
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
  result.data.courses.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: courseTemplate,
      context: {},
    })
  })
}
