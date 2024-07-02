import React from 'react'

interface AbstractProps {
  abstract: string
}

export const Abstract: React.FC<AbstractProps> = ({ abstract }) => {
  return (
    <div className="">
      <h2 className="leading-none text-sm">Abstract</h2>
      <p className="mt-1 italic leading-snug text-sm">{abstract}</p>
    </div>
  )
}
