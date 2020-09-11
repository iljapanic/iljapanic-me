import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import IconSun from '../images/icons/sun.svg'
import IconMoon from '../images/icons/moon.svg'

const ThemeToggle = () => {
  const iconClass =
    'h-4 w-4 stroke-current fill-current transition-opacity absolute right-0'

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
          className="h-4 w-4 block focus:outline-none"
        >
          <span aria-hidden="true">
            <span className="relative">
              <IconSun
                className={`${
                  theme === 'dark'
                    ? 'opacity-100 ease-in duration-200'
                    : 'opacity-0 ease-out duration-100'
                } ${iconClass} text-sun`}
              />

              <IconMoon
                className={`${
                  theme === 'light'
                    ? 'opacity-100 ease-in duration-200'
                    : 'opacity-0 ease-out duration-100'
                } ${iconClass} text-moon`}
              />
            </span>
          </span>
        </span>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
