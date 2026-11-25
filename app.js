/* =========================================================
   app.js — membuat tampilan dari data.js
   Dipakai oleh index.html (daftar) dan artikel.html (detail)
   ========================================================= */
(function () {
  "use strict";

  var JUMLAH_AWAL = 9;
  var fmt = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" });

  // Berita diurutkan dari yang terbaru
  var semua = BERITA.slice().sort(function (a, b) {
    return a.tanggal < b.tanggal ? 1 : -1;
  });

  /* ---------- Helper ---------- */
  function tgl(iso) { return fmt.format(new Date(iso + "T00:00:00")); }

  function el(tag, kelas, teks) {
    var e = document.createElement(tag);
    if (kelas) e.className = kelas;
    if (teks) e.textContent = teks;
    return e;
  }

  function linkArtikel(a) { return "artikel.html?id=" + encodeURIComponent(a.id); }

  function gambar(a) {
    var d = el("div", "gambar");
    if (a.gambar) {
      var img = document.createElement("img");
      img.src = a.gambar;
      img.alt = a.alt || a.judul;
      img.loading = "lazy";
      d.appendChild(img);
    }
    return d;
  }

  function info(a) {
    var d = el("div", "info");
    d.appendChild(el("span", "kategori", a.kategori));
    var t = el("time", null, tgl(a.tanggal));
    t.setAttribute("datetime", a.tanggal);
    d.appendChild(t);
    return d;
  }

  function judulLink(tag, a) {
    var h = el(tag);
    var l = el("a", null, a.judul);
    l.href = linkArtikel(a);
    h.appendChild(l);
    return h;
  }

  function kartu(a) {
    var c = el("article", "kartu");
    c.appendChild(gambar(a));
    var isi = el("div", "isi");
    isi.appendChild(info(a));
    isi.appendChild(judulLink("h3", a));
    isi.appendChild(el("p", null, a.ringkasan));
    c.appendChild(isi);
    return c;
  }

  function utama(a) {
    var c = el("article", "utama");
    c.appendChild(gambar(a));
    var isi = el("div", "isi");
    isi.appendChild(info(a));
    isi.appendChild(judulLink("h2", a));
    isi.appendChild(el("p", null, a.ringkasan));
    c.appendChild(isi);
    return c;
  }

  // Link "Situs Ponpes" di menu
  var linkSitus = document.querySelectorAll("[data-situs]");
  for (var i = 0; i < linkSitus.length; i++) linkSitus[i].href = SITUS_UTAMA;

  var halaman = document.body.getAttribute("data-halaman");

  /* =========================================================
     HALAMAN DAFTAR (index.html)
     ========================================================= */
  if (halaman === "daftar") {
    var state = { kategori: "Semua", q: "", tampil: JUMLAH_AWAL };

    var wadahUtama = document.getElementById("utama-wadah");
    var wadahDaftar = document.getElementById("daftar");
    var wadahFilter = document.getElementById("filter");
    var inputCari = document.getElementById("cari");
    var tombolLebih = document.getElementById("lebih");
    var judulDaftar = document.getElementById("judul-daftar");

    // Buat tombol kategori dari data
    var daftarKategori = ["Semua"];
    semua.forEach(function (a) {
      if (daftarKategori.indexOf(a.kategori) === -1) daftarKategori.push(a.kategori);
    });
    daftarKategori.forEach(function (k) {
      var b = el("button", "chip", k);
      b.type = "button";
      b.setAttribute("aria-pressed", k === "Semua" ? "true" : "false");
      b.addEventListener("click", function () {
        state.kategori = k;
        state.tampil = JUMLAH_AWAL;
        var semuaChip = wadahFilter.children;
        for (var j = 0; j < semuaChip.length; j++) {
          semuaChip[j].setAttribute("aria-pressed", semuaChip[j] === b ? "true" : "false");
        }
        render();
      });
      wadahFilter.appendChild(b);
    });

    inputCari.addEventListener("input", function () {
      state.q = inputCari.value.trim().toLowerCase();
      state.tampil = JUMLAH_AWAL;
      render();
    });

    tombolLebih.addEventListener("click", function () {
      state.tampil += JUMLAH_AWAL;
      render();
    });

    function cocok(a) {
      if (state.kategori !== "Semua" && a.kategori !== state.kategori) return false;
      if (!state.q) return true;
      return (a.judul + " " + a.ringkasan + " " + a.kategori).toLowerCase().indexOf(state.q) !== -1;
    }

    function render() {
      var hasil = semua.filter(cocok);
      var mode = state.kategori === "Semua" && !state.q;

      wadahUtama.textContent = "";
      wadahDaftar.textContent = "";

      if (hasil.length === 0) {
        judulDaftar.hidden = true;
        wadahDaftar.appendChild(el("p", "kosong", "Tidak ada berita yang cocok. Coba kata kunci atau kategori lain."));
        tombolLebih.hidden = true;
        return;
      }

      var sisa = hasil;
      if (mode) {
        wadahUtama.appendChild(utama(hasil[0]));
        sisa = hasil.slice(1);
      }

      judulDaftar.hidden = !mode || sisa.length === 0;
      judulDaftar.textContent = "Berita lainnya";

      sisa.slice(0, state.tampil).forEach(function (a) {
        wadahDaftar.appendChild(kartu(a));
      });
      tombolLebih.hidden = sisa.length <= state.tampil;
    }

    render();
  }

  /* =========================================================
     HALAMAN DETAIL (artikel.html?id=...)
     ========================================================= */
  if (halaman === "detail") {
    var id = new URLSearchParams(window.location.search).get("id");
    var a = semua.filter(function (x) { return x.id === id; })[0];
    var wadah = document.getElementById("artikel");

    if (!a) {
      document.title = "Berita tidak ditemukan | News Ponpes Madinah";
      var p = el("p", "kosong", "Berita yang kamu cari tidak ditemukan.");
      var kembali = el("a", "kembali", "Kembali ke daftar berita");
      kembali.href = "index.html";
      wadah.appendChild(kembali);
      wadah.appendChild(p);
    } else {
      document.title = a.judul + " | News Ponpes Madinah";
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", a.ringkasan);

      var k = el("a", "kembali", "Kembali ke daftar berita");
      k.href = "index.html";
      wadah.appendChild(k);
      wadah.appendChild(info(a));
      wadah.appendChild(el("h1", null, a.judul));
      wadah.appendChild(gambar(a));

      var badan = el("div", "badan");
      a.isi.forEach(function (bagian) {
        if (typeof bagian === "string") {
          badan.appendChild(el("p", null, bagian));
        } else if (bagian.sub) {
          badan.appendChild(el("h2", null, bagian.sub));
        } else if (bagian.kutipan) {
          badan.appendChild(el("blockquote", null, bagian.kutipan));
        }
      });
      wadah.appendChild(badan);

      // Bagikan lewat WhatsApp
      var bagikan = el("div", "bagikan");
      bagikan.appendChild(el("span", null, "Bagikan berita ini"));
      var wa = el("a", "tombol", "Kirim lewat WhatsApp");
      wa.href = "https://wa.me/?text=" + encodeURIComponent(a.judul + " " + window.location.href);
      wa.target = "_blank";
      wa.rel = "noopener";
      bagikan.appendChild(wa);
      wadah.appendChild(bagikan);

      // Berita terkait (kategori sama dulu, lalu yang terbaru)
      var lain = semua.filter(function (x) { return x.id !== a.id; });
      lain.sort(function (x, y) {
        return (y.kategori === a.kategori) - (x.kategori === a.kategori);
      });
      lain = lain.slice(0, 3);
      if (lain.length) {
        var terkait = document.getElementById("terkait");
        terkait.appendChild(el("h2", "bagian-judul", "Baca juga"));
        var grid = el("div", "daftar");
        lain.forEach(function (x) { grid.appendChild(kartu(x)); });
        terkait.appendChild(grid);
      }
    }
  }
})();
