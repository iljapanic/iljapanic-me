import Layout from '../../components/Layout'
import PostWrapper from '../../components/PostWrapper'
import MdxRender from '../../components/MdxRender'
import { getPostByFilename, getAllFiles } from '../../lib/mdx'

import PostType from '../../components/PostType'

export default function CourseSlug({ code, frontmatter }) {
  return (
    <>
      <Layout title={frontmatter.title} summary={frontmatter.summary}>
        <PostWrapper>
          <PostType type="course" />
          <h1>{frontmatter.title}</h1>
          <MdxRender code={code} />
        </PostWrapper>
      </Layout>
    </>
  )
}

// we will generate all the blogs at build time.

export async function getStaticPaths() {
  const posts = await getAllFiles('courses')

  let pathList = await posts.map((p) => {
    const fileSlug = p.replace(/\.mdx/, '')

    return { params: { slug: fileSlug } }
  })

  return {
    paths: pathList,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostByFilename(params.slug, 'courses')

  return { props: { ...post } }
}
