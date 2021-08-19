const firebaseKeys =
  process.env.NODE_ENV === 'production'
    ? {
        APIKEY: 'AIzaSyAd5FiZsSyH-hqayyNxPd0Bym1NQkH9sNE',
        AUTHDOMAIN: 'mylo-production.firebaseapp.com',
        DATABASEURL: 'https://mylo-production.firebaseio.com',
        PROJECTID: 'mylo-production',
        STORAGEBUCKET: 'mylo-production.appspot.com',
        APPID: '1:544179213091:web:28371061c4c9c8a0',
      }
    : {
        APIKEY: 'AIzaSyDpQa_0M6z90wvmFiWMLh9Pl-L8ziMhJ9I',
        AUTHDOMAIN: 'routine-tracker-dev.firebaseapp.com',
        DATABASEURL: 'https://routine-tracker-dev.firebaseio.com',
        PROJECTID: 'routine-tracker-dev',
        STORAGEBUCKET: 'routine-tracker-dev.appspot.com',
        APPID: '1:1002160015176:web:cfb3292d0a956fbe96d57d',
      }

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mylo | Stop exercising without a plan',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Stop exercising without a plan! Create and discover workout plans that can progress automatically so that you can focus on training.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.mylo.fit' },
    ],
    script: [
      {
        src: 'https://plausible.io/js/plausible.js',
        async: true,
        defer: true,
        'data-domain': 'mylo.fit',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/firebase.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://marquez.co/docs/nuxt-optimized-images/
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Config for Nuxt Optimized Images
  optimizedImages: {
    optimizeImages: true,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    FIREBASE: firebaseKeys,
  },

  publicRuntimeConfig: {
    FIREBASE: firebaseKeys,
    OFFICIAL_ACCOUNT:
      process.env.NODE_ENV === 'production'
        ? 'DecoOCZd5jnY4i3wSE3D'
        : 'HU-qJL80h_hUVGJ0Y7ec',
    WORKOUT_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://app.mylo.fit/s/workout'
        : 'http://localhost:8080/s/workout',
  },
}
