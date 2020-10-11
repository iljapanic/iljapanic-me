import React from 'react'

const Newsletter = ({ type, size }) => {
  if (type === 'plain') {
    return (
      <div className={`newsletter newsletter-plain mt`}>
        <form
          // action="https://buttondown.email/api/emails/embed-subscribe/iljapanic"
          // target="popupwindow"
          // onsubmit="window.open('https://buttondown.email/iljapanic', 'popupwindow')"
          name="newsletter"
          method="POST"
          action="https://getform.io/f/7dfc159a-6596-4876-b9b7-1bc04da0c2a4"
          // data-netlify="true"
          className="embeddable-buttondown-form form"
        >
          <div className="newsletter-inputs">
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="first name"
              className={`newsletter-name bare mr-s`}
            ></input>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="your email"
              className={`newsletter-email bare mr-s`}
            ></input>
            <input
              className={`newsletter-submit btn`}
              type="submit"
              value="Stay updated"
            ></input>
            {/* <input type="hidden" value="1" name="embed"></input> */}
          </div>
        </form>
      </div>
    )
  }
}

export default Newsletter
