import PlausibleProvider from 'next-plausible'
import { Newsreader, Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/globals/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import '@/styles/globals.css'

const serifFont = Newsreader({
	subsets: ['latin-ext'],
	variable: '--font-serif',
	display: 'swap',
	style: ['normal', 'italic'],
})

const sansFont = Inter({
	subsets: ['latin-ext'],
	variable: '--font-sans',
	display: 'swap',
})

export function SharedLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<PlausibleProvider domain="iljapanic.com" />
			</head>
			<body className={`${sansFont.variable} ${serifFont.variable}`}>
				<ThemeProvider>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
