import React from 'react'
import { Link } from 'gatsby'
import ThemeToggle from './themeToggle'
import Logo from '../images/logo-placeholder.svg'

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: 'text-gray-900 dark:text-gray-100' } // active
    : { className: 'text-gray-500 dark:text-gray-300' } // normal
}

const ListLink = ({ ...props }) => (
  <li className="mt-4 text-xs font-normal cursor-pointer md:text-xl">
    <Link
      to={props.to}
      className="hover:text-gray-800 dark-hover:text-gray-100"
      getProps={isPartiallyActive}
    >
      <div className="inline-flex items-center">
        {/* <span className="w-6 border border-gray-200 mr-2"></span> */}
        <span>{props.children}</span>
      </div>
    </Link>
  </li>
)

const Header = () => {
  return (
    <div className="py-6 px-4 lg:pr-4 lg:text-right lg:fixed lg:right-0 lg:top-0">
      <Link to="/">
        <Logo className="h-24 ml-auto" />
      </Link>

      {/* nav */}

      <ul className="mt-6 lg:mr-6">
        {/* <ListLink to="/services/">Services</ListLink> */}
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/articles/">Articles</ListLink>
        <ListLink to="/bookshelf/">Bookshelf</ListLink>
        {/* <ListLink to="/references/">References</ListLink> */}
        <ListLink to="/feed/">Feed</ListLink>
      </ul>

      <div className="lg:py-6 px-4 lg:pr-8 lg:fixed lg:bottom-0 lg:right-0">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header
