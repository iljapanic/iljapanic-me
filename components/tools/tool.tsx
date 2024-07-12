import Image from 'next/image'

import { keystaticReader } from '@/lib/keystatic-reader'
import { cn } from '@/lib/utils'

interface ToolProps {
	slug: string
	className?: string
}

export async function Tool({ slug, className }: ToolProps) {
	const tool = await keystaticReader.collections.tools.read(slug)

	const iconSize = 20

	if (!tool) {
		return null
	}

	return (
		<a
			href={tool.url}
			className={cn('block text-inherit no-underline', className)}
			rel="noopener noreferrer"
			target="_blank"
		>
			<div className="rounded-lg bg-muted px-3 py-3 leading-none text-inherit no-underline opacity-80 hover:opacity-100">
				<header className="flex items-center gap-3">
					{tool.simpleIconSlug ? (
						<Image
							height={iconSize}
							width={iconSize}
							src={`https://cdn.simpleicons.org/${tool.simpleIconSlug}`}
							alt={tool.name}
							unoptimized // nextjs doesn't optimize SVGs
						/>
					) : tool.icon ? (
						<Image
							height={iconSize}
							width={iconSize}
							src={tool.icon}
							alt={tool?.name}
						/>
					) : null}

					<h2 className="my-0 font-medium">{tool?.name}</h2>
				</header>
				{tool?.description && <p className="text-sm">{tool.description}</p>}
			</div>
		</a>
	)
}
