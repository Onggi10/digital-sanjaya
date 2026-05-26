<script setup>
const testimonials = [
  {
    quote: 'Website saya jadi lebih profesional dan klien bertambah setelah bekerja sama dengan Digital Sanjaya.',
    name: 'Budi',
    role: 'Owner UMKM',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    quote: 'Proses cepat, komunikasi jelas, dan hasil desain web memuaskan sekali.',
    name: 'Sari',
    role: 'Personal Brand',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    quote: 'Harga terjangkau tapi kualitas premium. Website kami jadi lebih modern dan fungsional.',
    name: 'Rudi',
    role: 'Corporate',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 4,
  },
]
</script>

<template>
  <section class="bg-slate-50 py-24">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mx-auto mb-14 max-w-2xl">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">Apa Kata Klien Kami</p>
        <h2 class="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">Pengalaman Nyata Klien Bersama Digital
          Sanjaya</h2>
        <p class="mt-4 text-slate-600 leading-7">
          Kami bangun website dan solusi digital yang membantu usaha lokal, brand personal, dan perusahaan tumbuh dengan
          percaya diri.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article v-for="item in testimonials" :key="item.name"
          class="group flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

          <div class="flex items-center gap-4">
            <img :src="item.avatar" :alt="item.name"
              class="h-14 w-14 rounded-full object-cover ring-2 ring-emerald-100" />

            <div>
              <p class="font-semibold text-slate-900">
                {{ item.name }}
              </p>

              <p class="text-sm text-slate-500">
                {{ item.role }}
              </p>
            </div>
          </div>

          <div class="mt-6 flex items-center gap-1 text-amber-500">
            <template v-for="index in 5" :key="index">

              <svg v-if="index <= item.rating" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
              </svg>

              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
              </svg>

            </template>
          </div>

          <p class="mt-6 text-slate-700 text-base leading-8">
            “{{ item.quote }}”
          </p>

          <div class="mt-auto pt-6 border-t border-slate-200">
            <p class="text-sm text-slate-500">
              Rating klien
            </p>
          </div>

        </article>
      </div>
    </div>
  </section>
</template>
