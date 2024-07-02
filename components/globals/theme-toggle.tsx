'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted)
		return (
			<Button
				variant="ghost"
				size="sm"
				aria-label="Toggle theme"
				className="text-muted-foreground hover:text-foreground"
			>
				<span className="rotate-45">◐</span>
			</Button>
		)

	const isLight = resolvedTheme === `light`
	const oppositeTheme = isLight ? `dark` : `light`

	const toggleTheme = () => setTheme(oppositeTheme)

	return (
		<Button
			variant="ghost"
			size="sm"
			aria-label="Toggle theme"
			onClick={toggleTheme}
			className="text-muted-foreground selection:bg-transparent hover:text-foreground"
		>
			<span className="rotate-45">◐</span>
		</Button>
	)
}
