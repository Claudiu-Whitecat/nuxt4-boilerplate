// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/app.css'],
  modules: ['@nuxt/ui','@nuxtjs/strapi'],
  fonts: {
    defaults: {
      weights: [
          100, 300, 400, 700, 900
      ],
      subsets: [
        'romanian'
      ]
    },
    experimental: {
      processCSSVariables: true
    }
  },
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'brand',
        'info',
        'success',
        'warning',
        'error'
      ]
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ro',
      },
    },
  },
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true,
    },
    cookieName: 'strapi_jwt'
  },
})
