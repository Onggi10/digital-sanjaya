<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section id="pricing" class="relative overflow-hidden bg-white min-h-screen flex flex-col items-center justify-center py-24 text-center">
    <!-- Decorative blobs -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="mb-16">
        <h2 class="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2">Pilih Paket</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-900">Investasi Terbaik untuk Bisnis Anda</h3>
        <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
          Harga UMKM yang transparan tanpa biaya tersembunyi. Semua paket sudah termasuk garansi dan support penuh dari tim kami.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
        <!-- Paket Undangan Online -->
        <div class="relative flex flex-col bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="flex-1">
            <div class="w-14 h-14 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">Undangan Online</h3>
            <p class="text-slate-500 text-sm mb-6">Untuk pernikahan &amp; acara spesial</p>

            <div class="flex items-baseline justify-center mb-2">
              <span class="text-sm text-slate-400 font-medium">Rp</span>
              <span class="text-4xl font-extrabold text-slate-900 mx-1">150</span>
              <span class="text-lg text-slate-500 font-semibold">rb</span>
            </div>
            <p class="text-xs text-slate-400 mb-8">Bayar sekali, berlaku selamanya</p>

            <ul class="text-slate-600 text-sm space-y-4 mb-8 text-left border-t border-slate-100 pt-8">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Desain elegan &amp; responsif
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Musik background bebas pilih
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Fitur RSVP &amp; buku tamu digital
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Hitung mundur &amp; galeri foto
              </li>
            </ul>
          </div>
          <a
            :href="waLink('Saya tertarik dengan paket Undangan Online')"
            target="_blank"
            class="block w-full py-3 px-6 text-center rounded-xl font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 hover:-translate-y-0.5 transition-all duration-200"
          >
            Konsultasi Gratis
          </a>
        </div>

        <!-- Paket Business (Highlighted - Terlaris) -->
        <div class="relative flex flex-col bg-white border-2 border-primary-500 p-8 rounded-3xl shadow-2xl transform md:-translate-y-4 z-10">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span class="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary-600 to-blue-500 text-white text-xs font-bold uppercase tracking-wider py-2 px-5 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Paling Laris
            </span>
          </div>

          <div class="flex-1">
            <div class="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">Business / Custom App</h3>
            <p class="text-slate-500 text-sm mb-6">Untuk toko online, POS, &amp; sistem kompleks</p>

            <div class="flex items-baseline justify-center mb-2">
              <span class="text-sm text-slate-400 font-medium">Rp</span>
              <span class="text-5xl font-extrabold text-primary-600 mx-1">1.5</span>
              <span class="text-lg text-slate-500 font-semibold">jt</span>
            </div>
            <p class="text-xs text-primary-500 font-medium mb-8"> termasuk domain &amp; hosting 1 tahun</p>

            <ul class="text-slate-600 text-sm space-y-4 mb-8 text-left border-t border-primary-100 pt-8">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="font-medium text-slate-900">Sistem POS / Kasir</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="font-medium text-slate-900">Website Custom (Toko Online / Company)</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Optimasi SEO dasar
              </li>
              <!-- <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="font-medium text-slate-900">Gratis domain &amp; hosting 1 tahun</span>
              </li> -->
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Maintenance &amp; support penuh
              </li>
            </ul>
          </div>
          <a
            :href="waLink('Saya ingin Paket Business / Custom Sistem')"
            target="_blank"
            class="block w-full py-4 px-6 text-center rounded-xl font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-[0_8px_30px_rgba(22,163,74,0.3)] hover:shadow-[0_12px_40px_rgba(22,163,74,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Konsultasi Sekarang
          </a>
        </div>

        <!-- Paket Starter -->
        <div class="relative flex flex-col bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="flex-1">
            <div class="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">Starter</h3>
            <p class="text-slate-500 text-sm mb-6">Untuk landing page &amp; profil perusahaan</p>

            <div class="flex items-baseline justify-center mb-2">
              <span class="text-sm text-slate-400 font-medium">Rp</span>
              <span class="text-4xl font-extrabold text-slate-900 mx-1">500</span>
              <span class="text-lg text-slate-500 font-semibold">rb</span>
            </div>
            <p class="text-xs text-slate-400 mb-8">Bayar sekali, bebas revisi 3x</p>

            <ul class="text-slate-600 text-sm space-y-4 mb-8 text-left border-t border-slate-100 pt-8">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Landing page 1 halaman
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Desain responsif mobile-friendly
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Integrasi tombol WhatsApp
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Bebas revisi desain 3x
              </li>
            </ul>
          </div>
          <a
            :href="waLink('Saya tertarik dengan Paket Starter Website')"
            target="_blank"
            class="block w-full py-3 px-6 text-center rounded-xl font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 hover:-translate-y-0.5 transition-all duration-200"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>

      <!-- Trust signal -->
      <div class="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          Garansi revisi sesuai keinginan
        </span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          Tanpa biaya tersembunyi
        </span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          Konsultasi gratis sebelum order
        </span>
      </div>
    </div>
  </section>
</template>
