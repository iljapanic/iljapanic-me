import Book from '@/app/components/book'

import { booksNonFiction, booksFiction, minifyItems } from '@/lib/airtable'
import Headline from '../components/mdx/headline'

export const metadata = {
  title: 'Bookshelf',
}

export default async function BookshelfPage() {
  const nonFiction = await booksNonFiction
  const fiction = await booksFiction

  return (
    <div>
      <div className="post-wrapper mx-auto">
        <Headline
          title="Bookshelf"
          subtitle="The books that shaped my world view"
        />
      </div>

      <div className="post-wider-wrapper mx-auto mt-16">
        <section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {minifyItems(nonFiction).map((book: any) => {
              const id = book.id
              const title = book.fields.title
              const year = book.fields.year
              const authors = book.fields.people_lookup
              const url = book.fields.goodreads
              const coverFilename = book.fields.cover_filename

              return (
                <Book
                  key={id}
                  title={title}
                  year={year}
                  authors={authors}
                  url={url}
                  coverFilename={coverFilename}
                />
              )
            })}
          </div>
        </section>
        <section className="mt-40 ">
          <h2 className="sr-only">Fiction</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {minifyItems(fiction).map((book: any) => {
              const id = book.id
              const title = book.fields.title
              const year = book.fields.year
              const authors = book.fields.people_lookup
              const url = book.fields.goodreads
              const coverFilename = book.fields.cover_filename

              return (
                <Book
                  key={id}
                  title={title}
                  year={year}
                  authors={authors}
                  url={url}
                  coverFilename={coverFilename}
                />
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
