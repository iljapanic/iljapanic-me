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
    <blockquote className={`quote ${pull ? 'quote-pull' : ''}`}>
      <p>{text}</p>
      <footer>
        <cite>— {authorEl}</cite>
      </footer>
    </blockquote>
  )
}

export default Quote
