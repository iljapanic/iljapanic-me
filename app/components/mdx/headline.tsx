import React from 'react'
import { format, parseISO } from 'date-fns'

interface HeadlineProps {
  title: string
  subtitle?: string
  date?: string
}

const Headline: React.FC<HeadlineProps> = ({ title, subtitle, date }) => {
  return (
    <header className="mb-10">
      {/* date (optional) */}
      {date && (
        <time
          dateTime={date}
          className="mb-2 block font-sans text-tertiary text-xs"
        >
          {format(parseISO(date), 'LLLL d, yyyy')}
        </time>
      )}
      {/* title */}
      <h1>{title}</h1>

      {/* subtitle (optional) */}
      {subtitle && (
        <p className="mt-3 font-sans text-secondary text-lg">{subtitle}</p>
      )}
    </header>
  )
}

export default Headline
