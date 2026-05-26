const templates = [
  {
    slug: 'tren-web-design-2026',
    title: '5 Tren Web Design 2026 yang Menguatkan Brand Bisnis',
    category: 'Desain Web',
    summary:
      'Perubahan desain web terbaru sekarang fokus ke pengalaman pengguna, kecepatan, dan estetika yang mampu menaikkan kepercayaan pelanggan.',
    source: 'Digital Sanjaya',
    isExternal: false,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    content: `
<p>Di 2026, website profesional untuk bisnis jasa website semakin ditentukan oleh:</p>
<ul class="list-disc list-inside space-y-2">
  <li><strong>Kecepatan dan performa</strong> mobile-first yang menjadi standar bagi calon klien.</li>
  <li><strong>Desain minimalis dengan animasi halus</strong> untuk memperkuat citra brand tanpa mengganggu konten.</li>
  <li><strong>Interaksi mikro dan CTA yang jelas</strong> untuk mempermudah pengunjung melakukan tindakan.</li>
</ul>
<p>Dengan menerapkan tren ini, website bisnis Anda tidak hanya menarik secara visual, tapi juga membangun kepercayaan untuk layanan digital yang ditawarkan.</p>
`,
  },
  {
    slug: 'ai-untuk-optimasi-website-umkm',
    title: 'AI untuk Optimasi Website dan Pemasaran UMKM',
    category: 'Teknologi',
    summary:
      'AI kini bukan lagi sekadar buzzword; digunakan untuk personalisasi konten, analisis trafik, dan kampanye marketing yang lebih efektif.',
    source: 'Digital Sanjaya',
    isExternal: false,
    image:
      'https://images.unsplash.com/photo-1551516594-4e33f0b8e73e?auto=format&fit=crop&w=1200&q=80',
    content: `
<p>Penggunaan AI membantu bisnis jasa website membuat solusi yang lebih tepat sasaran, misalnya:</p>
<ul class="list-disc list-inside space-y-2">
  <li><strong>Rekomendasi konten dinamis</strong> sesuai preferensi pengunjung.</li>
  <li><strong>Analisis kata kunci otomatis</strong> untuk meningkatkan SEO dan jangkauan organik.</li>
  <li><strong>Chatbot dan formulir cerdas</strong> yang meningkatkan interaksi pelanggan tanpa harus menunggu staf.</li>
</ul>
<p>Dengan memasukkan teknologi ini ke dalam layanan website, Anda bisa menawarkan nilai tambah yang kuat untuk UMKM dan bisnis digital.</p>
`,
  },
  {
    slug: 'keamanan-website-bisnis-online',
    title: 'Keamanan Website: Prioritas Utama Bisnis Online',
    category: 'Keamanan',
    summary:
      'Serangan siber dan kebocoran data menuntut semua website bisnis agar selalu update, menggunakan SSL, dan menerapkan lapisan proteksi tambahan.',
    source: 'Digital Sanjaya',
    isExternal: false,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    content: `
<p>Pemilik bisnis harus memperhatikan beberapa langkah keamanan website berikut:</p>
<ul class="list-disc list-inside space-y-2">
  <li><strong>SSL/TLS</strong> wajib untuk melindungi data pengunjung dan meningkatkan kepercayaan.</li>
  <li><strong>Backup otomatis</strong> untuk meminimalisir downtime saat terjadi masalah.</li>
  <li><strong>Pembaruan sistem</strong> dan plugin secara berkala agar celah keamanan ditutup.</li>
</ul>
<p>Layanan website yang menjaga keamanan menjadi nilai jual bagi klien yang mencari jasa profesional dan handal.</p>
`,
  },
  {
    slug: 'digital-marketing-website-2026',
    title: 'Digital Marketing dan Website: Kolaborasi untuk Lead Berkualitas',
    category: 'Marketing',
    summary:
      'Website efektif kini harus diintegrasikan dengan strategi digital marketing untuk menghasilkan lead dan penjualan nyata.',
    source: 'Digital Sanjaya',
    isExternal: false,
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    content: `
<p>Website bukan hanya etalase; ia adalah pusat dari setiap strategi pemasaran online.</p>
<ul class="list-disc list-inside space-y-2">
  <li><strong>Landing page khusus</strong> untuk kampanye promosi dan penawaran musiman.</li>
  <li><strong>Formulir dan CTA</strong> yang terukur untuk mempermudah konversi calon pelanggan.</li>
  <li><strong>Integrasi analytics</strong> untuk memantau performa iklan dan menentukan investasi digital marketing berikutnya.</li>
</ul>
<p>Kolaborasi ini menjadikan website sebagai mesin growth yang relevan bagi bisnis jasa website dan klien mereka.</p>
`,
  },
]

const padZero = (value) => String(value).padStart(2, '0')

const formatDate = (date) => {
  const options = { day: '2-digit', month: 'long', year: 'numeric' }
  return date.toLocaleDateString('id-ID', options)
}

const generateDailyBlogPosts = () => {
  const today = new Date()
  const daySeed = Math.floor(today.getTime() / 86400000)

  return templates
    .map((post, index) => ({
      ...post,
      date: formatDate(new Date(today.getTime() - index * 86400000)),
      sortKey: (daySeed + index) % templates.length,
    }))
    .sort((a, b) => a.sortKey - b.sortKey)
}

export const blogPosts = generateDailyBlogPosts()
