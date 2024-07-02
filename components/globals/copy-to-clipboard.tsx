'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface CopyToClipboardProps {
	text: string
	textInToast?: string
	children: React.ReactNode
	className?: string
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
	text,
	textInToast,
	children,
	className,
}) => {
	const copyTextToClipboard = async (text: string) => {
		if ('clipboard' in navigator) {
			try {
				await navigator.clipboard.writeText(text)
				toast.success(
					<div>
						Copied{' '}
						<span className="font-semibold">
							{textInToast ? textInToast : text}
						</span>{' '}
						to clipboard
					</div>,
				)
			} catch (err) {
				console.error('Failed to copy: ', err)
			}
		} else {
			console.error('Clipboard not available')
		}
	}

	return (
		<button
			onClick={() => copyTextToClipboard(text)}
			className={cn('inline-block', className)}
		>
			{children}
		</button>
	)
}
