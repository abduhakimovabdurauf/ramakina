import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-06',
  devtools: { enabled:false },
  css: ['~/assets/css/app.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  plugins:['~/plugins/gsap.client.ts'],
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
  },
  runtimeConfig: {
    public: {
      CPANEL_LINK: process.env.NUXT_PUBLIC_CPANEL_LINK
    }
  }
})
