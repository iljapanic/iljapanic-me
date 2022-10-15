// import NextImage from 'next/image'
// import classNames from 'classnames'

export default function Figure({ ...props }) {
  // const imageContainerStyles = classNames('mx-auto', {
  //   'w-3/4': props.size == 'small',
  // })

  return (
    // <NextImage
    //   // {...props}
    //   src={props.src}
    //   layout="responsive"
    //   width={props.width}
    //   height={props.height}
    //   loading="lazy"
    // />

    // <div className={imageContainerStyles}>{props.children}</div>

    <figure className="mx-auto mb-12 mt-12 w-10/12">
      {props.children}
      <figcaption className="-mt-2 text-center italic text-secondary text-sm dark:text-secondary-dark">
        {props.caption}
      </figcaption>
    </figure>
  )
}

// import Image from 'next/image'

// export default function Figure({ src, caption }) {
//   return (
//     <figure className="w-full max-w-full">
//       <Image alt={caption} src={src} layout="fill" />
//       <figcaption className="text-secondary text-center italic">
//         {caption}
//       </figcaption>
//     </figure>
//   )
// }
