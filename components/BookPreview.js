import Image from 'next/image'
import { getIcon } from '../lib/getIcon'

export default function BookPreview({ title, year, cover, authorsArray, url }) {
  const authors = authorsArray.map((author, i, arr) => {
    if (arr.length - 1 === i) {
      return author
    } else {
      return author + ', '
    }
  })

  return (
    <article className="relative transition-all duration-300 ease-in-out hover:scale-105">
      {/* link overlay */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-gray-100/40 text-center no-underline opacity-0 transition-all duration-200 hover:opacity-100"
      >
        <span className="mb-20 inline-flex items-center rounded-lg bg-white/95 py-1 px-4 shadow-lg text-sm">
          View on Goodreads
          {getIcon('externalLink', 'h-4 w-4 ml-2')}
        </span>
      </a>

      <Image
        src={cover.url}
        alt={title + ' (book cover)'}
        layout="responsive"
        width={cover.width}
        height={cover.height}
        placeholder="blur"
        blurDataURL="data:..."
        className="rounded"
      />

      <h3 className="mt-4 mb-0 leading-tight text-base">{title}</h3>
      {/* <span className="text-xs">{year}</span> */}
      <div className="text-xs">{authors}</div>
    </article>
  )
}
