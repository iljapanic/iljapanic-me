import Layout from '../components/Layout'
import Headline from '../components/Headline'
import BooksGrid from '../components/BooksGrid'
import BookPreview from '../components/BookPreview'

import { getBooks } from '../lib/getBooks'

export default function Library({ booksAll }) {
  console.log(booksAll)

  return (
    <Layout title="Library" wrapped={false}>
      <div className="wrap">
        <Headline
          title="Library"
          summary="Books that have shaped my thinking over the years"
        />
      </div>
      <section>
        <h2 className="wrap">Non-fiction</h2>

        <BooksGrid className="mt-12">
          {booksAll.map((book, _idx) => {
            return (
              <BookPreview
                key={book.id}
                title={book.title}
                year={book.year}
                authorsArray={book.authorsArray}
                url={book.url}
                coverUrl={book.coverUrl}
                cover={book.cover}
              />
            )
          })}
        </BooksGrid>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const booksAll = await getBooks()

  return { props: { booksAll } }
}
