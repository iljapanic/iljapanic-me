import React from 'react'

interface FigureProps {
  children: React.ReactNode
  caption?: string
}

const Figure: React.FC<FigureProps> = ({ children, caption }) => {
  return (
    <figure className="mx-auto mb-12 mt-12 w-10/12">
      {children}
      <figcaption className="mt-2 text-center italic text-secondary text-sm">
        {caption}
      </figcaption>
    </figure>
  )
}

export default Figure
