import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Headline from '../../components/headline'
import TeachingPreview from '../../components/teachingPreview'

const TeachingPage = ({ data, location }) => {
  const teaching = data.teaching.nodes.map((node, index) => {
    const meta = node.frontmatter
    return (
      <TeachingPreview
        key={`teaching-${index}`}
        title={meta.title}
        summary={meta.summary}
        type={meta.type}
        path={meta.path}
        duration={meta.duration}
      />
    )
  })
  return (
    <Layout location={location}>
      <SEO title="Teaching" />
      <div className="container">
        <div className="content-column">
          <Headline
            title="Teaching"
            headline="Courses and workshops that I offer"
          />
          <section>{teaching}</section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    teaching: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/(workshops|courses)/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      nodes {
        frontmatter {
          path
          title
          summary
          type
          duration
        }
      }
    }
  }
`

export default TeachingPage
