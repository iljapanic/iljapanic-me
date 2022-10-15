import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import Headline from '../components/Headline'
import { getAllFrontmatter } from '../lib/mdx'

export default function Articles({ articles }) {
  return (
    <section>
      <Layout title="Articles">
        <Headline
          title="Articles & Essays"
          summary="Long-form academic texts written during various studies."
        />
        {articles.map((item, _idx) => {
          return (
            <PostPreview
              key={item.slug}
              title={item.title}
              date={item.publishedOn}
              href={`/articles/${item.slug}`}
              summary={item.headline}
            />
          )
        })}
      </Layout>
    </section>
  )
}

export async function getStaticProps() {
  const articles = await getAllFrontmatter('articles', 'newest')

  return { props: { articles } }
}
