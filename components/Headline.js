export default function Headline({ title, summary }) {
  return (
    <header>
      <h1 className={summary && 'mb-4'}>{title}</h1>
      {summary && (
        <p className="text-secondary font-serif text-lg">{summary}</p>
      )}
    </header>
  )
}
