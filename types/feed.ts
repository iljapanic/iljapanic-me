export type Document = {
	id: string
	readwise_id: number
	title: string
	author: string | null
	category: string | null
	source: string | null
	num_highlights: number | null
	last_highlight_at: Date | null
	updated: Date | null
	cover_image_url: string | null
	highlights_url: string | null
	source_url: string | null
	asin: string | null
	document_note: string | null
}

export type Highlight = {
	id: string
	readwise_id: number
	document_id: string
	text: string
	location: number | null
	location_type: string | null
	note: string | null
	color: string | null
	highlighted_at: Date | null
	created_at: Date | null
	updated_at: Date | null
	external_id: string | null
	end_location: number | null
	url: string | null
	is_favorite: boolean | null
	is_discard: boolean | null
	readwise_url: string | null
}

export type Tag = {
	id: string
	name: string
}

export type DocumentTag = {
	document_id: string
	tag_id: string
}

export type HighlightTag = {
	highlight_id: string
	tag_id: string
}
