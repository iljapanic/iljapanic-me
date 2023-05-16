import React from 'react'
import { v4 } from 'uuid'
import Image from 'next/image'

interface BookProps {
  title: string
  year: number
  authors: string[]
  url: string
  cover: {
    url: string
    width: number
    height: number
  }
}

const Book: React.FC<BookProps> = ({ title, year, authors, cover, url }) => {
  return (
    <article className="group">
      <a href={url} target="_blank" rel="noreferrer" className="no-underline">
        <div>
          <Image
            src={cover.url}
            width={cover.width}
            height={cover.height}
            alt={title}
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

export default Book
