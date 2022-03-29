import Image from 'next/image'

export default function Figure({ src, caption }) {
  return (
    <figure className="w-full max-w-full">
      <Image alt={caption} src={src} layout="fill" />
      <figcaption className="text-secondary text-center italic">
        {caption}
      </figcaption>
    </figure>
  )
}
