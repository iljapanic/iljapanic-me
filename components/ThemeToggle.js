import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  let switchingTo

  if (theme === 'dark') {
    switchingTo = 'light'
  } else {
    switchingTo = 'dark'
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-secondary"
      aria-label={`Switch to ${switchingTo} mode`}
      title={`Switch to ${switchingTo} mode`}
    >
      <span className="sr-only">{`Switch to ${switchingTo} mode`}</span>◐
    </button>
  )
}
