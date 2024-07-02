import Image from 'next/image'

import { PostHeader } from '@/components/post/post-header'

export const metadata = {
	title: '404',
}

export default function NotFound() {
	return (
		<article className="post-wrapper mx-auto">
			<PostHeader title="404 – Page Not Found" />

			<p>
				You just hit a route that doesn&#39;t seem to exist on this site. I may
				have moved things around during a redesign. I hope you find what you are
				looking for by browsing available sections.
			</p>
		</article>
	)
}
