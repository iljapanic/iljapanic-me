import Layout from '../components/Layout'
import Link from 'next/link'

import Headline from '../components/Headline'
import { getAllFrontmatter } from '../lib/mdx'

export default function Essays({ essays }) {
  return (
    <section>
      <Layout title="Essays">
        <Headline
          title="Essays"
          summary="Long-form academic texts written during various studies."
        />
        {essays.map((item, _idx) => {
          return (
            <TocItem
              key={item.slug}
              title={item.title}
              published={item.publishedOn}
              updated={item.updatedOn}
              href={`/essays/${item.slug}`}
            />
          )
        })}
      </Layout>
    </section>
  )
}

const TocItem = ({ title, published, updated, href }) => (
  <li className="list-none">
    <h2 className="font-sans text-lg">
      <Link href={href} passHref>
        <a>{title}</a>
      </Link>
    </h2>
    <div className="meta">
      <span>{published}</span>
      <span>{updated}</span>
    </div>
  </li>
)

export async function getStaticProps() {
  const essays = await getAllFrontmatter('essays', 'title')

  return { props: { essays } }
}
