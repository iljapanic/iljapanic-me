import React from 'react'

interface AbstractProps {
  abstract: string
}

const Abstract: React.FC<AbstractProps> = ({ abstract }) => {
  return (
    <div className="rounded-sm bg-bg-secondary px-4 py-4">
      <h2 className="leading-none text-base">Abstract</h2>
      <p className="mt-1 font-sans leading-snug text-secondary text-sm">
        {abstract}
      </p>
    </div>
  )
}

export default Abstract
