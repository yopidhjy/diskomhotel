# Product Requirements Document (PRD) - DiskonHotel

## 1. Project Overview
**Name:** DiskonHotel (Diskon Hotel Indonesia)
**Description:** A web-based hotel booking platform designed to offer users discounted hotel rooms, flash sales, and a seamless booking experience. It includes a customer-facing frontend for searching and booking rooms, and a secure admin backend for managing inventory, promotions, and verifying payments.
**Current Tech Stack:** PHP (Native), MySQL (PDO), Tailwind CSS, FontAwesome, JavaScript (Vanilla).

## 2. Target Audience
1.  **Customers (End Users):** Travelers looking for affordable, discounted hotel stays with an easy booking and payment process.
2.  **Administrators:** Platform owners who manage hotel data, validate payments, and configure marketing campaigns (promo codes & flash sales).

## 3. Core Features & User Stories

### 3.1. Customer Frontend
*   **Search & Discovery (`index.php`)**
    *   Users can search for hotels by Destination (City), Check-in Date, Check-out Date, and Number of Rooms.
    *   Users can view active promotional campaigns/banners.
    *   Users can see a list of recommended hotels showing the lowest available room price.
*   **Hotel & Room Details (`detail_hotel.php`)**
    *   Users can view hotel details, location, and description.
    *   Users can view available room types within the hotel, including capacity (max guests) and price per night.
    *   Users can adjust their search parameters (dates, room count) directly from this page.
*   **Booking Process (`pesan.php`)**
    *   Users can view a booking summary (dates, duration, room count, subtotal).
    *   Users can input their personal details (Name matching ID, Email, WhatsApp number).
    *   **Discount Engine:** 
        *   System automatically applies a Global Flash Sale discount if active.
        *   Users can input Promo Codes for additional fixed or percentage-based discounts.
    *   Users select a payment method (Bank Transfer or QRIS).
    *   *System Action:* Upon booking submission, the system generates a unique Booking ID (`DH-XXXXXX`) and sends an automated Telegram notification to the Admin.
*   **Payment & Verification (`pembayaran.php`)**
    *   Users are redirected to a status page based on their Booking ID.
    *   If QRIS is selected, the system generates a **Dynamic QRIS** code (calculating CRC16 and embedding the exact total amount).
    *   Users can upload proof of payment (JPG/PNG/WEBP).
    *   Users can track their booking status (`pending`, `confirmed`, `cencel`).

### 3.2. Admin Backend (`admin/index.php`)
*   **Authentication:** Secure login using password hashing (`password_verify`).
*   **Dashboard & Order Management:**
    *   View all incoming bookings.
    *   View uploaded payment proofs.
    *   Update order statuses (`pending` -> `confirmed` or `cencel`).
*   **Master Data Management (CRUD):**
    *   **Cities (`tb_kota`):** Manage locations with images.
    *   **Hotels (`tb_hotel`):** Manage hotel info, descriptions, images, and map them to cities.
    *   **Rooms (`tb_kamar`):** Manage room types, base pricing, capacities, and map them to hotels.
    *   **Campaigns (`tb_campaign`):** Manage promotional banners shown on the homepage.
    *   **Payment Methods (`tb_pembayaran`):** Manage Bank Accounts and Static QRIS strings.
*   **Marketing Tools:**
    *   **Promo Codes (`tb_promo`):** Create voucher codes (percentage or fixed amount) with minimum spend requirements.
    *   **Global Settings (`tb_pengaturan`):** Toggle a sitewide "Flash Sale" percentage discount applied to all rooms.

## 4. Database Architecture

The system utilizes a relational database (`diskonh1_db`) with the following core entities:

1.  `tb_admin`: Stores admin credentials (`id`, `username`, `password_hash`).
2.  `tb_kota`: Stores city/destination data.
3.  `tb_hotel`: Stores hotel details and foreign key `id_kota`.
4.  `tb_kamar`: Stores room specifics, pricing, and foreign key `id_hotel`.
5.  `tb_campaign`: Stores promotional banners.
6.  `tb_pembayaran`: Stores payment gateways (Bank info / QRIS string).
7.  `tb_promo`: Stores voucher codes, types (`percent`, `fixed`), and thresholds.
8.  `tb_pengaturan`: Stores key-value settings (e.g., `diskon_global`).
9.  `tb_pesanan`: Stores the transactional booking data:
    *   Booking ID, Guest Info, Foreign keys for Hotel, Room, and Payment.
    *   Dates, Total Price, Status, Payment Proof filename, and Timestamp.

## 5. Third-Party Integrations & Specific Logic
*   **Telegram Bot API:** Used in `pesan.php` to push real-time notifications to the admin's Telegram group/chat whenever a new booking is created.
*   **Dynamic QRIS Generator:** Custom PHP logic in `pembayaran.php` that takes a static QRIS string from the database, injects the transaction nominal (Tag 54), recalculates the CRC16 checksum, and generates a dynamic QR code via the `api.qrserver.com` API.
*   **File Uploads:** Native PHP file handling for Master Data images (Cities, Hotels, Rooms, Campaigns) and User Payment Proofs, storing them in the `/uploads/` directory.

## 6. Migration / Refactoring Goals (Context for AI)
*   The current architecture is native PHP (monolithic, mixed logic and presentation).
*   When rebuilding or extending the UI/UX (referencing `design.md`), ensure that the core logic—specifically the Telegram notifications, Dynamic QRIS calculations, and multi-layered discount engine (Flash Sale + Promo Code)—are perfectly preserved in the new stack.
*   The new frontend should map directly to the existing database schema to prevent data loss.
