/*
 * TailwindCSS Configuration File
 *
 * Docs: https://tailwindcss.com/docs/configuration
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        default: '#EEEEEE',
        dark: '#5D5D5C',
        darker: '#414040',
      },
      green: {
        default: '#83E8BC',
        dark: '#56806C',
        darker: '#445F51',
      },
      red: {
        default: '#F25F5C',
        dark: '#C15450',
        darker: '#8B4440',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
