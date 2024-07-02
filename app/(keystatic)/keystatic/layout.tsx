import KeystaticApp from './keystatic'
import { notFound } from 'next/navigation'

import { showAdminUI } from '@/keystatic.config'

export default function Layout() {
	if (!showAdminUI) {
		notFound()
	}
	return <KeystaticApp />
}
