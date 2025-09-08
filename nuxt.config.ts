// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
    'lenis/nuxt',
  ],

  css: ['@/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },

  site: {
    url: 'https://adamTroszczynski.portfolio.pl',
    name: 'Portfolio',
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
      },
    ],
  },

  alias: {
    '@mainView': resolve(__dirname, './views/mainView'),
    '@project': resolve(__dirname, './views/project'),
  },
});
