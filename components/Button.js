import Link from 'next/link'
import classNames from 'classnames'
import { getIcon } from '../lib/getIcon'

export default function Button({
  iconName,
  type,
  href,
  text,
  className,
  size = 'default',
  color = 'default',
  submit = false,
  prominent = false,
}) {
  // const buttonColor = classNames({
  //   '': color == 'default',
  //   'text-rss border-rss': color == 'rss',
  // })

  /* common button styles */
  const commonStyles = `inline-flex items-center border shadow-sm font-medium rounded-md no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500`

  /* button size-specific styles */
  const btnStyles = classNames(commonStyles + ' ' + className, {
    'border-none text-white bg-accent hover:bg-accent-secondary dark:text-white dark:bg-accent-dark dark:hover:bg-accent-dark-secondary':
      !prominent,
    'bg-accent border-accent text-white hover:bg-accent-dark': prominent,
    'px-3 py-2 leading-4 text-xs': size == 'small',
    'px-4 py-2 text-sm': size == 'default',
    'px-6 py-3 text-lg': size == 'large',
  })

  /* icon styles */
  const iconStyles = classNames({
    '-ml-0.5 mr-2 h-4 w-4': size == 'small',
    '-ml-1 mr-2 h-5 w-5 inline-block': size == 'default',
    '-ml-1 mr-3 h-6 w-6': size == 'large',
  })

  let icon

  if (iconName) {
    icon = getIcon(iconName, iconStyles)
  }

  if (type == 'externalLink') {
    /* EXTERNAL LINK */
    return (
      <a href={href} target="_blank" rel="noreferrer" className={btnStyles}>
        {iconName && icon}
        {text}
      </a>
    )
  } else if (type == 'link') {
    /* INTERNAL LINK */
    return (
      <Link href={href}>
        <a className={btnStyles}>
          {iconName && icon}
          {text}
        </a>
      </Link>
    )
  } else {
    /* REGULAR BUTTON (does nothing atm) */
    return (
      <button type="button" className={btnStyles}>
        {iconName && icon}
        {text}
      </button>
    )
  }
}
