module.exports = [
  /* external */
  {
    source: '/wishlist',
    destination:
      'https://reflect.site/g/iljapanic/wishlist/17e1327c0322473f8c4eac48c8b361ff',
    permanent: false,
  },

  /* pages */
  {
    source: '/music',
    destination: '/listen',
    permanent: true,
  },

  /* essays -> articles  */
  {
    source: '/essays',
    destination: '/articles',
    permanent: true,
  },
  {
    source: '/essays/:slug*',
    destination: '/:slug*',
    permanent: true,
  },
  {
    source: '/essays/cyberbiomes/',
    destination: '/cyberbiomes',
    permanent: true,
  },
  {
    source: '/essays/citizen-first-ux/',
    destination: '/citizen-first-ux',
    permanent: true,
  },
  {
    source: '/essays/china-sharp-eyes/',
    destination: '/china-sharp-eyes',
    permanent: true,
  },
  {
    source: '/essays/critical-public-art/',
    destination: '/critical-public-art',
    permanent: true,
  },
  {
    source: '/essays/going-beyond-hci/',
    destination: '/going-beyond-hci',
    permanent: true,
  },
  {
    source: '/essays/not-so-smart-city/',
    destination: '/not-so-smart-city',
    permanent: true,
  },

  /* garden -> notes */
  {
    source: '/garden',
    destination: '/notes',
    permanent: true,
  },
  {
    source: '/garden/:slug*',
    destination: '/:slug*',
    permanent: true,
  },
  {
    source: '/garden/chatgpt/',
    destination: '/chatgpt',
    permanent: true,
  },
  {
    source: '/garden/digital-gardening/',
    destination: '/digital-gardening',
    permanent: true,
  },
  {
    source: '/garden/networked-note-taking/',
    destination: '/networked-note-taking',
    permanent: true,
  },
  {
    source: '/garden/tools-for-thought/',
    destination: '/tools-for-thought',
    permanent: true,
  },
]
