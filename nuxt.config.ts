// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.autohub.africa/',
      analyticsId: process.env.NUXT_PUBLIC_ANALYTICS_ID
    }
  },
  future: {
    compatibilityVersion: 4
  },
  css: ['~/assets/tokens.css'],
  typescript: {
    shim: false
  }
})
