import React from 'react'

interface QuoteProps {
  children: React.ReactNode
  author: string
  url?: string
}

const Quote: React.FC<QuoteProps> = ({ children, author, url }) => {
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
    <blockquote className={`my-8 border-none pl-0`}>
      <div className="border-borderSecondary border-l-4 pl-4 italic text-secondary">
        {children}
      </div>
      <footer className="mt-1 text-right text-secondary">
        <cite className="not-italic">— {authorEl}</cite>
      </footer>
    </blockquote>
  )
}

export default Quote
