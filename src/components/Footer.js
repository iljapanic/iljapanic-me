import React from 'react'
import Newsletter from './molecules/newsletter'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content-column">
          <h2 className="base fw-medium sans">Let’s stay in touch</h2>
          <p className="small mt-s">
            Drop me your email and I will let you know when I publish new
            content and embark on new projects.
          </p>
          <Newsletter type="plain" size="small" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
