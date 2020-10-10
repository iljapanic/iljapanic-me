import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <article className="max-w-xl mx-auto text-center">
      <h1>404</h1>
      <img
        src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
        alt="John Travolta looking lost and slightly confused (scene from Pulp Fiction)"
        className="mx-auto"
      />
      <p className="text-xl mt-4">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </article>
  </Layout>
)

export default NotFoundPage
