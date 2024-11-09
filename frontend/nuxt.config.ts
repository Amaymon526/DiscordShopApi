// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ["assets/css/main.css", "assets/css/variables.css"],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },



  devServer: {
    https: true,
  },

  app: {
    pageTransition: { name: 'page', mode: "out-in" }
  },
})
