import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import ArticlePreview from '../components/previews/articlePreview.js'
import Headline from '../components/molecules/headline.js'

const EssaysPage = ({ data, location }) => {
  const essays = data.essays.nodes.map((node, index) => (
    <ArticlePreview
      title={node.frontmatter.title}
      headline={node.frontmatter.headline}
      date={node.frontmatter.date}
      abstract={node.frontmatter.abstract}
      keywords={node.frontmatter.keywords}
      path={node.frontmatter.path}
      affiliation={node.frontmatter.affiliation}
      timeToRead={node.timeToRead}
    />
  ))

  return (
    <Layout location={location}>
      <SEO title="Essays" />
      <section className="container">
        <div className="content-column">
          <Headline title="Essays" headline="Long-form pieces of writting" />
          {essays}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    essays: allMdx(
      filter: { fileAbsolutePath: { regex: "/essays/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          headline
          date(formatString: "MMMM YYYY")
          path
        }
      }
    }
  }
`

export default EssaysPage
