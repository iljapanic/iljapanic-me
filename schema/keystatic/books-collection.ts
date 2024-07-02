import { fields, collection } from '@keystatic/core'

export const booksCollection = collection({
	label: 'Books',
	slugField: 'title',
	columns: ['title'],
	format: { data: 'json' },
	path: 'content/books/*',
	schema: {
		title: fields.slug({
			name: { label: 'Title', validation: { isRequired: true } },
		}),
		url: fields.url({ label: 'URL', validation: { isRequired: true } }),
		cover: fields.image({
			label: 'Cover',
			directory: 'public/images/books',
			publicPath: '/images/books/',
		}),
		author: fields.text({ label: 'Author' }),
		keywords: fields.array(
			fields.text({ label: 'Keyword' }),
			// Labelling options
			{
				label: 'Keyword',
				itemLabel: (props) => props.value,
			},
		),
	},
})
