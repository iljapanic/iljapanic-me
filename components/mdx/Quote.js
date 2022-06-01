import React from 'react'

const Quote = ({ text, author, url, pull }) => {
  var authorEl

  if (author) {
    authorEl = <span>{author}</span>
  }

  if (url) {
    authorEl = (
      <a href={url} target="_blank" rel="noreferrer">
        {author}
      </a>
    )
  }

  return (
    <blockquote className={`mb-8 border-none pl-0 ${pull ? 'quote-pull' : ''}`}>
      <p className="mb-2 border-l-4 border-gray-200 pl-4 italic text-secondary dark:border-gray-700 dark:text-secondary-dark">
        ”{text}”
      </p>
      <footer className="-mt-1 text-right text-secondary ">
        <cite>— {authorEl}</cite>
      </footer>
    </blockquote>
  )
}

export default Quote
