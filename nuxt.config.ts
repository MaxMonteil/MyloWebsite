// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Plan once, Progress forever | Mylo',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'Mylo is the most flexible workout tool ever. Craft your plan exactly the way you want and forget about all the management.',
        },
      ],
    },
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/plausible',
    '@nuxtjs/tailwindcss',
    'nuxt-zero-js',
  ],
})
