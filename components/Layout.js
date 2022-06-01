import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const siteName = 'Ilja Panić'
export default function Layout({
  children,
  title,
  description,
  wrapped = true,
}) {
  return (
    <>
      <Head>
        <title>{title ? `${title} — ${siteName}` : siteName}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={title} />
      <main className={`mt-12 ${wrapped && 'wrap'}`}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

Layout.defaultProps = {
  description: 'This is a Next.js + Tailwind starter to kick start development',
}
