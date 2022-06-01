import fs from 'fs'
import path from 'path'
import read from 'fs-readdir-recursive'
import matter from 'gray-matter'
import readingTime from 'reading-time'
// import MdxRender from '/components/MdxRender'

// import { serialize } from 'next-mdx-remote/serialize'

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'esbuild.exe',
  )
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'bin',
    'esbuild',
  )
}
import { bundleMDX } from 'mdx-bundler'

// rehype plugins
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeImgSize from 'rehype-img-size'
import { remarkMdxImages } from 'remark-mdx-images'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

const rehypePlugins = [
  remarkGfm,
  rehypeSlug,
  rehypeCodeTitles,
  [rehypePrism, { ignoreMissing: true }],
  // remarkUnwrapImages,
  // remarkMdxImages,
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

const pagesDirectory = 'pages'
const notesDirectory = 'posts/notes'
const coursesDirectory = 'posts/courses'
const projectsDirectory = 'posts/projects'
const talksDirectory = 'posts/talks'
const articlesDirectory = 'posts/articles'

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
  } else if (category === 'articles') {
    return fs.readdirSync(path.join(process.cwd(), articlesDirectory))
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
  } else if (category === 'articles') {
    files = await getAllFiles('articles')
    directory = articlesDirectory
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
    } else if (sortBy == 'order') {
      return allPosts.sort((a, b) => parseInt(a.order) - parseInt(b.order))
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
  } else if (category === 'articles') {
    files = await getAllFiles('articles')
    postSource = fs.readFileSync(
      path.join(process.cwd(), articlesDirectory, `${filename}.mdx`),
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
    cwd: process.cwd(),
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        ...rehypePlugins,
      ]
      return options
    },
  })

  // const { frontmatter, content } = matter(postSource)
  // const code = await serialize(content, {
  //   scope: frontmatter,
  //   // parseFrontmatter: true,
  //   mdxOptions: {
  //     rehypePlugins: rehypePlugins,
  //   },
  // })

  return {
    code,
    frontmatter: {
      wordCount: postSource.split(/\s+/gu).length,
      readingTime: readingTime(postSource),
      ...frontmatter,
    },
  }
}

export async function getMdx(mdx) {
  const { code } = await bundleMDX({
    source: mdx,
    cwd: process.cwd(),
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        ...rehypePlugins,
      ]
      return options
    },
  })
  // const { content } = matter(mdx)
  // const code = await serialize(content, {
  //   mdxOptions: {
  //     rehypePlugins: rehypePlugins,
  //   },
  // })

  return code
}

// export async function renderMdx({ mdx }) {
//   const { code } = await bundleMDX({
//     source: mdx,
//     cwd: process.cwd(),
//     xdmOptions(options) {
//       options.rehypePlugins = [
//         ...(options?.rehypePlugins ?? []),
//         ...rehypePlugins,
//       ]
//       return options
//     },
//   })
//   // const { content } = matter(mdx)
//   // const code = await serialize(content, {
//   //   mdxOptions: {
//   //     rehypePlugins: rehypePlugins,
//   //   },
//   // })

//   return <MdxRender code={code} />
// }
