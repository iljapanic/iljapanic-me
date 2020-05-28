import React from 'react'
import Img from 'gatsby-image'

const Book = ({ title, year, url, featured, authors, cover }) => {
  const author = authors.map((author, i) => (
    <span key={i}>
      {i > 0 && ', '}
      {author.data.first_name} {author.data.last_name}
    </span>
  ))

  return (
    <article className="max-w-sm grid grid-cols-2 gap-4">
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
        <div className="text-sm text-gray-600">{author}</div>
        <span className="text-xs text-gray-500">{year}</span>
      </div>
    </article>
  )
}

export default Book
