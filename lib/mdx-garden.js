import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'

import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

const gardenDirectory = 'posts/notes'

export async function getGardenFiles() {
  return fs.readdirSync(path.join(process.cwd(), gardenDirectory))
}

export async function getGardenFileBySlug(slug) {
  const source = fs.readFileSync(
    path.join(process.cwd(), gardenDirectory, `${slug}.mdx`),
    'utf8',
  )

  const { code, frontmatter } = await bundleMDX({
    source: source,
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ]
      return options
    },
  })

  // if(frontmatter.published) {}

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  }
}

export async function getAllGardenFilesFrontmatter() {
  const files = fs.readdirSync(path.join(process.cwd(), gardenDirectory))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), gardenDirectory, postSlug),
      'utf8',
    )
    const { data } = matter(source)

    const sortedPosts = allPosts
      // .filter((post) => post.published)
      .sort((a, b) => {
        console.log(a.title)
        a.title.localeCompare(b.title)
      })

    // console.log(sortedPosts)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source),
      },
      ...sortedPosts,
    ]
  }, [])
}
