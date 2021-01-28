import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'
import Headline from '../components/headline'

export default function projectTemplate({ data, location }) {
  const { mdx } = data
  const body = mdx.body
  const meta = mdx.frontmatter
  const keywordsString = meta.keywords.join(', ')

  return (
    <Layout location={location}>
      <SEO
        title={`${meta.title}`}
        description={`${meta.headline}`}
        keywords={`project, ${keywordsString}`}
        coverUrl={meta.cover.childImageSharp.fixed.src}
      />
      <div className="container">
        <article className="content-column post">
          <header>
            <Headline
              title={`${meta.title} ${meta.language && `[${meta.language}]`}`}
              headline={meta.headline}
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
        path
        title
        headline
        keywords
        cover {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`
