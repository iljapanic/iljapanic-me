import fs from 'fs'
import path from 'path'
import read from 'fs-readdir-recursive'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'

// rehype plugins
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeImgSize from 'rehype-img-size'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

const pagesDirectory = 'pages'
const notesDirectory = 'posts/notes'
const coursesDirectory = 'posts/courses'
const projectsDirectory = 'posts/projects'
const talksDirectory = 'posts/talks'
const essaysDirectory = 'posts/essays'

/* Get ALL files for a specified category  */
export async function getAllFiles(category) {
  if (category === 'notes') {
    return fs.readdirSync(path.join(process.cwd(), notesDirectory))
  } else if (category === 'courses') {
    return fs.readdirSync(path.join(process.cwd(), coursesDirectory))
  } else if (category === 'projects') {
    return fs.readdirSync(path.join(process.cwd(), projectsDirectory))
  } else if (category === 'talks') {
    return fs.readdirSync(path.join(process.cwd(), talksDirectory))
  } else if (category === 'essays') {
    return fs.readdirSync(path.join(process.cwd(), essaysDirectory))
  } else if (category === 'pages') {
    let allFiles = read(path.join(process.cwd(), pagesDirectory)).filter(
      (file) => file.endsWith('.mdx'),
    )
    // console.log(allFiles)

    return allFiles
  }
}

/* Get Frontmatter data for ALL posts from a specified category */
export async function getAllFrontmatter(category, sortBy = 'title') {
  let files
  let directory

  if (category === 'notes') {
    files = await getAllFiles('notes')
    directory = notesDirectory
  } else if (category === 'courses') {
    files = await getAllFiles('courses')
    directory = coursesDirectory
  } else if (category === 'projects') {
    files = await getAllFiles('projects')
    directory = projectsDirectory
  } else if (category === 'talks') {
    files = await getAllFiles('talks')
    directory = talksDirectory
  } else if (category === 'essays') {
    files = await getAllFiles('essays')
    directory = essaysDirectory
  } else if (category === 'pages') {
    files = await getAllFiles('pages')
    directory = pagesDirectory
  }

  return files.reduce((allPosts, postSlug) => {
    const postSource = fs.readFileSync(
      path.join(process.cwd(), directory, postSlug),
      'utf8',
    )

    const { data } = matter(postSource)

    if (data.published) {
      allPosts.push({
        ...data,
        readingTime: readingTime(postSource),
      })
    }

    if (sortBy == 'title') {
      return allPosts.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy == 'oldest') {
      return allPosts.sort(
        (a, b) =>
          new Date(a.publishedOn).getTime() - new Date(b.publishedOn).getTime(),
      )
    } else if (sortBy == 'newest') {
      return allPosts
        .sort(
          (a, b) =>
            new Date(a.publishedOn).getTime() -
            new Date(b.publishedOn).getTime(),
        )
        .reverse()
    }
  }, [])
}

export async function getPostByFilename(filename, category) {
  let files
  let postSource

  if (category === 'notes') {
    files = await getAllFiles('notes')
    postSource = fs.readFileSync(
      path.join(process.cwd(), notesDirectory, `${filename}.mdx`),
      'utf8',
    )
  } else if (category === 'courses') {
    files = await getAllFiles('courses')
    postSource = fs.readFileSync(
      path.join(process.cwd(), coursesDirectory, `${filename}.mdx`),
      'utf8',
    )
  } else if (category === 'projects') {
    files = await getAllFiles('projects')
    postSource = fs.readFileSync(
      path.join(process.cwd(), projectsDirectory, `${filename}.mdx`),
      'utf8',
    )
  } else if (category === 'talks') {
    files = await getAllFiles('talks')
    postSource = fs.readFileSync(
      path.join(process.cwd(), talksDirectory, `${filename}.mdx`),
      'utf8',
    )
  } else if (category === 'essays') {
    files = await getAllFiles('essays')
    postSource = fs.readFileSync(
      path.join(process.cwd(), essaysDirectory, `${filename}.mdx`),
      'utf8',
    )
  } else if (category === 'pages') {
    files = await getAllFiles('pages')
    postSource = fs.readFileSync(
      path.join(process.cwd(), pagesDirectory, `${filename}.mdx`),
      'utf8',
    )
  }

  const { code, frontmatter } = await bundleMDX({
    source: postSource,
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        remarkGfm,
        rehypeSlug,
        rehypeCodeTitles,
        [rehypePrism, { ignoreMissing: true }],
        remarkUnwrapImages,
        [rehypeImgSize, { dir: 'public' }],
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

  return {
    code,
    frontmatter: {
      wordCount: postSource.split(/\s+/gu).length,
      readingTime: readingTime(postSource),
      ...frontmatter,
    },
  }
}
