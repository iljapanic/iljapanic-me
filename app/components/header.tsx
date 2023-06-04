'use client'

import { useState, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import useSize from '@react-hook/size'

import ThemeToggle from '@/app/theme/theme-toggle'
import { cn } from '@/lib/utils'

/* show scroll debugger */
// import { createPortal } from 'react-dom'
// const showDebugger = true

/* links */
const links = [
  { href: '/articles', label: 'Articles' },
  // { href: '/notes', label: 'Notes' },
  { href: '/bookshelf', label: 'Bookshelf' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  /* active tab */
  const segment = useSelectedLayoutSegment()
  let [activeTab, setActiveTab] = useState(`/${segment}`)

  /* mobile hamburger toggle */
  const [isMenuOpen, setMenuOpen] = useState(false)

  /* scroll direction */
  const [scrollDirection, setScrollDirection] = useState<string | undefined>(
    undefined,
  )
  const scrollDirectionOffset = 40

  /* secondary header */
  const [secondaryHeader, setSecondaryHeader] = useState(false)
  const secondaryHeaderTreshold = 20

  /* scroll references */
  const positionsStore = PositionStore()

  /* header height */
  const headerRef = useRef<HTMLElement | null>(null)
  const [, headerHeight] = useSize(headerRef)
  const headerOffset = scrollDirection === 'down' ? -headerHeight : 0

  const showSecondaryHeader =
    scrollDirection === 'up' && positionsStore.getViewportY() > 100
      ? true
      : false

  /* Viewport scroll position */
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)
      setSecondaryHeader(
        positionsStore.getViewportY() > secondaryHeaderTreshold,
      )
    },
    [positionsStore],
    undefined,
    true,
  )

  /* Header scroll position */
  useScrollPosition(
    ({ currPos }) => positionsStore.setHeaderPosition(currPos),
    [],
    headerRef as React.MutableRefObject<HTMLElement>,
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
    undefined,
    false,
    300,
  )

  return useMemo(
    () => (
      <header
        ref={headerRef}
        className={cn(
          'sticky z-30' /* default positioning */,
          'bg-bg bg-opacity-80 backdrop-blur transition-[top] duration-500',
          showSecondaryHeader && 'shadow',
        )}
        style={{ top: `${headerOffset}px` }}
      >
        <nav className="container mt-2 py-2 lg:mt-8 lg:py-1">
          <div className="post-wrapper mx-auto">
            {/* header row 1 */}
            <div className="flex items-center justify-between">
              <NavLink href="/" className="">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-sm bg-bg-secondary text-xs"
                  onClick={() => setActiveTab('')}
                >
                  IP
                </div>
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
                {/* {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => setActiveTab(link.href)}
                    className={`${
                      activeTab === link.href ? '' : 'hover:text-white/60'
                    } relative rounded-full px-3 py-1.5 font-medium text-white outline-sky-400 transition text-sm focus-visible:outline-2`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {activeTab === link.href && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-white mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {link.label}
                  </button>
                ))} */}

                {links.map(({ href, label }) => (
                  <li
                    key={href}
                    onClick={() => setActiveTab(href)}
                    className={cn('relative block leading-none transition')}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    <Link
                      href={href}
                      className={cn(
                        'relative z-20 block font-sans leading-none no-underline transition-none text-sm',
                        activeTab === href
                          ? 'text-primary'
                          : 'text-secondary hover:text-primary',
                      )}
                    >
                      {label}
                    </Link>
                    {activeTab === href && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute -bottom-0.5 left-0 z-10 h-0.5 w-full bg-dim"
                        // style={{ borderRadius: 2 }}
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </li>
                ))}
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
            {/* end main nav section */}

            {/* MOBILE nav */}
            <div className={cn(isMenuOpen ? 'block' : 'hidden')}>
              <div>
                <ul className="flex items-center gap-6 pb-1">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <NavLink href={href} setMenuOpen={setMenuOpen}>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <ThemeToggle />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* {showDebugger &&
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
          )} */}
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
        'font-sans text-tertiary no-underline text-sm hover:text-primary',
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
