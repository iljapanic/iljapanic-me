import { fields, collection } from '@keystatic/core'

export const toolsCollection = collection({
	label: 'Tools',
	slugField: 'name',
	format: { data: 'json' },
	columns: ['name'],
	path: 'content/tools/*',
	schema: {
		name: fields.slug({
			name: { label: 'Name', validation: { isRequired: true } },
		}),
		description: fields.text({ label: 'Description' }),
		url: fields.url({ label: 'URL', validation: { isRequired: true } }),
		simpleIconSlug: fields.text({
			label: 'Simple Icon Slug',
			description: 'Icon slug from https://simpleicons.org',
		}),
		type: fields.multiselect({
			label: 'Type',
			options: [
				{ label: 'Web', value: 'web' },
				{ label: 'Mac', value: 'mac' },
				{ label: 'iOS', value: 'ios' },
				{ label: 'Chrome', value: 'chrome' },
			],
			defaultValue: ['web'],
		}),
		icon: fields.image({
			label: 'Icon',
			directory: 'public/images/tools',
			publicPath: '/images/tools/',
		}),
	},
})
