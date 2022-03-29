export default function BooksGrid({ children, className }) {
  return (
    <div
      className={`mx-auto grid max-w-6xl grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  )
}
