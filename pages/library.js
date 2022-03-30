import Layout from '../components/Layout'
import Headline from '../components/Headline'
import BooksGrid from '../components/BooksGrid'
import BookPreview from '../components/BookPreview'

import { getBooks } from '../lib/getBooks'

export default function Library({ booksNonFiction, booksFiction }) {
  // console.log(booksAll)

  return (
    <Layout title="Library" wrapped={false}>
      <div className="wrap">
        <Headline
          title="Library"
          summary="Books that have shaped my thinking over the years"
        />
      </div>
      <section>
        <h2 className="wrap text-center">Non-fiction</h2>

        <BooksGrid className="mt-20">
          {booksNonFiction.map((book, _idx) => {
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

        <hr className="wrap" />

        <h2 className="wrap text-center">Fiction</h2>

        <BooksGrid className="mt-20">
          {booksFiction.map((book, _idx) => {
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
  const booksNonFiction = await getBooks('non-fiction')
  const booksFiction = await getBooks('fiction')

  return { props: { booksNonFiction, booksFiction } }
}
