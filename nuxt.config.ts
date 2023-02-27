// https://nuxt.com/docs/api/configuration/nuxt-config
const ogSource =
  'https://res.cloudinary.com/demgpyia8/image/upload/v1677446092/mylo_promo.jpg'

const metaTitle = 'Plan once, Progress forever | Mylo'
const metaDescription =
  'Mylo is the most flexible workout tool ever. Craft your plan exactly the way you want and forget about all the management.'

export default defineNuxtConfig({
  app: {
    head: {
      title: metaTitle,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: metaDescription },

        // OG Image tags
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: ogSource },
        { name: 'og:site_name', content: 'Mylo' },
        { name: 'og:image:alt', content: metaDescription },
        { name: 'og:description', content: metaDescription },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '600' },
        { name: 'og:url', content: 'https://www.mylo.fit' },
        { name: 'og:title', content: metaTitle },
        { name: 'twitter:title', content: 'Mylo' },
        { name: 'twitter:site', content: '@MyloFit' },
        { name: 'twitter:image', content: ogSource },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: metaDescription },
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
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-zero-js'],
})
