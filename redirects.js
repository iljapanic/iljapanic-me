module.exports = [
  /* external */
  {
    source: '/wishlist',
    destination:
      'https://iljapanic.notion.site/Wishlist-76cb8cb1f45843d5818f4a3f107f6993?pvs=4',
    permanent: false,
  },
  {
    source: '/meet',
    destination: 'https://cal.com/iljapanic/meet',
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
