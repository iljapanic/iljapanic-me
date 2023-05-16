'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/app/components/ui/button'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <Button
        variant="ghost"
        size="sm"
        aria-label="Toggle theme"
        className="text-tertiary hover:text-primary"
      >
        <span className="rotate-45">◐</span>
      </Button>
    )

  const isLight = resolvedTheme === `light`
  const oppositeTheme = isLight ? `dark` : `light`

  const toggleTheme = () => setTheme(oppositeTheme)

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="text-tertiary transition-none hover:text-primary"
    >
      <span className="rotate-45 ">◐</span>
    </Button>
  )
}

export default ThemeToggle
