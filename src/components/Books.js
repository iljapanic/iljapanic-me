import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Book from './Book';

import css from '../css/components/Books.module.css';

class Books extends React.Component {
  render() {
    const booksArray = this.props.data.books.edges;

    const books = booksArray.map(item => {
      const id = item.node.id;
      const meta = item.node.data;

      return (
        <Book
          key={id}
          id={id}
          title={meta.title}
          year={meta.year}
          category={meta.category}
          url={meta.goodreads}
          isCollection={meta.collection}
          isFeatured={meta.featured}
          authors={meta.authors}
          tags={meta.tags}
          cover={meta.cover.localFiles[0].childImageSharp.fluid}
        />
      );
    });

    return <section className={css.books}>{books}</section>;
  }
}

export default props => (
  <StaticQuery query={booksQuery} render={data => <Books data={data} {...props} />} />
);

const booksQuery = graphql`
  query booksQuery {
    books: allAirtable(filter: { table: { eq: "books" } }) {
      edges {
        node {
          id
          data {
            title
            goodreads
            collection
            year
            category
            featured
            authors {
              data {
                first_name
                last_name
              }
            }
            cover {
              localFiles {
                childImageSharp {
                  fluid(maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            tags {
              id
              data {
                tag
              }
            }
          }
        }
      }
    }
  }
`;
