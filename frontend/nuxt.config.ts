// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@pinia/nuxt'],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  devServer: {
    https: true,
  },

  app: {
    pageTransition: { name: 'slide-left', mode: "in-out" }
  },
})
