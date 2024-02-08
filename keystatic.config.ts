// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    tools: collection({
      label: 'Tools',
      slugField: 'name',
      path: 'content/tools/*',
      format: {
        data: 'json',
        contentField: 'description',
      },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        description: fields.document({
          label: 'Description',
        }),
      },
    }),
    // posts: collection({
    //   label: 'Posts',
    //   slugField: 'title',
    //   path: 'content/posts/*',
    //   format: {
    //     // data: 'json',
    //     contentField: 'content',
    //   },
    //   schema: {
    //     title: fields.slug({ name: { label: 'Title' } }),
    //     content: fields.document({
    //       label: 'Content',
    //       formatting: true,
    //       dividers: true,
    //       links: true,
    //       images: true,
    //     }),
    //   },
    // }),
  },
})
