import React from 'react'
import { Link } from 'gatsby'
import * as styles from './gardenPreview.module.css'

const Type = ({ type }) => {
  return (
    <span className="badge">
      {type === 'seedling' && 'Seedling 🌱'}
      {type === 'budding' && 'Budding 🌿'}
      {type === 'evergreen' && 'Evergreen 🌳'}
    </span>
  )
}

const GardenPreview = ({ started, slug, title, type }) => {
  return (
    <article className="mt">
      {/* header */}
      <header>
        <div className="small color-dim">
          <time dateTime={started}>{started}</time>
        </div>
        <div>{/* <Type type={type} /> */}</div>
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
