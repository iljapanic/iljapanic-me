// import Image from 'next/image'
import * as React from 'react'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import Figure from './mdx/Figure'
import Headline from './Headline'
import Image from './mdx/Image'
import Quote from './mdx/Quote'
import Soundcloud from './mdx/Soundcloud'
import Tabs from './Tabs'
import Video from './mdx/Video'

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
  Tabs,
  Video,
  // Image
  // p: Paragraph,
  // img: (props) => <Image {...props} />,
}

export default function MdxRender({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return <Component components={components} />
}
