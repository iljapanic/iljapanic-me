import React from 'react'
import Img from 'gatsby-image'
// import Notation from '../utilities/notation'

const Book = ({ title, year, url, featured, authors, cover, tags }) => {
  const allAuthors = authors.map((author, i) => (
    <span key={i}>
      {i > 0 && ', '}
      {author.data.first_name} {author.data.last_name}
    </span>
  ))

  var allTags = ''

  if (tags !== null) {
    allTags = tags.map((tag, i) => (
      <li key={i} className="font-medium text-xs text-gray-500 mb-1">
        #{tag.data.tag}
      </li>
    ))
  }

  return (
    <article>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Img fluid={cover} className="shadow mt-2" />
        </a>
      </div>
      <div>
        <h3 className="text-base leading-tight mt-2 mb-0 font-medium">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        <div className="text-sm text-gray-600">{allAuthors}</div>
        <span className="text-xs text-gray-500">{year}</span>
        {/* <ul className="mt-4">{allTags}</ul> */}
      </div>
    </article>
  )
}

export default Book
