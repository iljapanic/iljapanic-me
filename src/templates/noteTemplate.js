import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import Headline from '../components/headline'
import SEO from '../components/seo'

export default function articleTemplate({ data, location }) {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const keywordsString = frontmatter.keywords.join(', ')

  return (
    <Layout location={location}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.abstract}
        keywords={keywordsString}
      />

      <div className="container">
        <article className="content-column post">
          <header>
            <div className="color-dim">{frontmatter.date}</div>
            <Headline
              title={frontmatter.title}
              headline={frontmatter.headline}
            />
          </header>

          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
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
