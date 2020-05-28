import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Ilja Panić" />
      <section className="container">
        <article className="max-w-4xl">
          <h1 className="text-jumbo leading-tight">
            Hi, <br />
            I'm Ilja. <br />
            Design technologist based in Prague.
          </h1>
        </article>
      </section>
      <section className="container mt-24">
        <article className="bg-gray-900 text-gray-100 max-w-xl dark:bg-white dark:text-gray-700">
          <h2>Cyberbiomes</h2>
          <p>Vestibulum id ligula porta felis euismod semper.</p>
        </article>
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
