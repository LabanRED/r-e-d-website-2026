import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  srcDir: 'src/',
  runtimeConfig: {
    public: {
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || 'GTM-KLF48Q6L'
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@vueuse/motion/nuxt'
  ]
})
