// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components/ui',
      prefix: 'UI',
    },
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
