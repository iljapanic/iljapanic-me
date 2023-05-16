import React from 'react'
import { format, parseISO } from 'date-fns'
import PostMeta from '@/app/components/post-meta'

interface HeadlineProps {
  title: string
  subtitle?: string
  affiliation?: string
  date?: string
}

const Headline: React.FC<HeadlineProps> = ({
  title,
  subtitle,
  date,
  affiliation,
}) => {
  return (
    <header className="mb-10">
      <PostMeta date={date} affiliation={affiliation} className="mb-1" />

      {/* title */}
      <h1>{title}</h1>

      {/* subtitle (optional) */}
      {subtitle && (
        <p className="mt-1 font-sans leading-snug text-tertiary">{subtitle}</p>
      )}
    </header>
  )
}

export default Headline
