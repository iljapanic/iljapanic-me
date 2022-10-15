import Airtable from 'airtable'

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
})
const base = airtable.base(process.env.AIRTABLE_LIBRARY_BASE)

export async function getBooks(category = 'all') {
  let view

  if (category == 'non-fiction') {
    view = 'publishedNonFiction'
  } else if (category == 'fiction') {
    view = 'publishedFiction'
  } else if (category == 'all') {
    view = 'publishedAll'
  }

  const records = await base('books')
    .select({
      view: view,
    })
    .all()

  const books = records.map((book) => {
    const coverImage = book.get('cover').map((image) => image)[0]

    return {
      id: book.getId(),
      title: book.get('title') || null,
      year: book.get('year') || null,
      coverUrl: coverImage.thumbnails.large.url || null,
      cover: {
        url: coverImage.thumbnails.large.url,
        width: coverImage.thumbnails.large.width,
        height: coverImage.thumbnails.large.height,
      },
      authorsArray: book.get('authors') || null,
      url: book.get('goodreads') || null,
    }
  })

  return books
}
