import Headline from '@/app/components/mdx/headline'
import Image from 'next/image'

import gif from '@/public/images/404.gif'

export const metadata = {
  title: '404',
}

export default function NotFound() {
  return (
    <>
      <Headline title="404 – Page Not Found" />
      <article className="post">
        <p>
          You just hit a route that doesn&#39;t seem to exist on this site. I
          may have moved things around during a redesign. I hope you find what
          you are looking for by browsing available sections.
        </p>
        <Image src={gif} alt="404" className="mt-8" />
      </article>
    </>
  )
}
