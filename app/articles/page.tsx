import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allArticles, Article } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

import Headline from '../components/mdx/headline'

export default function ArticlesPage() {
  const posts = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return (
    <div>
      <Headline
        title="Articles"
        subtitle="Academic longforms written over the course of several studies"
      />
      <div>
        {posts.map((post, idx) => {
          if (post.published) {
            return <PostCard key={idx} {...post} />
          }
        })}
      </div>
    </div>
  )
}

function PostCard(post: Article) {
  return (
    <div className="mt-12">
      <time
        dateTime={post.date}
        className="block font-sans text-tertiary text-xs"
      >
        {format(parseISO(post.date), 'LLLL yyyy')}
      </time>
      <h2 className="mt-1.5 text-xl">
        <Link href={post.url} className="">
          {post.title}
        </Link>
      </h2>
      <p className="mt-1.5 font-sans text-secondary">{post.description}</p>
    </div>
  )
}
