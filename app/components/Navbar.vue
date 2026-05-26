<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const phoneNumber = '6289531310890'
const waLink = `https://wa.me/${phoneNumber}?text=Halo, saya ingin konsultasi.`

const menuItems = [
  { label: 'Layanan', href: '/#services', section: 'services' },
  { label: 'Harga', href: '/#pricing', section: 'pricing' },
  { label: 'Kontak', href: '/#contact', section: 'contact' },
  { label: 'Blog', href: '/blog', section: 'blog' },
]

const currentSection = computed(() => {
  const path = route.path || ''
  const hash = route.hash || ''

  if (path.startsWith('/services')) return 'services'
  if (path.startsWith('/blog')) return 'blog'
  if (hash === '#services') return 'services'
  if (hash === '#pricing') return 'pricing'
  if (hash === '#contact') return 'contact'
  return 'home'
})

const currentSectionLabel = computed(() => {
  switch (currentSection.value) {
    case 'services':
      return 'Layanan'
    case 'pricing':
      return 'Harga'
    case 'contact':
      return 'Kontak'
    case 'blog':
      return 'Blog'
    default:
      return 'Beranda'
  }
})

const isActive = (item) => {
  if (currentSection.value === 'home') {
    return (item.section === 'services' && route.hash === '#services')
      || (item.section === 'pricing' && route.hash === '#pricing')
      || (item.section === 'contact' && route.hash === '#contact')
  }
  return item.section === currentSection.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-sm shadow-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="relative h-14 w-14 overflow-visible">
          <img
            src="/favicon.png"
            alt="Digital Sanjaya Logo"
            class="absolute inset-y-0 left-0 h-16 w-16 object-contain"
          />
        </div>
        <div>
          <p class="text-lg font-bold text-green-600">Digital Sanjaya</p>
          <p class="text-xs text-slate-500">Digital Marketing & Web</p>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.section"
            :to="item.href"
            class="text-sm font-medium transition"
            :class="isActive(item) ? 'text-green-600' : 'text-slate-700 hover:text-green-600'"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div>
          <a
            :href="waLink"
            target="_blank"
            class="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Konsultasi
          </a>
        </div>
      </div>

      <!-- Mobile Button -->
      <button
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition hover:border-green-600 hover:text-green-600 md:hidden"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden border-t border-slate-200 bg-white/98 px-6 pb-6 pt-4 shadow-sm">
      <div class="mb-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
        Sedang di: <span class="font-semibold text-slate-900">{{ currentSectionLabel }}</span>
      </div>

      <div class="space-y-3">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.section"
          :to="item.href"
          class="block rounded-2xl px-4 py-3 text-base font-medium transition"
          :class="isActive(item) ? 'bg-green-50 text-green-700' : 'text-slate-700 hover:bg-slate-100'"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>

        <a
          :href="waLink"
          target="_blank"
          class="block rounded-2xl bg-green-600 px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-green-700"
          @click="closeMenu"
        >
          Konsultasi
        </a>
      </div>
    </div>
  </nav>
</template>
