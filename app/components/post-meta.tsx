import React from 'react'
import { format, parseISO } from 'date-fns'

import { cn } from '@/lib/utils'

interface PostMetaProps {
  date?: string
  affiliation?: string
  className?: string
}

const PostMeta: React.FC<PostMetaProps> = ({
  date,
  affiliation,
  className,
}) => {
  if (date || affiliation) {
    return (
      <div
        className={cn(
          'flex items-center gap-2 font-sans text-tertiary text-xs',
          className,
        )}
      >
        {affiliation && <div>{affiliation}</div>}
        {affiliation && <span>|</span>}

        {/* date (optional) */}
        {date && (
          <time dateTime={date} className="block">
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
        )}
      </div>
    )
  } else {
    return null
  }
}

export default PostMeta
