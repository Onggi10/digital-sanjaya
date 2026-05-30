    <script setup>
const phoneNumber = '6289531310890'

const waLink =
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Halo, saya ingin mulai kerja sama.'
  )}`
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 min-h-screen flex flex-col items-center justify-center py-24 text-center text-white">
    <!-- Background Decor -->
    <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6TTI2IDU0djEwaC0ydjEwaC00djJoNHYyaDJ2MTBoNHYtMmgtNHptMTAgMTBoLTJ2LTRoNHYyaC0yeiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+')]"></div>
    <div class="absolute top-0 left-1/2 w-96 h-96 bg-primary-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
    
    <div class="max-w-3xl mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Siap Membawa Bisnis Anda ke Level Berikutnya?
      </h2>
      <p class="text-primary-100 text-lg md:text-xl mb-10 opacity-90">
        Konsultasikan kebutuhan digital Anda sekarang. Tim kami siap membantu memberikan solusi terbaik dengan harga transparan.
      </p>

      <a
        :href="waLink"
        target="_blank"
        class="inline-flex items-center justify-center bg-white text-primary-700 px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z" />
        </svg>
        Chat WhatsApp Kami
      </a>
    </div>
  </section>
</template>