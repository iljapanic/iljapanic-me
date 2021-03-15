import React from 'react'

const Headline = ({ title, headline }) => {
  return (
    <header>
      <h1 className="mb-0 mt-0">{title}</h1>
      {headline && <p className="color-secondary h4 mt-xs">{headline}</p>}
    </header>
  )
}

export default Headline
