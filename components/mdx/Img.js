import NextImage from 'next/image'

export default function Img({ ...props }) {
  return (
    <NextImage
      // {...props}
      src={props.src}
      layout="responsive"
      width={props.width}
      height={props.height}
      loading="lazy"
    />
  )
}
