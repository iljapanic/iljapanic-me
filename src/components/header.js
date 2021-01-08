import React, { useState } from 'react'
import { Link } from 'gatsby'
import ThemeToggle from './themeToggle'
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled'

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: 'active' } // active
    : { className: '' } // normal
}

const ListLink = ({ ...props }) => (
  <li data-text={props.text}>
    <Link to={props.to} getProps={isPartiallyActive}>
      {props.text}
    </Link>
  </li>
)

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 50
  const TIMEOUT_DELAY = 100

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <div className="header-logo">
        <Link to="/">Ilja Panić</Link>
      </div>
      <nav className="header-nav">
        <ul>
          {/* <ListLink to="/services/">Services</ListLink> */}
          {/* <ListLink to="/mentoring/">Mentoring</ListLink> */}
          {/* <ListLink to="/consulting/">Consulting</ListLink> */}
          {/* <ListLink to="/projects/">Projects</ListLink> */}
          {/* <ListLink to="/notes/">Notes</ListLink> */}
          <ListLink to="/articles/" text="Articles" />
          <ListLink to="/bookshelf/" text="Bookshelf" />
          {/* <ListLink to="/toolbox/">Toolbox</ListLink> */}
          <ListLink to="/about/" text="About" />
          <ListLink to="/now/" text="Now" />
          {/* <ListLink to="/feed/">Feed</ListLink> */}
        </ul>
      </nav>
      <div className="header-theme">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
