import Layout from '../components/Layout'
import Link from 'next/link'

import Headline from '../components/Headline'
import { getAllFrontmatter } from '../lib/mdx'

export default function Garden({ notes }) {
  return (
    <>
      <Layout title="Garden">
        <Headline
          title="Digital Garden"
          summary="A loosely tended ever-evolving collection of living notes, concepts, and half-baked ideas."
        />

        {notes.map((item, _idx) => {
          return (
            <TocItem
              key={item.slug}
              title={item.title}
              published={item.publishedOn}
              updated={item.updatedOn}
              href={`/garden/${item.slug}`}
            />
          )
        })}
      </Layout>
    </>
  )
}

const TocItem = ({ title, published, updated, href }) => (
  <article className="list-none">
    <h2 className="font-sans text-lg">
      <Link href={href} passHref>
        <a>{title}</a>
      </Link>
    </h2>
    <div className="meta">
      <span>{published}</span>
      <span>{updated}</span>
    </div>
  </article>
)

export async function getStaticProps() {
  const notes = await getAllFrontmatter('notes', 'title')

  return { props: { notes } }
}
