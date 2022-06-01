import Button from './Button'

export default function Newsletter() {
  return (
    <section className="text-center">
      <h2 className="mb-2 text-lg">Want to stay up to date?</h2>
      <p>Get occasional updates about cybercultures and ……</p>
      <form className="mx-auto mt-8 sm:flex">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="ml-auto w-full rounded-md rounded-r-none border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-accent focus:ring-accent dark:text-gray-900 sm:max-w-xs"
          placeholder="Enter your email"
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
