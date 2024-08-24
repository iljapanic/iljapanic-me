'use server'

import { NextResponse } from 'next/server'

export async function GET() {
	// This is a placeholder dummy GET request handler
	return NextResponse.json({ message: 'Hello from the feed sync API!' })
}

// import { NextResponse } from 'next/server'
// import { Client } from 'pg'

// const client = new Client({
// 	user: process.env.FEED_POSTGRES_USER,
// 	host: process.env.FEED_POSTGRES_HOST,
// 	database: process.env.FEED_POSTGRES_DATABASE,
// 	password: process.env.FEED_POSTGRES_PASSWORD,
// 	port: parseInt(process.env.FEED_POSTGRES_PORT || '5432'),
// })

// async function fetchReadwiseData(endpoint: string) {
// 	const response = await fetch(`https://readwise.io/api/v2/${endpoint}`, {
// 		headers: { Authorization: `Token ${process.env.READWISE_ACCESS_TOKEN}` },
// 	})

// 	if (!response.ok) {
// 		const text = await response.text()
// 		throw new Error(
// 			`API request failed: ${response.status} ${response.statusText}\n${text}`,
// 		)
// 	}

// 	const contentType = response.headers.get('content-type')
// 	if (!contentType || !contentType.includes('application/json')) {
// 		const text = await response.text()
// 		throw new Error(
// 			`Expected JSON response but got: ${contentType}\n${text.substring(0, 200)}...`,
// 		)
// 	}

// 	return response.json()
// }

// async function upsertDocument(doc: any) {
// 	// Check if doc.id exists and is not null
// 	if (!doc.id) {
// 		console.warn(`Skipping document with missing or null id: ${doc.title}`)
// 		return null
// 	}

// 	const query = `
//     INSERT INTO documents (
//       readwise_id, title, author, category, source, num_highlights,
//       last_highlight_at, updated, cover_image_url, highlights_url,
//       source_url, asin, document_note
//     ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
//     ON CONFLICT (readwise_id) DO UPDATE SET
//       title = EXCLUDED.title,
//       author = EXCLUDED.author,
//       category = EXCLUDED.category,
//       source = EXCLUDED.source,
//       num_highlights = EXCLUDED.num_highlights,
//       last_highlight_at = EXCLUDED.last_highlight_at,
//       updated = EXCLUDED.updated,
//       cover_image_url = EXCLUDED.cover_image_url,
//       highlights_url = EXCLUDED.highlights_url,
//       source_url = EXCLUDED.source_url,
//       asin = EXCLUDED.asin,
//       document_note = EXCLUDED.document_note
//     RETURNING id;
//   `
// 	const values = [
// 		doc.id,
// 		doc.title,
// 		doc.author,
// 		doc.category,
// 		doc.source,
// 		doc.num_highlights,
// 		doc.last_highlight_at,
// 		doc.updated,
// 		doc.cover_image_url,
// 		doc.highlights_url,
// 		doc.source_url,
// 		doc.asin,
// 		doc.document_note,
// 	]
// 	const result = await client.query(query, values)
// 	return result.rows[0].id
// }

// async function upsertHighlight(highlight: any, documentId: string) {
// 	const query = `
//     INSERT INTO highlights (
//       readwise_id, document_id, text, location, location_type, note,
//       color, highlighted_at, created_at, updated_at, external_id,
//       end_location, url, is_favorite, is_discard, readwise_url
//     ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
//     ON CONFLICT (readwise_id) DO UPDATE SET
//       document_id = EXCLUDED.document_id,
//       text = EXCLUDED.text,
//       location = EXCLUDED.location,
//       location_type = EXCLUDED.location_type,
//       note = EXCLUDED.note,
//       color = EXCLUDED.color,
//       highlighted_at = EXCLUDED.highlighted_at,
//       created_at = EXCLUDED.created_at,
//       updated_at = EXCLUDED.updated_at,
//       external_id = EXCLUDED.external_id,
//       end_location = EXCLUDED.end_location,
//       url = EXCLUDED.url,
//       is_favorite = EXCLUDED.is_favorite,
//       is_discard = EXCLUDED.is_discard,
//       readwise_url = EXCLUDED.readwise_url
//     RETURNING id;
//   `
// 	const values = [
// 		highlight.id,
// 		documentId,
// 		highlight.text,
// 		highlight.location,
// 		highlight.location_type,
// 		highlight.note,
// 		highlight.color,
// 		highlight.highlighted_at,
// 		highlight.created_at,
// 		highlight.updated_at,
// 		highlight.external_id,
// 		highlight.end_location,
// 		highlight.url,
// 		highlight.is_favorite,
// 		highlight.is_discard,
// 		highlight.readwise_url,
// 	]
// 	const result = await client.query(query, values)
// 	return result.rows[0].id
// }

// async function upsertTag(tag: any) {
// 	const tagQuery = `
//     INSERT INTO tags (name) VALUES ($1)
//     ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
//     RETURNING id;
//   `
// 	const tagResult = await client.query(tagQuery, [tag.name])
// 	return tagResult.rows[0].id
// }

// async function linkDocumentTag(documentId: string, tagId: string) {
// 	const docTagQuery = `
//     INSERT INTO document_tags (document_id, tag_id)
//     VALUES ($1, $2)
//     ON CONFLICT (document_id, tag_id) DO NOTHING;
//   `
// 	await client.query(docTagQuery, [documentId, tagId])
// }

// async function linkHighlightTag(highlightId: string, tagId: string) {
// 	const highlightTagQuery = `
//     INSERT INTO highlight_tags (highlight_id, tag_id)
//     VALUES ($1, $2)
//     ON CONFLICT (highlight_id, tag_id) DO NOTHING;
//   `
// 	await client.query(highlightTagQuery, [highlightId, tagId])
// }

// export async function GET() {
// 	try {
// 		await client.connect()
// 		let nextPageCursor = null
// 		do {
// 			const params = new URLSearchParams()
// 			if (nextPageCursor) {
// 				params.append('pageCursor', nextPageCursor)
// 			}

// 			const booksResponse = await fetchReadwiseData(
// 				`export/?${params.toString()}`,
// 			)
// 			nextPageCursor = booksResponse.nextPageCursor

// 			for (const book of booksResponse.results) {
// 				const documentId = await upsertDocument(book)

// 				// Only process tags and highlights if documentId is not null
// 				if (documentId) {
// 					// Handle document tags
// 					for (const tag of book.book_tags) {
// 						const tagId = await upsertTag(tag)
// 						await linkDocumentTag(documentId, tagId)
// 					}

// 					// Process highlights
// 					for (const highlight of book.highlights) {
// 						const highlightId = await upsertHighlight(highlight, documentId)

// 						// Handle highlight tags
// 						if (highlight.tags) {
// 							for (const tag of highlight.tags) {
// 								const tagId = await upsertTag(tag)
// 								await linkHighlightTag(highlightId, tagId)
// 							}
// 						}
// 					}
// 				}
// 			}
// 		} while (nextPageCursor)

// 		return NextResponse.json({ success: true })
// 	} catch (error) {
// 		console.error('Error syncing data:', error)
// 		return NextResponse.json(
// 			{ success: false, error: error.message || 'Internal Server Error' },
// 			{ status: 500 },
// 		)
// 	} finally {
// 		await client.end()
// 	}
// }
