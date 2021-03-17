import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'

const Type = ({ type }) => {
  return (
    <span className="badge">
      {type === 'workshop' && 'Workshop'}
      {type === 'course' && 'Course'}
    </span>
  )
}

export default function workshopTemplate({ data, location }) {
  const { mdx } = data
  const body = mdx.body
  const meta = mdx.frontmatter
  const keywordsString = meta.keywords.join(', ')

  return (
    <Layout location={location}>
      <SEO
        title={`${meta.title}`}
        description={`${meta.summary}`}
        keywords={`workshop, course, ${keywordsString}`}
      />
      <div className="container">
        <article className="content-column post">
          <header>
            <div>
              <Type type={meta.type} />
              <span className="color-secondary small ml-xs">
                {meta.duration}
              </span>
            </div>

            <h1 className="mt-xs">{meta.title}</h1>
            <p className="mt-s large">{meta.summary}</p>
          </header>
          <hr />
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
        summary
        keywords
        duration
        type
      }
    }
  }
`
