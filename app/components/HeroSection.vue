<script setup>
useSeoMeta({
  title: 'Jasa Website & Digital Terjangkau',
  description: 'Solusi digital untuk UMKM dan personal brand.',
})

const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section class="relative overflow-hidden bg-slate-50 pt-32 pb-24 text-center min-h-[90vh] flex items-center">
    <!-- Decorative background blobs -->
    <div class="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" style="animation-delay: 2s;"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" style="animation-delay: 4s;"></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 animate-fade-in-up">
      <div class="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold border border-primary-200 shadow-sm">
        ✨ Terpercaya oleh UMKM & Corporate
      </div>

      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900">
        Solusi Digital <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
          Untuk Bisnis Anda
        </span>
      </h1>

      <p class="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Kami membantu UMKM, corporate, dan personal brand membangun website, desain profesional, serta layanan digital lainnya dengan kualitas premium.
      </p>

      <a
        :href="waLink('Halo, saya ingin konsultasi mengenai layanan Anda.')"
        target="_blank"
        class="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300"
      >
        Konsultasi Gratis
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </section>
</template>