import Layout from '../../components/Layout'
import PostWrapper from '../../components/PostWrapper'
import MdxRender from '../../components/MdxRender'
import { getPostByFilename, getAllFiles } from '../../lib/mdx'

export default function CourseSlug({ code, frontmatter }) {
  return (
    <>
      <Layout title={frontmatter.title}>
        <PostWrapper>
          <h1>{frontmatter.title}</h1>
          <div className="flex items-center space-x-3">
            <p className="text-purple-500 rounded-full bg-gray-100 px-3 py-1 text-sm">
              {frontmatter.readingTime.text}
            </p>
            <p className="text-purple-500 rounded-full bg-gray-100 px-3 py-1 text-sm">
              Date : {frontmatter.publishedOn}
            </p>
          </div>

          <article>
            <MdxRender code={code} />
          </article>
        </PostWrapper>
      </Layout>
    </>
  )
}

// we will generate all the blogs at build time.

export async function getStaticPaths() {
  const posts = await getAllFiles('essays')

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
  const post = await getPostByFilename(params.slug, 'essays')

  return { props: { ...post } }
}
