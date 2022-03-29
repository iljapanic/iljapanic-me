import { RssIcon, MailIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { Twitter, Linkedin, Github } from '@icons-pack/react-simple-icons'
// import { Twitter, Linkedin, Github } from 'simple-icons/icons/react'
// import Icon from '@icons-pack/react-simple-icons'

export function getIcon(iconName, extraStyles) {
  const iconStyles = `inline-block ${extraStyles}`

  if (iconName == 'rss') {
    return <RssIcon className={iconStyles} aria-hidden="true" />
  }

  if (iconName == 'email') {
    return <MailIcon className={iconStyles} aria-hidden="true" />
  }

  if (iconName == 'externalLink') {
    return <ExternalLinkIcon className={iconStyles} aria-hidden="true" />
  }

  /* SOCIAL */
  if (iconName == 'twitter') {
    return <Twitter className={iconStyles} aria-hidden="true" />
  }

  if (iconName == 'linkedin') {
    return <Linkedin className={iconStyles} aria-hidden="true" />
  }

  if (iconName == 'github') {
    return <Github className={iconStyles} aria-hidden="true" />
  }
}
