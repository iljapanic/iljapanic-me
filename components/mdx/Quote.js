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
      <p className="pl-4 mb-2 italic border-l-4 border-gray-200 text-secondary dark:text-secondary-dark dark:border-gray-700">
        ”{text}”
      </p>
      <footer className="-mt-1 text-right text-secondary ">
        <cite>— {authorEl}</cite>
      </footer>
    </blockquote>
  )
}

export default Quote
