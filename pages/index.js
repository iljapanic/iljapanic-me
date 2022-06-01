import Layout from '../components/Layout'
import Headline from '../components/Headline'
import PostWrapper from '../components/PostWrapper'
import MdxRender from '../components/MdxRender'
import { getMdx } from '../lib/mdx'

export default function Index({ mdx }) {
  return (
    <>
      <Layout>
        <PostWrapper>
          <Headline
            title={'Hi there'}
            summary="I’m Ilja and I help people and organizations understand technology"
          />
          <MdxRender code={mdx} />
        </PostWrapper>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const mdx = await getMdx(
    `
    I'm a multi-disciplinary designer making web applications and researching the cultural impacts of emergent technologies. I'm fascinated with cybernetics, inter-species interfaces, and ways of bridging natural and technological systems. I dabble with 3D printing, robotics, parametric design, no-code workflows, and various tools for thought.

    Head over to [about](./about/) to learn more about my background and what I do. Take a look at my [virtual bookshelf](./library/) or read [articles and essays](./articles/) I wrote over the course of various studies.

    I have a few new sections coming up to this site. Drop your email below and I will let you know when they are live.

    [🇨🇿 Chci to česky](./cz/)
    `,
  )

  return { props: { mdx } }
}
