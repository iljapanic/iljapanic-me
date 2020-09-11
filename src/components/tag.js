import React from 'react'

const Tag = ({ tag }) => {
  return (
    <li className="font-medium text-xs text-gray-500">
      <span>#{tag}</span>
    </li>
  )
}

export default Tag
