import Image from 'next/image'
import classNames from 'classnames'

export default function ProjectPreview({
  title,
  date,
  summary,
  href,
  externalUrl,
  year,
  cover,
  size = 'full',
}) {
  const previewStyles = classNames('', {
    'lg:flex lg:items-center': size == 'full',
  })

  return (
    <article className={previewStyles}>
      {/* project body */}
      <div>
        {year && (
          <div className="text-secondary dark:text-secondary-dark text-sm">
            {year}
          </div>
        )}
        <h2 className="mt-1 mb-0 text-lg">{title}</h2>
        {summary && <p className="text-secondary mb-0">{summary}</p>}
        {externalUrl && (
          <a href={externalUrl} target="_blank" rel="noreferrer">
            Visit site
          </a>
        )}
      </div>
    </article>
  )
}
