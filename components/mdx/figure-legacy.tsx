import React from 'react'

interface FigureLegacyProps {
	children: React.ReactNode
	src: string
}

export const FigureLegacy: React.FC<FigureLegacyProps> = ({
	children,
	src,
}) => {
	return (
		<figure className="mx-auto mb-12 mt-12">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={src} className="w-full" alt="" />
			<figcaption className="mt-2 text-center font-serif italic text-foreground/50">
				{children}
			</figcaption>
		</figure>
	)
}
