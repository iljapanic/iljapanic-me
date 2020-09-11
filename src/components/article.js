import React from 'react'
import { Link } from 'gatsby'
import dayjs from 'dayjs'

const Article = ({
  abstract,
  affiliation,
  date, // expected in YYYY-MM-DD format
  headline,
  keywords,
  path,
  timeToRead,
  title,
}) => {
  return (
    <article className="mt-20 first:mt-0">
      {/* header */}
      <header>
        <div className="flex ms-xs mt-1 text-gray-400 font-mono">
          <time dateTime={date}>{dayjs(date).format('MMMM YYYY')}</time>
          <span className="mx-1">&middot;</span>
          <span>{timeToRead} min read</span>
        </div>
        <h2 className="mb-0">
          <Link to={path} className="color-inherit">
            {title}
          </Link>
        </h2>
        <span className="ms-lg leading-tight font-light text-gray-500 dark:text-gray-300">
          {headline}
        </span>
      </header>

      {/* abstract */}
      <p className="mt-3 text-gray-600 dark:text-gray-300">{abstract}</p>

      {/* read more */}
      <Link
        to={path}
        className="tracking-wide font-medium"
        title={`Read ${title}`}
      >
        Read more ›
      </Link>

      {/* keywords */}
      {/* <ul className="font-medium text-xs text-gray-500">
        {keywords.map((keyword, index) => (
          <li className="inline-block mr-2">#{keyword}</li>
        ))}
      </ul> */}
    </article>
  )
}
export default Article
