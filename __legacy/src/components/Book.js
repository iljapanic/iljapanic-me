import React from 'react';
import Img from 'gatsby-image';

import css from '../css/components/Book.module.css';

const Book = ({
  id,
  title,
  year,
  authors,
  isCollection,
  category,
  isFeatured,
  url,
  cover,
  tags
}) => {
  var authorList;

  if (authors) {
    const allAuthors = authors.map(person => (
      <span key={`book-author-${person.id}`}>
        {person.data.first_name} {person.data.last_name}
      </span>
    ));
    authorList = <span className={css.authorList}>by {allAuthors}</span>;
  } else {
    const allOrganizations = organizations.map(organization => (
      <span key={`book-author-${organization.id}`}>{organization.data.name}</span>
    ));
    authorList = <span className={css.authorList}>by {allOrganizations}</span>;
  }

  var featured;
  var collection;

  if (isFeatured) {
    featured = 'IS featured';
  } else {
    featured = 'NOT featured ';
  }

  if (isCollection) {
    collection = 'IS collection';
  } else {
    collection = 'NOT collection';
  }

  return (
    <article id={`ref-book-${id}`} className={css.book}>
      <div className={css.body}>
        <span className={css.year}>{year}</span>
        <div className={css.preview}>
          <a href={url} target="_blank">
            <Img fluid={cover} />
          </a>
        </div>
        <h4 className={css.title}>
          <a href={url} target="_blank">
            <span className={css.name}>{title}</span> {authorList}
          </a>
        </h4>
      </div>
    </article>
  );
};

export default Book;
