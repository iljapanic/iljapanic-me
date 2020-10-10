import React from 'react'

const Newsletter = ({ type, size }) => {
  if (type === 'plain') {
    return (
      <div
        className={`newsletter newsletter-plain mt ${
          size == 'small' && 'newsletter-small'
        }`}
      >
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/iljapanic"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/iljapanic', 'popupwindow')"
          className="embeddable-buttondown-form form"
        >
          <div className="newsletter-inputs">
            <input
              type="text"
              name="firstName"
              id="bd-email"
              placeholder="first name"
              className={`newsletter-name bare mr-s ${
                size == 'small' && 'small'
              }`}
            ></input>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="your email"
              className={`newsletter-email bare mr-s ${
                size == 'small' && 'small'
              }`}
            ></input>
            <input
              className={`btn ${size == 'small' && 'btn-small'}`}
              type="submit"
              value="Stay updated"
            ></input>
            <input type="hidden" value="1" name="embed"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Newsletter
