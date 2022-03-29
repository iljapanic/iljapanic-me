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
    <blockquote
      className={`mb-8 border-l-4 border-gray-200 pl-4 dark:border-gray-700 ${
        pull ? 'quote-pull' : ''
      }`}
    >
      <p className="text-secondary mb-2 italic">”{text}”</p>
      <footer className="text-secondary text-base">
        <cite>— {authorEl}</cite>
      </footer>
    </blockquote>
  )
}

export default Quote
