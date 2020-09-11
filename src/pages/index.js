import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Ilja Panić" />
      <section className="container">
        <article className="lg:flex items-center">
          <div className="lg:w-1/5">
            <Img
              fluid={data.ilja.childImageSharp.fluid}
              className="rounded-full"
            />
          </div>
          <div className="lg:w-4/5 lg:pl-12">
            <h1 className="ms-2xl">
              Hi! I’m Ilja — a design technologist researching systems and
              teaching others to understand them
            </h1>
            <div>
              <a href="#" className="btn mr-4">
                Copy email
              </a>
              <a href="#" className="btn">
                Twitter DM
              </a>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    ilja: file(relativePath: { eq: "iljapanic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
