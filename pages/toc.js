import Layout from '../components/Layout'
import Link from 'next/link'

import { getAllFrontmatter } from '../lib/mdx'

export default function TOC({ articles, notes, courses, projects, talks }) {
  return (
    <>
      <Layout title="Table of Contents">
        <section>
          <h2 className="mt-4 text-2xl">Articles</h2>
          {articles.map((item, _idx) => {
            return (
              <TocItem
                key={item.slug}
                title={item.title}
                published={item.published}
                updated={item.updated}
                href={`/articles/${item.slug}`}
              />
            )
          })}
        </section>
        <section>
          <h2 className="mt-4 text-2xl">Notes</h2>
          {notes.map((item, _idx) => {
            return (
              <TocItem
                key={item.slug}
                title={item.title}
                published={item.published}
                updated={item.updated}
                href={`/garden/${item.slug}`}
              />
            )
          })}
        </section>
        <section>
          <h2 className="mt-4 text-2xl">Projects</h2>
          {projects.map((item, _idx) => {
            return (
              <TocItem
                key={item.slug}
                title={item.title}
                published={item.published}
                updated={item.updated}
                href={`/projects/${item.slug}`}
              />
            )
          })}
        </section>
        <section>
          <h2 className="mt-8 text-2xl">Talks</h2>
          {talks.map((item, _idx) => {
            return (
              <TocItem
                key={item.slug}
                title={item.title}
                published={item.published}
                updated={item.updated}
                href={`/talks/${item.slug}`}
              />
            )
          })}
        </section>
        <section>
          <h2 className="mt-8 text-2xl">Courses</h2>
          {courses.map((item, _idx) => {
            return (
              <TocItem
                key={item.slug}
                title={item.title}
                published={item.published}
                updated={item.updated}
                href={`/courses/${item.slug}`}
              />
            )
          })}
        </section>
      </Layout>
    </>
  )
}

const TocItem = ({ title, published, updated, href }) => (
  <li className="list-none">
    <h3>
      <Link href={href} passHref>
        <a>{title}</a>
      </Link>
    </h3>
    <div className="meta">
      <span>{published}</span>
      <span>{updated}</span>
    </div>
  </li>
)

export async function getStaticProps() {
  const notes = await getAllFrontmatter('notes', 'title')
  const courses = await getAllFrontmatter('courses', 'title')
  const projects = await getAllFrontmatter('projects', 'title')
  const talks = await getAllFrontmatter('talks', 'title')
  const articles = await getAllFrontmatter('articles', 'title')

  return { props: { articles, notes, courses, projects, talks } }
}
