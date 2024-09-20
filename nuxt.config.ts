// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/")
  },
  devtools: { enabled: true },
  //  modules: [
  //   ['@nuxtjs/google-fonts', {
  //     families: {
  //       Oxygen: true
  //     },
  //     '@pinia/nuxt',
  //     ' @pinia-plugin-persistedstate/nuxt',
  //     display: 'swap', // Recommended for performance
  //     prefetch: true, // Optional, improves initial loading speed
  //     download: true // Optional, downloads fonts on first visit
  //   }]
  // ],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Sen: true,
        'Inter': true,
        'Darker+Grotesque':true,
        'Titillium+Web':true,
        'Arimo':true,
        'Tinos':true,
        'MonteCarlo':true
      },
      display: 'swap', // Recommended for performance
      prefetch: true, // Optional, improves initial loading speed
      download: true // Optional, downloads fonts on first visit
    }],
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  css: [
    '~/public/assets/css/tailwind.css',
    '~/public/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build:{
    transpile: ['vue-toastification']
  }
})
