import React from 'react'
import { v4 } from 'uuid'
import Image from 'next/image'

interface BookProps {
  title: string
  year: number
  authors: string[]
  url: string
  coverFilename: string
}

export default async function Book({
  title,
  year,
  coverFilename,
  authors,
  url,
}: BookProps) {
  const imageSrc = await import(`@/public/images/books/${coverFilename}`)
  return (
    <article className="group">
      <a href={url} target="_blank" rel="noreferrer" className="no-underline">
        <div>
          <Image
            src={imageSrc}
            alt={title}
            placeholder="blur"
            className="w-full opacity-80 saturate-[0.75] transition-all duration-300 group-hover:opacity-100 group-hover:saturate-100 dark:saturate-[0.6]"
          />
        </div>
        {/* <div>{year}</div> */}
        <h3 className="mb-1 mt-1.5 leading-tight text-secondary text-xs">
          {title}
        </h3>

        {/* authors */}
        <div className="font-sans text-tertiary text-xs">
          {authors.map((author, index) => {
            const isLastAuthor = index === authors.length - 1
            return (
              <React.Fragment key={v4()}>
                {author}
                {!isLastAuthor && ', '}
              </React.Fragment>
            )
          })}
        </div>
      </a>
    </article>
  )
}
