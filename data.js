/* =========================================================
   data.js — SEMUA BERITA DITULIS DI SINI
   Tambah berita baru: salin satu blok { ... } di bawah,
   taruh di bagian ATAS daftar, lalu ubah isinya.
   ========================================================= */

// Alamat website utama pondok (untuk link "Situs Ponpes" di menu)
const SITUS_UTAMA = "/";

const BERITA = [
  {
    id: "pembuatan-parit-dan-pengerasan-jalan-di-pondok-pesantren-madinah",       // unik, huruf kecil, pakai tanda hubung
    judul: "PLN UID S2JB Realisasikan Program TJSL Jalan dan Parit di Ponpes Madinah Muara Tembesi",
    kategori: "Berita",
    tanggal: "2026-11-20",                    // format: TAHUN-BULAN-TANGGAL
    ringkasan: "Pendaftaran dibuka mulai bulan ini. Calon santri bisa mendaftar langsung ke pondok atau melalui WhatsApp panitia.",
    gambar: "img/bantuan.jpg",                               // contoh: "img/pendaftaran.jpg" (kosong = kotak hijau)
    alt: "",                                  // deskripsi gambar, untuk aksesibilitas
    isi: [
      "BATANG HARI – Akses menuju Pondok Pesantren Madinah di Kelurahan Kampung Baru, Kecamatan Muara Tembesi, Kabupaten Batang Hari, Provinsi Jambi, kini jauh lebih layak, aman, dan tertata. Kondisi jalan yang sebelumnya kurang memadai serta rawan genangan air saat musim hujan telah diperbaiki melalui program Tanggung Jawab Sosial dan Lingkungan (TJSL) PT PLN (Persero) Unit Induk Distribusi Sumatera Selatan, Jambi, dan Bengkulu (UID S2JB).",
      "Program TJSL tahun 2026 ini difokuskan pada pembangunan saluran drainase (parit) dan pengerasan jalan menuju lingkungan pesantren dengan estimasi pengerjaan sekitar 90 hari kerja. Dari dokumentasi lapangan, jalur yang semula berupa tanah berlubang dan tergenang kini telah diperkeras dengan material batu serta dilengkapi saluran parit di sisi jalan sehingga aliran air lebih terkendali.",
      "Pimpinan Pondok Pesantren Madinah menyampaikan apresiasi tinggi atas realisasi bantuan infrastruktur tersebut. Menurutnya, perbaikan akses dan saluran air sangat menunjang kenyamanan mobilitas para santri, guru, wali santri, maupun warga sekitar sekaligus mendukung kelancaran kegiatan belajar mengajar sehari-hari.",
       { kutipan: "Contoh kutipan dari pengasuh atau narasumber ditulis seperti ini." },
      "Untuk informasi lebih lanjut, hubungi panitia melalui WhatsApp pondok."
    ]
  },
  {
    id: "lomba-tahfidz-provinsi",
    judul: "Santri Ikuti Lomba Tahfidz Tingkat Provinsi",
    kategori: "Kegiatan",
    tanggal: "2026-11-15",
    ringkasan: "Tiga santri Madinah mewakili pondok dalam lomba tahfidz yang digelar di Bandar Lampung.",
    gambar: "",
    alt: "",
    isi: [
      "Tiga santri Madinah mewakili pondok dalam lomba tahfidz tingkat provinsi. Ganti paragraf ini dengan isi berita yang sebenarnya."
    ]
  },
  {
    id: "kajian-kitab-kuning-rutin",
    judul: "Kajian Kitab Kuning Rutin Setiap Ba'da Subuh",
    kategori: "Kajian",
    tanggal: "2026-11-10",
    ringkasan: "Kajian terbuka untuk santri dan masyarakat sekitar, dipandu langsung oleh para ustaz.",
    gambar: "",
    alt: "",
    isi: [
      "Kajian kitab kuning diadakan rutin setiap ba'da Subuh dan terbuka untuk masyarakat sekitar. Ganti dengan isi berita yang sebenarnya."
    ]
  },
  {
    id: "asrama-putra-selesai-direnovasi",
    judul: "Asrama Putra Selesai Direnovasi",
    kategori: "Fasilitas",
    tanggal: "2026-11-03",
    ringkasan: "Renovasi meliputi kamar mandi, ruang belajar, dan penambahan ventilasi di setiap kamar.",
    gambar: "",
    alt: "",
    isi: [
      "Renovasi asrama putra telah selesai. Ganti dengan isi berita yang sebenarnya."
    ]
  },
  {
    id: "bakti-sosial-santri",
    judul: "Bakti Sosial Santri untuk Warga Sekitar",
    kategori: "Sosial",
    tanggal: "2026-10-28",
    ringkasan: "Santri membagikan paket sembako dan membersihkan lingkungan masjid bersama warga.",
    gambar: "",
    alt: "",
    isi: [
      "Santri bersama warga mengadakan bakti sosial. Ganti dengan isi berita yang sebenarnya."
    ]
  },
  {
    id: "juara-pidato-bahasa-arab",
    judul: "Juara Pidato Bahasa Arab Antarpesantren",
    kategori: "Prestasi",
    tanggal: "2026-10-20",
    ringkasan: "Santri kelas XI membawa pulang juara pertama dalam lomba pidato bahasa Arab.",
    gambar: "",
    alt: "",
    isi: [
      "Santri kelas XI meraih juara pertama lomba pidato bahasa Arab. Ganti dengan isi berita yang sebenarnya."
    ]
  },
  {
    id: "jadwal-libur-semester-ganjil",
    judul: "Jadwal Libur dan Kepulangan Santri Semester Ganjil",
    kategori: "Pengumuman",
    tanggal: "2026-10-12",
    ringkasan: "Santri pulang bertahap sesuai jadwal. Wali santri diminta memeriksa jadwal lengkap.",
    gambar: "",
    alt: "",
    isi: [
      "Santri pulang secara bertahap sesuai jadwal. Ganti dengan isi berita yang sebenarnya."
    ]
  }
];
