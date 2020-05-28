import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import IconSun from '../images/icons/sun.svg'
import IconMoon from '../images/icons/moon.svg'

const ThemeToggle = () => {
  const iconClass = 'h-3 w-3 stroke-current fill-current'

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
          className={`${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          } relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
        >
          <span
            aria-hidden="true"
            className={`${
              theme === 'dark' ? '-translate-x-5' : 'translate-x-0'
            } translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
          >
            {/* On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" */}
            <span
              className={`${
                theme === 'dark'
                  ? 'opacity-0 ease-out duration-100'
                  : 'opacity-100 ease-in duration-200'
              } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
            >
              <IconSun className={`${iconClass} text-sun `} />
            </span>
            {/* On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" */}
            <span
              className={`${
                theme === 'dark'
                  ? 'opacity-100 ease-in duration-200'
                  : 'opacity-0 ease-out duration-100'
              }  absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
            >
              <IconMoon className={`${iconClass} text-moon `} />
            </span>
          </span>
        </span>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
