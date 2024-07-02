import { Book } from '@/components/books/book'
import { cn } from '@/lib/utils'

export function BooksGrid({
	books,
	className,
}: {
	books: readonly string[]
	className?: string
}) {
	return (
		<div
			className={cn(
				'grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4',
				className,
			)}
		>
			{books.map((book) => (
				<Book key={book} slug={book} />
			))}
		</div>
	)
}
