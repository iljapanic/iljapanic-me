import { fields, singleton } from '@keystatic/core'

export const toolboxSingleton = singleton({
	label: 'Toolbox',
	path: 'content/singletons/toolbox',
	format: { data: 'json' },
	schema: {
		sections: fields.array(
			fields.object({
				sectionTitle: fields.text({ label: 'Section Title' }),
				tools: fields.array(
					fields.relationship({
						label: 'Tool',
						collection: 'tools',
						validation: { isRequired: true },
					}),
					{
						label: 'Tools',
						itemLabel: (props) => props.value ?? 'Select a tool',
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
