import classNames from 'classnames'
import { getIcon } from '../lib/getIcon'

export default function Social() {
  return (
    <ul className="list-none">
      {/* twitter */}
      <SocialLink
        label="Twitter"
        url="https://twitter.com/iljapanic"
        color="twitter"
      />

      {/* linkedin */}
      <SocialLink
        label="LinkedIn"
        url="https://www.linkedin.com/in/iljapanic/"
        color="linkedin"
      />

      {/* github */}
      <SocialLink
        label="Github"
        url="https://github.com/iljapanic"
        color="github"
        last
      />
    </ul>
  )
}

const SocialLink = ({ label, url, last, color = 'secondary' }) => (
  <li className="mr-6 inline-block last-of-type:mr-0">
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`text-${color} tracking-wider no-underline text-sm`}
    >
      {/* {getIcon(iconName, 'h-5 w-5 text-secondary hover:text-accent')} */}
      <span className="mr-3 inline-block">{label}</span>
    </a>
    {!last && <span className="text-gray-400">|</span>}
  </li>
)
