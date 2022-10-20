import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import m2dx from 'astro-m2dx'
import { astroImageTools } from 'astro-imagetools'
import AutoImport from 'astro-auto-import'
// import remarkMark from 'remark-mark-plus'

const m2dxOptions = {
  relativeImages: true,
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        './src/components/mdx/Figure.astro',
        './src/components/mdx/Quote.astro',
        './src/components/mdx/Soundcloud.astro',
        {
          'astro-embed': ['Tweet', 'YouTube', 'Vimeo'],
        },
      ],
    }),
    mdx(),
    astroImageTools,
  ],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    extendDefaultPlugins: true,
  },
})
