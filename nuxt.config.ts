// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled:false },
  css: ['~/assets/css/app.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  i18n: {
    lazy: false,
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.svg' }
      ]
    }
  }
})
