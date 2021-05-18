import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function gardenTemplate({ data, location }) {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout location={location}>
      <SEO title={frontmatter.title} />

      <div className="container">
        <article className="content-column post">
          <header>
            <div className="color-dim">{frontmatter.date}</div>
            <h1>{frontmatter.title}</h1>
          </header>

          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        slug
        title
      }
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
