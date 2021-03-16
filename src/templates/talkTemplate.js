import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FaFacebookF, FaGlobe } from 'react-icons/fa'

import Headline from '../components/molecules/headline'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function talkTemplate({ data, location }) {
  const { mdx } = data
  const body = mdx.body
  const meta = mdx.frontmatter
  const keywordsString = meta.keywords.join(', ')
  const coverPath = getSrc(meta.cover)

  return (
    <Layout location={location}>
      <SEO
        title={`${meta.title} [${meta.language}]`}
        description={`${meta.headline} | ${meta.location}`}
        keywords={`talk, presentation, ${keywordsString}`}
        previewUrl={coverPath}
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
            <Headline
              title={`${meta.title} ${meta.language && `[${meta.language}]`}`}
              headline={meta.headline}
            />

            <div
              className={
                (meta.facebookUrl || meta.locationUrl) && `mt pill-cloud`
              }
            >
              {meta.locationUrl && (
                <a
                  href={meta.locationUrl}
                  className="pill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe /> Venue website
                </a>
              )}

              {meta.facebookUrl && (
                <a
                  href={meta.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pill facebook"
                >
                  <FaFacebookF /> Facebook event
                </a>
              )}
            </div>
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
        facebookUrl
        language
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
