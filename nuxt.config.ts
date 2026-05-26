export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  
  site: {
    url: 'https://digitalsanjaya.com',
    name: 'PT Digital Sanjaya'
  },

  sitemap: {
    hostname: 'https://digitalsanjaya.com',
    gzip: true,
    routes: ['/', '/blog', '/services/web-development'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      title: 'PT Digital Sanjaya | Solusi Digital',
      meta: [
        {
          name: 'description',
          content:
            'PT Digital Sanjaya adalah perusahaan teknologi yang menyediakan jasa website, aplikasi, dan solusi digital untuk UMKM dan bisnis profesional.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'PT Digital Sanjaya | Solusi Digital' },
        { property: 'og:description', content: 'PT Digital Sanjaya membantu bisnis UMKM dan perusahaan dengan website profesional, aplikasi, dan layanan digital yang optimal.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://digitalsanjaya.com' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PT Digital Sanjaya | Solusi Digital' },
        { name: 'twitter:description', content: 'Jasa pembuatan website dan aplikasi terbaik untuk UMKM dan brand profesional di Indonesia.' },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://digitalsanjaya.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
      ],
    },
  },
})
