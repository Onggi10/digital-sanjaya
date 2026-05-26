<script setup>
import { computed, ref, watch } from 'vue'
import { blogPosts } from '~/data/blogPosts'

const fallbackImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'

const posts = computed(() => blogPosts)
const currentPage = ref(0)
const slides = computed(() => {
  const all = posts.value || []
  const itemsPerSlide = 4
  const chunks = []
  for (let i = 0; i < all.length; i += itemsPerSlide) {
    chunks.push(all.slice(i, i + itemsPerSlide))
  }
  return chunks
})
const visiblePosts = computed(() => slides.value[currentPage.value] || [])
const totalPages = computed(() => slides.value.length)

watch(posts, () => {
  currentPage.value = 0
})

const prevSlide = () => {
  if (!totalPages.value) return
  currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value
}

const nextSlide = () => {
  if (!totalPages.value) return
  currentPage.value = (currentPage.value + 1) % totalPages.value
}
</script>

<template>
  <section class="py-24 max-w-6xl mx-auto px-6">
    <div class="mb-12 space-y-4">
      <p class="text-sm uppercase tracking-[0.3em] text-green-600">Blog</p>
      <h1 class="text-4xl font-bold text-slate-900">Berita Teknologi & Digital Terbaru</h1>
      <p class="max-w-3xl text-slate-600">
        Dapatkan insight terbaru yang cocok untuk bisnis jasa website, mulai dari tren desain, AI, keamanan, hingga strategi digital marketing.
      </p>
      <p class="text-sm text-slate-500">
        Menampilkan konten blog lokal dari Digital Sanjaya.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article
        v-for="post in visiblePosts"
        :key="post.slug"
        class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <NuxtLink :to="`/blog/${post.slug}`" class="group block overflow-hidden">
          <img
            :src="post.image || fallbackImage"
            :alt="post.title"
            @error="(event) => event.target.src = fallbackImage"
            class="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </NuxtLink>

        <div class="p-6">
          <div class="mb-4 flex items-center gap-3 text-sm text-slate-500">
            <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">{{ post.category }}</span>
            <span>{{ post.date }}</span>
          </div>

          <NuxtLink :to="`/blog/${post.slug}`" class="block text-2xl font-semibold text-slate-900 hover:text-green-600">
            {{ post.title }}
          </NuxtLink>

          <p class="mt-4 text-slate-600 leading-7">{{ post.summary }}</p>

          <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span class="text-sm font-semibold text-slate-500">{{ post.source || 'Digital Sanjaya' }}</span>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center gap-2 text-sm font-semibold text-green-600"
            >
              Baca selengkapnya →
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="prevSlide"
          class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-600"
        >
          Sebelumnya
        </button>
        <button
          type="button"
          @click="nextSlide"
          class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-600"
        >
          Selanjutnya
        </button>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-sm text-slate-500">Slide {{ totalPages ? currentPage + 1 : 0 }} dari {{ totalPages }}</span>
        <div class="flex items-center gap-2">
          <button
            v-for="(_, index) in totalPages"
            :key="index"
            type="button"
            @click="currentPage = index"
            :class="index === currentPage ? 'bg-green-600' : 'bg-slate-200'"
            class="h-2.5 w-2.5 rounded-full transition"
          />
        </div>
      </div>
    </div>
  </section>
</template>
