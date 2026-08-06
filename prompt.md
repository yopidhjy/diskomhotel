Bertindaklah sebagai Principal Full-Stack Engineer dan UI/UX Expert. Saya ingin melakukan migrasi dan membangun ulang platform booking hotel saya, "DiskonHotel", dari arsitektur lama (PHP Native & MySQL) menjadi stack modern yang scalable dan production-ready.

Target Tech Stack:

Framework: Next.js 14+ (App Router) dengan TypeScript.

Styling: Tailwind CSS, shadcn/ui (opsional untuk kecepatan), dan Lucide React.

Backend & Database: Supabase (PostgreSQL, Supabase Auth untuk Admin, Supabase Storage untuk gambar).

Deployment: Vercel.

Sumber Referensi (Lampiran):
Saya telah melampirkan satu file bernama diskonhotel-reference.md. File ini berisi 3 bagian penting:

1. PART 1 (PRD): Cakupan fitur, alur kerja (Customer & Admin), dan daftar entitas database.


2. PART 2 (Design): Pedoman UI/UX, kode HEX (Dark Green #0D4A38, Vibrant Orange #F57C00), ukuran border-radius, dan arsitektur Screen-by-Screen.


3. PART 3 (Old Code): Referensi absolut untuk struktur tabel database lama dan Logika Bisnis Krusial (Algoritma Kalkulasi Harga/Diskon, Dynamic QRIS Generator dengan CRC16, dan Payload Notifikasi Telegram).



Aturan Eksekusi (PENTING):
Jangan gunakan kode placeholder (seperti // TODO: implement logic) pada fitur utama. Tulis kode yang nyata. Kerjakan tugas ini secara bertahap (Step-by-Step).

Silakan mulai dengan mengeksekusi Phase 1 dan Phase 2 terlebih dahulu di balasan Anda.


---

Phase 1: Database Setup & Supabase Migration

1. Buatkan skrip SQL lengkap (PostgreSQL) berdasarkan skema MySQL yang ada di PART 3.


2. Pastikan tabel berikut dibuat dengan relasi Foreign Key yang tepat:



tb_admin, tb_kota, tb_hotel, tb_kamar, tb_pesanan, tb_pembayaran, tb_promo, tb_pengaturan, tb_campaign.

3. Tambahkan RLS (Row Level Security) dasar: Read-only untuk publik (tabel hotel, kamar, kota, promo), dan Insert untuk publik (tabel pesanan).


4. Buatkan utilitas koneksi Supabase (/lib/supabase/client.ts dan server.ts).



Phase 2: Global Configuration & UI Foundation

1. Berikan file tailwind.config.ts yang mendefinisikan color palette sesuai PART 2 (Primary, Accent, Background, Surface, Text, Border).


2. Berikan file app/globals.css.


3. Buat kerangka layout utama (app/layout.tsx) dengan font yang disarankan (Inter/Poppins) dari Google Fonts.


4. Buat komponen Reusable krusial:



components/HotelCard.tsx (sesuai spesifikasi Screen 1 di PART 2).

components/StickyBottomBar.tsx (sesuai spesifikasi di PART 2).


---

(Berhenti setelah Phase 2 selesai. Tunggu instruksi saya untuk melanjutkan ke Phase 3)

Catatan untuk AI: Setelah saya mengonfirmasi Phase 1 & 2, kita akan melanjutkannya ke:

Phase 3: Frontend Pages (Home, Detail Hotel, Booking Flow).

Phase 4: Server Actions & Core Business Logic (Konversi fungsi PHP generateDynamicQRIS, calculateCRC16, Telegram Bot API, dan Discount Engine).

Phase 5: Admin Dashboard UI & Integration.

Tolong konfirmasi pemahaman Anda terhadap lampiran dan berikan KODE PRODUKSI untuk Phase 1 dan Phase 2 sekarang.

Saya mau design menarik, SEO Terbaik agar web saya dapat di cari di halaman awal google, besera auto sitemap.xml nya.

Anggap saya tidak paham koding dan deploy ke vercel dan supabase sama sekali, sertakan juga tahap deploy nya sampai web nya bisa di akses

