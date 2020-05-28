import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Book from '../components/book'

const Bookshelf = ({ data }) => {
  const nonFiction = data.nonFiction.edges.map((item) => {
    const id = item.node.id
    const book = item.node.data
    return (
      <Book
        key={id}
        title={book.title}
        year={book.year}
        url={book.goodreads}
        collection={book.collection}
        featured={book.featured}
        authors={book.authors}
        tags={book.tags}
        cover={book.cover.localFiles[0].childImageSharp.fluid}
      />
    )
  })

  const fiction = data.fiction.edges.map((item) => {
    const id = item.node.id
    const book = item.node.data
    return (
      <Book
        key={id}
        title={book.title}
        year={book.year}
        url={book.goodreads}
        collection={book.collection}
        featured={book.featured}
        authors={book.authors}
        tags={book.tags}
        cover={book.cover.localFiles[0].childImageSharp.fluid}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Bookshelf" />

      <div className="container">
        <h1 className="side-title text-xl transform -rotate-90 fixed left-0">
          Books I've enjoyed reading over the years
        </h1>

        {/* non-fiction */}
        <section>
          <h2>Non-fiction</h2>
          <p>
            Various books that shaped my thinking over the years. Broadly
            related to design, power, culture and techno-social systems.
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
            {nonFiction}
          </div>
        </section>

        {/* fiction */}
        <section>
          <h2>Fiction</h2>
          <p>
            A selection of my favorite novels. Mostly sci-fi and psychological
            fiction.
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
            {fiction}
          </div>
        </section>
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
      sort: { fields: data___authors___data___last_name, order: ASC }
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
            authors {
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
      sort: { fields: data___authors___data___last_name, order: ASC }
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
            authors {
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
