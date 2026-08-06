-- ============================================
-- DISKONHOTEL - DATABASE MIGRATION SCRIPT (MySQL → PostgreSQL)
-- ============================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. ADMIN TABLE (tb_admin)
CREATE TABLE tb_admin (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'superadmin', 'staff')),
    nama_lengkap VARCHAR(100),
    no_hp VARCHAR(20),
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. KOTA TABLE (tb_kota)
CREATE TABLE tb_kota (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nama VARCHAR(100) NOT NULL,
    provinsi VARCHAR(100),
    negara VARCHAR(50) DEFAULT 'Indonesia',
    aktif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. HOTEL TABLE (tb_hotel)
CREATE TABLE tb_hotel (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   kode_hotel VARCHAR(50) UNIQUE NOT NULL,
    nama VARCHAR(150) NOT NULL,
    deskripsi TEXT,
    alamat TEXT,
    kota_id UUID REFERENCES tb_kota(id) ON DELETE SET NULL,
    rating DECIMAL(2,1) DEFAULT 0,
    jumlah_rating INTEGER DEFAULT 0,
    foto_url TEXT,
    lokasi_map VARCHAR(500),
    jarak_darisenterance_km DECIMAL(5,2),
    gratis_kamar BOOLEAN DEFAULT false,
    sarana_dan_perlengkapan TEXT[],
    fasilitas_utama TEXT[],
    aktif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. KAMAR TABLE (tb_kamar)
CREATE TABLE tb_kamar (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    hotel_id UUID REFERENCES tb_hotel(id) ON DELETE CASCADE,
    nomor_kamar VARCHAR(20) NOT NULL,
    tipe_kamar VARCHAR(50) NOT NULL,
    deskripsi TEXT,
    harga_dasar DECIMAL(12,2) NOT NULL,
    harga_overnight DECIMAL(12,2),
    foto_url TEXT,
    ukuran_m2 DECIMAL(6,2),
    jumlah_kamar INTEGER DEFAULT 1,
    qty_tersisa INTEGER NOT NULL DEFAULT 0,
    fasilitas TEXT[],
    status_kamar VARCHAR(20) DEFAULT 'tersedia' CHECK (status_kamar IN ('tersedia', 'Tidak tersedia', 'Dipesan', 'Maintenance')),
    UNIQUE(hotel_id, nomor_kamar)
);

-- 6. PROMO TABLE (tb_promo)
CREATE TABLE tb_promo (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    kode_promo VARCHAR(50) UNIQUE NOT NULL,
    nama_promo VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    jenis_diskon VARCHAR(20) NOT NULL CHECK (jenis_diskon IN ('persentase', 'nominal', 'gratis')),
    nilai_diskon DECIMAL(12,2) NOT NULL,
    minimal_pembayaran DECIMAL(12,2),
    maksimum_diskon DECIMAL(12,2),
    tanggal_mulai DATE NOT NULL,
    tanggal_berakhir DATE NOT NULL,
    max_penggunaan INTEGER,
    penggunaan_count INTEGER DEFAULT 0,
    kondisi_spesial JSONB,
    aktif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. CAMPAIGN TABLE (tb_campaign)
CREATE TABLE tb_campaign (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nama VARCHAR(100) NOT NULL,
    tipe VARCHAR(50) NOT NULL CHECK (tipe IN ('affiliate', 'referral', 'loyalty', 'flashsale')),
    target_duration VARCHAR(20),
    value JSONB,
    aktif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. PESANAN TABLE (tb_pesanan)
CREATE TABLE tb_pesanan (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_reference VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID,
    user_email VARCHAR(100),
    user_nama VARCHAR(100),
    user_no_hp VARCHAR(20),
    hotel_id UUID REFERENCES tb_hotel(id) ON DELETE SET NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    jumlah_malam INTEGER NOT NULL,
    total_harga_dasar DECIMAL(12,2) NOT NULL,
    diskon_persentase DECIMAL(5,2) DEFAULT 0,
    diskon_nominal DECIMAL(12,2) DEFAULT 0,
    total_diskon DECIMAL(12,2) DEFAULT 0,
    total_akhir DECIMAL(12,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed', 'refunded')),
    payment_status VARCHAR(20) DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'partial', 'paid', 'failed', 'refunded')),
    promo_id UUID REFERENCES tb_promo(id) ON DELETE SET NULL,
    campaign_id UUID REFERENCES tb_campaign(id) ON DELETE SET NULL,
    metadata JSONB,
    catatan TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    cancelled_at TIMESTAMP WITH TIME ZONE,
    cancelled_reason TEXT
);

-- Index untuk performance
CREATE INDEX idx_pesanan_booking_ref ON tb_pesanan(booking_reference);
CREATE INDEX idx_pesanan_status ON tb_pesanan(status);
CREATE INDEX idx_pesanan_user_email ON tb_pesanan(user_email);
CREATE INDEX idx_pesanan_hotel_id ON tb_pesanan(hotel_id);

-- 9. PEMBAYARAN TABLE (tb_pembayaran)
CREATE TABLE tb_pembayaran (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pesanan_id UUID REFERENCES tb_pesanan(id) ON DELETE CASCADE,
    metode VARCHAR(20) NOT NULL CHECK (metode IN ('qris', 'transfer', 'cod', 'ovo', 'goPay', 'dana', 'linkAja')),
    nominal DECIMAL(12,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'expired')),
    qr_code_url TEXT,
    qr_code_payload TEXT,
    payment_link TEXT,
    reference_number VARCHAR(100),
    tanggal_bayar TIMESTAMP WITH TIME ZONE,
    provider_response JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_pembayaran_pesanan_id ON tb_pembayaran(pesanan_id);
CREATE INDEX idx_pembayaran_status ON tb_pembayaran(status);

-- 10. PENGATURAN TABLE (tb_pengaturan)
CREATE TABLE tb_pengaturan (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key VARCHAR(100) UNIQUE NOT NULL,
    value JSONB NOT NULL,
    tipe VARCHAR(20) DEFAULT 'string' CHECK (tipe IN ('string', 'number', 'boolean', 'json')),
    kategori VARCHAR(50),
    active BOOLEAN DEFAULT true
);

-- Default settings
INSERT INTO tb_pengaturan (key, value, tipe, kategori) VALUES
('site_name', '{"value": "DiskonHotel"}', 'string', 'general'),
('site_description', '{"value": "Temukan hotel dengan diskon terbaik"}', 'string', 'general'),
('site_logo', '{"value": "/logo.png"}', 'string', 'general'),
('currency', '{"value": "IDR"}', 'string', 'general'),
('timezone', '{"value": "Asia/Makassar"}', 'string', 'general'),
('min_checkin_duration', '{"value": 1}', 'number', 'booking'),
('max_checkout_duration', '{"value": 30}', 'number', 'booking');

-- RLS Policies
-- ============================================

-- Enable RLS on all tables
ALTER TABLE tb_admin ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_kota ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_hotel ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_kamar ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_promo ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_campaign ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_pesanan ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_pembayaran ENABLE ROW LEVEL SECURITY;
ALTER TABLE tb_pengaturan ENABLE ROW LEVEL SECURITY;

-- Policy for tb_kota (Read-only)
CREATE POLICY "kota_read_public" ON tb_kota
    FOR SELECT USING (aktif = true);

-- Policy for tb_hotel (Read-only)
CREATE POLICY "hotel_read_public" ON tb_hotel
    FOR SELECT USING (aktif = true);

-- Policy for tb_kamar (Read-only)
CREATE POLICY "kamar_read_public" ON tb_kamar
    FOR SELECT USING (status_kamar = 'tersedia' AND aktif = true);

-- Policy for tb_promo (Read-only)
CREATE POLICY "promo_read_public" ON tb_promo
    FOR SELECT USING (aktif = true AND tanggal_berakhir >= CURRENT_DATE);

-- Policy for tb_pesanan (Read-Write for authenticated)
CREATE POLICY "pesanan_insert_authenticated" ON tb_pesanan
    FOR INSERT WITH CHECK (true);

CREATE POLICY "pesanan_update_owner" ON tb_pesanan
    FOR UPDATE USING (
        auth.role() = 'admin' OR 
        auth.uid() IS NULL OR 
        user_email = auth.jwt() ->> 'email'
    );

-- Policy for tb_pembayaran
CREATE POLICY "pembayaran_read_insert" ON tb_pembayaran
    FOR ALL USING (true);

-- Policy for tb_pengaturan (Admin only)
CREATE POLICY "pengaturan_admin_only" ON tb_pengaturan
    FOR ALL USING (auth.role() = 'admin');

-- Trigger untuk updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_tb_admin_updated_at BEFORE UPDATE ON tb_admin
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at();

CREATE TRIGGER update_tb_hotel_updated_at BEFORE UPDATE ON tb_hotel
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at();

CREATE TRIGGER update_tb_pesanan_updated_at BEFORE UPDATE ON tb_pesanan
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at();

-- Function to generate booking reference
CREATE OR REPLACE FUNCTION generate_booking_reference()
RETURNS TEXT AS $$
DECLARE
    ref TEXT;
BEGIN
    ref := 'DSK' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
    RETURN ref;
END;
$$ LANGUAGE plpgsql;