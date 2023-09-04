// contentlayer.config.js
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkPrism from 'remark-prism'
import remarkGfm from 'remark-gfm'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    abstract: {
      type: 'string',
      description: 'The abstract for the article',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    dateUpdated: {
      type: 'date',
      description: 'The date the post was last updated',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug for generating post URL',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      required: false,
    },
    affiliation: {
      type: 'string',
      required: false,
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post.slug}`,
    },
  },
}))

export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `notes/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    dateUpdated: {
      type: 'date',
      description: 'The date the post was last updated',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug for generating post URL',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      required: false,
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post.slug}`,
    },
  },
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: false,
    },
    slug: {
      type: 'string',
      description: 'The slug for generating page URL',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      required: false,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date the post was created',
      required: false,
    },
    dateUpdated: {
      type: 'date',
      description: 'The date the post was last updated',
      required: true,
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post.slug}`,
    },
  },
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  contentDirExclude: ['pages/_drafts', 'notes/_drafts', 'articles/_drafts'],
  documentTypes: [Article, Note, Page],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
    remarkPlugins: [
      remarkGfm,
      [
        remarkPrism,
        {
          plugins: [
            'autolinker',
            // 'command-line',
            // 'data-uri-highlight',
            // 'diff-highlight',
            'inline-color',
            'keep-markup',
            'line-numbers',
            'show-invisibles',
            // 'treeview',
          ],
        },
      ],
    ],
  },
})

export default contentLayerConfig
