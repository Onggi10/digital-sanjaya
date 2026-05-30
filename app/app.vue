<script setup>
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://digitalsanjaya.com/#organization',
            name: 'PT Digital Sanjaya',
            url: 'https://digitalsanjaya.com',
            logo: 'https://digitalsanjaya.com/favicon.png',
            description: 'Jasa pembuatan website, aplikasi, dan solusi digital untuk UMKM dan bisnis profesional di Indonesia.',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+62-895-3131-0890',
              contactType: 'customer service',
              email: 'onggisanjaya@gmail.com',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Jln Lebak Pasar, Babakan Pasar',
              addressLocality: 'Bogor Tengah',
              addressRegion: 'Jawa Barat',
              postalCode: '16126',
              addressCountry: 'ID',
            },
          },
          {
            '@type': 'WebSite',
            '@id': 'https://digitalsanjaya.com/#website',
            url: 'https://digitalsanjaya.com',
            name: 'PT Digital Sanjaya | Solusi Digital',
            description: 'Jasa pembuatan website, undangan digital, dan aplikasi custom untuk UMKM dan corporate.',
            publisher: { '@id': 'https://digitalsanjaya.com/#organization' },
            inLanguage: 'id',
          },
          {
            '@type': 'LocalBusiness',
            '@id': 'https://digitalsanjaya.com/#localbusiness',
            name: 'PT Digital Sanjaya',
            url: 'https://digitalsanjaya.com',
            image: 'https://digitalsanjaya.com/favicon.png',
            telephone: '+62-895-3131-0890',
            email: 'onggisanjaya@gmail.com',
            priceRange: 'Rp150.000 - Rp5.000.000',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '14:00',
              },
            ],
            areaServed: [
              { '@type': 'City', name: 'Bogor' },
              { '@type': 'City', name: 'Jakarta' },
              { '@type': 'Country', name: 'Indonesia' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Layanan Digital',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Undangan Digital' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jasa Desain' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entry Data' } },
              ],
            },
            sameAs: ['https://wa.me/6289531310890'],
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <WhatsAppFloat />
  </NuxtLayout>
</template>
