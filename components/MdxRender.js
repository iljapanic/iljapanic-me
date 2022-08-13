// import Image from 'next/image'
import * as React from 'react'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
// import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'

import Box from './mdx/Box'
import Figure from './mdx/Figure'
import Headline from './Headline'
import Img from './mdx/Img'
import Quote from './mdx/Quote'
import Soundcloud from './mdx/Soundcloud'
import Video from './mdx/Video'
import { Tabs, Tab } from './Tabs'

// function Paragraph({ ...props }) {
//   if (
//     props.children.type === 'image' ||
//     props.children.type === 'imageReference' ||
//     (props.children.type === 'mdxJsxTextElement' &&
//       props.children.name === 'img')
//   ) {
//     return <>{props.children}</>
//   }

//   return <p {...props} />
// }

const components = {
  Figure,
  Headline,
  Quote,
  Soundcloud,
  Tab,
  Tabs,
  Video,
  Img,
  Box,
  img: (props) => (
    <Image
      {...props}
      alt={props.alt}
      layout="responsive"
      className="relative -z-10"
    />
  ),
  // p: Paragraph,
}

export default function MdxRender({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return <Component components={components} />
  // return <MDXRemote {...code} components={components} />
}
