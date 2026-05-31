<script setup>
import { computed, ref, watch } from 'vue'
import { blogPosts } from '~/data/blogPosts'

useSeoMeta({
  title: 'Blog Digital Sanjaya - Berita Teknologi & Digital Terbaru',
  description: 'Dapatkan insight terbaru seputar web design, AI, keamanan website, dan digital marketing untuk UMKM dan bisnis profesional.',
  ogTitle: 'Blog Digital Sanjaya',
  ogDescription: 'Insight teknologi dan digital terbaru untuk bisnis Anda.',
})

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
  <section class="relative overflow-hidden bg-slate-50 min-h-screen py-28 lg:py-32">
    <!-- Decorative blobs -->
    <div class="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-14">
        <h2 class="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2">Blog</h2>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900">Berita Teknologi &amp; Digital Terbaru</h1>
        <p class="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Dapatkan insight terbaru seputar tren desain web, AI, keamanan website, hingga strategi digital marketing untuk mengembangkan bisnis Anda.
        </p>
      </div>

      <!-- Blog posts grid -->
      <div class="grid gap-8 md:grid-cols-2">
        <article
          v-for="post in visiblePosts"
          :key="post.slug"
          class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <NuxtLink :to="`/blog/${post.slug}`" class="block overflow-hidden">
            <img
              :src="post.image || fallbackImage"
              :alt="post.title"
              @error="(event) => event.target.src = fallbackImage"
              class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </NuxtLink>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-4">
              <span class="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {{ post.category }}
              </span>
              <span class="text-sm text-slate-400">{{ post.date }}</span>
            </div>

            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="block text-xl font-bold text-slate-900 transition-colors hover:text-primary-600 leading-tight"
            >
              {{ post.title }}
            </NuxtLink>

            <p class="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-2">
              {{ post.summary }}
            </p>

            <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
              <span class="text-sm font-medium text-slate-500">{{ post.source }}</span>
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Baca selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex items-center gap-3">
          <button
            type="button"
            @click="prevSlide"
            class="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-primary-400 hover:text-primary-600 hover:shadow-sm"
          >
            Sebelumnya
          </button>
          <button
            type="button"
            @click="nextSlide"
            class="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-primary-400 hover:text-primary-600 hover:shadow-sm"
          >
            Selanjutnya
          </button>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-sm text-slate-500">
            Slide {{ totalPages ? currentPage + 1 : 0 }} dari {{ totalPages }}
          </span>
          <div class="flex items-center gap-2">
            <button
              v-for="(_, index) in totalPages"
              :key="index"
              type="button"
              @click="currentPage = index"
              class="h-2.5 w-2.5 rounded-full transition-colors"
              :class="index === currentPage ? 'bg-primary-500' : 'bg-slate-200 hover:bg-slate-300'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
