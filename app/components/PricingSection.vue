<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section id="pricing" class="bg-slate-50 py-24 text-center">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2">Investasi Terbaik</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-900">Pilih Paket Sesuai Kebutuhan</h3>
        <p class="text-slate-600 mt-4">Harga UMKM yang dirancang khusus untuk mendukung pertumbuhan bisnis lokal.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
        <!-- Paket Undangan Online -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
          <div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Undangan Online</h3>
            <p class="text-slate-500 text-sm mb-6">Cocok untuk pernikahan & event</p>
            <div class="flex items-baseline justify-center mb-8">
              <span class="text-4xl font-extrabold text-slate-900">150</span>
              <span class="text-xl text-slate-500 ml-1 font-semibold">rb</span>
            </div>
            
            <ul class="text-slate-600 text-sm space-y-4 mb-8 text-left">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Desain Elegan Premium
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Musik Background Bebas Pilih
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Fitur RSVP & Buku Tamu
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Hitung Mundur Acara
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <a :href="waLink('Saya ingin Website Undangan Online')"
              target="_blank"
              class="block w-full py-3 px-6 text-center rounded-xl font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors">
              Pilih Paket Ini
            </a>
          </div>
        </div>

        <!-- Paket Business (Highlighted) -->
        <div class="relative bg-white p-8 rounded-3xl shadow-2xl border-2 border-primary-500 transform md:-translate-y-4 z-10 flex flex-col h-full">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span class="bg-gradient-to-r from-primary-600 to-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
              Terlaris
            </span>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Business / Custom App</h3>
            <p class="text-slate-500 text-sm mb-6">Untuk Sistem POS & Web Kompleks</p>
            <div class="flex items-baseline justify-center mb-8">
              <span class="text-5xl font-extrabold text-slate-900">1.5</span>
              <span class="text-xl text-slate-500 ml-1 font-semibold">jt</span>
            </div>
            
            <ul class="text-slate-600 text-sm space-y-4 mb-8 text-left">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="font-medium text-slate-900">Pembuatan Sistem POS / Kasir</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="font-medium text-slate-900">Website Custom (Toko Online/Company)</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Optimasi SEO Dasar
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Gratis Domain & Hosting 1 Thn
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Maintenance & Support
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <a :href="waLink('Saya ingin Paket Business / Custom Sistem')"
              target="_blank"
              class="block w-full py-4 px-6 text-center rounded-xl font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Pilih Paket Business
            </a>
          </div>
        </div>

        <!-- Paket Starter -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
          <div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <p class="text-slate-500 text-sm mb-6">Landing page & web sederhana</p>
            <div class="flex items-baseline justify-center mb-8">
              <span class="text-4xl font-extrabold text-slate-900">500</span>
              <span class="text-xl text-slate-500 ml-1 font-semibold">rb</span>
            </div>
            
            <ul class="text-slate-600 text-sm space-y-4 mb-8 text-left">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Landing Page (1 Halaman)
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Desain Responsif (Mobile Friendly)
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Integrasi Tombol WhatsApp
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-slate-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span class="text-slate-400">Tanpa Sistem Kompleks</span>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <a :href="waLink('Saya ingin Paket Starter Website')"
              target="_blank"
              class="block w-full py-3 px-6 text-center rounded-xl font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors">
              Pilih Paket Ini
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>