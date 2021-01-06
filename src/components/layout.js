import React from 'react'
import Header from './header'
import Footer from './footer'
import { MDXProvider } from '@mdx-js/react'
import '../css/index.css'

/* components available in .mdx pages */
import Quote from './molecules/quote'
import Newsletter from './molecules/newsletter'
import Headline from './headline'
import Soundcloud from './molecules/soundcloud'
import CV from './cv'
const shortcodes = { Quote, Headline, Newsletter, CV, Soundcloud }

const Layout = ({ children, location }) => {
  return (
    <>
      <Header />
      <main>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </main>
      <Footer />
    </>
  )
}

export default Layout
