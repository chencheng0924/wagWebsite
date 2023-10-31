// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['element-plus/dist/index.css', '@/assets/reset.css'],
  "imports": {
    "dirs": ['stores', 'pinia'],
  },
  ssr: false,
  "modules": [
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt',
    {'autoImports': ['defineStore', 'acceptHMRUpdate']}],
  ],
})
