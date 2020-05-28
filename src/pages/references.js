import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Feed" />
      <section className="container">
        <h1 className="text-center">References</h1>
        icons of each category
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    illustration: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
