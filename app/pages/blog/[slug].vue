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
    ],
  })
}
</script>

<template>
  <section class="py-24 max-w-4xl mx-auto px-6">
    <div v-if="post">
      <div class="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">{{ post.category }}</span>
        <span>{{ post.date }}</span>
      </div>
      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="mb-8 h-72 w-full rounded-3xl object-cover"
      />
      <h1 class="text-4xl font-bold text-slate-900 mb-8">{{ post.title }}</h1>
      <div class="prose max-w-none text-slate-700" v-html="post.content" />
      <NuxtLink to="/blog" class="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-green-600">
        ← Kembali ke Blog
      </NuxtLink>
    </div>

    <div v-else class="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
      <p class="text-xl font-semibold text-slate-900 mb-4">Artikel tidak ditemukan</p>
      <p class="text-slate-600 mb-6">Maaf, artikel yang Anda cari belum tersedia atau sudah dipindahkan.</p>
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-700">
        Kembali ke Blog
      </NuxtLink>
    </div>
  </section>
</template>
