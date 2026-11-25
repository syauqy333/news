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
    ringkasan: "PLN UID S2JB Bangun Jalan dan Parit di Ponpes Madinah Muara Tembesi.",
    gambar: "img/bantuan.jpg",                               // contoh: "img/pendaftaran.jpg" (kosong = kotak hijau)
    alt: "",                                  // deskripsi gambar, untuk aksesibilitas
    isi: [
      "BATANG HARI – Akses menuju Pondok Pesantren Madinah di Kelurahan Kampung Baru, Kecamatan Muara Tembesi, Kabupaten Batang Hari, Provinsi Jambi, kini jauh lebih layak, aman, dan tertata. Kondisi jalan yang sebelumnya kurang memadai serta rawan genangan air saat musim hujan telah diperbaiki melalui program Tanggung Jawab Sosial dan Lingkungan (TJSL) PT PLN (Persero) Unit Induk Distribusi Sumatera Selatan, Jambi, dan Bengkulu (UID S2JB).",
      "Program TJSL tahun 2026 ini difokuskan pada pembangunan saluran drainase (parit) dan pengerasan jalan menuju lingkungan pesantren dengan estimasi pengerjaan sekitar 90 hari kerja. Dari dokumentasi lapangan, jalur yang semula berupa tanah berlubang dan tergenang kini telah diperkeras dengan material batu serta dilengkapi saluran parit di sisi jalan sehingga aliran air lebih terkendali.",
      "Pimpinan Pondok Pesantren Madinah menyampaikan apresiasi tinggi atas realisasi bantuan infrastruktur tersebut. Menurutnya, perbaikan akses dan saluran air sangat menunjang kenyamanan mobilitas para santri, guru, wali santri, maupun warga sekitar sekaligus mendukung kelancaran kegiatan belajar mengajar sehari-hari.",
       { kutipan: "Dengan adanya bantuan pembuatan parit dan pengerasan jalan, akses menuju pondok pesantren menjadi lebih baik, aman, dan nyaman untuk dilalui oleh para santri, guru, orang tua, maupun masyarakat, ''ujar Pimpinan Pondok Pesantren Madinah." },
      "Manfaat serupa juga dirasakan oleh tenaga pendidik dan warga setempat. Alkian Lubis, S.Pd., tenaga pendidik Pondok Pesantren Madinah, menuturkan bahwa lingkungan yang lebih tertata dan berkurangnya genangan air memberi dorongan positif bagi aktivitas pendidikan. Sementara itu, Pak Wagino selaku perwakilan masyarakat sekitar menilai perbaikan jalan tersebut sangat membantu aktivitas harian warga, terutama ketika musim hujan tiba.",
      "Secara keseluruhan, program ini ditargetkan memberikan manfaat langsung kepada lebih dari 80 santri dan tenaga pendidik, serta manfaat tidak langsung bagi lebih dari 300 warga sekitar. Selain memperkuat sinergi antara dunia usaha, masyarakat, dan lembaga pendidikan keagamaan, langkah ini juga sejalan dengan komitmen keberlanjutan (ESG) dan dukungan terhadap pembangunan infrastruktur daerah."
    ]
  },
  
