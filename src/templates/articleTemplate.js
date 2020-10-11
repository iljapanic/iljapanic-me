import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import Headline from '../components/headline'
import dayjs from 'dayjs'

export default function articleTemplate({ data, location }) {
  const { mdx } = data
  const siteUrl = data.site.siteMetadata.siteUrl
  const today = dayjs().format('MMMM DD YYYY')
  const { frontmatter, body } = mdx
  const keywordsString = frontmatter.keywords.join(', ')
  // const keywords = frontmatter.keywords.map((keyword, index) => (
  //   <li>#{keyword}</li>
  // ))

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
            <p className="large">{frontmatter.abstract}</p>
            {/* <ul>{keywords}</ul> */}
          </header>

          {/* <aside dangerouslySetInnerHTML={{ __html: tableOfContents }} /> */}

          <MDXRenderer>{body}</MDXRenderer>

          <footer>
            <h3>APA-style reference</h3>
            <code>
              Panic, I. A. (
              {frontmatter.date.substr(frontmatter.date.length - 4)}
              ). {frontmatter.title}. Retrieved {today}, from{' '}
              {`${siteUrl}${frontmatter.path}`}
            </code>
          </footer>
        </article>
      </div>
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
        date(formatString: "MMMM YYYY")
        path
        title
        headline
        abstract
        keywords
        facebookUrl
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
