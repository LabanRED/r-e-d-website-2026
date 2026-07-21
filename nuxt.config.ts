import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  srcDir: 'src/',
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    leadDeskEmail: process.env.LEAD_DESK_EMAIL || 'hello@r-e-d.co.za',
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
