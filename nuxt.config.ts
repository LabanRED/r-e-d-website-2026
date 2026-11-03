import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  srcDir: 'src/',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Reach Engage Develop (R-E-D) | Digital Marketing & Sales Solutions',
      titleTemplate: '%s | Reach Engage Develop (R-E-D)',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        {
          name: 'description',
          content: 'Reach Engage Develop (R-E-D) is a premier digital solutions and performance marketing specialist. Powering brands through digital advertising, Conexa website platform, and PostX sales automation.'
        },
        {
          name: 'keywords',
          content: 'Red, R-E-D, Reach Engage Develop, Reach Engage and Develop, Reach Enage Develop, RED agency, RED marketing, RED digital, automotive digital marketing, Conexa, PostX'
        },
        { name: 'author', content: 'Reach Engage Develop (R-E-D)' },
        { property: 'og:site_name', content: 'Reach Engage Develop (R-E-D)' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_ZA' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'canonical', href: 'https://r-e-d.co.za' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://r-e-d.co.za/#organization',
                'name': 'Reach Engage Develop',
                'alternateName': ['R-E-D', 'Red', 'RED', 'Reach Engage and Develop', 'Reach Enage Develop', 'RED Marketing', 'RED Agency'],
                'url': 'https://r-e-d.co.za',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://r-e-d.co.za/r-e-d-dark-logo.svg',
                  'caption': 'Reach Engage Develop (R-E-D)'
                },
                'description': 'Reach Engage Develop (R-E-D) is a unique digital solutions provider delivering custom digital advertising, web platforms (Conexa), and lead conversion tools (PostX).',
                'email': 'hello@r-e-d.co.za'
              },
              {
                '@type': 'WebSite',
                '@id': 'https://r-e-d.co.za/#website',
                'url': 'https://r-e-d.co.za',
                'name': 'Reach Engage Develop (R-E-D)',
                'alternateName': ['R-E-D', 'Red', 'RED', 'Reach Engage Develop'],
                'publisher': {
                  '@id': 'https://r-e-d.co.za/#organization'
                }
              }
            ]
          })
        }
      ]
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
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
