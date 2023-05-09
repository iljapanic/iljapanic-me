const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },

    fluidTypography: {
      remSize: 21, // The px size to assume for 1rem
      minScreenSize: 320, // The screen size (in px) at which to begin scaling
      maxScreenSize: 1720, // The screen size (in px) at which to stop scaling
      minTypeScale: 1.125, // The scaling factor to use at minScreenSize
      maxTypeScale: 1.2, // The scaling factor to use at maxScreenSize
      lineHeight: 1.5, // The line-height to use for heading classes
    },

    colors: {
      /* tailwind defaults */
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      red: colors.red,

      /* brand */
      'accent-50': '#f9e8e6',
      'accent-100': '#f3cdc9',
      'accent-200': '#e89f97',
      'accent-300': '#dc6d60',
      'accent-400': '#d13e2e',
      'accent-500': '#9a2e22',
      'accent-600': '#7d251c',
      'accent-700': '#5c1b14',
      'accent-800': '#3f130e',
      'accent-900': '#1d0906',

      /* social */
      rss: '#f26522',
      linkedin: '#0072b1',
      twitter: '#1DA1F2',
      github: '#171515',
      instagram: '#cd486b',
      facebook: '#3b5998',

      /* design tokens */
      // bg: colors.stone[50],
      bg: colors.white,
      'bg-secondary': colors.stone[200],
      'bg-tertiary': colors.stone[300],

      primary: colors.stone[900],
      secondary: colors.stone[700],
      tertiary: colors.stone[200],
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
  },
  plugins: [require('tailwind-fluid-typography')],
}
