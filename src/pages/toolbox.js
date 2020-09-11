import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Headline from '../components/headline'

const ToolboxPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Feed" />
      <section className="container">
        <Headline
          title="Toolbox"
          headline="Tools and references for better thinking"
        />
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

export default ToolboxPage
