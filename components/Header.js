import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { SlideDown } from 'react-slidedown'
import Headroom from 'react-headroom'
// import 'react-slidedown/lib/slidedown.css'

import ThemeToggle from './ThemeToggle'

export default function Header() {
  // const [isOpen, setOpen] = useState(false)

  return (
    <header>
      {/* top part */}
      <Headroom disableInlineStyles>
        <div className="relative top-0 z-50 py-1 bg-bg/90 backdrop-blur-sm dark:bg-bg-dark/90 lg:mt-0 lg:py-2">
          <div className="max-w-4xl mx-auto">
            <ul className="hidden lg:flex lg:justify-between">
              <li>
                <Link href="/">
                  <a className={`inline-block align-middle no-underline`}>
                    <div className="flex items-center justify-center w-5 h-5 bg-gray-700 rounded-sm hover:bg-black dark:bg-gray-100 dark:hover:bg-white">
                      <span className="text-xs font-medium leading-none tracking-wide text-white uppercase dark:text-black">
                        IP
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <NavLink label="Projects" href="/projects" />
              <NavLink label="Garden" href="/garden" />
              <NavLink label="Articles" href="/articles" />
              <NavLink label="Library" href="/library" />
              <NavLink label="About" href="/about" />
              <li className="inline-block">
                <ThemeToggle />
              </li>
            </ul>

            {/* hamburger menu */}
            {/* <div className="lg:hidden">
          <div
            className={`-mr-3 inline-block align-middle lg:-ml-3 lg:mr-0 ${
              isOpen ? '' : 'closed'
            }`}
          >
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={28}
              label="Show menu"
              rounded
            />
          </div>
        </div> */}

            {/* navigation */}

            {/* <nav className="lg:hidden">
          <SlideDown className={'my-dropdown-slidedown'} closed={!isOpen}>
            <ul className="py-4">
              <NavLink label="Projects" href="/projects" />
              <NavLink label="Articles" href="/articles" />
              <NavLink label="Library" href="/library" />
              <NavLink label="About" href="/about" />
              <li className="inline-block">
                <ThemeToggle />
              </li>
            </ul>
          </SlideDown>
        </nav> */}
          </div>
        </div>
      </Headroom>
    </header>
  )
}

const NavLink = ({ href, label }) => {
  return (
    <li className="">
      <Link href={href}>
        <a className="text-sm font-medium no-underline text-secondary dark:text-secondary-dark hover:text-black dark:hover:text-white">
          {label}
        </a>
      </Link>
    </li>
  )
}
