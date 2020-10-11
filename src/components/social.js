import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Social = () => {
  return (
    <div class="social">
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
  )
}

export default Social
