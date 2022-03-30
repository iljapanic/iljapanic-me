import Layout from '../components/Layout'
import PostWrapper from '../components/PostWrapper'
import MdxRender from '../components/MdxRender'
import { getPostByFilename, getAllFiles } from '../lib/mdx'
import Headline from '../components/Headline'

export default function CourseSlug({ code, frontmatter }) {
  return (
    <>
      <Layout title={frontmatter.title}>
        <PostWrapper>
          <Headline title={frontmatter.title} summary={frontmatter.summary} />
          <MdxRender code={code} />
        </PostWrapper>
      </Layout>
    </>
  )
}

// we will generate all the blogs at build time.

export async function getStaticPaths() {
  const posts = await getAllFiles('pages')

  let pathList = await posts.map((p) => {
    const fileSlug = p.replace(/\.mdx/, '')

    return { params: { slug: fileSlug } }
  })

  // console.log(pathList)

  return {
    paths: pathList,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostByFilename(params.slug, 'pages')

  return { props: { ...post } }
}
