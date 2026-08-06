**DATABASE**

-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 26 Jul 2026 pada 23.51
-- Versi server: 11.4.12-MariaDB-log
-- Versi PHP: 8.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diskonh1_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_admin`
--

CREATE TABLE `tb_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tb_admin`
--

INSERT INTO `tb_admin` (`id`, `username`, `password_hash`) VALUES
(1, 'admin', '$2y$10$QeK68SYeKm3938Sa1/oZh.ZGB3Puu6Od.JEj0Lg1pMoDcaSFFdJui');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_campaign`
--

CREATE TABLE `tb_campaign` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_hotel`
--

CREATE TABLE `tb_hotel` (
  `id` int(11) NOT NULL,
  `id_kota` int(11) DEFAULT NULL,
  `nama_hotel` varchar(150) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tb_hotel`
--

INSERT INTO `tb_hotel` (`id`, `id_kota`, `nama_hotel`, `deskripsi`, `gambar`) VALUES
(1, 1, 'Cozy Studio Apartment with Balcony', 'Ciputra World Surabaya Vertu, Dukuh Pakis, 60225 Surabaya, Indonesia\r\n', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/713185397.jpg?k=26667b0267a69e613114ef194a22bf021646b1f81e19fa815e6d3b90dceb4a22&o='),
(3, 1, 'Tunjungan Hotel', 'Jl. Tunjungan 102-104, Tegalsari, 60011 Surabaya, Indonesia\r\n', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/740666344.jpg?k=b090c45ac4a69105ebc133b10cdf44e908701969b10b14166afa52f35b737673&o='),
(5, 1, 'The Westin Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/462743927.jpg?k=6020f7c0b7128bcb9fc35529c4798972244e507ef9b373f51e2ba3d132d61aca&o='),
(6, 1, 'Ascott Waterplace Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/850621273.jpg?k=92e46bc8c3a93ad7f5ccd309751ba58e9cf16a85385f4d30d295f0e60e6401ff&o='),
(7, 1, 'Whiz Luxe Hotel Spazio Surabaya', 'Spazio Tower, Jl. Mayjend. Jonosewojo No.Kav. 3, Pradahkalikendal, Kec. Dukuhpakis, Kota SBY, Jawa Timur 60226, Dukuh Pakis, 60226 Surabaya, Indonesia', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550920858.jpg?k=2c99d4018323fe6fa49ca777d43a80deaf27bd34001ed6b66778840ffc272a35&o='),
(8, 1, 'Cozy Studio Apartment with Balcony', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/706719264.jpg?k=f2a900285c3b0181f786bc2b754675f6f28a616208a7ff8d019204d1eb0340e3&o='),
(9, 1, 'LAMORA Kota Lama Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/622538396.jpg?k=57dbecb3b929f2262c03065979baa0eefd3b789276a020282f2b8be8ba9191a0&o='),
(10, 1, 'The Cendana La Riz Mansion Pakuwon Mall', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/666111392.jpg?k=97774128d2e223ed35de650ed2111d7a787afa2f82c416ba63cfddae5fd36261&o='),
(11, 1, 'The Square Surabaya Hotel', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/145615810.jpg?k=ac235b1617c7952190faae18da3c22d12b0576d3b8a8eb00779f464b189e12f2&o='),
(13, 1, 'favehotel Graha Agung Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/197777131.jpg?k=e7cc5663b2981abef3c0900d4259a152a2f26c2ecc02439014033a773729879a&o='),
(14, 1, 'Kampi Hotel Tunjungan - Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/317301776.jpg?k=d372e51abd9099923d1c46e66fdd7f7542e855bf17d54975fb65923c65934dd3&o='),
(15, 1, 'Hotel Santika Pandegiling - Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/317258212.jpg?k=e05311e838e0f6f3b87118f8b4cc65ab5eb56f158878b8f63b7344cbe7f39612&o='),
(16, 1, 'Best Western De Papilio', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/806399630.jpg?k=9f8587794d3ac52604e8e45df6e330e470573f2572756b9d0fe1df431414929d&o='),
(17, 1, 'The Southern Hotel Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/770603682.jpg?k=a72d7801b87acd6a824c2d3ef25f3a2bb635a54e94c8654bfc6859eaff6057a4&o='),
(18, 1, 'Novotel Samator Surabaya Timur', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/875102122.jpg?k=5f99dbcc01e280d8d01925633606c11b58142dc403082eaf7ff5769126a24716&o='),
(19, 1, 'Hotel Majapahit Surabaya MGallery', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/873625527.jpg?k=2ef98d5cc6d3d94f0ba523620d37f7090d53c8bacb23569f48b78a7a3d2cabe5&o='),
(20, 1, 'Platinum Hotel Tunjungan Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440907123.jpg?k=f2a25254082ea9b3b8d4c1f3f72b89d7dbf5ff83d7d9cb27175c901d0013b97d&o='),
(21, 1, 'Choice City Hotel', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/249983474.jpg?k=bca0fd14e17e7f2785f5a0e27c718bac96c9877541448633bd8dac366a26babc&o='),
(22, 1, 'Spacious Comfortable Apartement South Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max300/634721989.jpg?k=60e53c7fd305194b1382f8c6214a620e167c7fc13e54751c37004dbd75021202&o='),
(23, 1, 'Hotel 88 Embong Kenongo - Kayun By WH', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/245535445.jpg?k=bbde498cde55c09e12414c7f8ac68a7b0f2185993e19ce110feef13865df4a09&o='),
(24, 1, 'Surabaya River View Hotel', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424052252.jpg?k=67bcca3596946eeba0c03bc9f79ab481b28622b185a8053b704505354bae7da0&o='),
(25, 1, 'Kokoon Hotel Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/272395879.jpg?k=61c95f81b44697cc3ea94ddaca190ed460037475cc294af43f4f096296dd16ce&o='),
(26, 1, 'Shangri-la Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/14075915.jpg?k=1dd8464114e61f05a0f308fa2ad51351a440020d745a60e72c3b6aae66e08440&o='),
(27, 1, 'Wyndham Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/773631831.jpg?k=6731dd235477c324c8458d64d7201012fef18621dd0150c71e006ed5bad38961&o='),
(28, 1, 'Movenpick Surabaya City', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/751927423.jpg?k=c7e31f25fd4ae4c4fc8e78dfe82c36938eca64d51e7686ec6734e37ac84c8eb7&o='),
(29, 1, 'Java Paragon Hotel & Residences', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/68717308.jpg?k=1a509c87f118a4e887cec65fb870cc2e62b5c9a007530f189771cda01568156b&o='),
(30, 1, 'Four Points by Sheraton Surabaya, Pakuwon Indah', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465570701.jpg?k=6db9e9c64649af3f208190397ea710b9a590e1285f62bea7b51d7b5b877fe67d&o='),
(31, 1, 'The Southern Hotel Surabaya', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/770603682.jpg?k=a72d7801b87acd6a824c2d3ef25f3a2bb635a54e94c8654bfc6859eaff6057a4&o='),
(32, 1, 'Ibis Surabaya City Center', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/874938372.jpg?k=021e6cef9b94c6681315b6c2478ac9b25ad18e41cf8d8e09ac19db38facacfa2&o='),
(33, 2, 'Ayaartta Hotel Malioboro', '', 'https://cf.bstatic.com/xdata/images/hotel/max300/112354036.jpg?k=770762bbf3339385671f4be370e69103b14d45b8caa3f471edc4b77d66341981&o='),
(34, 2, 'eL Hotel Yogyakarta Malioboro', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/277355067.jpg?k=9364ae18aad27a01425b561977629b53f77607f316eeb1dec55c66e705d62eec&o='),
(35, 2, 'KHAS Malioboro Hotel', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/574561751.jpg?k=6580c6f08347f08ed79219c338780e5db8db83f35b94da1d3925ee1e09c417e1&o='),
(37, 2, 'Cordia Hotel Yogyakarta - Hotel Dalam Bandara', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/522518721.jpg?k=7acee93f3234c3565f480cc16778eea17d6ae0cbf96cdee3a9d99e61d54a61fd&o='),
(38, 2, 'Yogyakarta Marriott Hotel', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/467524871.jpg?k=23f4ddf9e9e1bc2d6ce41cfb2b1451b39ad69b1d25ce9b76e5e913f8361103dd&o='),
(39, 2, 'Demoska Villa Jogja With Privatepool', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/491374896.jpg?k=49e722946cf19bb15497d593f680d12582c85f29f194dca0e40f711e2ff794e4&o='),
(40, 2, 'Platinum Adisucipto Hotel & Conference Center', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/363902717.jpg?k=ba1158fee75fa29420a35db01de34f02be998b6ae287888604e820c8de08048b&o='),
(41, 2, 'Burza Hotel Yogyakarta', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/406514739.jpg?k=87b779882796f8f082d01da7fb867bff9eea0df0d97c5937da5f52ee7b77aac6&o='),
(42, 2, 'Malyabhara Hotel Yogyakarta Malioboro', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/435479919.jpg?k=82ef1f355d02e8df3fc746c314b4a05b482c635129f50efc9e5087f4f5864422&o='),
(43, 2, 'Horison Emerald Timoho Yogyakarta', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/706873409.jpg?k=93fa62bef16d8a7dfe5c464e4587f58beead5c2566c133c58e0e4803f40ecd24&o='),
(44, 2, 'Grand Keisha Yogyakarta', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/867544787.jpg?k=0d351838cc1aeb94292d81e842b87b33905eb867298bd5fa93cdf8b6d2b6dfbc&o='),
(45, 2, 'Grand Tjokro Yogyakarta', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/714558155.jpg?k=f8c321111d1d04190374adc3f624b080fa993833bc88f9593e3900425666a8eb&o='),
(46, 2, 'Abadi Hotel Malioboro Yogyakarta', '', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/219482873.jpg?k=dbab40ac6d861b1b8f51c1019ac9d792e350f5f3548a735018cd89c674f5d084&o=');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_kamar`
--

CREATE TABLE `tb_kamar` (
  `id` int(11) NOT NULL,
  `id_hotel` int(11) DEFAULT NULL,
  `nama_kamar` varchar(150) DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL,
  `kapasitas` int(11) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tb_kamar`
--

INSERT INTO `tb_kamar` (`id`, `id_hotel`, `nama_kamar`, `harga`, `kapasitas`, `gambar`) VALUES
(1, 1, 'One-Bedroom Apartment with Balcony and City View ', 594000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/713185397.jpg?k=26667b0267a69e613114ef194a22bf021646b1f81e19fa815e6d3b90dceb4a22&o='),
(2, 3, 'Special Offer at Superior Room', 666000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320881575.jpg?k=36f77be203cdb40205151bfef47faa54512bbadfa6ff015844bcdad0bbc158b2&o='),
(3, 3, ' Special Offer at Superior Room Breakfast included', 883000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320881575.jpg?k=198b3f47dc8ebb6232a49566fdc7920b974f8b888fe2b87282c0bc0c466690f2&o='),
(4, 3, 'Special Offer at Deluxe Premier Room', 835000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/333371698.jpg?k=346f6aa1a32f8bb7bc29230fe2c4cf2961939544afb44219736066ef5f264bf1&o='),
(5, 3, 'Special Offer at Deluxe Premier Room Breakfast included in the price ', 895000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/531585148.jpg?k=91200c5fd828d0bc686f04db5d7b2f38cfd0d6a683e771c6ce865ecbf798f8f4&o='),
(6, 3, 'Deluxe Premier Room', 817000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/165224573.jpg?k=95cdc5e8fcf42436d4468f14966958c8698e83033fafbd05d3c8c2cb2637269f&o='),
(7, 3, 'Deluxe Premier Room Breakfast included in the price ', 1025000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/333371698.jpg?k=346f6aa1a32f8bb7bc29230fe2c4cf2961939544afb44219736066ef5f264bf1&o='),
(8, 3, 'Junior Suite Breakfast included in the price ', 1305000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247519456.jpg?k=12b7fda55c856ac8aa6a00b8b03cf15803868e46de187d5fca6cdd01cc7c57d2&o='),
(9, 3, 'Business Single Room  Breakfast included in the price', 1506000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/737885360.jpg?k=98092e3fcbfa3fc8f999e598e759ec3386cd1c25d433300934755e7c496a3fd7&o='),
(10, 5, 'Westin Deluxe, Guest room', 2822000.00, 1, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456090334.jpg?k=f3c02632cfd8ed2ebb2260720f656da3832ada47bcb2f4a084775e59e482db78&o='),
(11, 5, 'Westin Deluxe, Guest room Breakfast', 3040000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456090334.jpg?k=f3c02632cfd8ed2ebb2260720f656da3832ada47bcb2f4a084775e59e482db78&o='),
(12, 5, 'Westin Deluxe, Guest room, 1 King', 3004000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456090330.jpg?k=ba3911923e07cc6cd2c07abfc816ca7e7737dd9aa5a6b054ff1bf8e7bcfa4118&o='),
(13, 5, 'Westin Deluxe, Guest room, 1 King Breakfast', 3221000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456090330.jpg?k=ba3911923e07cc6cd2c07abfc816ca7e7737dd9aa5a6b054ff1bf8e7bcfa4118&o='),
(14, 5, 'Westin Club, Club lounge access, Guest room, 2 Double Breakfast', 3935000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456090331.jpg?k=60118586799710f4ce139b3474ba73599cc09f1a81acca111c712beea8e0b394&o='),
(15, 5, 'Westin Club, Club lounge access, Guest room, 1 King Breakfast', 4117000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456090336.jpg?k=d39e6683842eb9f0fc10b40bd9994df4f98baea1f824a99aed71de1293d1988c&o='),
(16, 5, 'Junior King Suite - Club Lounge Access Breakfast', 6198000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456090350.jpg?k=fcf554967dfac953501658e2c8d75a8b4c7807fab2a50eea0adf6c88b88e828e&o='),
(17, 6, 'One-Bedroom Deluxe Apartment', 1770000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/850586037.jpg?k=1489928188937855c42e75d3b11aa768b95b2ba705e5bb8040d16c11edb9d687&o='),
(18, 6, 'One-Bedroom Deluxe Apartment Breakfast', 2036000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/850586037.jpg?k=1489928188937855c42e75d3b11aa768b95b2ba705e5bb8040d16c11edb9d687&o='),
(19, 6, 'One-Bedroom Executive Apartment', 1870000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/850588367.jpg?k=9a3d479ddc640c3c2b824c7b0c612668a584544d2beb91590795c48606bae97f&o='),
(20, 6, 'One-Bedroom Executive Apartment Breakfast', 2136000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/850588367.jpg?k=9a3d479ddc640c3c2b824c7b0c612668a584544d2beb91590795c48606bae97f&o='),
(21, 6, 'One-Bedroom Penthouse', 3675000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/850617486.jpg?k=d35ae94299acb0e0fe716667aa0be7e63595ee76c4bee4f264798dff3028ed11&o='),
(22, 6, 'One-Bedroom Penthouse Breakfas', 3941000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/850617486.jpg?k=d35ae94299acb0e0fe716667aa0be7e63595ee76c4bee4f264798dff3028ed11&o='),
(23, 7, 'Deluxe Room', 1198000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550920797.webp?k=865d980cb201d6e1b7bae3bd1990861179f065b324f89815fedd744790c5090b&o='),
(24, 7, 'Grand Deluxe', 1546000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550923185.jpg?k=a747e3e03934bfe7f5e7a181b4d26920d1d7dab4216fad1665a9a4c736666d05&o='),
(25, 7, 'Grand Deluxe Breakfast', 1636000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550923185.jpg?k=a747e3e03934bfe7f5e7a181b4d26920d1d7dab4216fad1665a9a4c736666d05&o='),
(26, 7, 'Deluxe Queen', 1132000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550920826.jpg?k=e646f62a1110c812c6a635e2452f05744f461b30ca71199f97ef2a96729a410e&o='),
(27, 7, 'Deluxe Queen Breakfast', 1514000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550920826.jpg?k=e646f62a1110c812c6a635e2452f05744f461b30ca71199f97ef2a96729a410e&o='),
(28, 7, 'Suite Room ', 1785000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550920787.jpg?k=3d6a2c3d77b0ef3a866a76bd0a1e11db45b02b581ad9be71e6a3a1b0bb40ee30&o='),
(29, 7, 'Suite Room  Breakfast', 1875000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550920787.jpg?k=3d6a2c3d77b0ef3a866a76bd0a1e11db45b02b581ad9be71e6a3a1b0bb40ee30&o='),
(30, 8, 'One-Bedroom Apartment with Balcony and City View', 594000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/713185397.jpg?k=26667b0267a69e613114ef194a22bf021646b1f81e19fa815e6d3b90dceb4a22&o='),
(31, 9, 'Superior Double or Twin Room ', 419000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/650150342.jpg?k=532a7fd16df6fc91c91d5d6a0982290512122ce8f5bec1b491e3cec312b625c5&o='),
(32, 9, 'Superior Double or Twin Room  Breakfast', 496000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/650150342.jpg?k=532a7fd16df6fc91c91d5d6a0982290512122ce8f5bec1b491e3cec312b625c5&o='),
(33, 9, 'King Room', 509000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/826476760.jpg?k=041d1ac5eecd0009f8b48a6aa34040571bbc9216ebc6b0033c1e4639a7b790d7&o='),
(34, 9, 'King Room Reakfast', 586000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/826476760.jpg?k=041d1ac5eecd0009f8b48a6aa34040571bbc9216ebc6b0033c1e4639a7b790d7&o='),
(35, 9, ' Deluxe Double or Twin Room ', 554000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/650150345.jpg?k=7afab00268fc6627c4dd2212453de280de543888a96a81eea6487caed94b3cb3&o='),
(36, 9, 'Deluxe Double or Twin Room Breakfast', 631000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/650150345.jpg?k=7afab00268fc6627c4dd2212453de280de543888a96a81eea6487caed94b3cb3&o='),
(37, 10, 'Two-Bedroom Apartment', 1300000.00, 5, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/666111392.jpg?k=e0b6e7f76aeca607cfee495f7614fdeea7bd253be39b51e4b8599c0f6d14ebd9&o='),
(38, 11, 'Deluxe Room', 410000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/768423102.jpg?k=47ced816e635a13fdab46f383dae0fc44dcca852e7cce41733316c7073a8621a&o='),
(39, 11, 'Executive King Room', 490000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/768422026.jpg?k=75f3e4e970e0bd1a258d2a08548f942e9d1513cdbcf5e55be2b27699c8e3df42&o='),
(42, 13, 'Superior Double or Twin Room', 636000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/855625327.jpg?k=77a3920434ce273f746239cb9aeeb8eb51c69d215e7e2bef7a7b449d1267336e&o='),
(43, 13, 'Deluxe Room', 875000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/855624828.jpg?k=c531a357bc86ae2eef59fa93d1854f75b484d465e47ea0159908b675cb4cfc84&o='),
(44, 13, 'Deluxe Premier Room', 975000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/855625515.jpg?k=f7e3645f7bc0e7b226a82f89ca6c4adf4f2ae8db1f1ea000db91a8247d9c1164&o='),
(45, 13, 'Executive Suite', 1127000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/855625093.jpg?k=350201136c56660be9253c5886fe70ed316448825f4f5023c4326d2f9d694272&o='),
(46, 13, 'Family Room', 1706000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/855625502.jpg?k=54596fc7995a56d14570b6f04dca8c5dbed206df03a389df56a653cf1cd4afb2&o='),
(47, 14, 'Champs Room Hollywood', 880000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/178115348.jpg?k=5a1eb72befa353f412d773a74737ab06885b77e78f0934f8c8b69a8bf6ff2030&o='),
(48, 14, 'Champs Room Hollywood City View', 950000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/178115348.jpg?k=5a1eb72befa353f412d773a74737ab06885b77e78f0934f8c8b69a8bf6ff2030&o='),
(49, 14, 'Champs Room Hollywood Park View', 1030000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/178115334.jpg?k=6151983c4d71dcc3279a07d73b59c09154fcd994d9530294dd09b2f7e8dfb8c1&o='),
(50, 14, 'Suite', 1280000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/696881292.jpg?k=5d7e29c4e2cf52f94573295bd14fdf313104592f71338fc521b311778fc79ba3&o='),
(51, 15, 'Deluxe Room', 700000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13990193.jpg?k=2fedf75bac34f4a83faf26fb0d117de98cbbc6b5938e1dbe4436b391d7ef9b6e&o='),
(52, 15, 'Deluxe Executive', 750000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13992392.jpg?k=2582613d07533fd3a8353f1ec93c70f4494968492e8327a10e7deb5a05027bff&o='),
(53, 16, 'Superior Room', 922000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405582889.jpg?k=396f649a29e096784f6e283f4e8dde9976cae61252844353fbfcb0c6f6097459&o='),
(54, 16, 'Deluxe Room', 1400000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405582868.jpg?k=4d68c4a2fd6fb076493d3f54637ff8d2b74aaa8d8d8d9a9c9983ba7f73416c66&o='),
(55, 16, 'Executive Rom', 1550000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405960570.jpg?k=f1a46075a7c67b91d174a6f9823b58c733b87e6addf72e8b3e882007bfe85739&o='),
(56, 17, 'Standard Room', 771000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/722775214.jpg?k=74b3d98fc32e1ff2607c2b92a7f17a1d4bf79a73996030be20ad62d888e6576e&o='),
(57, 17, 'Deluxe', 899000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/722775214.jpg?k=74b3d98fc32e1ff2607c2b92a7f17a1d4bf79a73996030be20ad62d888e6576e&o='),
(58, 18, 'Superior Room', 998000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/802741616.jpg?k=425fd27bfe0c210bf7d8e85c90a0b5c1d1c433ec5c85cdc464f94376400608fc&o='),
(59, 18, 'Deluxe Room', 1166000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/802741625.jpg?k=1aa399c24fcb5b52891a5194f25eaf8fea3fe94cd599dc2ba07aa3d0e2344627&o='),
(60, 18, 'Executive Rom', 1263000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/882088973.jpg?k=988602795c1bafc866057dbbec0703423cb59cb61479eb8e0bb183927c9dc0f0&o='),
(61, 18, 'Executive Suite', 4385000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/875102125.jpg?k=434a708be8a287bba7038a13d78213fe73d139372c4eaed8dc496ac6be514eb8&o='),
(62, 19, 'Classic Room', 2644000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/873625528.jpg?k=f1451514b8bd8a431ff94f2f6aed0a5bc879681522acb56b9d7196ef49474a08&o='),
(63, 19, 'Heritage Suite', 3144000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/841671669.jpg?k=be3c03ca54c7cc2776707b0c0ce0a2921bddc435ba10b245f6f45abb7c94fc98&o='),
(64, 19, 'Majapahit Legendary Suite', 5644000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/889959625.jpg?k=0177d671c48d85426a1bca36910e5f7de739905d4ebc1b307642ad0c41261d6f&o='),
(65, 20, 'Busines Room', 1224000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/354399028.jpg?k=3195c8c492acea410b8f73e22272894e3fdac8505ba433b896c6dcad8c82eb62&o='),
(66, 20, 'Deluxe Room', 1424000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/357338432.jpg?k=764314c31fb362d974d1dfbf5420d29f0eef2a3c2f07486b8836a77d757936b6&o='),
(67, 20, 'Deluxe Premier Room', 1698000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/758813477.jpg?k=f0907002fd5e43044c6362f85bb44ae9e1ea57980def002105169db01562a561&o='),
(68, 20, 'Junior Suite', 1868000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/354401290.jpg?k=5fa038a7c66421e1dbb82eac5d2dcb69eae1ccffa483a8568dc8f99d404cff0a&o='),
(69, 20, 'Executive Suite', 2106000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/356668687.jpg?k=32d7d93c676d231575b9a2512e88945003547bae764b73ca7196d858f36e6e25&o='),
(70, 20, 'Family Suite', 2684000.00, 3, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/356455092.jpg?k=7a02a144ddcc15882665b9b138ab664f727b6e3c10b8a0eb357265f2233fda48&o='),
(71, 21, 'Superior Room', 440000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/249155221.jpg?k=5bca6cc7782ff5d04eaedd2daad8b7d38ea346abe0346707cf16f8fcc98163cd&o='),
(72, 21, 'Deluxe Room', 606000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/275236891.jpg?k=9361938a53cd7e29ecbc37133039211b14f633022766e46ae93f3a901b2a27ee&o='),
(73, 22, 'One-Bedroom Apartment ', 475000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/634722057.jpg?k=ca489813eec7cb84b2d2736e049406138c246a534f3b27c2c2e49abee3e2f7c2&o='),
(74, 23, 'Superior', 485000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/768764500.jpg?k=dc90edeb9816648f467bc34df94fdfe40bddc3af678ce4cf79df8b7ac5145f09&o='),
(75, 23, 'Deluxe', 510000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/768765876.jpg?k=7603f16abc88f4f1fd41e44df7f41dedd8cb8b7b88234033bf3bcd76aef10838&o='),
(76, 24, 'Superior Room', 655000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/417370196.jpg?k=8b55e0ff6cd3f910b78e2bfd4732a6c32343fd0a12bdd8fad853651d93190f57&o='),
(77, 24, 'Suite Room', 887000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/417385623.jpg?k=18b676a4ece513a03f4a75690c01a9e4728df6eefabbb06d977b688aa5d2ef33&o='),
(78, 24, 'Deluxe Room', 741000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/417385623.jpg?k=18b676a4ece513a03f4a75690c01a9e4728df6eefabbb06d977b688aa5d2ef33&o='),
(79, 24, 'Family Room', 1019000.00, 4, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/417611587.jpg?k=d792a500db37e81266f6929b16afd77986491cd7d6595c45e0f7b3e7f31c4cac&o='),
(80, 25, 'Superior Room', 661000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/272395879.jpg?k=61c95f81b44697cc3ea94ddaca190ed460037475cc294af43f4f096296dd16ce&o='),
(81, 25, 'Standard Room', 661000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/273649657.jpg?k=b06ab5107a3a6b656666cf3eb9e8669ee50d9b3904329b8f41d1ae2fb9ce8be7&o='),
(82, 25, 'King Room', 680000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/882125168.jpg?k=66ad9b42f38c6af83f77e7c995f99fe99a074e93deb644fe1f10c13d420ad129&o='),
(83, 25, 'Deluxe Room', 810000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/272400273.jpg?k=13a5384ebf44508c00f1135d1e9e42bf230c689ad1b32c68c1a0f5a47ed14d98&o='),
(84, 25, 'Family Room', 1563000.00, 4, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/272400557.jpg?k=51f6f9111b68f2f9eb57a7c4e2ee143367b6f1626576afd88996e32e3006edde&o='),
(85, 25, 'Junior Suite', 1877000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/272400445.jpg?k=0c5bf216eab8719b212e2b62cdfb3dcd907826792a09b78c4117c75da644433a&o='),
(86, 26, 'Deluxe Room', 2350000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/14075915.jpg?k=1dd8464114e61f05a0f308fa2ad51351a440020d745a60e72c3b6aae66e08440&o='),
(87, 26, 'Execetuve Room', 2713000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/227211695.jpg?k=05bad5c50351e37c03c789a9e26a4aff99eea49342f60804a6046031ad1fd585&o='),
(88, 26, 'Horizon Deluxe', 2762000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/226003534.jpg?k=f57b5fe07de3acf0559f622a69727cd608f0dffa2ffb3078679d635abdac35e7&o='),
(89, 26, 'Horizon Executive', 3004000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/226003672.jpg?k=30b5158e84232af22ee133b6be98457fd39f979ba7216903ba53a1077abbcbb6&o='),
(90, 26, 'Executive Room', 6908000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/226005074.jpg?k=986c7b2c089e580637af53d770466005946dfd2b738aa5ed0fb4a77e8e0ac58b&o='),
(91, 27, 'Deluxe Room', 1221000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/773631864.jpg?k=7520c6cf50e3b119983270eb5ad93b428b9bd047524a4369b85468410397d929&o='),
(92, 27, 'Grand Deluxe', 1411000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/773632052.jpg?k=26cf220e3b13580f1a83545a4ac7181329f0456ff6c546f4c7d46901840ae705&o='),
(93, 27, 'Executive Room', 1696000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/773632052.jpg?k=26cf220e3b13580f1a83545a4ac7181329f0456ff6c546f4c7d46901840ae705&o='),
(94, 27, 'Suite Room', 3406000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/773632052.jpg?k=26cf220e3b13580f1a83545a4ac7181329f0456ff6c546f4c7d46901840ae705&o='),
(95, 28, 'Superior Room', 1164000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/881350649.jpg?k=20446e9f75e7d9ffe84787c6fc1a4a37d91c838c970547e632dbc0ac9acea7a0&o='),
(96, 28, 'Deluxe Room', 1392000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/845965107.jpg?k=e3a8dd4fb93589bab16f773531518f12108e1dd75058e8d70994b09a1e3787e2&o='),
(97, 28, 'Deluxe Suite', 2780000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/881350652.jpg?k=b13eb1bddb3ce3e905b4461d80dfdfe26f0e9eb6a1c20c6c24d2096ba6fe98cd&o='),
(98, 28, 'Executive Suite', 4979000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/751927489.jpg?k=0a468d03ee9bcf27cdaaf8fba26c3520fa01cd07f124e3c268526c32aab6ddb6&o='),
(99, 29, 'Superor Room', 833000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133175312.jpg?k=c665030a1dd2e628d8b12e405e76bd70d1d84135da384d67ab4b961d513b9643&o='),
(100, 29, 'Deluxe Room', 903000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/16132630.jpg?k=6571919a207a449a9e5889b4c8cacf3119f67f6b86d273717be155c8a241ac39&o='),
(101, 29, 'Executive Suite', 2188000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/513449029.jpg?k=2d3a648745384f9f81465bb016de7264d8acd91b4a3d9f656696e0b7c144e2e1&o='),
(102, 29, 'Two Bedroom Apartement', 1982000.00, 4, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/886486558.jpg?k=c0e57aa382e5770b7dfcd8af32d812ff63d7beb5160d847f8e93d27b0a86984a&o='),
(103, 29, 'Three Bedroom Apartement', 2185000.00, 6, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518755275.jpg?k=267372470e23610567b8292c6115c3e443b9194fa5045a2a35ace32f9cc64460&o='),
(104, 30, 'Deluxe Room', 1866000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465570639.jpg?k=8144c573dc8d1413287ac17b819be8f8d81ac7b9f0b8ee0bc42d45313b5846d5&o='),
(105, 30, 'Premium Deluxe', 2132000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/602803653.jpg?k=82e76aa9743b977ed7fc214212c93008be85eefda677bda7cdd285e79fd6ab8a&o='),
(106, 30, 'Junior Suite', 2822000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/602803668.jpg?k=d2d21f854032b1c3927b9354c68725fa7e8a6a6ceeb72f178b74c78834793ef3&o='),
(107, 30, 'Premium Suite', 3851000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/602807069.jpg?k=629dfa137a7f850791fca279f65f385c4e1d33dcb63d2c8b499a1c0249e619cd&o='),
(108, 31, 'Standard Room', 771000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/722775214.jpg?k=74b3d98fc32e1ff2607c2b92a7f17a1d4bf79a73996030be20ad62d888e6576e&o='),
(109, 31, 'Deluxe', 899000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/722775214.jpg?k=74b3d98fc32e1ff2607c2b92a7f17a1d4bf79a73996030be20ad62d888e6576e&o='),
(110, 32, 'Standard Room', 698000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/874938408.jpg?k=bd1a2f86b4157954d1b5d9d7e33d7324237c8f3e34dcbc8c1b0d0185e264b833&o='),
(111, 32, 'Premium Room', 812000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/874938408.jpg?k=bd1a2f86b4157954d1b5d9d7e33d7324237c8f3e34dcbc8c1b0d0185e264b833&o='),
(112, 33, 'Deluxe Room', 807000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/241592284.jpg?k=10e28f0b716054bb1df733966112459c058aa6e1ac198d4adbd9813f45d454f1&o='),
(113, 33, 'Family Room', 958000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/105904855.jpg?k=0cf86fdf021536bd5fbb7d5e6ac7713f2beb2daf7f2f5200041aab6d36883c99&o='),
(114, 33, 'Junior Suite', 1135000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/763417316.jpg?k=8f978f8f70f7cfbdb6d7e4aece5cd7f93539251e2bbea6954ca7f6f44ad537da&o='),
(115, 33, 'Premier Suite', 1387000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/763417316.jpg?k=8f978f8f70f7cfbdb6d7e4aece5cd7f93539251e2bbea6954ca7f6f44ad537da&o='),
(116, 34, 'Superior Room', 1145000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/445053772.jpg?k=815d6741b96b5be2a77d00673bc89afef8aabbe260d563b6107e5c9fc4b28c97&o='),
(117, 34, 'Deluxe Room', 137500.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/445053814.jpg?k=2e1da8bd36de7c096ac2b2a6268b30bceedac6f64829535caad067085be187c3&o='),
(118, 34, 'Deluxe Premier Room', 1490000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/445053800.jpg?k=193712ec53f430e2bb0c4f5ea8fce6ac45560dc4d258fe061efcb5a806b45697&o='),
(119, 34, 'Suite Room', 4573000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/445053832.jpg?k=9d138dbbd1456015f4feb37729b32bbffb5437828e52eb849fc0da449fc77050&o='),
(120, 34, 'Executive Suite', 5723000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/445054348.jpg?k=08552a08ba7e6bd3b77dc6a0b788911052a2d8c9052dd49f1ccd884bdaeb2cad&o='),
(121, 35, 'Superior Room', 1100000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/574562100.jpg?k=d3b80dec8a263b115c6f326979306ce0445f3ff9930ef4aea9ab4583486a61c0&o='),
(122, 35, 'Deluxe Room', 1220000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/284232521.jpg?k=4fe2b4b819e19036cbc785c882384a5e50815ea819f7a56036dd81bc13158326&o='),
(123, 37, 'Deluxe Room', 652000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/283382967.jpg?k=ea99111e5be17f29dd8e0abdf63d028f31dcf509c87eb35a3896b24894db5d9b&o='),
(124, 37, 'Deluxe Murphy Room', 856000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/254925117.jpg?k=65ac6b14cac53be78b1000093f26463b4986279abfd93dc9998c375912a481dd&o='),
(125, 38, 'Guest Room', 2762000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/469232127.jpg?k=60cfc7c1b8fcfd641f63c4e155894c3987fd13dd5586c7dfcc9114f80b4ae89a&o='),
(126, 38, 'M Club Room', 3975000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/469232127.jpg?k=60cfc7c1b8fcfd641f63c4e155894c3987fd13dd5586c7dfcc9114f80b4ae89a&o='),
(127, 39, 'Double Room', 1121000.00, 2, 'https://pix8.agoda.net/property/44593644/707278765/7c1958bb564968818ad6f6f7c66b60a6.jpeg?ce=0&s=840x460'),
(128, 39, 'One-Bedroom Villa ', 1405000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/485018901.jpg?k=648fd4a1c8684fddffaec3c3bd6113807b6f7ed0c76ad9a2f304d631b62e898f&o='),
(129, 40, 'Deluxe Room', 850000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/696873947.jpg?k=2862f663b8304dc664a4a44e3b0e2c2e31c07d32983f47eaf9f7215dcf50b9ff&o='),
(130, 40, 'Executive Rom', 1732000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/696875580.jpg?k=be85304e8668a19d595eb14d90931a03b55e59e7c10fc1cc2a601b05c7899a92&o='),
(131, 41, 'Deluxe Room', 893000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/429292671.jpg?k=fff0032c62fc083ac7960e2beb00dbb456845fe340d53e016d807ca1f9391316&o='),
(132, 42, 'Superior Room', 1234000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/403309821.jpg?k=5f43d941996e3a8c6da339a75f4ceb8a77eb874a722aab249e1fdfeb90a636e5&o='),
(133, 42, 'Deluxe Room', 1414000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/484145232.jpg?k=64a08dabbbe587726d190ae2870b6e8040a7f4ff9aa6bde5f00483b4c1efdf98&o='),
(134, 42, 'Premium Room', 1508000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/858243546.jpg?k=256ca64f90fa917493a168ab4db0ece78c0721d474ed5921a780d16acfcf0095&o='),
(135, 42, 'Executive Rom', 1684000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/637883068.jpg?k=c8f15153db7ae8a7479ae7d98bd7a0d40cf93e1afe26ca3dfb6ad76a66292823&o='),
(136, 43, 'Deluxe Room', 800000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/706884732.jpg?k=497d5ad577c851b1ae555f6e4346a4ea39a0109dc35635082c99172ea5541bfd&o='),
(137, 44, 'Deluxe Room', 950000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/640601830.jpg?k=6169226f98dfb497f99dc9568ae982bcfbaf9aafdd367457052a528d978e0308&o='),
(138, 44, 'Junior Suite', 3450000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/640602581.jpg?k=693617bdd2e86d275c47899001b2a78f39ea3c7378c45ba452920d610d6ea04f&o='),
(139, 45, 'Superior Room', 849000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/606827575.jpg?k=d26a4185bc7528feada335505eaf2458313b560414dda21aebd76a159ec3788b&o='),
(140, 45, 'Deluxe Room', 949000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/606827569.jpg?k=b23f48af38e4ce69daddb1a9a732fac2d94886065d98d2c88c8ba0271bfe3ffe&o='),
(141, 45, 'Deluxe Executive', 1129000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/606827573.jpg?k=786f5564746aa095ada44073dd7d1f9d85c1afd4a2b4e6ae2684545cd20fe888&o='),
(142, 45, 'Junior Suite', 1789000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/606827564.jpg?k=25c31ca023e4a9b1b116bfe63fa7dcedf1ff658a59d2c9c4f29af79b73c77900&o='),
(143, 46, 'Busines Room', 1302000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/883292571.jpg?k=3bd0b1db00637ceacca2126c46f383c75fa932ac460ebf03d9f665296add8490&o='),
(144, 46, 'Superior Room', 1201000.00, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/542988321.jpg?k=5213c68eeab85f3b0ab14cf690346421fdda045acaa9e0fd4b0d3d2037691017&o=');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_kota`
--

CREATE TABLE `tb_kota` (
  `id` int(11) NOT NULL,
  `nama_kota` varchar(100) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tb_kota`
--

INSERT INTO `tb_kota` (`id`, `nama_kota`, `gambar`) VALUES
(1, 'Surabaya', 'https://discoveringsurabaya.wordpress.com/wp-content/uploads/2015/09/landmark1.jpg'),
(2, 'Jogja', 'https://www.gotravelaindonesia.com/wp-content/uploads/Kota-Yogyakarta.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pembayaran`
--

CREATE TABLE `tb_pembayaran` (
  `id` int(11) NOT NULL,
  `tipe` varchar(50) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `info` text DEFAULT NULL,
  `atas_nama` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tb_pembayaran`
--

INSERT INTO `tb_pembayaran` (`id`, `tipe`, `nama`, `info`, `atas_nama`) VALUES
(1, 'qris', 'QRIS', '00020101021126580012ID.DIPAY.WWW011893600826055776660502095577666050303UMI51440014ID.CO.QRIS.WWW0215ID10265434320520303UMI5204701153033605802ID5925Diskon Hotel Indonesia, T6013JAKARTA TIMUR61051355062070703A0163047D95', 'DISKON HOTEL INDONESIA');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pengaturan`
--

CREATE TABLE `tb_pengaturan` (
  `id` int(11) NOT NULL,
  `nama_setting` varchar(50) DEFAULT NULL,
  `nilai` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pesanan`
--

CREATE TABLE `tb_pesanan` (
  `id_pesanan` varchar(50) NOT NULL,
  `nama_tamu` varchar(150) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `id_hotel` int(11) DEFAULT NULL,
  `id_kamar` int(11) DEFAULT NULL,
  `tgl_checkin` date DEFAULT NULL,
  `tgl_checkout` date DEFAULT NULL,
  `total_kamar` int(11) DEFAULT NULL,
  `total_harga` decimal(10,2) DEFAULT NULL,
  `id_pembayaran` int(11) DEFAULT NULL,
  `status` enum('pending','confirmed','cencel') DEFAULT 'pending',
  `bukti_bayar` text DEFAULT NULL,
  `waktu_pesan` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_promo`
--

CREATE TABLE `tb_promo` (
  `id` int(11) NOT NULL,
  `kode` varchar(50) DEFAULT NULL,
  `tipe` varchar(50) DEFAULT NULL,
  `nilai` decimal(10,2) DEFAULT NULL,
  `min_belanja` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tb_promo`
--

INSERT INTO `tb_promo` (`id`, `kode`, `tipe`, `nilai`, `min_belanja`) VALUES
(3, 'Test', 'percent', 50.00, 0.00);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_admin`
--
ALTER TABLE `tb_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_campaign`
--
ALTER TABLE `tb_campaign`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_hotel`
--
ALTER TABLE `tb_hotel`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_kamar`
--
ALTER TABLE `tb_kamar`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_kota`
--
ALTER TABLE `tb_kota`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_pembayaran`
--
ALTER TABLE `tb_pembayaran`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_pengaturan`
--
ALTER TABLE `tb_pengaturan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_pesanan`
--
ALTER TABLE `tb_pesanan`
  ADD PRIMARY KEY (`id_pesanan`);

--
-- Indeks untuk tabel `tb_promo`
--
ALTER TABLE `tb_promo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_admin`
--
ALTER TABLE `tb_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tb_campaign`
--
ALTER TABLE `tb_campaign`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tb_hotel`
--
ALTER TABLE `tb_hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT untuk tabel `tb_kamar`
--
ALTER TABLE `tb_kamar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT untuk tabel `tb_kota`
--
ALTER TABLE `tb_kota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `tb_pembayaran`
--
ALTER TABLE `tb_pembayaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tb_pengaturan`
--
ALTER TABLE `tb_pengaturan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tb_promo`
--
ALTER TABLE `tb_promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

**admin/index.php**
<?php
session_start();
error_reporting(0);

$koneksi_path = dirname(__DIR__) . '/koneksi.php';
if(!file_exists($koneksi_path)) die("<h2 style='color:red;text-align:center;'>File koneksi.php hilang! Ditargetkan ke: $koneksi_path</h2>");
require_once $koneksi_path;

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
define('SITE_URL', $protocol . "://" . $_SERVER['HTTP_HOST']);

function handleUpload($file) {
    if(isset($file) && $file['error']==0 && $file['size']>0) {
        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        $is_real_image = getimagesize($file['tmp_name']);
        if(in_array($ext, ['jpg', 'jpeg', 'png', 'webp']) && $is_real_image !== false) {
            if(!is_dir('../uploads')) mkdir('../uploads', 0777, true);
            $filename = uniqid('img_').'.'.$ext;
            move_uploaded_file($file['tmp_name'], '../uploads/'.$filename);
            return $filename;
        }
    } return '';
}

if(isset($_POST['login'])) {
    try {
        $stmt=$pdo->prepare("SELECT * FROM tb_admin WHERE username=?"); $stmt->execute([$_POST['username']]); $admin=$stmt->fetch();
        if($admin && password_verify($_POST['password'], $admin['password_hash'])) { $_SESSION['admin_logged_in']=true; header("Location: index.php"); exit; }
        else { $error="Username atau Password salah!"; }
    } catch(Exception $e) { $error="Database Error."; }
}

if(!isset($_SESSION['admin_logged_in'])) {
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - DiskonHotel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .login-bg {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%);
            position: relative; overflow: hidden;
        }
        .login-bg::before {
            content:''; position:absolute; top:-30%; right:-15%;
            width:500px; height:500px; border-radius:50%;
            background:rgba(251,146,60,0.06);
        }
        .login-bg::after {
            content:''; position:absolute; bottom:-20%; left:-10%;
            width:350px; height:350px; border-radius:50%;
            background:rgba(59,130,246,0.08);
        }
        .input-focus { transition: border-color 0.2s, box-shadow 0.2s; }
        .input-focus:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
    </style>
</head>
<body class="login-bg min-h-screen flex justify-center items-center px-4">
    <div class="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/20 w-full max-w-sm text-center relative z-10 border border-white/20">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-600/30">
            <i class="fa-solid fa-shield-halved text-2xl text-white"></i>
        </div>
        <h2 class="text-2xl font-extrabold mb-2 text-slate-800 tracking-tight">Admin Portal</h2>
        <p class="text-sm text-slate-400 font-medium mb-8">Masuk ke panel administrasi</p>
        
        <?php if(isset($error)) echo "<div class='bg-red-50 text-red-600 p-3.5 rounded-xl mb-6 font-bold text-sm border border-red-200 flex items-center justify-center gap-2'><i class='fa-solid fa-circle-exclamation'></i> $error</div>"; ?>
        
        <form method="POST" class="text-left">
            <div class="mb-4">
                <label class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">Username</label>
                <input type="text" name="username" placeholder="Masukkan username" required class="w-full border-2 border-slate-100 p-4 rounded-xl font-bold bg-slate-50 input-focus outline-none text-sm">
            </div>
            <div class="mb-6">
                <label class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">Password</label>
                <input type="password" name="password" placeholder="Masukkan password" required class="w-full border-2 border-slate-100 p-4 rounded-xl font-bold bg-slate-50 input-focus outline-none text-sm">
            </div>
            <button type="submit" name="login" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-700 text-white font-extrabold py-4 rounded-xl shadow-lg shadow-blue-600/25 transition transform hover:scale-[0.98] active:scale-95 text-sm uppercase tracking-wide">
                <i class="fa-solid fa-right-to-bracket mr-2"></i> Login Sekarang
            </button>
        </form>
        <a href="../index.php" class="block mt-5 text-xs font-bold text-slate-400 hover:text-blue-600 transition"><i class="fa-solid fa-arrow-left mr-1"></i> Kembali ke Website</a>
    </div>
</body>
</html>
<?php exit; }

$tab = $_GET['tab'] ?? 'pesanan'; $msg = '';

if(isset($_GET['delete'])) {
    try {
        $col = ($_GET['table']=='tb_pesanan') ? 'id_pesanan' : 'id';
        $pdo->prepare("DELETE FROM {$_GET['table']} WHERE $col=?")->execute([$_GET['delete']]);
        $url = "index.php?tab=" . ($_GET['ret']??$tab);
        if(isset($_GET['id_hotel'])) $url .= "&id_hotel=" . $_GET['id_hotel'];
        header("Location: " . $url); exit;
    } catch(Exception $e) {}
}

if(isset($_POST['update_status'])) {
    try { $pdo->prepare("UPDATE tb_pesanan SET status=? WHERE id_pesanan=?")->execute([$_POST['status'], $_POST['id_pesanan']]); $msg="Status pesanan berhasil diupdate!"; } catch(Exception $e) {}
}

if(isset($_POST['simpan_pengaturan'])) {
    try {
        $pdo->prepare("UPDATE tb_pengaturan SET nilai=? WHERE nama_setting='diskon_global'")->execute([$_POST['diskon_global']]);
        $msg = "Pengaturan Diskon Global berhasil diupdate!";
    } catch(Exception $e) {}
}

if(isset($_POST['aksi_simpan'])) {
    $tbl = $_POST['tabel'];
    $id_edit = $_POST['id_edit'] ?? '';
    try {
        if($tbl=='tb_kota') {
            $img = handleUpload($_FILES['file']); if(!$img) $img = $_POST['url'];
            if($id_edit) $pdo->prepare("UPDATE tb_kota SET nama_kota=?, gambar=? WHERE id=?")->execute([$_POST['nama'], $img, $id_edit]);
            else $pdo->prepare("INSERT INTO tb_kota (nama_kota, gambar) VALUES (?,?)")->execute([$_POST['nama'], $img]);
        } elseif($tbl=='tb_hotel') {
            $img = handleUpload($_FILES['file']); if(!$img) $img = $_POST['url'];
            if($id_edit) $pdo->prepare("UPDATE tb_hotel SET id_kota=?, nama_hotel=?, deskripsi=?, gambar=? WHERE id=?")->execute([$_POST['id_kota'], $_POST['nama'], $_POST['desc'], $img, $id_edit]);
            else $pdo->prepare("INSERT INTO tb_hotel (id_kota, nama_hotel, deskripsi, gambar) VALUES (?,?,?,?)")->execute([$_POST['id_kota'], $_POST['nama'], $_POST['desc'], $img]);
        } elseif($tbl=='tb_kamar') {
            $img = handleUpload($_FILES['file']); if(!$img) $img = $_POST['url'];
            if($id_edit) $pdo->prepare("UPDATE tb_kamar SET id_hotel=?, nama_kamar=?, harga=?, kapasitas=?, gambar=? WHERE id=?")->execute([$_POST['id_hotel'], $_POST['nama'], $_POST['harga'], $_POST['kapasitas'], $img, $id_edit]);
            else $pdo->prepare("INSERT INTO tb_kamar (id_hotel, nama_kamar, harga, kapasitas, gambar) VALUES (?,?,?,?,?)")->execute([$_POST['id_hotel'], $_POST['nama'], $_POST['harga'], $_POST['kapasitas'], $img]);
            header("Location: index.php?tab=kamar&id_hotel=".$_POST['id_hotel']); exit;
        } elseif($tbl=='tb_campaign') {
            $img = handleUpload($_FILES['file']); if(!$img) $img = $_POST['url'];
            if($id_edit) $pdo->prepare("UPDATE tb_campaign SET judul=?, deskripsi=?, gambar=? WHERE id=?")->execute([$_POST['nama'], $_POST['desc'], $img, $id_edit]);
            else $pdo->prepare("INSERT INTO tb_campaign (judul, deskripsi, gambar) VALUES (?,?,?)")->execute([$_POST['nama'], $_POST['desc'], $img]);
        } elseif($tbl=='tb_pembayaran') {
            if($id_edit) $pdo->prepare("UPDATE tb_pembayaran SET tipe=?, nama=?, info=?, atas_nama=? WHERE id=?")->execute([$_POST['tipe'], $_POST['nama'], $_POST['info'], $_POST['atas_nama'], $id_edit]);
            else $pdo->prepare("INSERT INTO tb_pembayaran (tipe, nama, info, atas_nama) VALUES (?,?,?,?)")->execute([$_POST['tipe'], $_POST['nama'], $_POST['info'], $_POST['atas_nama']]);
        } elseif($tbl=='tb_promo') {
            if($id_edit) $pdo->prepare("UPDATE tb_promo SET kode=?, tipe=?, nilai=?, min_belanja=? WHERE id=?")->execute([$_POST['kode'], $_POST['tipe'], $_POST['nilai'], $_POST['min'], $id_edit]);
            else $pdo->prepare("INSERT INTO tb_promo (kode, tipe, nilai, min_belanja) VALUES (?,?,?,?)")->execute([$_POST['kode'], $_POST['tipe'], $_POST['nilai'], $_POST['min']]);
        }
        $msg = "Data berhasil disimpan!";
    } catch(Exception $e) {}
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Panel - DiskonHotel</title>
<script src="https://cdn.tailwindcss.com"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
body{font-family:'Plus Jakarta Sans',sans-serif;}
.hide-scroll::-webkit-scrollbar{display:none;}
.custom-scroll::-webkit-scrollbar{height:5px;width:5px;}
.custom-scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px;}
.input-focus{transition:border-color 0.2s,box-shadow 0.2s;}
.input-focus:focus{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,0.08);}
.sidebar-link{transition:all 0.15s ease;}
</style>
</head>
<body class="flex flex-col md:flex-row min-h-screen bg-slate-50 text-gray-800">
    
    <!-- SIDEBAR -->
    <div id="sidebar" class="w-72 bg-slate-900 text-white flex flex-col flex-shrink-0 transition-all duration-300 md:relative fixed inset-y-0 left-0 z-40 transform -translate-x-full md:translate-x-0 shadow-2xl">
        <!-- Logo -->
        <div class="p-5 border-b border-slate-800 flex justify-between items-center">
            <a href="?tab=pesanan" class="flex items-center gap-2.5">
                <div class="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <i class="fa-solid fa-hotel text-white text-sm"></i>
                </div>
                <div>
                    <span class="font-extrabold text-sm tracking-tight text-white block leading-none">Diskon<span class="text-blue-400">Hotel</span></span>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Admin Panel</span>
                </div>
            </a>
            <button onclick="toggleSidebar()" class="md:hidden w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-lg transition"><i class="fa-solid fa-xmark text-sm"></i></button>
        </div>
        
        <!-- Menu -->
        <div class="flex flex-col overflow-y-auto py-4 hide-scroll flex-1 px-3 space-y-1">
            <?php 
            $menus = [
                'pesanan'=>['fa-receipt','Pesanan','text-amber-400'],
                'kota'=>['fa-city','Kota','text-sky-400'],
                'hotel'=>['fa-building','Hotel & Kamar','text-blue-400'],
                'campaign'=>['fa-images','Campaign','text-purple-400'],
                'pembayaran'=>['fa-wallet','Pembayaran','text-emerald-400'],
                'promo'=>['fa-ticket','Promo Code','text-pink-400'],
                'pengaturan'=>['fa-gear','Pengaturan Web','text-slate-400']
            ];
            foreach($menus as $key => $m): 
                $active = ($tab==$key || ($tab=='kamar' && $key=='hotel')) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white';
            ?>
            <a href="?tab=<?= $key ?>" class="sidebar-link px-4 py-3 rounded-xl flex items-center gap-3 <?= $active ?>">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center <?= ($tab==$key||($tab=='kamar'&&$key=='hotel'))?'bg-white/10':'bg-slate-800' ?>">
                    <i class="fa-solid <?= $m[0] ?> text-xs <?= $m[2] ?>"></i>
                </div>
                <span class="font-bold text-sm"><?= $m[1] ?></span>
            </a>
            <?php endforeach; ?>
        </div>
        
        <!-- Footer -->
        <div class="p-3 border-t border-slate-800">
            <a href="../index.php" target="_blank" class="block text-center text-slate-500 hover:text-white font-bold text-xs py-2.5 rounded-xl hover:bg-slate-800 transition mb-2"><i class="fa-solid fa-external-link mr-1.5"></i> Lihat Website</a>
            <a href="logout.php" class="block bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white font-bold text-center transition py-3 rounded-xl text-sm"><i class="fa-solid fa-right-from-bracket mr-1.5"></i> Logout</a>
        </div>
    </div>

    <!-- OVERLAY -->
    <div id="sidebar-overlay" onclick="toggleSidebar()" class="hidden md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"></div>

    <!-- MAIN CONTENT -->
    <div class="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        <!-- MOBILE HEADER -->
        <div class="md:hidden bg-white shadow-sm px-4 py-3 flex justify-between items-center border-b border-slate-100 z-20">
            <a href="?tab=pesanan" class="flex items-center gap-2">
                <div class="w-7 h-7 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center"><i class="fa-solid fa-hotel text-white text-[10px]"></i></div>
                <span class="font-extrabold text-sm text-slate-800">Diskon<span class="text-blue-600">Hotel</span></span>
            </a>
            <button onclick="toggleSidebar()" class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex justify-center items-center transition"><i class="fa-solid fa-bars text-slate-600"></i></button>
        </div>

        <!-- CONTENT -->
        <div class="p-4 md:p-8 overflow-y-auto flex-1 custom-scroll">
            <!-- HEADER -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h1 class="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight capitalize"><?= str_replace('_',' ',$tab) ?></h1>
                    <p class="text-xs text-slate-400 font-bold mt-0.5">Kelola data <?= str_replace('_',' ',$tab) ?> Anda</p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <?php if($tab=='kamar'): ?>
                        <a href="?tab=hotel" class="bg-white border-2 border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl font-bold hover:border-blue-500 hover:text-blue-600 transition shadow-sm text-xs whitespace-nowrap"><i class="fa-solid fa-arrow-left mr-1.5"></i> Kembali</a>
                    <?php endif; ?>
                    <?php if($tab!='pesanan' && $tab!='pengaturan'): ?>
                        <button onclick="openModal()" class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-700 text-white px-4 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-600/20 transition text-xs whitespace-nowrap flex items-center gap-1.5"><i class="fa-solid fa-plus"></i> Tambah Baru</button>
                    <?php endif; ?>
                </div>
            </div>

            <!-- MESSAGE -->
            <?php if($msg): ?>
                <div class="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-2xl mb-5 font-bold shadow-sm flex items-center gap-2.5 text-sm">
                    <div class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-check text-emerald-600 text-xs"></i></div> <?= $msg ?>
                </div>
            <?php endif; ?>

            <?php if($tab == 'pengaturan'): ?>
            <!-- TAB PENGATURAN -->
            <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 max-w-xl">
                <h3 class="text-lg font-extrabold mb-3 text-slate-800 flex items-center gap-3">
                    <div class="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center"><i class="fa-solid fa-tags text-orange-500"></i></div> Diskon Flash Sale (Global)
                </h3>
                <p class="text-slate-400 mb-6 font-medium text-sm leading-relaxed">Diskon ini akan memotong harga asli secara otomatis pada <b class="text-slate-600">SEMUA KAMAR</b> di website. Isi 0 untuk mematikan fitur ini.</p>
                
                <?php 
                $diskon_saat_ini = 0;
                try { $diskon_saat_ini = $pdo->query("SELECT nilai FROM tb_pengaturan WHERE nama_setting='diskon_global'")->fetchColumn(); } catch(Exception $e){} 
                ?>
                <form method="POST">
                    <div class="mb-6">
                        <label class="block text-xs font-extrabold text-slate-400 mb-3 uppercase tracking-widest">Besaran Diskon (%)</label>
                        <div class="flex items-center rounded-2xl overflow-hidden border-2 border-slate-100 focus-within:border-blue-500 transition shadow-inner">
                            <input type="number" name="diskon_global" value="<?= htmlspecialchars($diskon_saat_ini??0) ?>" min="0" max="100" required class="w-full p-4 font-extrabold text-2xl text-blue-700 bg-blue-50/50 outline-none text-center">
                            <div class="bg-blue-600 text-white font-extrabold px-6 py-4 text-xl">%</div>
                        </div>
                    </div>
                    <button type="submit" name="simpan_pengaturan" class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-600 text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-orange-500/20 transition transform hover:scale-[0.98] active:scale-95 text-sm"><i class="fa-solid fa-save mr-2"></i> Terapkan ke Semua Kamar</button>
                </form>
            </div>
            
            <?php else: ?>
            <!-- TABEL DATA -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                <div class="overflow-x-auto custom-scroll pb-1">
                    <table class="w-full text-left text-sm whitespace-nowrap min-w-[750px]">
                        <thead class="bg-slate-50 border-b border-slate-100">
                            <tr>
                            <?php if($tab=='pesanan'): ?> <th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">ID/Waktu</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Data Tamu</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Total Harga</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center">Bukti</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center">Status</th>
                            <?php elseif($tab=='kota'): ?> <th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] w-20">Foto</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Nama Kota</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center w-28">Aksi</th>
                            <?php elseif($tab=='hotel'): ?> <th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] w-20">Foto</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Nama Hotel</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Lokasi</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center">Kamar</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center w-28">Aksi</th>
                            <?php elseif($tab=='kamar'): ?> <th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] w-20">Foto</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Tipe Kamar</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Harga Asli</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center w-28">Aksi</th>
                            <?php elseif($tab=='campaign'): ?> <th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] w-20">Foto</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Judul Promo</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center w-28">Aksi</th>
                            <?php elseif($tab=='pembayaran'): ?> <th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Tipe</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Nama Metode</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Rekening/QRIS</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center w-28">Aksi</th>
                            <?php elseif($tab=='promo'): ?> <th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Kode</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Potongan</th><th class="p-4 font-extrabold text-slate-400 uppercase tracking-wider text-[10px] text-center w-28">Aksi</th>
                            <?php endif; ?>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50">
                            <?php
                            try {
                                if($tab=='pesanan') $q = $pdo->query("SELECT * FROM tb_pesanan ORDER BY waktu_pesan DESC");
                                elseif($tab=='hotel') $q = $pdo->query("SELECT h.*, k.nama_kota FROM tb_hotel h LEFT JOIN tb_kota k ON h.id_kota=k.id ORDER BY h.id DESC");
                                elseif($tab=='kamar') { $q=$pdo->prepare("SELECT * FROM tb_kamar WHERE id_hotel=?"); $q->execute([$_GET['id_hotel']??0]); }
                                else $q = $pdo->query("SELECT * FROM tb_$tab ORDER BY id DESC");
                                
                                if($q->rowCount()==0) echo "<tr><td colspan='6' class='p-16 text-center'><div class='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3'><i class='fa-solid fa-folder-open text-2xl text-slate-300'></i></div><p class='font-bold text-slate-400 text-sm'>Data Kosong</p></td></tr>";
                                
                                while($r=$q->fetch()): 
                                    $img = isset($r['gambar'])?(strpos($r['gambar'],'http')===0?$r['gambar']:'../uploads/'.$r['gambar']):'';
                                    $editData = [
                                        'id' => $r['id'] ?? '',
                                        'nama' => $r['nama_kota'] ?? $r['nama_hotel'] ?? $r['nama_kamar'] ?? $r['judul'] ?? $r['nama'] ?? '',
                                        'desc' => $r['deskripsi'] ?? '',
                                        'url' => $img,
                                        'id_kota' => $r['id_kota'] ?? '',
                                        'harga' => $r['harga'] ?? '',
                                        'kapasitas' => $r['kapasitas'] ?? '',
                                        'tipe' => $r['tipe'] ?? '',
                                        'info' => $r['info'] ?? '',
                                        'atas_nama' => $r['atas_nama'] ?? '',
                                        'kode' => $r['kode'] ?? '',
                                        'nilai' => $r['nilai'] ?? '',
                                        'min' => $r['min_belanja'] ?? ''
                                    ];
                                    $jsonEdit = htmlspecialchars(json_encode($editData), ENT_QUOTES, 'UTF-8');
                            ?>
                            <tr class="hover:bg-slate-50/80 transition duration-100">
                                <?php if($tab=='pesanan'): ?>
                                    <td class="p-4">
                                        <span class="font-mono font-extrabold text-blue-700 text-sm block"><?= htmlspecialchars($r['id_pesanan']) ?></span>
                                        <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-1"><i class="fa-regular fa-clock"></i> <?= $r['waktu_pesan'] ?></span>
                                    </td>
                                    <td class="p-4">
                                        <span class="font-bold text-slate-800 text-sm block"><?= htmlspecialchars($r['nama_tamu']) ?></span>
                                        <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-1"><i class="fa-solid fa-phone"></i> <?= htmlspecialchars($r['no_hp']) ?></span>
                                    </td>
                                    <td class="p-4 font-extrabold text-orange-600 text-sm">Rp <?= number_format($r['total_harga'],0,',','.') ?></td>
                                    <td class="p-4 text-center">
                                        <?php 
                                        if(!empty($r['bukti_bayar'])) {
                                            $url_bukti = SITE_URL . "/uploads/" . $r['bukti_bayar'];
                                            $file_lokal = '../uploads/' . $r['bukti_bayar']; 
                                            if(file_exists($file_lokal)) {
                                                echo "<a href='$url_bukti' target='_blank' class='bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-xl font-bold inline-flex items-center gap-1 text-xs transition'><i class='fa-solid fa-eye'></i> Lihat</a>";
                                            } else {
                                                echo "<span class='text-red-500 font-bold text-[10px] bg-red-50 px-2 py-1.5 rounded-lg border border-red-200 inline-block'>File Hilang</span>";
                                            }
                                        } else {
                                            echo "<span class='text-slate-400 font-bold text-[10px] bg-slate-100 px-3 py-1.5 rounded-lg inline-block'>Kosong</span>";
                                        }
                                        ?>
                                    </td>
                                    <td class="p-4">
                                        <form method="POST" class="flex flex-col sm:flex-row gap-1.5 justify-center items-center">
                                            <input type="hidden" name="id_pesanan" value="<?= $r['id_pesanan'] ?>">
                                            <select name="status" class="w-full sm:w-auto border-2 p-2 rounded-xl font-bold text-[10px] uppercase tracking-wider outline-none cursor-pointer transition <?= $r['status']=='pending'?'bg-yellow-50 text-yellow-700 border-yellow-200':($r['status']=='confirmed'?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-red-50 text-red-700 border-red-200') ?>">
                                                <option value="pending" <?= $r['status']=='pending'?'selected':'' ?>>PENDING</option>
                                                <option value="confirmed" <?= $r['status']=='confirmed'?'selected':'' ?>>CONFIRMED</option>
                                                <option value="cencel" <?= $r['status']=='cencel'?'selected':'' ?>>CENCEL</option>
                                            </select>
                                            <button type="submit" name="update_status" class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-xl shadow-sm transition text-xs" title="Simpan"><i class="fa-solid fa-check"></i></button>
                                            <a href="?tab=pesanan&delete=<?= $r['id_pesanan'] ?>&table=tb_pesanan" onclick="return confirm('Hapus permanen pesanan ini?')" class="w-full sm:w-auto bg-red-50 hover:bg-red-100 text-red-500 px-3 py-2 rounded-xl transition text-center text-xs" title="Hapus"><i class="fa-solid fa-trash"></i></a>
                                        </form>
                                    </td>
                                <?php else: ?>
                                    <?php if(isset($r['gambar'])): ?>
                                        <td class="p-4"><img src="<?= $img ?>" class="w-14 h-10 object-cover rounded-xl shadow-sm border border-slate-200" loading="lazy"></td>
                                    <?php endif; ?>
                                    
                                    <?php if($tab=='kota'): ?> 
                                        <td class="p-4 font-extrabold text-slate-800 text-sm"><?= htmlspecialchars($r['nama_kota']) ?></td>
                                    <?php elseif($tab=='hotel'): ?> 
                                        <td class="p-4 font-extrabold text-slate-800 text-sm"><?= htmlspecialchars($r['nama_hotel']) ?></td>
                                        <td class="p-4 font-semibold text-slate-500 text-sm"><i class="fa-solid fa-map-pin text-orange-400 mr-1 text-xs"></i> <?= htmlspecialchars($r['nama_kota']) ?></td>
                                        <td class="p-4 text-center"><a href="?tab=kamar&id_hotel=<?= $r['id'] ?>" class="bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 px-3 py-2 font-bold rounded-xl inline-flex items-center gap-1 transition whitespace-nowrap text-xs"><i class="fa-solid fa-bed"></i> Atur</a></td>
                                    <?php elseif($tab=='kamar'): ?> 
                                        <td class="p-4">
                                            <span class="font-extrabold text-slate-800 text-sm block"><?= htmlspecialchars($r['nama_kamar']) ?></span>
                                            <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-1"><i class="fa-solid fa-users text-blue-400"></i> Maks <?= $r['kapasitas'] ?> org</span>
                                        </td>
                                        <td class="p-4 font-extrabold text-slate-600 text-sm">Rp <?= number_format($r['harga'],0,',','.') ?></td>
                                    <?php elseif($tab=='campaign'): ?> 
                                        <td class="p-4 font-extrabold text-slate-800 text-sm"><?= htmlspecialchars($r['judul']) ?></td>
                                    <?php elseif($tab=='pembayaran'): ?> 
                                        <td class="p-4 font-extrabold uppercase text-blue-600 text-xs"><?= htmlspecialchars($r['tipe']) ?></td>
                                        <td class="p-4 font-extrabold text-slate-800 text-sm"><?= htmlspecialchars($r['nama']) ?></td>
                                        <td class="p-4 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg border inline-block max-w-[180px] truncate font-medium"><?= htmlspecialchars($r['info']) ?></td>
                                    <?php elseif($tab=='promo'): ?> 
                                        <td class="p-4 font-bold font-mono text-blue-700 text-sm"><?= htmlspecialchars($r['kode']) ?></td>
                                        <td class="p-4 font-extrabold text-slate-800 text-sm"><?= $r['tipe']=='percent'?$r['nilai'].'%':'Rp '.number_format($r['nilai'],0,',','.') ?></td>
                                    <?php endif; ?>
                                    
                                    <td class="p-4 text-center">
                                        <div class="flex gap-1.5 justify-center">
                                            <button type="button" onclick='openModal(true, <?= $jsonEdit ?>)' class="bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-2 rounded-xl transition text-xs" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                                            <a href="?tab=<?= $tab ?>&delete=<?= $r['id'] ?>&table=tb_<?= $tab ?>&ret=<?= $tab ?><?= isset($_GET['id_hotel']) ? '&id_hotel='.$_GET['id_hotel'] : '' ?>" onclick="return confirm('Hapus data ini secara permanen?')" class="bg-red-50 hover:bg-red-100 text-red-500 px-3 py-2 rounded-xl transition text-xs" title="Hapus"><i class="fa-solid fa-trash"></i></a>
                                        </div>
                                    </td>
                                <?php endif; ?>
                            </tr>
                            <?php endwhile; } catch(Exception $e){ echo "<tr><td colspan='6' class='p-8 text-center text-red-500 font-bold bg-red-50 rounded-xl m-4'>Error: ".$e->getMessage()."</td></tr>"; } ?>
                        </tbody>
                    </table>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </div>

    <!-- MODAL -->
    <div id="m" class="hidden fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-3xl w-full max-w-md shadow-2xl flex flex-col max-h-[90vh]">
            <!-- Modal Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white flex justify-between items-center rounded-t-3xl flex-shrink-0">
                <h3 id="modalTitle" class="font-extrabold text-sm flex items-center gap-2"><i class="fa-solid fa-file-pen"></i> Form Data</h3>
                <button type="button" onclick="document.getElementById('m').classList.add('hidden')" class="hover:bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center transition"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            <!-- Modal Body -->
            <div class="p-6 overflow-y-auto custom-scroll flex-1">
                <form method="POST" enctype="multipart/form-data" class="space-y-4">
                    <input type="hidden" name="aksi_simpan" value="1">
                    <input type="hidden" name="tabel" value="tb_<?= $tab ?>">
                    <input type="hidden" name="id_edit" id="id_edit" value="">
                    
                    <?php if($tab=='kota'): ?> 
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Nama Kota</label><input type="text" name="nama" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                    
                    <?php elseif($tab=='hotel'): ?> 
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Pilih Kota</label><select name="id_kota" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 cursor-pointer text-sm"><option value="">-- Pilih Kota --</option><?php try{ $kt=$pdo->query("SELECT * FROM tb_kota"); while($rk=$kt->fetch()) echo "<option value='{$rk['id']}'>{$rk['nama_kota']}</option>"; }catch(Exception $e){} ?></select></div>
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Nama Hotel</label><input type="text" name="nama" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Deskripsi Singkat</label><textarea name="desc" class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 h-24 custom-scroll text-sm"></textarea></div>
                    
                    <?php elseif($tab=='kamar'): ?> 
                        <input type="hidden" name="id_hotel" value="<?= $_GET['id_hotel']??'' ?>"> 
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Nama Tipe Kamar</label><input type="text" name="nama" placeholder="Cth: Deluxe Room" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                        <div class="flex gap-3">
                            <div class="w-2/3"><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Harga Asli (Rp)</label><input type="number" name="harga" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                            <div class="w-1/3"><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Maks Tamu</label><input type="number" name="kapasitas" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold text-center bg-slate-50 text-sm"></div>
                        </div>
                    
                    <?php elseif($tab=='campaign'): ?> 
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Judul Campaign</label><input type="text" name="nama" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Isi Deskripsi</label><textarea name="desc" class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 h-24 custom-scroll text-sm"></textarea></div>
                    
                    <?php elseif($tab=='pembayaran'): ?> 
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Tipe</label><select name="tipe" class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 cursor-pointer text-sm"><option value="bank">Bank Transfer</option><option value="qris">QRIS Code</option></select></div>
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Nama (BCA/Mandiri/dll)</label><input type="text" name="nama" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">No. Rekening / String QRIS</label><textarea name="info" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-mono text-xs bg-slate-50 h-24 break-all custom-scroll"></textarea></div>
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Atas Nama</label><input type="text" name="atas_nama" class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                    
                    <?php elseif($tab=='promo'): ?> 
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">KODE PROMO</label><input type="text" name="kode" required class="w-full border-2 border-blue-200 p-3.5 rounded-xl outline-none input-focus font-extrabold uppercase text-blue-700 bg-blue-50 tracking-widest text-sm"></div>
                        <div class="flex gap-3">
                            <div class="w-1/2"><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Jenis Potongan</label><select name="tipe" class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 cursor-pointer text-sm"><option value="percent">Persen (%)</option><option value="fixed">Rupiah (Rp)</option></select></div>
                            <div class="w-1/2"><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Nilai</label><input type="number" name="nilai" placeholder="Cth: 10" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                        </div>
                        <div><label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Minimal Transaksi (Rp)</label><input type="number" name="min" required class="w-full border-2 border-slate-100 p-3.5 rounded-xl outline-none input-focus font-bold bg-slate-50 text-sm"></div>
                    <?php endif; ?>
                    
                    <?php if(in_array($tab,['kota','hotel','kamar','campaign'])): ?> 
                        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 mt-4">
                            <label class="block text-xs font-extrabold text-slate-500 mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-blue-500"></i> Foto / Gambar</label>
                            <p class="text-[11px] text-slate-400 mb-3 font-medium">Isi URL gambar ATAU upload file</p>
                            <input type="text" name="url" id="img_url" placeholder="https://..." class="w-full border-2 border-white p-3 mb-3 rounded-xl font-medium text-sm outline-none focus:border-blue-400 shadow-sm bg-white">
                            <div class="flex items-center justify-center my-1 text-[10px] font-extrabold text-slate-300 uppercase tracking-widest">— atau —</div>
                            <input type="file" name="file" accept="image/*" class="w-full bg-white border-2 border-white p-2 rounded-xl font-medium text-sm outline-none focus:border-blue-400 shadow-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer">
                        </div> 
                    <?php endif; ?>

                    <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-700 text-white font-extrabold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition transform hover:scale-[0.98] active:scale-95 mt-4 text-sm">
                        <i class="fa-solid fa-floppy-disk mr-2"></i> Simpan Data
                    </button>
                </form>
            </div>
        </div>
    </div>

    <script>
        function openModal(isEdit = false, data = {}) {
            document.getElementById('m').classList.remove('hidden');
            document.getElementById('modalTitle').innerHTML = isEdit ? '<i class="fa-solid fa-pen-to-square mr-2"></i> Edit Data' : '<i class="fa-solid fa-plus-circle mr-2"></i> Tambah Data Baru';
            document.getElementById('id_edit').value = isEdit ? data.id : '';
            const fields = ['nama', 'desc', 'id_kota', 'harga', 'kapasitas', 'tipe', 'info', 'atas_nama', 'kode', 'nilai', 'min'];
            fields.forEach(field => {
                const el = document.querySelector(`[name="${field}"]`);
                if(el) el.value = isEdit ? (data[field] || '') : '';
            });
            const urlEl = document.getElementById('img_url');
            if(urlEl) urlEl.value = isEdit ? (data.url || '') : '';
        }

        function toggleSidebar() {
            const sb = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            if(sb.classList.contains('-translate-x-full')) {
                sb.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sb.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }
    </script>
</body>
</html>

**uploads/**
#DI FOLDER INI BERISI GAMBAR

**setup.php**

<?php
require 'koneksi.php';
try {
    // Drop tabel pesanan lama yang error
    $pdo->exec("DROP TABLE IF EXISTS tb_pesanan");

    // Buat Tabel Baru dengan Struktur Sempurna
    $pdo->exec("CREATE TABLE IF NOT EXISTS tb_admin (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), password_hash VARCHAR(255))");
    $pdo->exec("CREATE TABLE IF NOT EXISTS tb_kota (id INT AUTO_INCREMENT PRIMARY KEY, nama_kota VARCHAR(100), gambar TEXT)");
    $pdo->exec("CREATE TABLE IF NOT EXISTS tb_hotel (id INT AUTO_INCREMENT PRIMARY KEY, id_kota INT, nama_hotel VARCHAR(150), deskripsi TEXT, gambar TEXT)");
    $pdo->exec("CREATE TABLE IF NOT EXISTS tb_kamar (id INT AUTO_INCREMENT PRIMARY KEY, id_hotel INT, nama_kamar VARCHAR(150), harga DECIMAL(10,2), kapasitas INT, gambar TEXT)");
    $pdo->exec("CREATE TABLE IF NOT EXISTS tb_campaign (id INT AUTO_INCREMENT PRIMARY KEY, judul VARCHAR(255), deskripsi TEXT, gambar TEXT)");
    $pdo->exec("CREATE TABLE IF NOT EXISTS tb_pembayaran (id INT AUTO_INCREMENT PRIMARY KEY, tipe VARCHAR(50), nama VARCHAR(100), info TEXT, atas_nama VARCHAR(100))");
    $pdo->exec("CREATE TABLE IF NOT EXISTS tb_promo (id INT AUTO_INCREMENT PRIMARY KEY, kode VARCHAR(50), tipe VARCHAR(50), nilai DECIMAL(10,2), min_belanja DECIMAL(10,2))");
    $pdo->exec("CREATE TABLE tb_pesanan (id_pesanan VARCHAR(50) PRIMARY KEY, nama_tamu VARCHAR(150), email VARCHAR(100), no_hp VARCHAR(20), id_hotel INT, id_kamar INT, tgl_checkin DATE, tgl_checkout DATE, total_kamar INT, total_harga DECIMAL(10,2), id_pembayaran INT, status ENUM('pending', 'confirmed', 'cencel') DEFAULT 'pending', bukti_bayar TEXT, waktu_pesan DATETIME)");

    // Buat Akun Admin
    $stmt = $pdo->query("SELECT COUNT(*) FROM tb_admin");
    if ($stmt->fetchColumn() == 0) {
        $pass_hash = password_hash('admin123', PASSWORD_BCRYPT);
        $pdo->exec("INSERT INTO tb_admin (username, password_hash) VALUES ('admin', '$pass_hash')");
    }
    echo "<h1 style='color:green; text-align:center; margin-top:50px; font-family:sans-serif;'>✅ Setup Database Berhasil! Silakan Hapus file ini dan buka Halaman Utama.</h1>";
} catch (Exception $e) { echo "Gagal: " . $e->getMessage(); }
?>

**pesan.php**

<?php
session_start();
error_reporting(0); 
require_once 'koneksi.php';

$id_kamar = $_GET['id_kamar'] ?? 0;
$checkin = $_GET['checkin'] ?? date('Y-m-d');
$checkout = $_GET['checkout'] ?? date('Y-m-d', strtotime('+1 day'));
$jml_kamar = isset($_GET['kamar']) ? (int)$_GET['kamar'] : 1;

$dt_in = new DateTime($checkin);
$dt_out = new DateTime($checkout);
if ($dt_out <= $dt_in) { $dt_out = clone $dt_in; $dt_out->modify('+1 day'); $checkout = $dt_out->format('Y-m-d'); }
$malam = $dt_in->diff($dt_out)->days;

$diskon_global_persen = 0;
try { $stmt_disc = $pdo->query("SELECT nilai FROM tb_pengaturan WHERE nama_setting='diskon_global'"); if($stmt_disc) $diskon_global_persen = (float)$stmt_disc->fetchColumn(); } catch(Exception $e) {}

$base_harga_asli = 0;
try {
    $stmt = $pdo->prepare("SELECT k.*, h.nama_hotel, h.id_kota, t.nama_kota FROM tb_kamar k JOIN tb_hotel h ON k.id_hotel = h.id JOIN tb_kota t ON h.id_kota = t.id WHERE k.id = ?");
    $stmt->execute([$id_kamar]);
    $kamar = $stmt->fetch();
    if(!$kamar) die("<div style='text-align:center;padding:100px;font-family:Plus Jakarta Sans,sans-serif;'><h2 style='color:#334155;font-size:24px;font-weight:bold;'>Kamar tidak ditemukan!</h2><br><a href='index.php' style='background:#f97316;color:white;padding:10px 20px;text-decoration:none;border-radius:10px;font-weight:bold;'>Kembali ke Beranda</a></div>");
    $base_harga_asli = $kamar['harga'] * $malam * $jml_kamar;
} catch(Exception $e) {}

$potongan_global = 0;
if($diskon_global_persen > 0) $potongan_global = $base_harga_asli * ($diskon_global_persen / 100);
$base_harga = $base_harga_asli - $potongan_global;

$diskon_promo = 0;
$pesan_promo = '';
$kode_promo_input = $_GET['promo'] ?? '';

if (!empty($kode_promo_input)) {
    try {
        $stmt_promo = $pdo->prepare("SELECT * FROM tb_promo WHERE kode = ?");
        $stmt_promo->execute([strtoupper($kode_promo_input)]);
        $promo = $stmt_promo->fetch();
        if ($promo) {
            if ($base_harga >= $promo['min_belanja']) {
                $diskon_promo = ($promo['tipe'] == 'percent') ? ($base_harga * $promo['nilai'] / 100) : $promo['nilai'];
                $pesan_promo = "<div class='text-emerald-700 text-xs font-bold mt-3 bg-emerald-50 p-3 rounded-xl border border-emerald-200 flex items-center gap-2'><i class='fa-solid fa-check-circle text-emerald-500'></i> Kode Promo " . strtoupper($kode_promo_input) . " berhasil diterapkan!</div>";
            } else {
                $pesan_promo = "<div class='text-red-700 text-xs font-bold mt-3 bg-red-50 p-3 rounded-xl border border-red-200 flex items-center gap-2'><i class='fa-solid fa-triangle-exclamation text-red-500'></i> Minimal transaksi Rp " . number_format($promo['min_belanja'],0,',','.') . "</div>";
            }
        } else {
            $pesan_promo = "<div class='text-red-700 text-xs font-bold mt-3 bg-red-50 p-3 rounded-xl border border-red-200 flex items-center gap-2'><i class='fa-solid fa-triangle-exclamation text-red-500'></i> Kode promo tidak valid atau sudah kadaluarsa.</div>";
        }
    } catch(Exception $e) {}
}

$total_harga = max(0, $base_harga - $diskon_promo);

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['buat_pesanan'])) {
    $id_pesanan = 'DH-' . strtoupper(substr(md5(uniqid()), 0, 6));
    try {
        $stmt = $pdo->prepare("INSERT INTO tb_pesanan (id_pesanan, nama_tamu, email, no_hp, id_hotel, id_kamar, tgl_checkin, tgl_checkout, total_kamar, total_harga, id_pembayaran, status, waktu_pesan) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->execute([$id_pesanan, $_POST['nama_tamu'], $_POST['email'], $_POST['no_hp'], $kamar['id_hotel'], $id_kamar, $checkin, $checkout, $jml_kamar, $total_harga, $_POST['id_pembayaran'], 'pending', date('Y-m-d H:i:s')]);
        
        $botToken = "8886385841:AAHZlPrROmeFMpiM4kya6kQ0jv5G4c8pCKY";
        $chatId = "8968023075";
        $nama_pembayaran = "Lainnya";
        try { $stmt_pay = $pdo->prepare("SELECT nama FROM tb_pembayaran WHERE id = ?"); $stmt_pay->execute([$_POST['id_pembayaran']]); $nama_pembayaran = $stmt_pay->fetchColumn() ?: "Lainnya"; } catch(Exception $e) {}

        $teks_telegram = "🛎️ <b>PESANAN BARU MASUK!</b>\n\n";
        $teks_telegram .= "<b>ID Pesanan:</b> " . $id_pesanan . "\n";
        $teks_telegram .= "<b>Nama Tamu:</b> " . htmlspecialchars($_POST['nama_tamu']) . "\n";
        $teks_telegram .= "<b>No WA:</b> " . htmlspecialchars($_POST['no_hp']) . "\n";
        $teks_telegram .= "<b>Hotel:</b> " . $kamar['nama_hotel'] . "\n";
        $teks_telegram .= "<b>Kamar:</b> " . $kamar['nama_kamar'] . " (" . $jml_kamar . " Kamar)\n";
        $teks_telegram .= "<b>Check-in:</b> " . date('d M Y', strtotime($checkin)) . "\n";
        $teks_telegram .= "<b>Durasi:</b> " . $malam . " Malam\n";
        $teks_telegram .= "<b>Total Tagihan:</b> Rp " . number_format($total_harga,0,',','.') . "\n";
        $teks_telegram .= "<b>Metode Bayar:</b> " . $nama_pembayaran . "\n\n";
        $teks_telegram .= "Cek panel admin untuk validasi pembayaran!";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot{$botToken}/sendMessage");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(['chat_id' => $chatId, 'text' => $teks_telegram, 'parse_mode' => 'HTML']));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 2); 
        curl_exec($ch);
        curl_close($ch);

        header("Location: pembayaran.php?id=" . $id_pesanan); exit;
    } catch(Exception $e) { $error = "Gagal membuat pesanan. Pastikan database sudah terstruktur dengan benar."; }
}

$seo_hotel = htmlspecialchars($kamar['nama_hotel']??'');
$seo_kamar = htmlspecialchars($kamar['nama_kamar']??'');
$seo_kota  = htmlspecialchars($kamar['nama_kota']??'');
$seo_harga = number_format($kamar['harga']??0,0,',','.');
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking <?= $seo_hotel ?> Tipe <?= $seo_kamar ?> - DiskonHotel</title>
    <meta name="description" content="Pesan <?= $seo_kamar ?> di <?= $seo_hotel ?>, <?= $seo_kota ?> dengan harga promo Rp <?= $seo_harga ?>/malam.">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f8fafc; }
        .input-focus { transition: border-color 0.2s, box-shadow 0.2s; }
        .input-focus:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .payment-card:has(input:checked) { border-color: #2563eb; background: rgba(239,246,255,0.8); }
    </style>
</head>
<body class="flex flex-col min-h-screen relative overflow-x-hidden">
    
    <!-- NAVBAR -->
    <nav class="bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <button onclick="history.back()" class="flex items-center gap-3 group">
                <div class="w-9 h-9 flex items-center justify-center bg-slate-100 group-hover:bg-blue-50 rounded-full transition">
                    <i class="fa-solid fa-arrow-left text-sm text-slate-500 group-hover:text-blue-600 transition"></i>
                </div>
                <span class="font-bold text-sm text-slate-500 hidden sm:block">Kembali</span>
            </button>
            <h1 class="font-extrabold text-base text-slate-800 tracking-tight text-center">Selesaikan Pemesanan</h1>
            <div class="w-16"></div>
        </div>
    </nav>

    <div class="max-w-6xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full flex-1">
        
        <!-- CARD DETAIL PESANAN (SIDEBAR) -->
        <div class="lg:col-span-1 order-1 lg:order-2">
            <div class="bg-gradient-to-b from-slate-900 to-blue-900 text-white rounded-3xl shadow-2xl overflow-hidden sticky top-24">
                
                <?php if($diskon_global_persen > 0): ?>
                    <div class="absolute top-4 right-4 z-10 bg-red-500 text-white font-extrabold text-[10px] px-3 py-1.5 rounded-lg shadow-lg border border-red-400 animate-pulse uppercase tracking-widest">
                        <i class="fa-solid fa-bolt text-yellow-300 mr-1"></i> Flash Sale
                    </div>
                <?php endif; ?>

                <div class="relative">
                    <?php $imgShare = !empty($kamar['gambar'])?(strpos($kamar['gambar'],'http')===0)?$kamar['gambar']:'uploads/'.$kamar['gambar']:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600'; ?>
                    <img src="<?= htmlspecialchars($imgShare) ?>" class="w-full h-48 object-cover opacity-40 mix-blend-overlay">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-6 right-6">
                        <span class="bg-orange-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 inline-block shadow">Pilihan Anda</span>
                        <h3 class="font-extrabold text-xl leading-tight text-white drop-shadow"><?= htmlspecialchars($kamar['nama_hotel']??'') ?></h3>
                    </div>
                </div>
                
                <div class="p-6">
                    <h4 class="font-bold text-blue-200 text-base mb-5 pb-4 border-b border-blue-800/50 flex justify-between items-center">
                        <?= htmlspecialchars($kamar['nama_kamar']??'') ?>
                        <i class="fa-solid fa-bed text-blue-400"></i>
                    </h4>
                    
                    <div class="space-y-2.5 text-sm font-semibold text-blue-100 mb-6">
                        <div class="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5"><span class="text-blue-300"><i class="fa-solid fa-calendar-check mr-2 text-xs"></i>Check-in</span><span class="text-white font-extrabold"><?= date('d M Y', strtotime($checkin)) ?></span></div>
                        <div class="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5"><span class="text-blue-300"><i class="fa-solid fa-calendar-xmark mr-2 text-xs"></i>Check-out</span><span class="text-white font-extrabold"><?= date('d M Y', strtotime($checkout)) ?></span></div>
                        <div class="flex justify-between items-center px-2 pt-1"><span class="text-blue-400">Durasi</span><span class="text-white font-extrabold"><?= $malam ?> Malam</span></div>
                        <div class="flex justify-between items-center px-2"><span class="text-blue-400">Jumlah Kamar</span><span class="text-white font-extrabold"><?= $jml_kamar ?> Kamar</span></div>
                        <div class="flex justify-between items-center px-2"><span class="text-blue-400">Harga/Kamar/Mlm</span><span class="text-white font-extrabold">Rp <?= number_format($kamar['harga'],0,',','.') ?></span></div>
                    </div>

                    <!-- KODE PROMO -->
                    <div class="mt-4 pt-5 border-t border-blue-800/50">
                        <label class="block text-blue-200 text-xs font-bold mb-2.5"><i class="fa-solid fa-ticket text-orange-400 mr-1.5"></i>Kode Promo</label>
                        <div class="flex gap-2">
                            <input type="text" id="promoInput" value="<?= htmlspecialchars($kode_promo_input) ?>" class="flex-1 px-3 py-3 rounded-xl bg-white/5 border border-blue-800 text-white font-black uppercase tracking-widest text-sm focus:outline-none focus:border-blue-400 transition placeholder:text-blue-700" placeholder="KODE">
                            <button type="button" onclick="terapkanPromo()" class="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-5 py-3 rounded-xl transition text-sm shadow-lg shadow-blue-600/20">PAKAI</button>
                        </div>
                        <?= $pesan_promo ?>
                    </div>
                    
                    <!-- RINCIAN HARGA -->
                    <div class="mt-6 pt-5 border-t border-blue-800/50">
                        <?php if($potongan_global > 0 || $diskon_promo > 0): ?>
                            <div class="flex justify-between items-center mb-2"><span class="text-slate-400 text-xs">Total Harga Asli</span><span class="text-slate-400 font-bold text-xs line-through">Rp <?= number_format($base_harga_asli,0,',','.') ?></span></div>
                        <?php endif; ?>
                        <?php if($potongan_global > 0): ?>
                            <div class="flex justify-between items-center mb-2"><span class="text-red-400 text-xs font-bold">Flash Sale (<?= $diskon_global_persen ?>%)</span><span class="text-red-400 font-bold text-xs">- Rp <?= number_format($potongan_global,0,',','.') ?></span></div>
                        <?php endif; ?>
                        <?php if($diskon_promo > 0): ?>
                            <div class="flex justify-between items-center mb-4"><span class="text-emerald-400 text-xs font-bold">Voucher Promo</span><span class="text-emerald-400 font-bold text-xs">- Rp <?= number_format($diskon_promo,0,',','.') ?></span></div>
                        <?php endif; ?>
                        
                        <p class="text-blue-300 text-[10px] font-extrabold mb-1 uppercase tracking-[0.2em] mt-4 border-t border-blue-800/50 pt-4">Total Tagihan (<?= $jml_kamar ?> Kamar)</p>
                        <p class="text-3xl font-extrabold text-orange-400 tracking-tight">Rp <?= number_format($total_harga,0,',','.') ?></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- FORM PEMESANAN -->
        <div class="lg:col-span-2 space-y-5 order-2 lg:order-1">
            <?php if(isset($error)): ?><div class="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-xl font-bold flex items-center shadow-sm"><i class="fa-solid fa-circle-exclamation mr-3 text-lg"></i> <?= $error ?></div><?php endif; ?>
            
            <form method="POST" class="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10">
                <!-- Data Pemesan -->
                <h2 class="text-lg font-extrabold text-slate-800 mb-6 flex items-center gap-3">
                    <div class="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center"><i class="fa-solid fa-user text-blue-600 text-sm"></i></div> Data Pemesan
                </h2>
                <div class="space-y-5 mb-10">
                    <div>
                        <label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Nama Sesuai KTP <span class="text-red-500">*</span></label>
                        <input type="text" name="nama_tamu" required class="w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none input-focus font-bold text-slate-800 text-base rounded-t-lg transition">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">Alamat Email <span class="text-red-500">*</span></label>
                            <input type="email" name="email" required class="w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none input-focus font-bold text-slate-800 text-base rounded-t-lg transition">
                        </div>
                        <div>
                            <label class="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">No WhatsApp <span class="text-red-500">*</span></label>
                            <input type="number" name="no_hp" required class="w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none input-focus font-bold text-slate-800 text-base rounded-t-lg transition" placeholder="08xxxxxxxxxx">
                        </div>
                    </div>
                </div>

                <!-- Metode Pembayaran -->
                <h2 class="text-lg font-extrabold text-slate-800 mb-6 flex items-center gap-3 pt-8 border-t border-slate-100">
                    <div class="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center"><i class="fa-solid fa-wallet text-orange-600 text-sm"></i></div> Metode Pembayaran
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    <?php 
                    try {
                        $p=$pdo->query("SELECT * FROM tb_pembayaran"); 
                        while($pay=$p->fetch()): 
                            $icon = $pay['tipe'] == 'qris' ? 'fa-qrcode text-blue-600' : 'fa-building-columns text-orange-500';
                    ?>
                    <label class="border-2 border-slate-100 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:border-blue-300 hover:bg-blue-50/30 transition duration-200 payment-card relative">
                        <input type="radio" name="id_pembayaran" value="<?= $pay['id'] ?>" required class="w-5 h-5 text-blue-600 accent-blue-600">
                        <div>
                            <h4 class="font-extrabold text-slate-800 text-sm"><i class="fa-solid <?= $icon ?> mr-1.5"></i><?= htmlspecialchars($pay['nama']) ?></h4>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5"><?= htmlspecialchars($pay['tipe']) ?></p>
                        </div>
                    </label>
                    <?php endwhile; } catch(Exception $e){} ?>
                </div>

                <button type="submit" name="buat_pesanan" class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-600 text-white font-extrabold py-4 rounded-2xl shadow-xl shadow-orange-500/20 transition transform hover:scale-[0.98] active:scale-95 text-sm uppercase tracking-wide flex justify-center items-center gap-2">
                    Bayar Rp <?= number_format($total_harga,0,',','.') ?> <i class="fa-solid fa-arrow-right"></i>
                </button>
            </form>
        </div>
    </div>

    <!-- WHATSAPP FAB -->
    <a href="https://wa.me/6285111221931?text=Halo%20Admin%20DiskonHotel,%20saya%20butuh%20bantuan." target="_blank" class="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 transform hover:scale-110 group">
        <i class="fa-brands fa-whatsapp text-2xl"></i>
        <span class="absolute right-16 bg-white text-slate-800 font-bold text-xs px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
            Hubungi Bantuan
        </span>
    </a>

    <!-- FOOTER SPACER -->
    <div class="h-8"></div>

    <script>
        function terapkanPromo() {
            const promoVal = document.getElementById('promoInput').value.trim();
            const urlParams = new URLSearchParams(window.location.search);
            if (promoVal) { urlParams.set('promo', promoVal); } else { urlParams.delete('promo'); }
            window.location.search = urlParams.toString();
        }
    </script>
</body>
</html>

**pembayaran.php**

<?php
session_start();
ini_set('display_errors', 1); 
error_reporting(E_ALL);
require_once 'koneksi.php';

function calculateCRC16($str) {
    $crc = 0xFFFF;
    for ($i = 0; $i < strlen($str); $i++) {
        $x = (($crc >> 8) ^ ord($str[$i])) & 0xFF;
        $x ^= $x >> 4;
        $crc = (($crc << 8) ^ ($x << 12) ^ ($x << 5) ^ $x) & 0xFFFF;
    }
    return strtoupper(str_pad(dechex($crc), 4, '0', STR_PAD_LEFT));
}

function generateDynamicQRIS($staticQRIS, $nominal) {
    $qris = trim($staticQRIS);
    $qris = str_replace('010211', '010212', $qris);
    $nominalStr = (string)$nominal;
    $length = strlen($nominalStr);
    $lengthStr = str_pad($length, 2, '0', STR_PAD_LEFT);
    $tag54 = "54" . $lengthStr . $nominalStr;
    if (strpos($qris, '5303360') !== false) {
        $qris = substr_replace($qris, '5303360' . $tag54, strpos($qris, '5303360'), 7);
    }
    $posCRC = strrpos($qris, '6304');
    if ($posCRC !== false) { $qris = substr($qris, 0, $posCRC + 4); }
    return $qris . calculateCRC16($qris);
}

$id_pesanan = isset($_GET['id']) ? $_GET['id'] : '';
try {
    $stmt = $pdo->prepare("SELECT p.*, h.nama_hotel, k.nama_kamar, pb.tipe, pb.nama as metode, pb.info, pb.atas_nama FROM tb_pesanan p JOIN tb_hotel h ON p.id_hotel=h.id JOIN tb_kamar k ON p.id_kamar=k.id JOIN tb_pembayaran pb ON p.id_pembayaran=pb.id WHERE p.id_pesanan=?");
    $stmt->execute([$id_pesanan]); $order = $stmt->fetch();
    if(!$order) die("<div style='text-align:center;padding:100px;font-family:Plus Jakarta Sans,sans-serif;'><h2 style='color:#334155;font-size:24px;font-weight:bold;'>Pesanan Tidak Ditemukan.</h2><br><a href='index.php' style='background:#f97316;color:white;padding:10px 20px;text-decoration:none;border-radius:10px;font-weight:bold;'>Kembali ke Home</a></div>");
} catch(Exception $e) {}

$msg_upload = '';
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['upload_bukti'])) {
    if(!is_dir('uploads')) mkdir('uploads', 0777, true);
    $file = $_FILES['bukti_transfer'];
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    $is_real_image = getimagesize($file['tmp_name']);
    if(in_array($ext, ['jpg', 'jpeg', 'png', 'webp']) && $file['size'] > 0 && $is_real_image !== false) {
        $filename = 'bukti_' . $id_pesanan . '_' . time() . '.' . $ext;
        if(move_uploaded_file($file['tmp_name'], 'uploads/' . $filename)) {
            $pdo->prepare("UPDATE tb_pesanan SET bukti_bayar = ? WHERE id_pesanan = ?")->execute([$filename, $id_pesanan]);
            $order['bukti_bayar'] = $filename; 
            $msg_upload = "<div class='bg-emerald-50 text-emerald-700 p-4 rounded-2xl font-bold mb-6 text-center shadow-sm border border-emerald-200 flex items-center justify-center gap-2'><i class='fa-solid fa-circle-check text-emerald-500'></i> Bukti berhasil diupload! Menunggu verifikasi Admin.</div>";
        }
    } else {
        $msg_upload = "<div class='bg-red-50 text-red-700 p-4 rounded-2xl font-bold mb-6 text-center shadow-sm border border-red-200 flex items-center justify-center gap-2'><i class='fa-solid fa-triangle-exclamation text-red-500'></i> Gagal! Format file tidak diizinkan.</div>";
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Pembayaran - DiskonHotel</title>
    <script src="https://cdn.tailwindcss.com"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f8fafc; }
        .pulse-ring { animation: pulseRing 2s ease-out infinite; }
        @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(251,146,60,0.4); } 70% { box-shadow: 0 0 0 10px rgba(251,146,60,0); } 100% { box-shadow: 0 0 0 0 rgba(251,146,60,0); } }
    </style>
</head>
<body class="flex flex-col min-h-screen relative">
    <!-- NAVBAR -->
    <nav class="bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-3xl mx-auto px-4 h-16 flex justify-center items-center">
            <a href="index.php" class="flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <i class="fa-solid fa-hotel text-white text-xs"></i>
                </div>
                <span class="font-extrabold text-base text-slate-800 tracking-tight">Diskon<span class="text-blue-600">Hotel</span></span>
            </a>
        </div>
    </nav>

    <div class="max-w-3xl mx-auto px-4 py-8 md:py-12 w-full flex-grow">
        <?= $msg_upload ?>
        <div class="bg-white rounded-3xl shadow-2xl shadow-slate-900/5 overflow-hidden border border-slate-100">
            
            <!-- STATUS HEADER -->
            <div class="p-8 md:p-10 text-center text-white relative overflow-hidden
                <?php if(isset($order['status']) && $order['status'] == 'pending'): ?> bg-gradient-to-br from-blue-700 to-blue-900
                <?php elseif(isset($order['status']) && $order['status'] == 'confirmed'): ?> bg-gradient-to-br from-emerald-600 to-emerald-800
                <?php else: ?> bg-gradient-to-br from-red-600 to-red-800 <?php endif; ?>">
                
                <?php if(isset($order['status']) && $order['status'] == 'pending'): ?>
                    <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 pulse-ring">
                        <i class="fa-regular fa-clock text-4xl text-white/90 animate-pulse"></i>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-extrabold mb-2">Menunggu Pembayaran</h2>
                    <p class="font-medium text-white/60 text-sm max-w-sm mx-auto">Selesaikan pembayaran & upload bukti dalam waktu 1 jam agar pesanan tidak batal otomatis.</p>
                <?php elseif(isset($order['status']) && $order['status'] == 'confirmed'): ?>
                    <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5">
                        <i class="fa-solid fa-circle-check text-4xl text-emerald-300"></i>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-extrabold mb-2">Pesanan Terkonfirmasi!</h2>
                    <p class="font-medium text-white/60 text-sm">Terima kasih, pembayaran Anda telah divalidasi oleh admin. Selamat berlibur!</p>
                <?php else: ?>
                    <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5">
                        <i class="fa-solid fa-circle-xmark text-4xl text-red-300"></i>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-extrabold mb-2">Pesanan Dibatalkan</h2>
                    <p class="font-medium text-white/60 text-sm">Waktu pembayaran telah habis atau dibatalkan oleh admin.</p>
                <?php endif; ?>
            </div>
            
            <div class="p-6 md:p-10">
                <!-- ID PESANAN & STATUS -->
                <div class="flex justify-between items-center mb-8 pb-5 border-b-2 border-slate-100">
                    <div>
                        <p class="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-1.5">ID Pesanan</p>
                        <p class="font-mono font-extrabold text-xl md:text-2xl text-blue-800 bg-blue-50 px-3 py-1.5 rounded-xl inline-block"><?= htmlspecialchars($order['id_pesanan'] ?? '') ?></p>
                    </div>
                    <div class="px-4 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-sm border
                        <?= (isset($order['status'])&&$order['status']=='pending')?'bg-yellow-50 text-yellow-700 border-yellow-200':((isset($order['status'])&&$order['status']=='confirmed')?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-red-50 text-red-700 border-red-200') ?>">
                        <?= htmlspecialchars($order['status'] ?? '') ?>
                    </div>
                </div>

                <!-- TOTAL TAGIHAN & INFO BAYAR -->
                <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 mb-8 text-center">
                    <p class="text-[10px] font-extrabold text-slate-400 mb-1 uppercase tracking-widest">Total Tagihan</p>
                    <p class="text-3xl md:text-4xl font-extrabold text-orange-600 mb-6 tracking-tight">Rp <?= number_format($order['total_harga'] ?? 0,0,',','.') ?></p>
                    
                    <div class="border-t border-slate-200 pt-6">
                        <p class="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wide">Transfer ke metode berikut:</p>
                        <div class="inline-block text-left bg-white p-6 rounded-2xl shadow-sm border border-slate-100 w-full max-w-sm">
                            <h3 class="font-extrabold text-lg text-slate-800 mb-4 text-center border-b border-slate-100 pb-4"><?= htmlspecialchars($order['metode'] ?? '') ?></h3>
                            
                            <?php 
                            if(isset($order['tipe']) && $order['tipe'] == 'qris'): 
                                $staticQRIS = $order['info'] ?? '';
                                $nominalTagihan = (int)($order['total_harga'] ?? 0);
                                $dynamicQRIS = (!empty($staticQRIS)) ? generateDynamicQRIS($staticQRIS, $nominalTagihan) : "";
                            ?>
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=<?= urlencode($dynamicQRIS) ?>" class="mx-auto w-48 h-48 border-4 border-white shadow-xl rounded-2xl mb-3 hover:scale-105 transition duration-300">
                                <div class="bg-blue-50 border border-blue-100 p-3 rounded-xl mt-4 text-center">
                                    <p class="text-xs font-bold text-blue-800 uppercase mb-1"><i class="fa-solid fa-wand-magic-sparkles text-yellow-500 mr-1"></i> QRIS Dinamis Aktif</p>
                                    <p class="text-[11px] text-blue-600 font-medium">Scan QR ini, nominal Rp <?= number_format($nominalTagihan,0,',','.') ?> terisi otomatis.</p>
                                </div>
                            <?php else: ?>
                                <p class="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-1">Nomor Rekening</p>
                                <p class="font-mono font-extrabold text-xl text-blue-700 tracking-widest mb-4 bg-blue-50 p-3 rounded-xl text-center"><?= htmlspecialchars($order['info'] ?? '') ?></p>
                                <p class="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-1">Atas Nama</p>
                                <p class="font-extrabold text-slate-800 text-base"><?= htmlspecialchars($order['atas_nama'] ?? '') ?></p>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>

                <!-- RINCIAN PESANAN -->
                <div class="space-y-3 mb-8 text-sm">
                    <div class="flex justify-between items-center py-2 border-b border-slate-100"><span class="text-slate-400 font-bold">Nama Tamu</span><span class="font-extrabold text-right text-slate-800"><?= htmlspecialchars($order['nama_tamu'] ?? '') ?></span></div>
                    <div class="flex justify-between items-center py-2 border-b border-slate-100"><span class="text-slate-400 font-bold">Hotel</span><span class="font-extrabold text-right text-slate-800"><?= htmlspecialchars($order['nama_hotel'] ?? '') ?></span></div>
                    <div class="flex justify-between items-center py-2 border-b border-slate-100"><span class="text-slate-400 font-bold">Tipe Kamar</span><span class="font-extrabold text-blue-600 text-right"><?= htmlspecialchars($order['nama_kamar'] ?? '') ?> (<?= htmlspecialchars($order['total_kamar'] ?? 1) ?>x)</span></div>
                    <div class="flex justify-between items-center py-2"><span class="text-slate-400 font-bold">Periode Menginap</span><span class="font-extrabold text-right text-slate-800"><?= date('d M Y', strtotime($order['tgl_checkin'] ?? 'now')) ?> - <?= date('d M Y', strtotime($order['tgl_checkout'] ?? 'now')) ?></span></div>
                </div>

                <!-- UPLOAD BUKTI -->
                <?php if(isset($order['status']) && $order['status'] == 'pending'): ?>
                    <div class="bg-blue-50 border-2 border-dashed border-blue-200 rounded-3xl p-8 text-center hover:border-blue-400 transition">
                        <?php if(!empty($order['bukti_bayar'])): ?>
                            <img src="uploads/<?= htmlspecialchars($order['bukti_bayar']) ?>" alt="Bukti" class="h-36 mx-auto rounded-2xl mb-4 shadow-lg border object-cover">
                            <p class="text-emerald-600 font-extrabold text-base mb-1"><i class="fa-solid fa-check-circle mr-1"></i> Bukti Terkirim</p>
                            <p class="text-xs text-slate-400 mb-4 font-bold">Ingin mengubah foto bukti?</p>
                        <?php else: ?>
                            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <i class="fa-solid fa-cloud-arrow-up text-2xl text-blue-500"></i>
                            </div>
                            <p class="font-extrabold text-slate-800 text-lg mb-1">Upload Bukti Transfer</p>
                            <p class="text-sm text-slate-400 mb-5 font-medium">Hanya format JPG/PNG yang diizinkan.</p>
                        <?php endif; ?>
                        
                        <form method="POST" enctype="multipart/form-data">
                            <input type="file" name="bukti_transfer" id="upload" required class="hidden" accept="image/jpeg, image/png, image/webp" onchange="document.getElementById('btnSubmit').classList.remove('hidden'); document.getElementById('labelFile').innerText='Foto Dipilih - Klik Upload';" />
                            <label for="upload" id="labelFile" class="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-extrabold shadow-sm cursor-pointer hover:bg-slate-50 transition inline-block text-sm">
                                <i class="fa-regular fa-image mr-2"></i> Pilih Foto Bukti
                            </label>
                            <button type="submit" name="upload_bukti" id="btnSubmit" class="hidden mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-extrabold shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-blue-700 transition text-sm">
                                <i class="fa-solid fa-upload mr-2"></i> Upload Sekarang
                            </button>
                        </form>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="text-center mt-6 mb-4">
            <a href="index.php" class="text-sm font-bold text-slate-400 hover:text-blue-600 transition inline-flex items-center gap-1.5">
                <i class="fa-solid fa-arrow-left text-xs"></i> Kembali ke Beranda
            </a>
        </div>
    </div>

    <!-- WHATSAPP FAB -->
    <a href="https://wa.me/6285111221931?text=Halo%20Admin%20DiskonHotel,%20saya%20butuh%20bantuan." target="_blank" class="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-[9999] transition-all duration-300 transform hover:scale-110 group">
        <i class="fa-brands fa-whatsapp text-2xl"></i>
        <span class="absolute right-16 bg-white text-slate-800 font-bold text-xs px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
            Hubungi CS
        </span>
    </a>

</body>
</html>

**koneksi.php**
<?php
$host = 'localhost';
$db   = 'diskonh1_db'; // GANTI DENGAN NAMA DB CPANEL ANDA
$user = 'diskonh1_xtrovert'; // GANTI DENGAN USER DB CPANEL ANDA
$pass = '2GtjjZHpd7b9Xo';   // GANTI DENGAN PASS DB CPANEL ANDA
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("<div style='padding:20px; background:#fee2e2; color:#991b1b; font-family:sans-serif;'><b>Koneksi Gagal:</b> " . $e->getMessage() . "</div>");
}
?>

**index.php**

<?php
session_start();
require_once 'koneksi.php';

$kota_id = isset($_GET['kota']) ? (int)$_GET['kota'] : 0;
$checkin = $_GET['checkin'] ?? date('Y-m-d');
$checkout = $_GET['checkout'] ?? date('Y-m-d', strtotime('+1 day'));
$jml_kamar = isset($_GET['kamar']) ? (int)$_GET['kamar'] : 1;

$campaigns = [];
try {
    $camp_stmt = $pdo->query("SELECT * FROM tb_campaign ORDER BY id DESC LIMIT 3");
    $campaigns = $camp_stmt->fetchAll();
} catch(Exception $e) {}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DiskonHotel | Cari & Pesan Hotel Terbaik</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-bg {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%);
            position: relative; overflow: hidden;
        }
        .hero-bg::before {
            content: ''; position: absolute; top: -50%; right: -20%;
            width: 600px; height: 600px; border-radius: 50%;
            background: rgba(251,146,60,0.08);
        }
        .hero-bg::after {
            content: ''; position: absolute; bottom: -30%; left: -10%;
            width: 400px; height: 400px; border-radius: 50%;
            background: rgba(59,130,246,0.1);
        }
        .card-hover { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); }
        .input-focus { transition: border-color 0.2s, box-shadow 0.2s; }
        .input-focus:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .fade-in { animation: fadeIn 0.6s ease-out forwards; opacity:0; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    </style>
</head>
<body class="bg-slate-50 min-h-screen flex flex-col">

    <!-- NAVBAR -->
    <nav class="bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between h-16">
                <a href="index.php" class="flex items-center gap-2">
                    <div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                        <i class="fa-solid fa-hotel text-white text-sm"></i>
                    </div>
                    <span class="font-extrabold text-lg text-slate-800 tracking-tight">Diskon<span class="text-blue-600">Hotel</span></span>
                </a>
                <div class="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <a href="#destinasi" class="px-3 py-2 rounded-lg hover:bg-slate-100 transition">Destinasi</a>
                    <a href="#rekomendasi" class="px-3 py-2 rounded-lg hover:bg-slate-100 transition">Rekomendasi</a>
                </div>
                <a href="admin/" class="text-sm font-bold text-slate-400 hover:text-blue-600 transition px-3 py-2 rounded-lg hover:bg-blue-50">
                    <i class="fa-solid fa-user-lock mr-1"></i> Admin
                </a>
            </div>
        </div>
    </nav>

    <!-- HERO -->
    <section class="hero-bg relative z-10">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 relative z-10">
            <div class="text-center mb-10">
                <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 mb-5">
                    <i class="fa-solid fa-fire text-orange-400"></i> Promo Spesial Bulan Ini
                </span>
                <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    Temukan & Pesan<br class="hidden sm:block"> Hotel Impian Anda
                </h1>
                <p class="text-blue-200/80 text-sm md:text-base font-medium max-w-lg mx-auto">
                    Harga terbaik, proses cepat, dan pilihan hotel terlengkap.
                </p>
            </div>

            <!-- SEARCH FORM -->
            <form action="index.php" method="GET" id="destinasi" class="bg-white rounded-3xl shadow-2xl shadow-black/10 p-6 md:p-8 max-w-4xl mx-auto relative z-20">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                    <div class="sm:col-span-2 lg:col-span-1">
                        <label class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-2.5">
                            <i class="fa-solid fa-location-dot mr-1 text-blue-500"></i> Destinasi
                        </label>
                        <select name="kota" class="w-full font-bold text-slate-700 outline-none border-2 border-slate-100 rounded-xl px-4 py-3 text-sm input-focus bg-slate-50 cursor-pointer">
                            <option value="0">Semua Kota</option>
                            <?php try { $stmt=$pdo->query("SELECT * FROM tb_kota"); while($k=$stmt->fetch()){ $sel=($kota_id==$k['id'])?'selected':''; echo "<option value='{$k['id']}' $sel>{$k['nama_kota']}</option>"; } } catch(Exception $e){} ?>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-calendar-day mr-1 text-blue-500"></i> Check-in</label>
                        <input type="date" name="checkin" id="checkin" value="<?= $checkin ?>" min="<?= date('Y-m-d') ?>" class="w-full font-bold outline-none border-2 border-slate-100 rounded-xl px-4 py-3 text-sm input-focus bg-slate-50 cursor-pointer text-slate-700">
                    </div>
                    <div>
                        <label class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-calendar-check mr-1 text-blue-500"></i> Check-out</label>
                        <input type="date" name="checkout" id="checkout" value="<?= $checkout ?>" class="w-full font-bold outline-none border-2 border-slate-100 rounded-xl px-4 py-3 text-sm input-focus bg-slate-50 cursor-pointer text-slate-700">
                    </div>
                    <div>
                        <label class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-bed mr-1 text-blue-500"></i> Jumlah Kamar</label>
                        <select name="kamar" class="w-full font-bold text-slate-700 outline-none border-2 border-slate-100 rounded-xl px-4 py-3 text-sm input-focus bg-slate-50 cursor-pointer">
                            <?php for($i=1;$i<=10;$i++): ?><option value="<?= $i ?>" <?= ($jml_kamar==$i)?'selected':'' ?>><?= $i ?> Kamar</option><?php endfor; ?>
                        </select>
                    </div>
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-600 text-white font-extrabold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-orange-500/25 tracking-wide text-sm uppercase">
                    <i class="fa-solid fa-magnifying-glass mr-2"></i> Cari Hotel Sekarang
                </button>
            </form>
        </div>
    </section>

    <div class="h-10 md:h-14"></div>

    <!-- CAMPAIGN -->
    <?php if(count($campaigns) > 0): ?>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <h2 class="text-xl font-extrabold text-slate-800 flex items-center gap-3 mb-6">
            <div class="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div> Promo & Campaign
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <?php foreach($campaigns as $camp):
                $camp_img = !empty($camp['gambar'])?(strpos($camp['gambar'],'http')===0?$camp['gambar']:'uploads/'.$camp['gambar']):'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500';
            ?>
            <div class="group relative h-52 rounded-2xl overflow-hidden cursor-pointer card-hover">
                <img src="<?= htmlspecialchars($camp_img) ?>" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-5">
                    <span class="bg-orange-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 inline-block">Promo</span>
                    <h3 class="font-extrabold text-white text-lg leading-tight mb-1"><?= htmlspecialchars($camp['judul']) ?></h3>
                    <p class="text-white/70 text-xs font-medium line-clamp-2"><?= htmlspecialchars($camp['deskripsi']) ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>
    <?php endif; ?>

    <!-- REKOMENDASI -->
    <section id="rekomendasi" class="max-w-6xl mx-auto px-4 sm:px-6 pb-16 flex-1">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-xl font-extrabold text-slate-800 flex items-center gap-3">
                <div class="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div> Rekomendasi Kami
            </h2>
            <?php if($kota_id > 0): ?>
                <a href="index.php" class="text-sm font-bold text-blue-600 hover:text-blue-800 transition"><i class="fa-solid fa-xmark"></i> Reset</a>
            <?php endif; ?>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php
            try {
                $sql = "SELECT h.id, h.nama_hotel, h.gambar, h.deskripsi, MIN(k.harga) as harga_min FROM tb_hotel h JOIN tb_kamar k ON h.id = k.id_hotel";
                if($kota_id > 0) $sql .= " WHERE h.id_kota = $kota_id";
                $sql .= " GROUP BY h.id ORDER BY harga_min ASC";
                $stmt = $pdo->query($sql);
                if($stmt->rowCount()==0) echo "<div class='col-span-full text-center py-16'><div class='w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4'><i class='fa-solid fa-hotel text-3xl text-slate-300'></i></div><h3 class='font-bold text-slate-400 text-lg mb-1'>Belum ada hotel tersedia</h3><p class='text-sm text-slate-300 font-medium'>Coba ubah filter pencarian Anda</p></div>";
                $i=0;
                while($row=$stmt->fetch()){
                    $img = !empty($row['gambar'])?(strpos($row['gambar'],'http')===0?$row['gambar']:'uploads/'.$row['gambar']):'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500';
            ?>
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-hover flex flex-col group fade-in" style="animation-delay:<?= $i*0.08 ?>s">
                <div class="relative overflow-hidden h-52">
                    <img src="<?= htmlspecialchars($img) ?>" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" loading="lazy">
                    <div class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-blue-800 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                        <i class="fa-solid fa-fire text-orange-500"></i> Terlaris
                    </div>
                </div>
                <div class="p-5 flex flex-col flex-1">
                    <h3 class="font-extrabold text-lg text-slate-800 mb-2 leading-tight group-hover:text-blue-700 transition"><?= htmlspecialchars($row['nama_hotel']) ?></h3>
                    <?php if(!empty($row['deskripsi'])): ?>
                        <p class="text-xs text-slate-400 font-medium mb-3 line-clamp-2 flex-1"><?= htmlspecialchars($row['deskripsi']) ?></p>
                    <?php else: ?><div class="flex-1"></div><?php endif; ?>
                    <div class="flex items-end justify-between mt-3 pt-4 border-t border-slate-100">
                        <div>
                            <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Mulai dari</p>
                            <p class="text-xl font-extrabold text-orange-500">Rp <?= number_format($row['harga_min'],0,',','.') ?></p>
                            <p class="text-[10px] text-slate-400 font-bold">/kamar/malam</p>
                        </div>
                        <a href="detail_hotel.php?id_hotel=<?= $row['id'] ?>&checkin=<?= $checkin ?>&checkout=<?= $checkout ?>&kamar=<?= $jml_kamar ?>" class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-extrabold text-sm transition-all active:scale-95 shadow-lg shadow-blue-600/20 whitespace-nowrap">
                            Lihat <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>
            <?php $i++; } } catch(Exception $e){ echo "<div class='col-span-full text-center py-10 text-red-400 font-bold'>Terjadi kesalahan.</div>"; } ?>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-slate-400 mt-auto">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center"><i class="fa-solid fa-hotel text-white text-xs"></i></div>
                        <span class="font-extrabold text-lg text-white tracking-tight">Diskon<span class="text-blue-400">Hotel</span></span>
                    </div>
                    <p class="text-sm font-medium leading-relaxed">Platform pemesanan hotel terpercaya dengan harga terbaik dan proses mudah.</p>
                </div>
                <div>
                    <h4 class="font-extrabold text-white text-sm uppercase tracking-wider mb-4">Tautan</h4>
                    <ul class="space-y-2 text-sm font-medium">
                        <li><a href="index.php" class="hover:text-white transition">Beranda</a></li>
                        <li><a href="#rekomendasi" class="hover:text-white transition">Rekomendasi Hotel</a></li>
                        <li><a href="admin/" class="hover:text-white transition">Admin Panel</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-extrabold text-white text-sm uppercase tracking-wider mb-4">Bantuan</h4>
                    <ul class="space-y-2 text-sm font-medium">
                        <li><a href="https://wa.me/6285111221931" target="_blank" class="hover:text-white transition"><i class="fa-brands fa-whatsapp mr-2 text-green-400"></i> Hubungi CS</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-slate-800 mt-10 pt-6 text-center">
                <p class="text-xs font-medium text-slate-500">&copy; <?= date('Y') ?> DiskonHotel. Semua hak dilindungi.</p>
            </div>
        </div>
    </footer>

    <script>
        const checkin=document.getElementById('checkin'), checkout=document.getElementById('checkout');
        checkin.addEventListener('change',function(){ checkout.min=this.value; if(checkout.value<this.value) checkout.value=this.value; });
    </script>
</body>
</html>

**detail_hotel.php**
<?php
session_start();
error_reporting(0);
require_once 'koneksi.php';

$id_hotel = (int)($_GET['id_hotel'] ?? 0);
$checkin = $_GET['checkin'] ?? date('Y-m-d');
$checkout = $_GET['checkout'] ?? date('Y-m-d', strtotime('+1 day'));
$jml_kamar = isset($_GET['kamar']) ? (int)$_GET['kamar'] : 1;

$dt_in = new DateTime($checkin);
$dt_out = new DateTime($checkout);
if ($dt_out <= $dt_in) { $dt_out = clone $dt_in; $dt_out->modify('+1 day'); $checkout = $dt_out->format('Y-m-d'); }
$malam = $dt_in->diff($dt_out)->days;

try {
    $h = $pdo->prepare("SELECT h.*, k.nama_kota FROM tb_hotel h LEFT JOIN tb_kota k ON h.id_kota = k.id WHERE h.id = ?");
    $h->execute([$id_hotel]);
    $hotel = $h->fetch();
    if(!$hotel) die("<div style='text-align:center;padding:100px;font-family:Plus Jakarta Sans,sans-serif;'><h2 style='color:#334155;font-size:24px;font-weight:bold;'>Hotel tidak ditemukan!</h2><br><a href='index.php' style='background:#f97316;color:white;padding:10px 20px;text-decoration:none;border-radius:10px;font-weight:bold;'>Kembali ke Pencarian</a></div>");
    $hotel_img = !empty($hotel['gambar'])?(strpos($hotel['gambar'],'http')===0?$hotel['gambar']:'uploads/'.$hotel['gambar']):'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000';
} catch(Exception $e) {}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($hotel['nama_hotel']) ?> - DiskonHotel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f8fafc; }
        .card-hover { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -12px rgba(0,0,0,0.12); }
        .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    </style>
</head>
<body class="flex flex-col min-h-screen relative overflow-x-hidden text-slate-800">

    <!-- NAVBAR -->
    <nav class="bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="index.php" class="flex items-center gap-3 group">
                <div class="w-9 h-9 flex items-center justify-center bg-slate-100 group-hover:bg-blue-50 rounded-full transition">
                    <i class="fa-solid fa-arrow-left text-sm text-slate-500 group-hover:text-blue-600 transition"></i>
                </div>
                <span class="font-bold text-sm text-slate-500 hidden sm:block">Kembali</span>
            </a>
            <h1 class="font-extrabold text-base text-slate-800 tracking-tight text-center">Detail Hotel</h1>
            <div class="w-16"></div>
        </div>
    </nav>

    <main class="max-w-5xl mx-auto px-4 py-6 md:py-10 w-full flex-1">
        
        <!-- BANNER HOTEL -->
        <section class="mb-8">
            <div class="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 mb-8">
                <img src="<?= htmlspecialchars($hotel_img) ?>" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6">
                    <span class="bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg mb-3 inline-flex items-center shadow-lg"><i class="fa-solid fa-map-pin mr-2"></i> <?= htmlspecialchars($hotel['nama_kota'] ?? 'Lokasi') ?></span>
                    <h1 class="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg"><?= htmlspecialchars($hotel['nama_hotel']) ?></h1>
                </div>
            </div>

            <!-- INFO PENCARIAN -->
            <div class="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 p-5 md:p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center -mt-12 relative z-10 mx-2 md:mx-8">
                <div class="flex flex-wrap gap-4 md:gap-6 justify-center w-full md:w-auto">
                    <div class="text-center px-3">
                        <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Check-in</p>
                        <p class="font-extrabold text-sm text-slate-800"><i class="fa-solid fa-calendar-day mr-1.5 text-blue-500"></i> <?= date('d M Y', strtotime($checkin)) ?></p>
                    </div>
                    <div class="hidden md:block w-px bg-slate-200"></div>
                    <div class="text-center px-3">
                        <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Check-out</p>
                        <p class="font-extrabold text-sm text-slate-800"><i class="fa-solid fa-calendar-check mr-1.5 text-blue-500"></i> <?= date('d M Y', strtotime($checkout)) ?></p>
                    </div>
                    <div class="hidden md:block w-px bg-slate-200"></div>
                    <div class="text-center px-3">
                        <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Durasi</p>
                        <p class="font-extrabold text-sm text-slate-800"><i class="fa-solid fa-moon mr-1.5 text-blue-500"></i> <?= $malam ?> Malam</p>
                    </div>
                    <div class="hidden md:block w-px bg-slate-200"></div>
                    <div class="text-center px-3">
                        <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Kamar</p>
                        <p class="font-extrabold text-sm text-slate-800"><i class="fa-solid fa-door-open mr-1.5 text-blue-500"></i> <?= $jml_kamar ?> Kamar</p>
                    </div>
                </div>
                <a href="index.php?kota=<?= $hotel['id_kota'] ?>&checkin=<?= $checkin ?>&checkout=<?= $checkout ?>&kamar=<?= $jml_kamar ?>" class="w-full md:w-auto bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-3 px-6 rounded-xl transition text-center whitespace-nowrap text-sm">
                    <i class="fa-solid fa-pen mr-1.5"></i> Ubah Tanggal
                </a>
            </div>

            <!-- DESKRIPSI -->
            <?php if(!empty($hotel['deskripsi'])): ?>
            <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 mb-8">
                <h2 class="text-lg font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                    <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center"><i class="fa-solid fa-circle-info text-blue-500 text-sm"></i></div> Tentang Hotel
                </h2>
                <p class="text-slate-500 leading-relaxed font-medium text-sm"><?= nl2br(htmlspecialchars($hotel['deskripsi'])) ?></p>
            </div>
            <?php endif; ?>
        </section>

        <!-- DAFTAR KAMAR -->
        <section>
            <h2 class="text-xl font-extrabold mb-6 text-slate-800 tracking-tight flex items-center gap-3">
                <div class="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div> Pilih Kamar Anda
            </h2>
            <div class="grid grid-cols-1 gap-5">
                <?php
                try {
                    $stmt = $pdo->prepare("SELECT * FROM tb_kamar WHERE id_hotel = ?");
                    $stmt->execute([$id_hotel]);
                    if($stmt->rowCount()==0) echo "<div class='bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm'><div class='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4'><i class='fa-solid fa-bed text-2xl text-slate-300'></i></div><h3 class='font-bold text-slate-400'>Belum ada kamar yang tersedia untuk hotel ini.</h3></div>";

                    while($k = $stmt->fetch()) {
                        $img_kamar = !empty($k['gambar'])?(strpos($k['gambar'],'http')===0?$k['gambar']:'uploads/'.$k['gambar']):'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600';
                ?>
                <div class="bg-white rounded-3xl p-4 md:p-5 border border-slate-100 flex flex-col md:flex-row gap-5 items-center card-hover group">
                    <div class="w-full md:w-80 h-52 md:h-44 overflow-hidden rounded-2xl relative flex-shrink-0">
                        <img src="<?= htmlspecialchars($img_kamar) ?>" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy">
                    </div>
                    <div class="w-full md:flex-1 flex flex-col justify-between h-full py-1">
                        <div>
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-extrabold text-slate-800 leading-tight"><?= htmlspecialchars($k['nama_kamar']) ?></h3>
                            </div>
                            <div class="inline-flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 mb-4">
                                <i class="fa-solid fa-user-group text-blue-400"></i> Maks <?= $k['kapasitas'] ?> Tamu
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2 pt-4 border-t border-slate-100">
                            <div>
                                <p class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Harga per kamar/malam</p>
                                <p class="text-2xl font-extrabold text-orange-500 tracking-tight">Rp <?= number_format($k['harga'],0,',','.') ?></p>
                            </div>
                            <a href="pesan.php?id_kamar=<?= $k['id'] ?>&checkin=<?= $checkin ?>&checkout=<?= $checkout ?>&kamar=<?= $jml_kamar ?>" 
                               class="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-extrabold text-center py-3.5 px-8 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition active:scale-95 shadow-lg shadow-blue-600/20 whitespace-nowrap text-sm">
                                <i class="fa-solid fa-arrow-right mr-1.5"></i> PESAN SEKARANG
                            </a>
                        </div>
                    </div>
                </div>
                <?php } } catch(Exception $e) {} ?>
            </div>
        </section>
    </main>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-slate-400 mt-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-2">
                    <div class="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center"><i class="fa-solid fa-hotel text-white text-[10px]"></i></div>
                    <span class="font-extrabold text-sm text-white tracking-tight">Diskon<span class="text-blue-400">Hotel</span></span>
                </div>
                <p class="text-xs font-medium text-slate-500">&copy; <?= date('Y') ?> DiskonHotel. Semua hak dilindungi.</p>
            </div>
        </div>
    </footer>
</body>
</html>






