import Link from 'next/link'
import { compareDesc } from 'date-fns'
import { allArticles, Article } from 'contentlayer/generated'

import Headline from '@/app/components/mdx/headline'
import PostMeta from '@/app/components/post-meta'

export const metadata = {
  title: 'Articles',
  description: 'Longforms written over the course of several studies',
}

export default function ArticlesPage() {
  const posts = allArticles
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .filter((post) => post.published)
  return (
    <div className="post-wrapper mx-auto">
      <Headline title={metadata.title} subtitle={metadata.description} />
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
    <div className="mt-12 ">
      <PostMeta
        date={post.date}
        // affiliation={post.affiliation}
        // className="mb-2"
      />
      <h2 className="mt-1">
        <Link href={post.url} className="text-primary">
          {post.title}
        </Link>
      </h2>
      <p className="mt-1 font-sans text-secondary text-sm">
        {post.description}
      </p>
    </div>
  )
}
