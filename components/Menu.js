import { useState } from 'react'
import Link from 'next/link'
import { Squeeze as Hamburger } from 'hamburger-react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export default function Menu() {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      <SlideDown className={'my-dropdown-slidedown'} closed={!isOpen}>
        {/* {props.open ? props.children : null} */}
        <ul>
          <NavLink label="Projects" href="/projects" />
          <NavLink label="Garden" href="/garden" />
          <NavLink label="Essays" href="/essays" />
          <NavLink label="Library" href="/library" />
          <NavLink label="About" href="/about" />
          <NavLink label="🇨🇿" href="/cz" />
        </ul>
      </SlideDown>
    </nav>
  )
}

const NavLink = ({ ...props }) => (
  <li className="mr-8 inline-flex last-of-type:mr-0">
    <Link href={props.href}>
      <a className="text-gray-700 no-underline">{props.label}</a>
    </Link>
  </li>
)
