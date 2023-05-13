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
  primary: colors.gray[900],
  secondary: colors.gray[500],
  tertiary: colors.gray[400],
  dim: colors.gray[400],

  // bg
  bg: {
    DEFAULT: colors.gray[50],
    secondary: colors.gray[100],
    tertiary: colors.gray[200],
  },

  // button (primary)
  btn: {
    bg: colors.gray[900],
    text: colors.gray[50],
  },

  // accent
  accent: {
    DEFAULT: colors.brand[400],
    lighter: colors.brand[300],
    darker: colors.brand[500],
  },

  // border
  border: {
    DEFAULT: colors.gray[600],
    secondary: colors.gray[400],
    dim: colors.gray[300],
  },
})

const darkMode = theme.variant(
  {
    // text
    primary: colors.gray[900],
    secondary: colors.gray[600],
    dim: colors.gray[300],

    // bg
    bgPrimary: colors.gray[50],
    bgSecondary: colors.gray[200],

    // button (primary)
    btnBg: colors.gray[900],
    btnBgHover: colors.gray[700],
    btnText: colors.gray[50],

    // accent
    accent: colors.brand[400],
    accentLighter: colors.brand[300],
    accentDarker: colors.brand[500],

    // border
    borderPrimary: colors.gray[600],
    borderSecondary: colors.gray[400],
    borderDim: colors.gray[200],
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
        sans: ['system-ui', 'sans-serif'],
        serif: [
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
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
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
