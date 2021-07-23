const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        darker: '#4D565F',
        dark: '#888F94',
        default: '#EEEEEE'
      },
      green: {
        darkest: '#105C39',
        darker: '#188D58',
        dark: '#1EB972',
        default: '#35DF91',
        light: '#8CEDC0',
        lighter: '#D3F8E7'
      },
      red: {
        darkest: '#A0230A',
        darker: '#D52F0E',
        dark: '#EA5030',
        default: '#F47960',
        light: '#F7A190',
        lighter: '#FBD0C7'
      },
      yellow: {
        darkest: '#936104',
        darker: '#E59807',
        dark: '#F2AE2C',
        default: '#FAC762',
        light: '#FBD488',
        lighter: '#FDEBC8'
      },
      blue: {
        darkest: '#025B9C',
        darker: '#0272C3',
        dark: '#008FF5',
        default: '#33A9FE',
        light: '#85CBFE',
        lighter: '#D8EFFF'
      },
      indigo: {
        darker: '#121E2A',
        dark: '#203147',
        default: '#2F4766',
        light: '#596C85',
        lighter: '#E0E3E8'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
