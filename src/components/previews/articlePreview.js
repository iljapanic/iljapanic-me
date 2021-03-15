import React from 'react'
import { Link } from 'gatsby'

const ArticlePreview = ({ date, headline, path, title }) => {
  return (
    <article className="mt-m">
      {/* header */}
      <header>
        <div className="small color-dim">
          <time dateTime={date}>{date}</time>
        </div>
        <h2 className="h3 mt-0">
          <Link to={path} className="color-base no-underline">
            {title}
          </Link>
        </h2>
        <div className="color-secondary">{headline}</div>
      </header>
    </article>
  )
}
export default ArticlePreview
