import Airtable from 'airtable'

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
})

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_LIBRARY_BASE)

// Get all published records for given table
const booksNonFiction = base('Books')
  .select({ view: 'publishedNonFiction' })
  .all()
const booksFiction = base('Books').select({ view: 'publishedFiction' }).all()

// To get minified records array
const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record))

// to make record meaningful.
const getMinifiedItem = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  }
}

export { base, booksNonFiction, booksFiction, minifyItems, getMinifiedItem }
