<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const phoneNumber = '6289531310890'
const waLink = `https://wa.me/${phoneNumber}?text=Halo, saya ingin konsultasi.`
</script>

<template>
  <nav class="fixed w-full bg-white shadow z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-green-600">
        <img src="/favicon.png" alt="Digital Sanjaya Logo" class="h-8 w-8 object-contain" />
        <span>Digital Sanjaya</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#services" class="hover:text-green-600">Layanan</a>
        <a href="#pricing" class="hover:text-green-600">Harga</a>
        <a href="#contact" class="hover:text-green-600">Kontak</a>

        <!-- CTA -->
        <a
          :href="waLink"
          target="_blank"
          class="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Konsultasi
        </a>
      </div>

      <!-- Mobile Button -->
      <button
        class="md:hidden"
        @click="isOpen = !isOpen"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white px-6 pb-4 space-y-4">
      <a href="#services" class="block">Layanan</a>
      <a href="#pricing" class="block">Harga</a>
      <a href="#contact" class="block">Kontak</a>

      <a
        :href="waLink"
        target="_blank"
        class="block bg-green-600 text-white text-center py-2 rounded-lg"
      >
        Konsultasi
      </a>
    </div>
  </nav>
</template>