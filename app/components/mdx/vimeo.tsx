import React from 'react'

interface VimeoProps {
  url: string
}

const Vimeo: React.FC<VimeoProps> = ({ url }) => {
  return (
    <div>
      <h1>{url}</h1>
    </div>
  )
}

export default Vimeo
