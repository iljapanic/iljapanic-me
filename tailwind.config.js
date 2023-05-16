/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const { Theme } = require('tailwind-easy-theme')
const colors = require('./styles/colors')

const theme = new Theme({
  /* base colors */
  black: colors.black,
  white: colors.white,
  gray: colors.gray,
  red: colors.red,
  yellow: colors.yellow,
  green: colors.emerald,

  /* brand colors */
  brand: colors.brand,

  /* design tokens */

  // text
  primary: '#000000',
  secondary: '#3B3A38',
  tertiary: '#93918F',
  dim: '#C9C5C1',

  // bg
  bg: {
    DEFAULT: '#F8F6F5',
    secondary: '#EDEBE9',
  },

  // button (primary)
  btn: {
    bg: colors.gray[900],
    text: colors.gray[50],
  },
})

const darkMode = theme.variant(
  {
    /* design tokens */

    // text
    primary: '#F8F6F5',
    secondary: '#BAB6B1',
    tertiary: '#797673',
    dim: '#494745',

    // bg
    bg: {
      DEFAULT: '#232120',
      secondary: '#2D2B29',
    },

    // button (primary)
    btn: {
      bg: '#ffffff',
      text: colors.gray[900],
    },
  },
  {
    selector: '.dark',
    mediaQuery: '@media (prefers-color-scheme: dark)',
  },
)

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['var(--font-sans)', ...fontFamily.sans],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: [
          'ui-serif',
          'Charter',
          'Bitstream Charter',
          'Sitka Text',
          'Cambria',
          'serif',
        ],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: (theme) => {
      return {
        center: true,
        padding: {
          DEFAULT: '0.5rem',
          sm: '1rem',
          md: '1.5rem',
          // lg: '2rem',
        },
        // screens: {
        //   ...theme('screens'),
        //   sm: '100%',
        //   md: '100%',
        //   lg: '1152px',
        //   xl: '1200px',
        //   '2xl': '1400px',
        // },
      }
    },
  },
  variants: {
    fluidType: ['responsive'],
  },
  plugins: [
    theme.create({
      '[data-theme="dark"]': darkMode,
    }),
    require('tailwindcss-animate'),
    require('tailwindcss-fluid-type')({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1, // 1.125rem === 18px
        fontSizeMax: 1.125, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '', // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: -2,
        sm: -1,
        base: 0,
        lg: 1,
        xl: 2,
        '2xl': 3,
        '3xl': 4,
        '4xl': 5,
        '5xl': 6,
        '6xl': 7,
        '7xl': 8,
        '8xl': 9,
        '9xl': 10,
      },
    }),
  ],
}
