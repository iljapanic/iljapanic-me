import React from 'react'
import Newsletter from './molecules/newsletter'
import {
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer ta-center">
      <div className="container">
        <div className="content-column">
          {/* CONTENT */}
          <div className="footer-box">
            <h2 className="base fw-medium sans mt-0">Let’s stay in touch</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              nihil iusto, voluptas voluptatem reiciendis.
            </p>
            <p className="mt-s">
              Drop me your email and I will let you know when I publish new
              content and embark on new projects.
            </p>
            <div className="mx-auto">
              <Newsletter type="plain" size="small" />
            </div>

            <div class="social mt">
              <a href="mailto:iljapanic@gmail.com">
                <FaEnvelope />
              </a>
              <a
                href="https://instagram.com/iljapanic/"
                target="_blank"
                rel="noreferrer"
                className="instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/iljapanic"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/iljapanic"
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/iljapanic/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <p className="xs color-dim mt-xxl">
            Crafted using{' '}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              Gatsby
            </a>
            , set in{' '}
            <a
              href="https://klim.co.nz/retail-fonts/national-2/"
              target="_blank"
              rel="noreferrer"
            >
              National 2
            </a>{' '}
            and{' '}
            <a
              href="https://klim.co.nz/retail-fonts/tiempos-headline/"
              target="_blank"
              rel="noreferrer"
            >
              Tiempos
            </a>{' '}
          </p>
          {/* END CONTENT */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
