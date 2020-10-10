import React from 'react'

const Figure = ({ image, caption }) => {
  return (
    <figure className="figure">
      <p>{image}</p>

      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Quote
