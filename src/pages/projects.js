import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Headline from '../components/headline'

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Articles" />
      <section className="container">
        <div className="content-column">
          <Headline title="Projects" headline="Current and past works" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            delectus blanditiis laborum alias, corporis maiores adipisci
            perspiciatis. Odio laboriosam voluptatibus officiis quo dicta
            excepturi. Quos voluptatibus sequi ipsum cum consequatur!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
