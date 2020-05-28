import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Tag from './Tag';

// import css from '../css/components/Books.module.css';

class BooksFilter extends React.Component {
  render() {
    const tagsArray = this.props.data.booksTags.edges;

    const tags = tagsArray.map(item => {
      const id = item.node.id;
      const meta = item.node.data;

      return <Tag key={id} id={id} tag={meta.tag} />;
    });

    return <nav>{tags}</nav>;
  }
}

export default props => (
  <StaticQuery query={booksTagsQuery} render={data => <BooksFilter data={data} {...props} />} />
);

const booksTagsQuery = graphql`
  query booksTagsQuery {
    booksTags: allAirtable(filter: { queryName: { eq: "tagsBooks" } }) {
      edges {
        node {
          id
          queryName
          data {
            tag
          }
        }
      }
    }
  }
`;
