import React from 'react'

interface FigureLegacyProps {
  children: React.ReactNode
  src: string
}

const FigureLegacy: React.FC<FigureLegacyProps> = ({ children, src }) => {
  return (
    <figure className="mx-auto mb-12 mt-12">
      <img src={src} className="w-full" />
      <figcaption className="mt-2 text-center italic text-secondary text-sm">
        {children}
      </figcaption>
    </figure>
  )
}

export default FigureLegacy
