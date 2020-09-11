import React from 'react'
import { Link } from 'gatsby'
import dayjs from 'dayjs'

const Note = ({
  date, // expected in YYYY-MM-DD format
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
      </header>
    </article>
  )
}
export default Note
