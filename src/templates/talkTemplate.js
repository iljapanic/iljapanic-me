import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import Headline from '../components/headline'
import dayjs from 'dayjs'

export default function talkTemplate({ data, location }) {
  const { mdx } = data
  const siteUrl = data.site.siteMetadata.siteUrl
  const today = dayjs().format('MMMM DD YYYY')
  const body = mdx.body
  const meta = mdx.frontmatter
  const keywordsString = meta.keywords.join(', ')

  return (
    <Layout location={location}>
      <SEO
        title={`${meta.title} [${meta.language}]`}
        description={`${meta.headline} | ${meta.location}`}
        keywords={`talk, presentation, ${keywordsString}`}
      />
      <div className="container">
        <article className="content-column post">
          <header>
            <div className="color-dim">{meta.date}</div>
            <Headline title={`${meta.title}`} headline={meta.headline} />
            {meta.location}
            {meta.locationUrl}
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
      # headings(
      #   value
      #   depth
      # )
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
        headline
        location
        locationUrl
        language
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
