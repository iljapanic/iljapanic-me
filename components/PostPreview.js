import Link from 'next/link'

export default function PostPreview({ title, date, summary, href }) {
  return (
    <article className="mt-12">
      {date && (
        <div className="text-secondary dark:text-secondary-dark text-sm">
          {date}
        </div>
      )}
      <h2 className="mt-1 mb-0 text-lg">
        <Link href={href} passHref>
          <a className="no-underline">{title}</a>
        </Link>
      </h2>
      {summary && <p className="text-secondary mb-0">{summary}</p>}
    </article>
  )
}
