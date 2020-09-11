import React from 'react'

const Headline = ({ title, headline }) => {
  return (
    <div>
      <h1 className="mb-1">{title}</h1>
      <p className="ms-lg">{headline}</p>
    </div>
  )
}

export default Headline
