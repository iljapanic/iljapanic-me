import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="iljapanic.com">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default MyApp
