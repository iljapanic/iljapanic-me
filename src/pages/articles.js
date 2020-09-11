import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Article from '../components/article'
import Headline from '../components/headline'

const ArticlesPage = ({ data }) => {
  const articles = data.articles.nodes.map((node, index) => (
    <Article
      title={node.frontmatter.title}
      headline={node.frontmatter.headline}
      date={node.frontmatter.date}
      abstract={node.frontmatter.abstract}
      keywords={node.frontmatter.keywords}
      path={node.frontmatter.path}
      affiliation={node.frontmatter.affiliation}
      timeToRead={node.timeToRead}
    />
  ))

  return (
    <Layout>
      <SEO title="Articles" />
      <div className="container">
        <Headline
          title="Articles"
          headline="Papers and essays written over the course of several studies"
        />
        <section className="mt-12 max-w-2xl">{articles}</section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    articles: allMdx(
      filter: { fileAbsolutePath: { regex: "/(articles)/.*\\\\.mdx$/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          headline
          date(formatString: "YYYY-MM-DD")
          abstract
          keywords
          path
          affiliation
        }
        timeToRead
      }
    }
  }
`

export default ArticlesPage
