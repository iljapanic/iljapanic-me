import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Note from '../components/note'
import Headline from '../components/headline'

const NotesPage = ({ data, location }) => {
  const notes = data.notes.nodes.map((node, index) => (
    <Note
      title={node.frontmatter.title}
      date={node.frontmatter.date}
      path={node.frontmatter.path}
      timeToRead={node.timeToRead}
    />
  ))

  return (
    <Layout location={location}>
      <SEO title="Notes" />
      <div className="container">
        <Headline title="Notes" headline="Short mussings and writings" />
        <section className="mt-12 max-w-2xl">{notes}</section>
      </div>
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
