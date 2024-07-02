import React from 'react'
import { v4 } from 'uuid'
import Image from 'next/image'

import { keystaticReader } from '@/lib/keystatic-reader'
import { cn } from '@/lib/utils'

interface BookProps {
	slug: string
	className?: string
}

export async function Book({ slug, className }: BookProps) {
	const book = await keystaticReader.collections.books.read(slug)

	if (!book) {
		return null
	}

	return (
		<article className={cn('group', className)}>
			<a
				href={book.url}
				target="_blank"
				rel="noreferrer"
				className="no-underline"
			>
				{book.cover && (
					<div>
						<Image
							src={book.cover}
							width={100}
							height={100}
							alt={book.title}
							className="w-full opacity-80 saturate-[0.75] transition-all duration-300 group-hover:opacity-100 group-hover:saturate-100 dark:saturate-[0.6]"
						/>
					</div>
				)}

				<h3 className="mb-1 mt-1.5 text-xs leading-tight text-foreground/70">
					{book.title}
				</h3>

				{/* authors */}
				{book.author && (
					<div className="text-xs text-muted-foreground">{book.author}</div>
				)}
			</a>
		</article>
	)
}
