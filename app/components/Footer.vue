<template>
  <footer class="bg-slate-900 text-slate-300">
    <!-- Subtle top border -->
    <div class="h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-blue-500"></div>

    <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Brand -->
      <div class="md:col-span-1">
        <div class="flex items-center gap-3 mb-4">
          <img
            src="/favicon.png"
            alt="Digital Sanjaya"
            class="h-10 w-10 object-contain"
          />
          <h3 class="text-xl font-bold text-white">Digital Sanjaya</h3>
        </div>
        <p class="text-sm leading-relaxed text-slate-400">
          Kami membantu UMKM dan bisnis berkembang melalui solusi digital yang modern, cepat, dan terpercaya.
        </p>

        <a
          href="https://wa.me/6289531310890"
          target="_blank"
          class="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z" />
          </svg>
          Konsultasi Gratis
        </a>
      </div>

      <!-- Menu -->
      <div>
        <h4 class="text-white font-semibold mb-5">Menu</h4>
        <ul class="space-y-3">
          <li>
            <NuxtLink to="/" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Beranda
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#services" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Layanan
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#pricing" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Harga
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#portfolio" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Portofolio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Blog
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Layanan -->
      <div>
        <h4 class="text-white font-semibold mb-5">Layanan</h4>
        <ul class="space-y-3">
          <li>
            <NuxtLink to="/services/web-development" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Web Development
            </NuxtLink>
          </li>
          <li>
            <a href="https://wa.me/6289531310890?text=Saya%20tertarik%20dengan%20Website%20Undangan" target="_blank" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Undangan Digital
            </a>
          </li>
          <li>
            <a href="https://wa.me/6289531310890?text=Saya%20tertarik%20dengan%20jasa%20Desain" target="_blank" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Jasa Desain
            </a>
          </li>
          <li>
            <a href="https://wa.me/6289531310890?text=Saya%20tertarik%20dengan%20jasa%20Entry%20Data" target="_blank" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
              Entry Data
            </a>
          </li>
        </ul>
      </div>

      <!-- Kontak -->
      <div>
        <h4 class="text-white font-semibold mb-5">Kontak</h4>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p class="text-sm font-medium text-white">Email</p>
              <a href="mailto:onggisanjaya@gmail.com" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                onggisanjaya@gmail.com
              </a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div>
              <p class="text-sm font-medium text-white">WhatsApp</p>
              <a href="https://wa.me/6289531310890" target="_blank" class="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                +62 895 3131 0890
              </a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p class="text-sm font-medium text-white">Alamat</p>
              <p class="text-sm text-slate-400 leading-relaxed">
                Jln Lebak Pasar, Babakan Pasar<br />
                Bogor Tengah 16126<br />
                Jawa Barat, Indonesia
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-slate-800 text-center py-5 px-6">
      <p class="text-sm text-slate-500">
        &copy; {{ new Date().getFullYear() }} PT Digital Sanjaya. Hak cipta dilindungi.
      </p>
    </div>
  </footer>
</template>
