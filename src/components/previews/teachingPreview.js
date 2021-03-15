import React from 'react'
import { Link } from 'gatsby'

const Type = ({ type }) => {
  return (
    <span className="badge">
      {type === 'workshop' && 'Workshop'}
      {type === 'course' && 'Course'}
    </span>
  )
}

const TeachingPreview = ({ title, summary, path, type, duration }) => {
  return (
    <article className="mt-m">
      {/* header */}
      <header>
        <div>
          <Type type={type} />
          <span className="color-secondary small ml-xs">{duration}</span>
        </div>
        <h2 className="mt-xs">
          <Link to={path} className="color-base no-underline">
            {title}
          </Link>
        </h2>
      </header>
      <p className="mt-xs">{summary}</p>
      <footer className="mt-s">
        <Link to={path} className="fw-medium no-underline">
          Find out more →
        </Link>
      </footer>
    </article>
  )
}
export default TeachingPreview
