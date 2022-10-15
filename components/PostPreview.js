import Link from 'next/link'
import { displayDate } from '../lib/displayDate'

export default function PostPreview({ title, date, summary, href }) {
  return (
    <article className="mt-12">
      {date && (
        <div className="text-sm text-secondary dark:text-secondary-dark">
          {displayDate(date)}
        </div>
      )}
      <h2 className="mt-1 mb-0 text-lg">
        <Link href={href} passHref>
          <a className="no-underline">{title}</a>
        </Link>
      </h2>
      {summary && <p className="mb-0 text-secondary">{summary}</p>}
    </article>
  )
}
