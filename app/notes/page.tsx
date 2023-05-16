import Link from 'next/link'

import { allNotes, Note } from '@/.contentlayer/generated'

import { sortByTitle } from '@/lib/utils'
import PostMeta from '@/app/components/post-meta'
import Headline from '@/app/components/mdx/headline'

export const metadata = {
  title: 'Field notes',
  description:
    'A loosely tended collection of living notes, fleeting thoughts and ideas',
}

export default function NotesPage() {
  const posts = sortByTitle(allNotes).filter((post) => post.published)

  return (
    <div className="post-wrapper mx-auto">
      <Headline title={metadata.title} subtitle={metadata.description} />
      <div>
        {posts.map((post, idx) => {
          return <PostCard key={`note-${idx}`} {...post} />
        })}
      </div>
    </div>
  )
}

function PostCard(post: Note) {
  return (
    <div className="mt-12 ">
      <h2 className="mt-1.5 text-xl">
        <Link href={post.url} className="">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 font-sans text-secondary">{post.description}</p>
    </div>
  )
}
