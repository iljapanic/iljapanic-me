import React from 'react'

const Footer = () => {
  return (
    <footer className="py-2 px-4 mt-20 md:py-12">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <p className="text-sm">
              Vestibulum id ligula porta felis euismod semper. Sed posuere
              consectetur est at lobortis. Donec ullamcorper nulla non metus
              auctor fringilla.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Let’s stay in touch</h2>
            <div>
              <input type="email" name="email" id="email" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
