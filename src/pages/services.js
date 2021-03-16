import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Feed" />
      <section className="container">
        <h1 className="text-center">Services</h1>
      </section>
    </Layout>
  )
}

export const query = graphql`{
  illustration: file(relativePath: {eq: "hero.png"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
    }
  }
}
`

export default IndexPage
