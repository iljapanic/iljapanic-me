import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Headline from '../components/molecules/headline'
import TeachingPreview from '../components/previews/teachingPreview'

const CoursesPage = ({ data, location }) => {
  const courses = data.courses.nodes.map((node, index) => {
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
      <SEO title="Courses & Workshops" />
      <div className="container">
        <div className="content-column">
          <Headline
            title="Courses & Workshops"
            headline="Practical learning for groups & individuals"
          />
          <section>{courses}</section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    courses: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/(courses)/" }
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

export default CoursesPage
