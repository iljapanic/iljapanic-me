import { allDocuments } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'
import { notFound } from 'next/navigation'

/* custom mdx components */
import Headline from '@/app/components/mdx/headline'
import Image from '@/app/components/mdx/image'
import Figure from '@/app/components/mdx/figure'
import FigureLegacy from '@/app/components/mdx/figure-legacy'
import Quote from '@/app/components/mdx/quote'
import Soundcloud from '@/app/components/mdx/soundcloud'
import VideoPlayer from '@/app/components/mdx/video-player'
import Abstract from '@/app/components/mdx/abstract'

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  // a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: ({ src, alt }) => (
    <Image src={src} alt={alt} width={1200} height={200} />
  ),
  // img: ({ src, alt }) => (<Image src={src} alt={alt} sizes="100vw" style={ 'width': '100%', 'height': 'auto' }  {...props} />),
  // Add a custom component.
  Figure: ({ caption, children }) => (
    <Figure caption={caption}>{children}</Figure>
  ),
  FigureLegacy: ({ src, children }) => (
    <FigureLegacy src={src}>{children}</FigureLegacy>
  ),
  Quote: ({ author, url, children }) => (
    <Quote author={author} url={url}>
      {children}
    </Quote>
  ),
  Soundcloud: ({ url }) => <Soundcloud url={url} />,
  VideoPlayer: ({ url }) => <VideoPlayer url={url} />,
}

export const generateStaticParams = async () =>
  allDocuments.map((post) => ({ slug: post.slug }))

export const generateMetadata = ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  const post = allDocuments.find((post) => post.slug === slug)

  if (post) {
    return { title: post.title }
  }
}

const PostLayout = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = allDocuments.find((post) => post.slug === slug)

  if (post && post.published) {
    const MDXContent = useMDXComponent(post.body.code)
    return (
      <article>
        <Headline
          title={post.title}
          date={post.date}
          subtitle={post.description}
        />

        {post.abstract && (
          <div className="post-wrapper">
            <Abstract abstract={post.abstract} />
          </div>
        )}
        <div className="post">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    )
  } else {
    notFound()
  }
}

export default PostLayout
