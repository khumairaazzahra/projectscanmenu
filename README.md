# Digital Menu + QR Code

Website menu mobile-first berdasarkan referensi desain yang diberikan.

## Isi project

- `index.html` — halaman menu utama
- `style.css` — desain responsive/mobile
- `script.js` — data menu, filter kategori, pencarian, modal detail
- `qr-generator.html` — generator QR Code setelah website di-deploy

## Cara menjalankan

1. Buka folder project.
2. Jalankan `index.html` menggunakan Live Server di VS Code.
3. Untuk HP, website harus dapat diakses melalui URL jaringan yang bisa dibuka HP atau setelah deploy.

## Cara deploy paling mudah: Netlify

1. Buka Netlify.
2. Pilih Add new site / Deploy manually.
3. Upload folder project ini atau hubungkan repository GitHub.
4. Setelah berhasil, kamu akan mendapatkan URL seperti:
   `https://nama-menu.netlify.app`
5. Buka:
   `https://nama-menu.netlify.app/qr-generator.html`
6. Masukkan URL website utama.
7. Klik Generate.
8. Download QR Code.
9. Cetak QR dan tempel di meja/kasir.

## Catatan

- Gambar menu memakai URL gambar online dari Unsplash.
- Untuk penggunaan produksi, sebaiknya gambar diganti dengan foto menu milik toko sendiri dan disimpan di folder `assets/`.
- Data harga/nama menu ada di `script.js`, jadi mudah diubah.
- Jangan gunakan `localhost` sebagai URL QR karena HP pelanggan tidak akan bisa mengakses komputer kamu.
