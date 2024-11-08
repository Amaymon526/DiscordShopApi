// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true, https: true },

  app: {
    pageTransition: { name: 'page', mode: 'slide-left' }
  },
})
