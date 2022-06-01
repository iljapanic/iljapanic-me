import Layout from '../components/Layout'
import Headline from '../components/Headline'
import PostPreview from '../components/PostPreview'
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
            <PostPreview
              key={item.slug}
              title={item.title}
              date={item.publishedOn}
              href={`/garden/${item.slug}`}
            />
          )
        })}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const notes = await getAllFrontmatter('notes', 'title')

  return { props: { notes } }
}
