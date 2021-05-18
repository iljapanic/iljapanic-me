import React from 'react'
import { Link } from 'gatsby'

const GardenPreview = ({ started, slug, title }) => {
  return (
    <article className="mt-m">
      {/* header */}
      <header>
        <div className="small color-dim">
          <time dateTime={started}>{started}</time>
        </div>
        <h2 className="h3 mt-0">
          <Link to={`/garden/${slug}`} className="color-base no-underline">
            {title}
          </Link>
        </h2>
      </header>
    </article>
  )
}

export default GardenPreview
