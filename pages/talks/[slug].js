import Layout from '../../components/Layout'
import PostWrapper from '../../components/PostWrapper'
import MdxRender from '../../components/MdxRender'
import { getPostByFilename, getAllFiles } from '../../lib/mdx'

export default function TalkSlug({ code, frontmatter }) {
  return (
    <>
      <Layout title={frontmatter.title}>
        <PostWrapper>
          <h2 className="text-6xl font-black text-gray-800 mt-20">
            {frontmatter.title}
          </h2>
          <div className="flex items-center space-x-3">
            <p className="px-3 py-1 text-sm text-purple-500 bg-gray-100 rounded-full">
              {frontmatter.readingTime.text}
            </p>
            <p className="px-3 py-1 text-sm text-purple-500 bg-gray-100 rounded-full">
              Date : {frontmatter.publishedAt}
            </p>
          </div>

          <article className="flex flex-col space-y-10 prose">
            <MdxRender code={code} />
          </article>
        </PostWrapper>
      </Layout>
    </>
  )
}

// we will generate all the blogs at build time.

export async function getStaticPaths() {
  const posts = await getAllFiles('talks')

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
  const post = await getPostByFilename(params.slug, 'talks')

  return { props: { ...post } }
}
