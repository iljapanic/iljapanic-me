module.exports = [
  /* external */
  {
    source: '/wishlist',
    destination:
      'https://iljapanic.notion.site/de8064e9359e4906b8e4571fa90361bc?v=9c13a84e76f2483cb03b3d30c155b997&pvs=4',
    permanent: false,
  },
  {
    source: '/meet',
    destination: 'https://cal.com/iljapanic/meet',
    permanent: false,
  },
  {
    source: '/x',
    destination: 'https://twitter.com/iljapanic',
    permanent: false,
  },
  {
    source: '/linkedin',
    destination: 'https://www.linkedin.com/in/iljapanic/',
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
