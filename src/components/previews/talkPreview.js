import React from 'react'
import { Link } from 'gatsby'

const TalkPreview = ({
  date,
  headline,
  path,
  title,
  language,
  location,
  locationUrl,
}) => {
  return (
    <article className="mt-m">
      {/* header */}
      <header>
        <div className="small color-dim">
          <time dateTime={date}>{date}</time> at{' '}
          <a
            href={locationUrl}
            target="_blank"
            rel="noreferrer"
            className="no-underline color-dim"
          >
            {location}
          </a>
        </div>
        <h2 className="h3 mt-0">
          <Link to={path} className="color-base no-underline">
            {title} {language && `[${language}]`}
          </Link>
        </h2>
        <div className="color-secondary">{headline}</div>
      </header>
    </article>
  )
}
export default TalkPreview
