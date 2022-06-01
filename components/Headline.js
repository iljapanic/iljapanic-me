export default function Headline({
  title,
  summary,
  date,
  readingTime,
  postType,
}) {
  let byline
  const bylineSeparatorStyles = 'last-of-type:hidden'

  if (postType || date || readingTime) {
    byline = (
      <div className="text-dim mb-4 flex items-center space-x-4 text-sm">
        {/* post type */}
        {postType && <div>{postType}</div>}
        {postType && <div className={bylineSeparatorStyles}>|</div>}

        {/* date */}
        {date && <div>{date}</div>}
        {date && <div className={bylineSeparatorStyles}>|</div>}

        {/* reading time */}
        {readingTime && <div>{readingTime}</div>}
        {readingTime && <div className={bylineSeparatorStyles}>|</div>}
      </div>
    )
  }

  return (
    <header>
      {byline && byline}
      <h1 className={summary && 'mb-0'}>{title}</h1>
      {summary && (
        <p className="text-secondary dark:text-secondary-dark text-lg">
          {summary}
        </p>
      )}
    </header>
  )
}
