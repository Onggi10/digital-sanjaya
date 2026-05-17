<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Brand -->
      <div>
        <h3 class="text-xl font-bold text-white mb-4">
          Digital Sanjaya
        </h3>
        <p class="text-sm leading-relaxed">
          Kami membantu bisnis berkembang melalui solusi digital
          yang modern, cepat, dan handal.
        </p>
      </div>

      <!-- Menu -->
      <div>
        <h4 class="text-white font-semibold mb-4">Menu</h4>
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
          <li><NuxtLink to="/#services" class="footer-link">Layanan</NuxtLink></li>
          <li><NuxtLink to="/#pricing" class="footer-link">Harga</NuxtLink></li>
          <li><NuxtLink to="/#contact" class="footer-link">Kontak</NuxtLink></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-4">Contact</h4>
        <ul class="space-y-2 text-sm">
          <li>Email: onggisanjaya@gmail.com</li>
          <li>Phone: +62 895 3131 0890</li>
          <li>Jln Lebak Pasar, Babakan Pasar, Kota Bogor, Bogor Tengah, 16126, Jawa Barat, Indonesia</li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-700 text-center py-4 text-sm">
      © {{ new Date().getFullYear() }} PT Digital Sanjaya. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply hover:text-white transition;
}
</style>
