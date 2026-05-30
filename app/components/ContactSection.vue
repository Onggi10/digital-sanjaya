<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const sendToWhatsApp = () => {
  if (!name.value || !email.value || !message.value) {
    alert('Mohon lengkapi semua data')
    return
  }

  const phoneNumber = '6289531310890'

  const text = `
Halo, saya ${name.value}
Email: ${email.value}

Pesan:
${message.value}
  `

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')

  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden bg-white min-h-screen flex flex-col items-center justify-center py-20">
    <!-- Decorative blobs -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

    <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
      <!-- Section header -->
      <div class="text-center mb-14">
        <h2 class="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2">Hubungi Kami</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-900">Ada Pertanyaan? Kami Siap Membantu</h3>
        <p class="text-slate-600 mt-4 max-w-xl mx-auto">
          Isi form di bawah atau hubungi kami langsung. Tim kami akan merespon secepatnya.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
        <!-- Left: Contact Info -->
        <div class="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <h3 class="text-xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>

          <ul class="space-y-6">
            <li class="flex items-start gap-4 group">
              <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-slate-900">Email</p>
                <p class="text-slate-500 text-sm mt-0.5">onggisanjaya@gmail.com</p>
                <a href="mailto:onggisanjaya@gmail.com" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
                  Kirim Email →
                </a>
              </div>
            </li>

            <li class="flex items-start gap-4 group">
              <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-slate-900">WhatsApp</p>
                <p class="text-slate-500 text-sm mt-0.5">+62 895 3131 0890</p>
                <a href="https://wa.me/6289531310890" target="_blank" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
                  Chat Sekarang →
                </a>
              </div>
            </li>

            <li class="flex items-start gap-4 group">
              <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-slate-900">Alamat</p>
                <p class="text-slate-500 text-sm mt-0.5 leading-relaxed">
                  Jln Lebak Pasar, Babakan Pasar,<br />
                  Bogor Tengah 16126, Jawa Barat
                </p>
                <a href="https://maps.google.com/?q=Jln+Lebak+Pasar+Bogor" target="_blank" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
                  Lihat di Google Maps →
                </a>
              </div>
            </li>
          </ul>

          <div class="mt-8 pt-6 border-t border-slate-100">
            <p class="text-sm text-slate-500">
              <span class="font-semibold text-slate-700">Jam Operasional:</span><br />
              Senin - Jumat: 08.00 - 17.00<br />
              Sabtu: 08.00 - 14.00
            </p>
          </div>
        </div>

        <!-- Right: Form -->
        <form
          @submit.prevent="sendToWhatsApp"
          class="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-5"
        >
          <h3 class="text-xl font-bold text-slate-900 mb-1">Kirim Pesan</h3>
          <p class="text-slate-500 text-sm mb-4">
            Pesan akan dikirim langsung ke WhatsApp kami.
          </p>

          <div>
            <label class="block mb-1.5 text-sm font-semibold text-slate-700">Nama Lengkap</label>
            <input
              v-model="name"
              type="text"
              placeholder="Masukkan nama Anda"
              class="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-shadow"
              required
            />
          </div>

          <div>
            <label class="block mb-1.5 text-sm font-semibold text-slate-700">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="email@contoh.com"
              class="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-shadow"
              required
            />
          </div>

          <div>
            <label class="block mb-1.5 text-sm font-semibold text-slate-700">Pesan</label>
            <textarea
              v-model="message"
              rows="4"
              placeholder="Tuliskan pesan atau pertanyaan Anda..."
              class="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-shadow resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-3.5 rounded-xl font-bold text-base shadow-[0_4px_20px_rgba(22,163,74,0.25)] hover:shadow-[0_8px_30px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z" />
            </svg>
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
