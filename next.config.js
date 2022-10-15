const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  images: {
    domains: ['dl.airtable.com'],
  },
})
