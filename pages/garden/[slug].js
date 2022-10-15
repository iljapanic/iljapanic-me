import Layout from '../../components/Layout'
import PostWrapper from '../../components/PostWrapper'
import MdxRender from '../../components/MdxRender'
import { getPostByFilename, getAllFiles } from '../../lib/mdx'
import PostType from '../../components/PostType'

export default function GardenSlug({ code, frontmatter }) {
  return (
    <>
      <Layout title={frontmatter.title} summary={frontmatter.summary}>
        <PostWrapper>
          <PostType type="garden" />
          <h1>{frontmatter.title}</h1>
          <MdxRender code={code} />
        </PostWrapper>
      </Layout>
    </>
  )
}

// we will generate all the blogs at build time.

export async function getStaticPaths() {
  const posts = await getAllFiles('notes')

  let pathList = await posts.map((p) => {
    // const post = fs.readFileSync(
    //   path.join(process.cwd(), 'posts/notes', `${p}`),
    //   'utf8',
    // )
    // const { data } = matter(post)
    // const slug = data.slug
    const fileSlug = p.replace(/\.mdx/, '')

    return { params: { slug: fileSlug } }
  })

  return {
    paths: pathList,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostByFilename(params.slug, 'notes')

  return { props: { ...post } }
}
