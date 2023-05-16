import Book from '@/app/components/book'

import { booksNonFiction, minifyItems } from '@/lib/airtable'
import Headline from '../components/mdx/headline'

export const metadata = {
  title: 'Bookshelf',
}

export default async function BookshelfPage() {
  const nonFiction = await booksNonFiction

  return (
    <div>
      <div className="post-wrapper mx-auto">
        <Headline
          title="Bookshelf"
          subtitle="The books that shaped my world view"
        />
      </div>
      <section className="post-wider-wrapper mx-auto mt-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {minifyItems(nonFiction).map((book: any) => {
            const id = book.id
            const title = book.fields.title
            const year = book.fields.year
            const authors = book.fields.people_lookup
            const url = book.fields.goodreads
            const cover = {
              url: book.fields.cover[0].url,
              width: book.fields.cover[0].width,
              height: book.fields.cover[0].height,
            }

            return (
              <Book
                key={id}
                title={title}
                year={year}
                authors={authors}
                cover={cover}
                url={url}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
