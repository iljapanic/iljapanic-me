import Layout from '../components/Layout'
import GardenPostPreview from '../components/GardenPostPreview'
import { getAllGardenFilesFrontmatter } from '../lib/mdx-garden'

export default function Index({ gardenPosts }) {
  return (
    <>
      <Layout>
        <h2 className="text-2xl mt-4">Garden</h2>
        {gardenPosts.map((item, _idx) => (
          <GardenPostPreview {...gardenPosts[_idx]} key={item.slug} />
        ))}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const gardenPosts = await getAllGardenFilesFrontmatter()
  return { props: { gardenPosts } }
}
