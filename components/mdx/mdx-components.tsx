import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

/* custom mdx components */
import { Image } from '@/components/mdx/image'
import { Figure } from '@/components/mdx/figure'
import { FigureLegacy } from '@/components/mdx/figure-legacy'
import { Quote } from '@/components/mdx/quote'
import { Soundcloud } from '@/components/mdx/soundcloud'
import { VideoPlayer } from '@/components/mdx/video-player'

// Define your custom MDX components.
export const mdxComponents: MDXComponents = {
	// Override the default <a> element to use the next/link component.
	a: ({ href, children }) => {
		const isExternal = href?.startsWith('http') || href?.startsWith('https')

		if (isExternal) {
			return (
				<span className="group">
					<a href={href} target="_blank" rel="noopener noreferrer">
						{children}
					</a>

					<ArrowTopRightIcon className="inline-block text-muted-foreground transition-transform duration-200 group-hover:translate-x-[1px] group-hover:translate-y-[-1px] group-hover:text-foreground" />
				</span>
			)
		} else {
			return <Link href={href as string}>{children}</Link>
		}
	},
	Image: ({ src, alt }) => (
		<Image src={src} alt={alt} width={1200} height={200} />
	),
	// img: ({ src, alt }) => (<Image src={src} alt={alt} sizes="100vw" style={ 'width': '100%', 'height': 'auto' }  {...props} />),
	// Add a custom component.
	Figure: ({ caption, children }) => (
		<Figure caption={caption}>{children}</Figure>
	),
	FigureLegacy: ({ src, children }) => (
		<FigureLegacy src={src}>{children}</FigureLegacy>
	),
	Quote: ({ author, url, children }) => (
		<Quote author={author} url={url}>
			{children}
		</Quote>
	),
	Soundcloud: ({ url }) => <Soundcloud url={url} />,
	VideoPlayer: ({ url }) => <VideoPlayer url={url} />,
}
