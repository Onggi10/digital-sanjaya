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
  <section id="testimonials" class="relative overflow-hidden bg-white min-h-screen flex flex-col items-center justify-center py-24">
    <!-- Decorative blobs -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="text-center mx-auto mb-14 max-w-2xl">
        <h2 class="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2">Testimonial</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-900">Apa Kata Klien Kami</h3>
        <p class="mt-4 text-slate-600 leading-relaxed">
          Pengalaman nyata dari UMKM, personal brand, dan corporate yang telah mempercayakan kebutuhan digitalnya kepada kami.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="item in testimonials"
          :key="item.name"
          class="group flex flex-col bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Decorative quote icon -->
          <svg class="w-8 h-8 text-primary-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>

          <div class="flex items-center gap-4 mb-5">
            <img
              :src="item.avatar"
              :alt="item.name"
              class="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
            />
            <div>
              <p class="font-semibold text-slate-900">{{ item.name }}</p>
              <p class="text-sm text-slate-500">{{ item.role }}</p>
            </div>
          </div>

          <div class="flex items-center gap-1 mb-5">
            <template v-for="index in 5" :key="index">
              <svg
                v-if="index <= item.rating"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-amber-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-slate-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
              </svg>
            </template>
          </div>

          <p class="text-slate-600 text-base leading-relaxed flex-1">
            &ldquo;{{ item.quote }}&rdquo;
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
