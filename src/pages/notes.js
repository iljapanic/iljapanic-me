import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NotePreview from '../components/previews/notePreview'
import Headline from '../components/molecules/headline'

const NotesPage = ({ data, location }) => {
  const notes = data.notes.nodes.map((node, index) => (
    <NotePreview
      title={node.frontmatter.title}
      date={node.frontmatter.date}
      path={node.frontmatter.path}
      timeToRead={node.timeToRead}
    />
  ))

  return (
    <Layout location={location}>
      <SEO title="Notes" />
      <section className="container">
        <div className="content-column">
          <Headline title="Notes" headline="Short mussings and writings" />
          {notes}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    notes: allMdx(
      filter: { fileAbsolutePath: { regex: "/(notes)/.*\\\\.mdx$/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          keywords
          path
        }
        timeToRead
      }
    }
  }
`

export default NotesPage
