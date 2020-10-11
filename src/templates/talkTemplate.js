import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import Headline from '../components/headline'

export default function talkTemplate({ data, location }) {
  const { mdx } = data
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
            <div className="color-dim">
              <time dateTime={meta.date}>{meta.date}</time> at{' '}
              <a
                href={meta.locationUrl}
                target="_blank"
                rel="noreferrer"
                className="no-underline color-dim"
              >
                {meta.location}
              </a>
            </div>
            <Headline title={`${meta.title}`} headline={meta.headline} />
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
        headline
        location
        locationUrl
        language
        keywords
      }
    }
  }
`
