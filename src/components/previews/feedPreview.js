import React from 'react'
import { Link } from 'gatsby'

const FeedPreview = ({ title, url, permalink, notes }) => {
  return (
    <article>
      <header>
        <h2 className="base">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="color-base no-underline"
          >
            {title}
          </a>
        </h2>
      </header>
      <div>{notes}</div>

      <footer>
        <Link to={permalink} className="no-underline small">
          permalink
        </Link>
      </footer>
    </article>
  )
}
export default FeedPreview
