import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Hire = ({ available }) => {
  let label
  let pillClass =
    'inline-flex items-center px-2 py-1 rounded text-xs font-medium leading-4 font-mono uppercase tracking-wide transition duration-300'
  let dotClass = 'mr-1.5 h-2 w-2'

  if (available) {
    label = 'Available for Hire'
    pillClass +=
      ' bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900'
    dotClass += ' text-green-400'
  } else {
    label = 'Not Available for Hire'
    pillClass +=
      ' bg-orange-100 text-orange-800 hover:bg-orange-200 hover:text-orange-900'
    dotClass += ' text-orange-400'
  }

  return (
    <Link to="/hire/">
      <span className={pillClass}>
        <svg class={dotClass} fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {label}
      </span>
    </Link>
  )
}

Hire.propTypes = {
  available: PropTypes.bool,
  label: PropTypes.string.isRequired,
}

export default Hire
