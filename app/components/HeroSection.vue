<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section class="relative overflow-hidden bg-slate-50 text-center min-h-screen flex flex-col items-center justify-center">
    <!-- Decorative blobs -->
    <div class="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" style="animation-delay: 2s;"></div>
    <div class="absolute -bottom-8 left-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob" style="animation-delay: 4s;"></div>

    <!-- Subtle dot grid overlay -->
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 animate-fade-in-up">
      <!-- Badge with social proof -->
      <div class="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold border border-primary-200 shadow-sm">
        <span class="text-base">🔥</span>
        100+ Proyek Selesai &middot; 5 Tahun Pengalaman
      </div>

      <!-- Headline -->
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900">
        Wujudkan Potensi Digital
        <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
          Bisnis & Acara Anda
        </span>
      </h1>

      <!-- Subheading -->
      <p class="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Kami bantu UMKM, corporate, dan personal brand membangun
        <span class="text-slate-800 font-semibold">website profesional, undangan digital, sistem POS,</span>
        dan solusi custom &mdash; dengan harga terjangkau &amp; garansi kepuasan.
      </p>

      <!-- Dual CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
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

        <a
          href="/#portfolio"
          class="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary-500 hover:text-primary-600 hover:-translate-y-1 transition-all duration-300"
        >
          Lihat Portofolio
        </a>
      </div>

      <!-- Trust metrics row -->
      <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-500">
        <div class="flex items-center gap-2">
          <span class="text-primary-500 font-bold text-lg">100+</span>
          <span>Proyek Selesai</span>
        </div>
        <div class="hidden sm:block w-px h-6 bg-slate-300"></div>
        <div class="flex items-center gap-2">
          <span class="text-primary-500 font-bold text-lg">95%</span>
          <span>Klien Puas</span>
        </div>
        <div class="hidden sm:block w-px h-6 bg-slate-300"></div>
        <div class="flex items-center gap-2">
          <span class="text-primary-500 font-bold text-lg">5+</span>
          <span>Tahun Pengalaman</span>
        </div>
        <div class="hidden sm:block w-px h-6 bg-slate-300"></div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Gratis Konsultasi</span>
        </div>
      </div>
    </div>
  </section>
</template>
