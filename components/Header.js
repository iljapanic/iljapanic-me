import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import ThemeToggle from './ThemeToggle'

export default function Header({ title, className }) {
  const router = useRouter()
  const path = router.pathname
  const [isOpen, setOpen] = useState(false)
  const isHome = path == '/'

  const Breadcrumb = () => {
    if (path.includes('essays')) {
      return <BreadcrumbLink href="/essays" label="Essays" />
    } else {
      return ''
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 mt-12 bg-bg/90 py-2 backdrop-blur-sm dark:bg-bg-dark/90 ${className}`}
    >
      {/* top part */}
      <div className="wrap flex items-center">
        <div className="flex-grow">
          <Link href="/">
            <a
              className={`text-secondary font-bold no-underline ${
                isHome && 'font-medium'
              }`}
            >
              iljapanic
            </a>
          </Link>

          {title && ' '}

          {title && (
            <span className="text-secondary hidden lg:inline-block">
              <span> / </span>
              {/* <Breadcrumb /> */}
              <span>{title}</span>
            </span>
          )}
        </div>

        <div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={28}
            label="Show menu"
            rounded
          />
        </div>
      </div>

      {/* navigation */}
      <nav className="wrap">
        <SlideDown className={'my-dropdown-slidedown'} closed={!isOpen}>
          {/* {props.open ? props.children : null} */}
          <ul className="py-4">
            <NavLink label="Projects" href="/projects" />
            <NavLink label="Garden" href="/garden" />
            <NavLink label="Essays" href="/essays" />
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

const BreadcrumbLink = ({ href, label }) => (
  <span className="text-secondary">
    <Link href={href}>
      <a className="text-secondary no-underline">{label}</a>
    </Link>{' '}
    /{' '}
  </span>
)

const NavLink = ({ ...props }) => (
  <li className="mr-8 inline-flex">
    <Link href={props.href}>
      <a className="text-secondary no-underline">{props.label}</a>
    </Link>
  </li>
)
