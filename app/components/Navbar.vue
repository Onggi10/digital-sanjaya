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
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-3">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative h-12 w-12 overflow-visible">
          <img
            src="/favicon.png"
            alt="Digital Sanjaya Logo"
            class="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div class="hidden sm:block">
          <p class="text-lg font-bold text-primary-600">Digital Sanjaya</p>
          <p class="text-xs text-slate-500">Digital Marketing &amp; Web</p>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <div class="flex items-center gap-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.section"
            :to="item.href"
            class="relative px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive(item)
              ? 'text-primary-600 bg-primary-50'
              : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <a
          :href="waLink"
          target="_blank"
          class="rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(22,163,74,0.25)] hover:shadow-[0_4px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Konsultasi
        </a>
      </div>

      <!-- Mobile Button -->
      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-primary-300 hover:text-primary-600 hover:shadow-md md:hidden"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
      >
        <!-- Hamburger icon -->
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- Close icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="md:hidden border-t border-slate-200 bg-white px-6 pb-6 pt-4 shadow-lg">
        <div class="mb-4 rounded-xl bg-primary-50 px-4 py-3 text-sm text-primary-700 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            Kamu di: <span class="font-semibold">{{ currentSectionLabel }}</span>
          </span>
        </div>

        <div class="space-y-2">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.section"
            :to="item.href"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all"
            :class="isActive(item)
              ? 'bg-primary-50 text-primary-700'
              : 'text-slate-700 hover:bg-slate-50 hover:text-primary-600'"
            @click="closeMenu"
          >
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="isActive(item) ? 'bg-primary-500' : 'bg-slate-300'"
            ></span>
            {{ item.label }}
          </NuxtLink>

          <div class="pt-2">
            <a
              :href="waLink"
              target="_blank"
              class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-3.5 text-center text-base font-semibold text-white shadow-[0_4px_16px_rgba(22,163,74,0.25)] transition-all hover:shadow-[0_6px_24px_rgba(22,163,74,0.35)]"
              @click="closeMenu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z" />
              </svg>
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
