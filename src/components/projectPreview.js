import React from 'react'
import { Link } from 'gatsby'

const ProjectPreview = ({ headline, path, title }) => {
  return (
    <article>
      {/* header */}
      <header>
        <h2>
          <Link to={path} className="color-base no-underline">
            {title}
          </Link>
        </h2>
        <p className="color-secondary mt-xs">{headline}</p>
      </header>
    </article>
  )
}
export default ProjectPreview
