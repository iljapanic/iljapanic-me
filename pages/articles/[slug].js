import Layout from '../../components/Layout'
import PostWrapper from '../../components/PostWrapper'
import MdxRender from '../../components/MdxRender'
import { getPostByFilename, getAllFiles } from '../../lib/mdx'

import Headline from '../../components/Headline'
import Abstract from '../../components/Abstract'

export default function ArticleSlug({ code, frontmatter }) {
  return (
    <>
      <Layout title={frontmatter.title} summary={frontmatter.summary}>
        <PostWrapper>
          <Headline
            title={frontmatter.title}
            summary={frontmatter.headline}
            date={frontmatter.publishedOn}
            postType="Article"
            readingTime={frontmatter.readingTime.text}
          />

          <Abstract text={frontmatter.abstract} />

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
  const posts = await getAllFiles('articles')

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
  const post = await getPostByFilename(params.slug, 'articles')

  return { props: { ...post } }
}
