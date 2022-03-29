const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fluidType: {
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.375, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.5, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '', // set a prefix to use it alongside the default font sizes
      },
    },
    fontFamily: {
      sans: ['iA Quatro', ...defaultTheme.fontFamily.sans],
      serif: ['Recoleta', ...defaultTheme.fontFamily.serif],
      mono: ['iA Mono', ...defaultTheme.fontFamily.mono],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      /* BASE COLORS */
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,

      /* USAGE-BASED COLORS */
      accent: '#9d8e60',
      'accent-secondary': '#887b53',
      secondary: colors.stone[600],
      'secondary-dark': colors.stone[400],
      dim: colors.stone[300],
      'dim-dark': colors.stone[700],
      bg: colors.stone[100],
      'bg-dark': colors.neutral[900],
      // accent: colors.stone[300],
      // 'accent-secondary': colors.stone[400],
      // 'accent-dark': colors.stone[700],
      // 'accent-dark-secondary': colors.stone[800],

      /* BRAND COLORS */
      rss: '#f26522',
      linkedin: '#0072b1',
      twitter: '#1DA1F2',
      github: '#171515',
      instagram: '#cd486b',
      facebook: '#3b5998',
    },
    extend: {
      // fontSize: {
      //   '4xl': ['5.007rem', '6rem'],
      //   '3xl': ['4.005rem', '6rem'],
      //   '2xl': ['3.204rem', '4rem'],
      //   xl: ['2.563rem', '4rem'],
      //   lg: ['2.051rem', '4rem'],
      //   md: ['1.641rem', '2rem'],
      //   base: ['1.313rem', '2rem'],
      //   sm: ['1.05rem', '2rem'],
      //   xs: ['0.84rem', '2rem'],
      // },
      // spacing: {
      //   quarter: '0.375rem',
      //   half: '0.75rem',
      //   one: '1.5rem',
      //   two: '3rem',
      //   three: '4.5rem',
      //   four: '6rem',
      //   five: '7.5rem',
      //   six: '9rem',
      //   eight: '12rem',
      //   twelve: '18rem',
      //   sixteen: '24rem',
      // },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('tailwindcss-fluid-type'), require('@tailwindcss/forms')],
}
