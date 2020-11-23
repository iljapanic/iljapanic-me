import React from 'react'
import Newsletter from './molecules/newsletter'
import Social from './social'

const Footer = () => {
  return (
    <footer className="footer ta-center">
      <div className="container">
        <div className="content-column">
          {/* CONTENT */}
          <div className="footer-box">
            <h2 className="base fw-medium sans mt-0">Let’s stay in touch</h2>
            <p className="mt-s small">
              I'm always keen to talk about interesting projects. Feel free to
              reach out at{' '}
              <a href="mailto:iljapanic@gmail.com">iljapanic@gmail.com</a>. You
              can connect with me on social media or sign up for my mailing list
              to get occasional updates about new stuff I'm working on. No spam,
              ever 🤞
            </p>
            <div className="mx-auto">
              <Newsletter type="plain" size="small" />
            </div>

            <div className="mt">
              <Social />
            </div>
          </div>

          <p className="xs color-dim mt-xxl">
            Written, designed and developed by Ilja Panić
          </p>
          {/* <p className="xs color-dim mt-s">
            Type from{' '}
            <a href="https://klim.co.nz/" target="_blank" rel="noreferrer">
              Klim Type Foundry
            </a>
          </p> */}
          {/* END CONTENT */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
