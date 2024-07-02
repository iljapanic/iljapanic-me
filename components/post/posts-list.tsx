import { format } from 'date-fns'
import Link from 'next/link'

export function PostsList({ posts }: { posts: any[] }) {
	return (
		<section className="space-y-4">
			{posts.map((post) => (
				<Link
					href={`/${post.slug}`}
					className="-mx-3 block rounded-md p-3 text-inherit no-underline hover:bg-muted"
				>
					<div key={post.slug} className="space-y-1">
						<header className="flex items-center justify-between">
							<h3 className="mb-0 font-normal">{post.title}</h3>
							<time
								dateTime={post.publishedAt}
								className="text-sm text-muted-foreground"
							>
								{format(new Date(post.publishedAt), 'yyyy')}
							</time>
						</header>
						<p className="mt-0 text-muted-foreground">{post.subtitle}</p>
					</div>
				</Link>
			))}
		</section>
	)
}
