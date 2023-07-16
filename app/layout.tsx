import PlausibleProvider from 'next-plausible'

import Header from './components/header'
import Footer from './components/footer'

import '@/styles/globals.css'
import { ThemeProvider } from '@/app/theme/theme-provider'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: {
    default: 'Ilja Panic',
    template: '%s · Ilja Panic',
  },
  description: 'Design technologist based in Prague',
  keywords:
    'Ilja Panic, creative technologist, design technologist, frontend developer',
  author: 'Ilja Panic',
  openGraph: {
    title: 'Ilja Panic',
    description: 'Design technologist based in Prague',
    type: 'website',
    authors: ['Ilja Panic'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <head>
        <PlausibleProvider domain="iljapanic.com" />
      </head>
      <body className={`${inter.variable}`}>
        <ThemeProvider>
          <Header />
          <main className="container mt-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
