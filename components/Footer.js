import Link from 'next/link'

import Button from './Button'
import Social from './Social'
import Newsletter from './Newsletter'

export default function Footer({ className }) {
  return (
    <footer className={`footer mt-20 py-20 ${className}`}>
      <div className="wrap">
        {/* Subscribe */}
        <div className="lg:col-span-2">
          <Newsletter />
          {/* <div className="btn-group mt-6 text-center">
            <Button
              type="externalLink"
              text="Subscribe to email updates"
              href="https://buttondown.email/iljapanic"
              iconName="email"
              className="mr-4"
            />
            <Button
              type="link"
              text="Subscribe to RSS"
              href="/feeds"
              iconName="rss"
              color="rss"
            />
          </div> */}

          <div className="mt-12 text-center">
            <p className="text-secondary text-sm">
              or connect with me on social media
            </p>
            <Social size="small" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-24 text-center text-sm">
          {/* main nav */}
          <ul>
            <NavLink label="About" href="/about" />
            <NavLink label="Inspiration" href="/inspiration" />
            <NavLink label="Now" href="/now" />
            <NavLink label="Uses" href="/uses" />
            <NavLink label="Česky" href="/cz" />
            <NavLink label="Table of Contents" href="/toc" />
            <NavLink label="Colophon" href="/colophon" />
          </ul>

          {/* secondary nav */}
          <ul className="mt-8">
            <NavLink label="Essays" href="/essays" />
            <NavLink label="Garden" href="/garden" />
            <NavLink label="Library" href="/library" />
            <NavLink label="Projects" href="/projects" />
            <NavLink label="Courses" href="/courses" />
          </ul>
        </nav>

        <p className="mt-20 text-center italic text-gray-500 text-sm dark:text-gray-600">
          Handcrafted by Ilja Panić
        </p>
      </div>
    </footer>
  )
}

const NavLink = ({ ...props }) => (
  <li className="mr-6 inline-block last-of-type:mr-0">
    <Link href={props.href}>
      <a className="text-secondary no-underline">{props.label}</a>
    </Link>
  </li>
)
