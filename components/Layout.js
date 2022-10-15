import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

Layout.propTypes = {
  siteName: PropTypes.string,
  siteUrl: PropTypes.string,
  summary: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  coverUrl: PropTypes.string,
}

Layout.defaultProps = {
  siteName: 'Ilja Panić',
  summary:
    'Ilja is a design technologist researching complex systems. He helps people and organizations understand technology.',
  keywords:
    'Ilja Panić, creative technologist, design technologist, portfolio, resume',
  author: 'Ilja Panić',
  coverUrl: '/cover.jpg',
  siteUrl: 'https://iljapanic.com',
}

export default function Layout({
  children,
  title,
  summary,
  wrapped = true,
  keywords,
  siteName,
  coverUrl,
  author,
  siteUrl,
}) {
  return (
    <>
      <Head>
        <title>{title ? `${title} — ${siteName}` : siteName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* SEO */}
        <meta name="description" content={summary} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta
          name="og:title"
          content={title ? `${title} — ${siteName}` : siteName}
        />
        <meta name="og:description" content={summary} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={siteUrl + coverUrl} />

        {/* icons */}
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#44403c"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header title={title} />
      <main className={`mt-12 ${wrapped && 'wrap'}`}>{children}</main>
      <Footer />
    </>
  )
}
