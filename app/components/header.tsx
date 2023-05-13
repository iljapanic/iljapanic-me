'use client'

import { useState, useRef, useMemo } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { cn } from '@/lib/utils'
import { useElementSize } from '@/hooks/useElementSize'

/* show scroll debugger */
import { createPortal } from 'react-dom'
const showDebugger = true

/* links */
const links = [
  { href: '/articles', label: 'Articles' },
  { href: '/notes', label: 'Notes' },
  { href: '/bookshelf', label: 'Bookshelf' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  /* mobile hamburger toggle */
  const [isMenuOpen, setMenuOpen] = useState(false)

  /* scroll direction */
  const [scrollDirection, setScrollDirection] = useState()
  const scrollDirectionOffset = 50

  /* secondary header */
  const [secondaryHeader, setSecondaryHeader] = useState(false)
  const secondaryHeaderTreshold = 20

  /* scroll references */
  const positionsStore = PositionStore()
  const viewportRef = useRef<HTMLDivElement>(null)

  /* header height */
  const [headerRef, { height: headerHeight }] = useElementSize()
  const headerOffset = scrollDirection === 'down' ? -headerHeight : 0

  const showSecondaryHeader =
    scrollDirection === 'up' && positionsStore.getViewportY() > 100
      ? true
      : false

  // const headerPosition = useRef({ x: 10, y: 150 })
  // const viewportPosition = useRef({ x: 0, y: 0 })
  // let throttleTimeout = null

  // const [windowYOffset, setWindowYOffset] = useState(0)
  // const [expandedHeight, setExpandedHeight] = useState(0)

  // const scrollDirection = useScrollDirection()
  // const {scrollDirection} = useScrollDirection()

  /* Viewport scroll position */
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)
      setSecondaryHeader(
        positionsStore.getViewportY() > secondaryHeaderTreshold,
      )
    },
    [positionsStore],
    null,
    true,
  )

  /* Header scroll position */
  useScrollPosition(
    ({ currPos }) => positionsStore.setHeaderPosition(currPos),
    [],
    headerRef,
    false,
    300,
  )

  /* scroll direction */
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const direction = currPos.y > prevPos.y ? 'up' : 'down'

      if (
        currPos.y - prevPos.y > scrollDirectionOffset ||
        currPos.y - prevPos.y < -scrollDirectionOffset
      ) {
        setScrollDirection(direction)
      }
    },
    [scrollDirection],
    false,
    false,
    300,
  )

  return useMemo(
    () => (
      <header
        ref={headerRef}
        className={
          cn(
            '' /* default positioning */,
            'bg-bg bg-opacity-80 backdrop-blur transition-all duration-500',
            showSecondaryHeader && 'sticky top-0 z-30',
            // showSecondaryHeader: 'bg-red-200'
            // secondaryHeader && 'shadow' /* secondary header */,
          )
          // 'sticky z-20 bg-bg bg-opacity-80 py-6 backdrop-blur transition-all duration-500 lg:py-12',
          // secondaryHeader ? 'py-2 shadow lg:py-3' : '',
          // headerBgStyles,
          // 'h-20 lg:h-32',
          // scrollDirection === 'up' ?? 'py-2',
          // isMenuOpen ? 'h-auto' : 'top-0 h-20',
          // 'top-0',
        }
        // style={{ top: `${headerOffset}px` }}
      >
        <nav className="container py-8">
          <div className="flex items-center justify-between">
            <NavLink href="/" className="font-medium text-secondary">
              Ilja Panić
            </NavLink>

            {/* MOBILE nav trigger */}
            <div className="text-secondary lg:hidden">
              <Hamburger
                toggled={isMenuOpen}
                toggle={setMenuOpen}
                size={24}
                label="Show menu"
                onToggle={(toggled) => {
                  if (toggled) {
                  } else {
                    // close a menu
                  }
                }}
              />
            </div>

            {/* DESKTOP nav */}
            <ul className="hidden lg:flex lg:items-center lg:gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* end main nav section */}

          {/* MOBILE nav */}
          <div className="lg:hidden">
            <ul className={cn(isMenuOpen ? 'block' : 'hidden')}>
              {links.map(({ href, label }) => (
                <li key={href} className="mb-2">
                  <NavLink href={href} setMenuOpen={setMenuOpen}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* scroll debugger */}
        {/* {createPortal(
    <p>This child is placed in the document body.</p>,
    document.body
  )} */}
        {showDebugger &&
          createPortal(
            <div className="fixed bottom-4 right-4 z-20 border-2 border-white bg-gray-900 p-4 font-mono text-white text-sm">
              <div>Viewport Y: {positionsStore.getViewportY()}</div>
              <br />
              <div>Scroll direction: {scrollDirection}</div>
              <br />
              <div>Header Y: {positionsStore.getHeaderY()}</div>
              <div>Header height: {headerHeight}</div>
              <div>Header secondary: {String(secondaryHeader)}</div>
            </div>,
            document.body,
          )}
      </header>
    ),
    [positionsStore],
  )
}

function NavLink({
  href,
  children,
  className,
  setMenuOpen,
}: {
  href: string
  children: React.ReactNode
  className?: string
  setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const segment = useSelectedLayoutSegment()
  const isActive = href.replace(/\//g, '') === segment

  return (
    <Link
      href={href}
      className={cn(
        'font-sans text-tertiary no-underline text-sm hover:text-secondary',
        isActive && 'border-b text-primary',
        className,
      )}
      onClick={() => setMenuOpen && setMenuOpen(false)}
    >
      {children}
    </Link>
  )
}

type PositionType = { x: number; y: number }

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0)
  const elementPosition = useRef<PositionType>({ x: 0, y: 0 })
  const viewportPosition = useRef<PositionType>({ x: 0, y: 0 })
  let throttleTimeout: ReturnType<typeof setTimeout> | null = null

  const getPos = (
    el: React.MutableRefObject<PositionType>,
    axis: keyof PositionType,
  ) => Math.round(el.current[axis])

  const setPos = (
    el: React.MutableRefObject<PositionType>,
    pos: PositionType,
  ) => {
    el.current = pos
    if (throttleTimeout !== null) return
    // Only re-render the component every 0.3s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
  }

  return {
    getHeaderX: () => getPos(elementPosition, 'x'),
    getHeaderY: () => getPos(elementPosition, 'y'),
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    setHeaderPosition: (pos: PositionType) => setPos(elementPosition, pos),
    setViewportPosition: (pos: PositionType) => setPos(viewportPosition, pos),
    renderCount,
  }
}
