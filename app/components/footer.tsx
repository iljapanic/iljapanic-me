'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

const links = [
  { href: '/articles', label: 'Articles' },
  { href: '/notes', label: 'Notes' },
  { href: '/bookshelf', label: 'Bookshelf' },
  { href: '/about', label: 'About' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container pb-24 pt-32">
      <nav className="flex items-center justify-between font-sans text-sm">
        <div>
          <input type="email" />
          <button>Subscribe</button>
        </div>

        <div className="flex items-center gap-2 text-tertiary">
          <NavLink href="/colophon">Colophon</NavLink>
          <div>|</div>
          <div>{currentYear}</div>
        </div>
      </nav>
    </footer>
  )
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'font-sans text-tertiary no-underline text-sm hover:text-secondary',
        className,
      )}
    >
      {children}
    </Link>
  )
}
