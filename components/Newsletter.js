import React from 'react'
import Button from './Button'

class Newsletter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  // handleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.value)
  //   window.open('https://buttondown.email/iljapanic', 'popupwindow')
  //   event.preventDefault()
  // }

  render() {
    return (
      <section className="text-center">
        <h2 className="mb-2 text-lg">Want to stay up to date?</h2>
        <p>Get occasional updates about cybercultures and ……</p>
        <form
          method="post"
          action="https://formcarry.com/s/yDsv9bkVpT"
          target="_blank"
          // action="https://buttondown.email/api/emails/embed-subscribe/iljapanic"
          // target="popupwindow"
          // onSubmit={this.handleSubmit}
          className="mx-auto mt-8 sm:flex"
        >
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-5 py-3 ml-auto placeholder-gray-500 border-gray-300 rounded-md rounded-r-none focus:border-accent focus:ring-accent dark:text-gray-900 sm:max-w-xs"
            placeholder="Enter your email"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <Button
            text="Keep me posted"
            className="mr-auto rounded-l-none"
            submit
          />
        </form>
      </section>
    )
  }
}

export default Newsletter
