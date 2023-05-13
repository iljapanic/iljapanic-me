// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article, Note, Page],
})
