import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Feed" />
      <div className="container">
        <h1 className="sr-only">Feed</h1>
        <div className="lg:grid grid-cols-2 gap-8">
          <div>
            <section>
              <h2>Twitter</h2>
            </section>
            <section>
              <h2>Instagram</h2>
            </section>
          </div>
          <section>
            <h2>My feed</h2>
          </section>
        </div>
      </div>
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
