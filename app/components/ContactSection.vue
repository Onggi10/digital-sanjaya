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

  const phoneNumber = '6289531310890' // nomor WA tanpa +

  const text = `
Halo, saya ${name.value}
Email: ${email.value}

Pesan:
${message.value}
  `

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')

  // reset form
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section id="contact" class="py-20">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      
      <!-- Info -->
      <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <h2 class="text-2xl font-semibold mb-6">Kontak Kami</h2>

        <ul class="space-y-5">
          <li class="flex items-start gap-4">
            <div
              class="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg text-lg"
            >
              ✉️
            </div>
            <div>
              <p class="font-medium text-gray-800">Email</p>
              <p class="text-gray-600">onggisanjaya@gmail.com</p>
            </div>
          </li>

          <li class="flex items-start gap-4">
            <div
              class="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-lg text-lg"
            >
              📞
            </div>
            <div>
              <p class="font-medium text-gray-800">WhatsApp</p>
              <p class="text-gray-600">+62 895 3131 0890</p>
            </div>
          </li>

          <li class="flex items-start gap-4">
            <div
              class="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg text-lg"
            >
              📍
            </div>
            <div>
              <p class="font-medium text-gray-800">Alamat</p>
              <p class="text-gray-600">Jln Lebak Pasar, Babakan Pasar, Kota Bogor,</p>
              <p class="text-gray-600">Bogor Tengah, 16126, Jawa Barat, Indonesia</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Form -->
      <form
        @submit.prevent="sendToWhatsApp"
        class="bg-white p-8 rounded-2xl shadow-md space-y-5"
      >
        <h2 class="text-2xl font-semibold mb-2">Kirim Pesan</h2>
        <p class="text-gray-600 mb-4">
          Pesan akan dikirim langsung ke WhatsApp kami.
        </p>

        <div>
          <label class="block mb-1 font-medium">Nama</label>
          <input
            v-model="name"
            type="text"
            placeholder="Nama lengkap"
            class="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-green-200"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="email@contoh.com"
            class="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-green-200"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Pesan</label>
          <textarea
            v-model="message"
            rows="4"
            placeholder="Tuliskan pesan Anda..."
            class="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-green-200"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
        >
          <span>💬</span>
          Kirim ke WhatsApp
        </button>
      </form>

    </div>
  </section>
</template>
