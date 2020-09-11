import React, { useRef, useEffect } from 'react'
import { annotate } from 'rough-notation/lib/rough-notation'

const Notation = ({
  children,
  type = 'underline',
  animate = true,
  color = 'currentColor',
}) => {
  let elementRef = useRef()

  useEffect(() => {
    const show = () => {
      const annotation = annotate(elementRef.current, {
        type: type,
        animate: animate,
        color: color,
      })
      return annotation.show()
    }
    return show
  }, [type, animate, color])
  return (
    <span key="whatever" ref={elementRef}>
      {children}
    </span>
  )
}

export default Notation
