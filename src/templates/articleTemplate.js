import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import dayjs from 'dayjs'

export default function articleTemplate({ data }) {
  const { mdx } = data
  const siteUrl = data.site.siteMetadata.siteUrl
  const today = dayjs().format('MMMM DD YYYY')
  const { frontmatter, body } = mdx
  const keywords = frontmatter.keywords.map((keyword, index) => (
    <li>#{keyword}</li>
  ))

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <article className="container">
        <header>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.headline}</p>
          <p>{frontmatter.abstract}</p>
          <ul>{keywords}</ul>
          {frontmatter.date}
        </header>

        {/* <aside dangerouslySetInnerHTML={{ __html: tableOfContents }} /> */}

        <MDXRenderer>{body}</MDXRenderer>

        <footer>
          <h3>APA-style reference</h3>
          <code>
            Panic, I. A. ({frontmatter.date.substr(frontmatter.date.length - 4)}
            ). {frontmatter.title}. Retrieved {today}, from{' '}
            {`${siteUrl}${frontmatter.path}`}
          </code>
        </footer>
      </article>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      # headings(
      #   value
      #   depth
      # )
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
        headline
        abstract
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
