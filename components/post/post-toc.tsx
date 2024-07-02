'use client'

import { useEffect, useState } from 'react'

export function PostToc() {
	const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])
	const [activeId, setActiveId] = useState<string>('')

	useEffect(() => {
		const elements = Array.from(document.querySelectorAll('h2'))
		const headingData = elements.map((element) => ({
			id: element.id,
			text: element.textContent || '',
		}))
		setHeadings(headingData)

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
					}
				})
			},
			{ rootMargin: '-20% 0px -80% 0px' },
		)

		elements.forEach((elem) => observer.observe(elem))

		return () => observer.disconnect()
	}, [])

	return (
		<nav className="fixed right-4 top-20 hidden xl:block">
			<ul className="space-y-2 text-sm">
				{headings.map((heading) => (
					<li key={heading.id}>
						<a
							href={`#${heading.id}`}
							className={`cursor-pointer hover:text-primary ${
								activeId === heading.id
									? 'bg-red-200 font-semibold text-primary'
									: ''
							}`}
						>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
