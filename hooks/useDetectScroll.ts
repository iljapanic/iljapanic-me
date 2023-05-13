import { useState, useEffect } from 'react'

interface ScrollProps {
  thr?: number
  axis?: 'x' | 'y'
  scrollUp?: string
  scrollDown?: string
  still?: string
}

export function useDetectScroll(props: ScrollProps): [string] {
  const {
    thr = 0,
    axis = 'y',
    scrollUp = axis === 'y' ? 'up' : 'left',
    scrollDown = axis === 'y' ? 'down' : 'right',
    still = 'still',
  } = props
  const [scrollDir, setScrollDir] = useState<string>(still)

  useEffect(() => {
    const threshold = thr > 0 ? thr : 0
    let ticking = false
    let lastScroll: number | undefined

    axis === 'y'
      ? (lastScroll = window.pageYOffset)
      : (lastScroll = window.pageXOffset)

    const updateScrollDir = () => {
      let scroll: number | undefined

      axis === 'y'
        ? (scroll = window.pageYOffset)
        : (scroll = window.pageXOffset)

      if (Math.abs(scroll! - lastScroll!) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scroll! > lastScroll! ? scrollDown : scrollUp)
      lastScroll = scroll! > 0 ? scroll : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return [scrollDir]
}
