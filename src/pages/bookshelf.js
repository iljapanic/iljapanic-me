import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import BookPreview from '../components/previews/bookPreview.js'
import Headline from '../components/molecules/headline.js'

const Bookshelf = ({ data, location }) => {
  const nonFiction = data.nonFiction.edges.map((item) => {
    const id = item.node.id
    const book = item.node.data
    return (
      <BookPreview
        key={id}
        title={book.title}
        year={book.year}
        url={book.goodreads}
        collection={book.collection}
        featured={book.featured}
        authors={book.people}
        tags={book.tags}
        cover={book.cover.localFiles[0].childImageSharp.fluid}
      />
    )
  })

  const fiction = data.fiction.edges.map((item) => {
    const id = item.node.id
    const book = item.node.data
    return (
      <BookPreview
        key={id}
        title={book.title}
        year={book.year}
        url={book.goodreads}
        collection={book.collection}
        featured={book.featured}
        authors={book.people}
        tags={book.tags}
        cover={book.cover.localFiles[0].childImageSharp.fluid}
      />
    )
  })

  return (
    <Layout location={location}>
      <SEO title="Bookshelf" />

      <div className="container">
        <div className="content-column">
          <Headline
            title="Bookshelf"
            headline="Books that shaped my thinking over the years"
          />

          {/* non-fiction */}
          <section>
            <h2>Non-fiction</h2>
            <div className="books">{nonFiction}</div>
          </section>

          {/* separator */}
          <hr />

          {/* fiction */}
          <section>
            <h2>Fiction</h2>
            <div className="books">{fiction}</div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    nonFiction: allAirtable(
      filter: {
        table: { eq: "books" }
        data: { category: { eq: "non-fiction" } }
      }
      sort: { fields: data___people___data___last_name, order: ASC }
    ) {
      edges {
        node {
          id
          data {
            collection
            goodreads
            year
            title
            featured
            people {
              data {
                first_name
                last_name
              }
            }
            tags {
              data {
                tag
              }
            }
            cover {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    fiction: allAirtable(
      filter: { table: { eq: "books" }, data: { category: { eq: "fiction" } } }
      sort: { fields: data___people___data___last_name, order: ASC }
    ) {
      edges {
        node {
          id
          data {
            collection
            goodreads
            year
            title
            featured
            people {
              data {
                first_name
                last_name
              }
            }
            tags {
              data {
                tag
              }
            }
            cover {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Bookshelf
