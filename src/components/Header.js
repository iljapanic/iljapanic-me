import React from 'react'
import { Link } from 'gatsby'
import ThemeToggle from './themeToggle'
import Logo from '../images/logo-placeholder.svg'

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: 'font-medium text-gray-900 dark:text-gray-100' } // active
    : { className: 'text-gray-500 dark:text-gray-300' } // normal
}

const ListLink = ({ ...props }) => (
  <li className="inline-block mr-8 ms-sm font-mono cursor-pointer last:mr-0">
    <Link to={props.to} getProps={isPartiallyActive}>
      <div className="inline-flex items-center">
        <span>{props.children}</span>
      </div>
    </Link>
  </li>
)

const Header = () => {
  return (
    <header className="container">
      <div className="items-center pt-6 pb-12 lg:flex">
        <Link
          to="/"
          className="bg-gray-100 rounded-full inline-flex items-center justify-center w-8 h-8"
        >
          <span className="block text-gray-300 font-medium tracking-widest"></span>
        </Link>

        {/* nav */}
        <div className="lg:pl-12 lg:flex-grow lg:flex lg:items-center">
          <nav className="lg:flex-grow lg:mr-12">
            <ul>
              {/* <ListLink to="/services/">Services</ListLink> */}
              {/* <ListLink to="/mentoring/">Mentoring</ListLink> */}
              {/* <ListLink to="/consulting/">Consulting</ListLink> */}
              {/* <ListLink to="/projects/">Projects</ListLink> */}
              <ListLink to="/notes/">Notes</ListLink>
              <ListLink to="/articles/">Articles</ListLink>
              <ListLink to="/bookshelf/">Bookshelf</ListLink>
              {/* <ListLink to="/toolbox/">Toolbox</ListLink> */}
              <ListLink to="/about/">About</ListLink>
              {/* <ListLink to="/feed/">Feed</ListLink> */}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
