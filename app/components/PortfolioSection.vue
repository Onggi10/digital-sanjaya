<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

// Mock data untuk portofolio
const projects = [
  {
    id: 1,
    title: 'Sistem Kasir (POS) Berbasis Web',
    category: 'Web Application',
    description: 'Aplikasi Point of Sales yang dilengkapi fitur manajemen stok barang, laporan penjualan real-time, dan struk digital untuk toko retail.',
    imageClass: 'bg-gradient-to-tr from-blue-500 to-indigo-600',
    iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    id: 2,
    title: 'Undangan Pernikahan Digital',
    category: 'Website Undangan',
    description: 'Website undangan pernikahan modern dengan desain elegan, fitur RSVP, musik latar, buku tamu, dan integrasi Google Maps.',
    imageClass: 'bg-gradient-to-tr from-pink-400 to-rose-500',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    id: 3,
    title: 'Landing Page UMKM',
    category: 'Web Development',
    description: 'Website satu halaman yang dioptimalkan untuk SEO dan konversi penjualan produk, dilengkapi dengan tombol langsung chat ke WhatsApp.',
    imageClass: 'bg-gradient-to-tr from-emerald-400 to-teal-500',
    iconPath: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
  }
]
</script>

<template>
  <section id="portfolio" class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2">Portofolio Kami</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-900">Proyek Terselesaikan</h3>
        <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
          Beberapa contoh sistem dan website yang telah kami kembangkan untuk membantu klien mencapai target digital mereka.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
          <!-- Image Placeholder (using gradient & icon) -->
          <div :class="['h-48 w-full flex items-center justify-center relative overflow-hidden', project.imageClass]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white opacity-90 transform group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="project.iconPath" />
            </svg>
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6 flex-grow flex flex-col">
            <span class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 block">
              {{ project.category }}
            </span>
            <h4 class="text-xl font-bold text-slate-900 mb-3">
              {{ project.title }}
            </h4>
            <p class="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
              {{ project.description }}
            </p>
            
            <div class="mt-auto border-t border-slate-200 pt-4">
               <a :href="waLink('Halo, saya ingin melihat demo atau detail untuk proyek: ' + project.title)" target="_blank" class="inline-flex items-center text-sm font-medium text-slate-500 group-hover:text-primary-600 transition-colors cursor-pointer">
                  Lihat Detail 
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
