import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TalkPreview from '../components/talkPreview'
import Headline from '../components/headline'

const TalksPage = ({ data, location }) => {
  const talks = data.talks.nodes.map((node, index) => (
    <TalkPreview
      title={node.frontmatter.title}
      headline={node.frontmatter.headline}
      date={node.frontmatter.date}
      path={node.frontmatter.path}
      location={node.frontmatter.location}
      locationUrl={node.frontmatter.locationUrl}
      language={node.frontmatter.language}
    />
  ))

  return (
    <Layout location={location}>
      <SEO title="Talks" />
      <section className="container">
        <div className="content-column">
          <Headline
            title="Talks"
            headline="Recordings and notes from presentations"
          />
          {talks}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    talks: allMdx(
      filter: { fileAbsolutePath: { regex: "/talks/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          path
          title
          headline
          location
          locationUrl
          language
        }
      }
    }
  }
`

export default TalksPage
