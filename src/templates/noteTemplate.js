import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import dayjs from 'dayjs'
import SEO from '../components/seo'

export default function articleTemplate({ data }) {
  const { mdx } = data
  const siteUrl = data.site.siteMetadata.siteUrl
  const today = dayjs().format('MMMM DD YYYY')
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <article className="container">
        <header>
          <h1>{frontmatter.title}</h1>
          {frontmatter.date}
        </header>

        <div className="max-w-2xl mx-auto">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
        keywords
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
