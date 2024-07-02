import { fields, singleton } from '@keystatic/core'

export const bookshelfSingleton = singleton({
	label: 'Bookshelf',
	path: 'content/singletons/bookshelf',
	format: { data: 'json' },
	schema: {
		sections: fields.array(
			fields.object({
				sectionTitle: fields.text({ label: 'Section Title' }),
				books: fields.array(
					fields.relationship({
						label: 'Book',
						collection: 'books',
						validation: { isRequired: true },
					}),
					{
						label: 'Books',
						itemLabel: (props) => props.value ?? 'Select a book',
					},
				),
			}),
			{
				label: 'Sections',
				itemLabel: (props) =>
					props.fields.sectionTitle.value || 'Untitled Section',
			},
		),
	},
})
