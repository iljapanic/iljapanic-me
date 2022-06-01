import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview'
import Headline from '../components/Headline'
import { getAllFrontmatter } from '../lib/mdx'
import Box from '../components/mdx/Box'

export default function Projects({ projects }) {
  return (
    <section>
      <Layout title="Projects">
        <Headline
          title="Projects"
          summary="An incomplete list of various personal initiatives, one-off projects and experiments"
        />

        {projects
          .filter((project) => project.status == 'active')
          .map((item, _idx) => {
            return (
              <ProjectPreview
                key={item.slug}
                title={item.title}
                size="full"
                cover={item.cover}
                date={item.publishedOn}
                year={item.year}
                summary={item.summary}
                externalUrl={item.url}
              />
            )
          })}

        <h2>Experiments & One-offs</h2>

        <p>
          Some of the projects were created as a part of course assignments.
          Most were spontanious creations born out of a moment. Some are dormant
          and I would love to revisit them at some point in the future.
        </p>

        <Box>
          If you are interested in my professional portfolio message me at{' '}
          <a href="mailto:hello@iljapanic.com" target="_blank" rel="noreferrer">
            hello@iljapanic.com
          </a>
          .
        </Box>

        {projects
          .filter((project) => project.status != 'active')
          .map((item, _idx) => {
            return (
              <ProjectPreview
                key={item.slug}
                title={item.title}
                size="small"
                cover={item.cover}
                date={item.publishedOn}
                year={item.year}
                summary={item.summary}
                externalUrl={item.url}
              />
            )
          })}
      </Layout>
    </section>
  )
}

export async function getStaticProps() {
  const projects = await getAllFrontmatter('projects', 'order')

  return {
    props: {
      projects,
    },
  }
}
