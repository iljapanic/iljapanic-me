import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FeedPreview from '../components/previews/feedPreview'

export default function feedList({ data, location, pageContext }) {
  // const { mdx } = data
  // const body = mdx.body
  // const meta = mdx.frontmatter
  // const keywordsString = meta.keywords.join(', ')
  // const coverPath = getSrc(meta.cover)
  const allPosts = data.feed.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/feed/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const posts = allPosts.map(({ node }) => {
    return (
      <FeedPreview
        key={node.data.slug}
        title={node.data.title}
        url={node.data.url}
        permalink={`/feed/${node.data.slug}`}
        notes={node.data.notes}
      />
    )
  })

  return (
    <Layout location={location}>
      <SEO
        title={`Feed`}
        // description={`${meta.headline}`}
        // keywords={`project, ${keywordsString}`}
        // previewUrl={coverPath}
      />
      <div className="container">
        <section className="content-column post">
          <div>{posts}</div>

          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    feed: allAirtable(
      filter: { table: { eq: "feed" } }
      sort: { fields: data___created, order: DESC }
      limit: $limit
      skip: $skip
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
`
