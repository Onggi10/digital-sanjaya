<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section id="services" class="bg-white py-24 text-center">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2">Layanan Utama</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-900">Solusi Digital Terpadu</h3>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        <!-- Service 1 -->
        <div class="group bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">
            Website profesional, cepat, dan responsif untuk meningkatkan kredibilitas bisnis Anda di era digital.
          </p>
          <a :href="waLink('Saya tertarik dengan Web Development')"
            target="_blank"
            class="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
            Tanya Sekarang 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        <!-- Service 2 -->
        <div class="group bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Undangan Digital</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">
            Sambut momen spesial dengan undangan digital modern, elegan, dan ramah lingkungan.
          </p>
          <a :href="waLink('Saya tertarik dengan Website Undangan')"
            target="_blank"
            class="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
            Tanya Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        <!-- Service 3 -->
        <div class="group bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Jasa Desain</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">
            Logo, banner, dan materi branding visual yang dirancang khusus untuk identitas bisnis Anda.
          </p>
          <a :href="waLink('Saya tertarik dengan jasa Desain')"
            target="_blank"
            class="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
            Tanya Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        <!-- Service 4 -->
        <div class="group bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">Entry Data</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">
            Layanan pengolahan dan input data yang teliti, cepat, dan akurat untuk efisiensi waktu Anda.
          </p>
          <a :href="waLink('Saya tertarik dengan jasa Entry Data')"
            target="_blank"
            class="inline-flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
            Tanya Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>