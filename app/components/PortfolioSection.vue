<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

const projects = [
  {
    id: 1,
    title: 'Website Toko Online Nakita Store',
    category: 'E-Commerce',
    description: 'Website toko online lengkap dengan katalog produk, promo, checkout digital, dan pengelolaan pesanan otomatis.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Portal Reservasi Kafe Java Breeze',
    category: 'Reservasi Online',
    description: 'Sistem reservasi meja, pemesanan menu, dan manajemen pelanggan untuk kafe dan restoran modern.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Platform Edukasi SmartClass',
    category: 'Web Application',
    description: 'Portal pendidikan untuk kelas online, materi digital, dan sistem absensi untuk sekolah atau lembaga training.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Undangan Digital Nadya & Reza',
    category: 'Website Undangan',
    description: 'Website undangan pernikahan dengan fitur RSVP, galeri, dan peta lokasi yang mudah dibagikan ke tamu undangan.',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Landing Page Kopi Lokal',
    category: 'Landing Page',
    description: 'Landing page penjualan kopi lokal dengan desain konversi tinggi, testimonial, dan tombol chat WhatsApp yang responsif.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Sistem Inventaris Retail InventoryPro',
    category: 'Manajemen Stok',
    description: 'Aplikasi manajemen stok dan laporan penjualan untuk bisnis retail dengan dashboard yang mudah dipahami.',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
  },
]
</script>

<template>
  <section id="portfolio" class="bg-slate-50 py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold mb-3">Portofolio Kami</p>
        <h2 class="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">Proyek Terselesaikan</h2>
        <p class="mx-auto max-w-2xl text-slate-600 leading-7">
          Contoh proyek website dan aplikasi yang telah kami bangun untuk klien UMKM dan bisnis profesional.
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <article v-for="project in projects" :key="project.id" class="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div class="overflow-hidden">
            <img
              :src="project.imageUrl"
              :alt="project.title"
              class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div class="p-6 space-y-4">
            <span class="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              {{ project.category }}
            </span>
            <h3 class="text-xl font-semibold text-slate-900 leading-tight">
              {{ project.title }}
            </h3>
            <p class="text-sm leading-7 text-slate-600">
              {{ project.description }}
            </p>
            <div class="pt-4 border-t border-slate-200">
              <a :href="waLink('Halo, saya ingin melihat demo atau detail untuk proyek: ' + project.title)" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                Lihat Detail
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
