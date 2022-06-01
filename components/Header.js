import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import ThemeToggle from './ThemeToggle'
import { route } from 'next/dist/server/router'

export default function Header({ title, className }) {
  const router = useRouter()
  const path = router.pathname
  const [isOpen, setOpen] = useState(false)
  const isHome = path == '/'

  const Breadcrumb = () => {
    if (path.includes('articles')) {
      return <BreadcrumbLink href="/articles" label="Articles" />
    } else {
      return ''
    }
  }

  console.log(router.pathname)

  return (
    <header
      className={`sticky top-0 z-50 mt-4 bg-bg/90 py-1 backdrop-blur-sm dark:bg-bg-dark/90 lg:mt-12 lg:py-2 ${className}`}
    >
      {/* top part */}

      <div className="grid grid-cols-2 items-center gap-4 lg:ml-2 lg:grid-cols-wrap ">
        {/* icon */}
        <div className="lg:text-right">
          <div>
            <Link href="/">
              <a className={`inline-block align-middle no-underline`}>
                <div className="flex h-7 w-7 items-center justify-center bg-black dark:bg-white ">
                  <span className="font-medium uppercase leading-none tracking-wide text-white text-sm dark:text-black">
                    IP
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>

        {/* title */}
        <div className="mt-1 hidden leading-none lg:block">
          {title && (
            <span className="text-secondary dark:text-secondary-dark">
              {/* <span> / </span> */}
              {/* <Breadcrumb /> */}
              <span>{title}</span>
            </span>
          )}
        </div>

        {/* hamburger */}
        <div className="text-right lg:text-left">
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
        </div>

        {/* end top part */}
      </div>

      {/* navigation */}
      <nav className="wrap">
        <SlideDown className={'my-dropdown-slidedown'} closed={!isOpen}>
          {/* {props.open ? props.children : null} */}
          <ul className="py-4">
            <NavLink label="Projects" href="/projects" />
            {/* <NavLink label="Garden" href="/garden" /> */}
            <NavLink label="Articles" href="/articles" />
            <NavLink label="Library" href="/library" />
            <NavLink label="About" href="/about" />
            <NavLink label="Česky" href="/cz" />
            <li className="inline-block">
              <ThemeToggle />
            </li>
          </ul>
        </SlideDown>
      </nav>
    </header>
  )
}

const BreadcrumbLink = ({ href, label }) => {
  return (
    <span className="text-secondary">
      <Link href={href}>
        <a
          className={`text-secondary dark:text-secondary-dark no-underline ${
            router.pathname == `/${href}` ? 'bg-red-300' : ''
          }`}
        >
          {label}
        </a>
      </Link>{' '}
      /{' '}
    </span>
  )
}

const NavLink = ({ href, label }) => {
  const router = useRouter()

  if (router.pathname === `/${href}`) {
    console.log(`pathname is: ${router.pathname}`)
    console.log(`href is: ${href}`)
    console.log('same path')
    console.log('---------')
  } else {
    console.log(`pathname is: ${router.pathname}`)
    console.log(`href is: ${href}`)
    console.log('fock it…')
    console.log('---------')
  }

  return (
    <li className="mr-8 inline-flex">
      <Link href={href}>
        <a className="text-secondary dark:text-secondary-dark no-underline">
          {label}
        </a>
      </Link>
    </li>
  )
}
