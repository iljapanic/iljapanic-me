// keystatic.config.ts
import { config } from '@keystatic/core'
import { booksCollection } from '@/schema/keystatic/books-collection'
import { toolsCollection } from '@/schema/keystatic/tools-collection'
import { bookshelfSingleton } from '@/schema/keystatic/bookshelf-singleton'
import { toolboxSingleton } from '@/schema/keystatic/toolbox-singleton'

export default config({
	storage: {
		kind: 'local',
	},
	ui: {
		brand: { name: 'iljapanic' },
	},
	collections: {
		tools: toolsCollection,
		books: booksCollection,
	},
	singletons: {
		bookshelf: bookshelfSingleton,
		toolbox: toolboxSingleton,
	},
})
