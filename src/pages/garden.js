import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import GardenPreview from '../components/previews/gardenPreview.js'
import Headline from '../components/molecules/headline.js'

const GardenPage = ({ data, location }) => {
  const garden = data.garden.nodes.map((node, index) => {
    const meta = node.frontmatter

    return (
      <GardenPreview
        key={`garden-${index}`}
        title={meta.title}
        started={meta.started}
        slug={meta.slug}
        type={meta.type}
      />
    )
  })

  return (
    <Layout location={location}>
      <SEO title="Digital Garden" />
      <section className="container">
        <div className="content-column">
          <Headline
            title="Garden"
            headline="Loosely tended collection of notes"
          />
          {garden}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    garden: allMdx(
      filter: { fileAbsolutePath: { regex: "/garden/" } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          started(formatString: "D MMMM YYYY")
          slug
          type
        }
      }
    }
  }
`

export default GardenPage
