import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import IconSun from '../images/icons/sun.svg'
import IconMoon from '../images/icons/moon.svg'

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <span
          role="checkbox"
          tabIndex={0}
          aria-checked={theme}
          onClick={() => {
            toggleTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          onKeyDown={() => {
            toggleTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          className="theme-switcher"
        >
          <span aria-hidden="true">
            <span>
              <IconSun
                className={`${
                  theme === 'dark' ? 'visible' : 'hidden'
                } icon sun`}
              />

              <IconMoon
                className={`${
                  theme === 'light' ? 'visible' : 'hidden'
                } icon moon`}
              />
            </span>
          </span>
        </span>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
