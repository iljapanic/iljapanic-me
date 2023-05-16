import { allDocuments } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'

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

interface MetaObject {
  title: string | undefined
  description?: string
  keywords?: string
  openGraph: {
    title: string | undefined
    type: string
    description?: string
    publishedTime?: string
  }
}

export const generateMetadata = ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  const post = allDocuments.find((post) => post.slug === slug)

  if (post) {
    let metaObject: MetaObject = {
      title: post.title,
      openGraph: {
        title: post.title,
        type: 'article',
      },
    }

    if (post.description) {
      metaObject['description'] = post.description
      metaObject['openGraph']['description'] = post.description
    }

    if (post.keywords) {
      metaObject['keywords'] = post.keywords.join(', ')
    }

    if (post.date) {
      metaObject['openGraph']['publishedTime'] = post.date
    }

    return metaObject
  }
}

const PostLayout = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = allDocuments.find((post) => post.slug === slug)

  let postCode = ''

  if (post) {
    postCode = post.body.code
  }

  const MDXContent = useMDXComponent(postCode)

  if (post && post.published) {
    let title: string = post.title || ''
    return (
      <article className="post-wrapper mx-auto">
        {post.type === 'Article' && (
          <Headline
            title={title}
            date={post.date}
            subtitle={post.description}
            // affiliation={post.affiliation}
          />
        )}

        {post.type === 'Note' && <Headline title={title} date={post.date} />}

        {post.type === 'Page' && (
          <Headline title={title} subtitle={post.description} />
        )}

        {post.type === 'Article' && post.abstract && (
          <div>
            <Abstract abstract={post.abstract} />
            {post.affiliation && (
              <div className="mt-4 font-sans text-tertiary text-sm">
                Written at <span>{post.affiliation}</span>
              </div>
            )}
            <hr />
          </div>
        )}
        <div className="post">
          <MDXContent components={mdxComponents} />
        </div>

        {post.dateUpdated && (
          <footer className="mt-12">
            <div className="font-sans text-tertiary text-sm">
              This page was updated on{' '}
              <time dateTime={post.dateUpdated} className="">
                {format(parseISO(post.dateUpdated), 'LLLL d, yyyy')}
              </time>
            </div>
          </footer>
        )}
      </article>
    )
  } else {
    notFound()
  }
}

export default PostLayout
