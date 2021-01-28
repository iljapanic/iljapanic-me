import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Headline from '../components/headline'
import ProjectPreview from '../components/projectPreview'

const ProjectsPage = ({ data, location }) => {
  const projects = data.projects.nodes.map((node, index) => (
    <ProjectPreview
      title={node.frontmatter.title}
      headline={node.frontmatter.headline}
      path={node.frontmatter.path}
    />
  ))
  return (
    <Layout location={location}>
      <SEO title="Articles" />
      <div className="container">
        <div className="content-column">
          <Headline title="Projects" headline="Current and past works" />
          <section>{projects}</section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/(projects)/.*\\\\.mdx$/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          path
          title
          headline
        }
      }
    }
  }
`

export default ProjectsPage
