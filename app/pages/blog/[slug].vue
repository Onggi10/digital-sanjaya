<script setup>
import { useHead, useRoute } from '#imports'
import { blogPosts } from '~/data/blogPosts'

const route = useRoute()
const post = blogPosts.find((item) => item.slug === route.params.slug)

if (post) {
  useHead({
    title: `${post.title} | Blog Digital Sanjaya`,
    meta: [
      { name: 'description', content: post.summary },
      { property: 'og:title', content: post.title },
      { property: 'og:description', content: post.summary },
      { property: 'og:image', content: post.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80' },
    ],
  })
}
</script>

<template>
  <section class="relative overflow-hidden bg-white min-h-screen py-28">
    <!-- Decorative blobs -->
    <div class="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <!-- Post found -->
      <div v-if="post">
        <!-- Meta row -->
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <span class="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            {{ post.category }}
          </span>
          <span class="text-sm text-slate-400">{{ post.date }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
          {{ post.title }}
        </h1>

        <!-- Featured image -->
        <img
          v-if="post.image"
          :src="post.image"
          :alt="post.title"
          class="w-full h-64 md:h-80 rounded-2xl object-cover mb-10 shadow-sm"
          loading="eager"
        />

        <!-- Content -->
        <div
          class="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-primary-600 prose-img:rounded-xl"
          v-html="post.content"
        />

        <!-- Back link -->
        <div class="mt-12 pt-8 border-t border-slate-100">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Blog
          </NuxtLink>
        </div>
      </div>

      <!-- Post not found -->
      <div v-else class="text-center py-20">
        <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-900 mb-3">Artikel Tidak Ditemukan</h2>
        <p class="text-slate-600 mb-8 max-w-md mx-auto">
          Maaf, artikel yang Anda cari belum tersedia atau mungkin telah dipindahkan. Silakan cek halaman blog untuk artikel lainnya.
        </p>
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-xl font-semibold shadow-[0_4px_16px_rgba(22,163,74,0.25)] hover:shadow-[0_6px_24px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Blog
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
