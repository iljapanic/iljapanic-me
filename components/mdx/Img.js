// import NextImage from 'next/image'
import classNames from 'classnames'

export default function Img({ ...props }) {
  const imageContainerStyles = classNames('mx-auto', {
    'w-3/4': props.size == 'small',
  })

  return (
    // <NextImage
    //   // {...props}
    //   src={props.src}
    //   layout="responsive"
    //   width={props.width}
    //   height={props.height}
    //   loading="lazy"
    // />

    <div className={imageContainerStyles}>{props.children}</div>
  )
}
