import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getSrc } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Headline from '../components/molecules/headline'

export default function projectTemplate({ data, location }) {
  const { mdx } = data
  const body = mdx.body
  const meta = mdx.frontmatter
  const keywordsString = meta.keywords.join(', ')
  const coverPath = getSrc(meta.cover)

  return (
    <Layout location={location}>
      <SEO
        title={`${meta.title}`}
        description={`${meta.headline}`}
        keywords={`project, ${keywordsString}`}
        previewUrl={coverPath}
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
            gatsbyImageData(width: 1200, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    }
  }
`
