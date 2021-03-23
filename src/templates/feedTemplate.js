import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { getSrc } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function feedTemplate({ data, location }) {
  // const { mdx } = data
  // const body = mdx.body
  // const meta = mdx.frontmatter
  // const keywordsString = meta.keywords.join(', ')
  // const coverPath = getSrc(meta.cover)

  console.log(data)
  const item = data.item.data

  return (
    <Layout location={location}>
      <SEO
        title={`${item.title}`}
        // description={`${meta.headline}`}
        // keywords={`project, ${keywordsString}`}
        // previewUrl={coverPath}
      />
      <div className="container">
        <article className="content-column post">
          <header>
            <h1>{item.title}</h1>
          </header>
          <div>{item.notes}</div>
          {/* <MDXRenderer>{body}</MDXRenderer> */}
        </article>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    item: airtable(table: { eq: "feed" }, data: { slug: { eq: $slug } }) {
      data {
        title
        category
        url
        notes
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
`
