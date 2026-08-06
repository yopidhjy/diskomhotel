/**
 * DiskonHotel - Database Types (TypeScript)
 * Auto-generated types for Supabase PostgreSQL tables
 */

export type Json = string | number | boolean | null | Json | Json[]

export interface Database {
  public: {
    Tables: {
      tb_admin: {
        Row: {
          id: string
          username: string
          email: string
          password_hash: string
          role: 'admin' | 'superadmin' | 'staff'
          nama_lengkap: string | null
          no_hp: string | null
          avatar_url: string | null
          is_active: boolean
          email_verified: boolean
          last_login_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          username: string
          email: string
          password_hash: string
          role?: 'admin' | 'superadmin' | 'staff'
          nama_lengkap?: string
          no_hp?: string
          avatar_url?: string
          is_active?: boolean
          email_verified?: boolean
        }
        Update: Partial<{
          username: string
          email: string
          password_hash: string
          role: 'admin' | 'superadmin' | 'staff'
          nama_lengkap: string
          no_hp: string
          avatar_url: string
          is_active: boolean
          email_verified: boolean
          last_login_at: string
        }>
      }
      tb_kota: {
        Row: {
          id: string
          nama: string
          provinsi: string
          negara: string
          aktif: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          nama: string
          provinsi?: string
          negara?: string
          aktif?: boolean
        }
        Update: Partial<{
          nama: string
          provinsi: string
          negara: string
          aktif: boolean
        }>
      }
      tb_hotel: {
        Row: {
          id: string
          kode_hotel: string
          nama: string
          deskripsi: string | null
          alamat: string
          kota_id: string | null
          rating: number | null
          jumlah_rating: number
          foto_url: string | null
          lokasi_map: string | null
          jarak_darisenterance_km: number | null
          gratis_kamar: boolean
          sarana_dan_perlengkapan: string[] | null
          fasilitas_utama: string[] | null
          aktif: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          kode_hotel: string
          nama: string
          deskripsi?: string
          alamat: string
          kota_id?: string
          rating?: number
          jumlah_rating?: number
          foto_url?: string
          lokasi_map?: string
          jarak_darisenterance_km?: number
          gratis_kamar?: boolean
          sarana_dan_perlengkapan?: string[]
          fasilitas_utama?: string[]
          aktif?: boolean
        }
        Update: Partial<{
          kode_hotel: string
          nama: string
          deskripsi: string
          alamat: string
          kota_id: string
          rating: number
          jumlah_rating: number
          foto_url: string
          lokasi_map: string
          jarak_darisenterance_km: number
          gratis_kamar: boolean
          sarana_dan_perlengkapan: string[]
          fasilitas_utama: string[]
          aktif: boolean
        }>
      }
      tb_kamar: {
        Row: {
          id: string
          hotel_id: string
          nomor_kamar: string
          tipe_kamar: string
          deskripsi: string | null
          harga_dasar: number
          harga_overnight: number | null
          foto_url: string | null
          ukuran_m2: number | null
          jumlah_kamar: number
          qty_tersisa: number
          fasilitas: string[] | null
          status_kamar: 'tersedia' | 'Tidak tersedia' | 'Dipesan' | 'Maintenance'
        }
        Insert: {
          hotel_id: string
          nomor_kamar: string
          tipe_kamar: string
          deskripsi?: string
          harga_dasar: number
          harga_overnight?: number
          foto_url?: string
          ukuran_m2?: number
          jumlah_kamar?: number
          qty_tersisa: number
          fasilitas?: string[]
          status_kamar?: 'tersedia' | 'Tidak tersedia' | 'Dipesan' | 'Maintenance'
        }
        Update: Partial<{
          hotel_id: string
          nomor_kamar: string
          tipe_kamar: string
          deskripsi: string
          harga_dasar: number
          harga_overnight: number
          foto_url: string
          ukuran_m2: number
          jumlah_kamar: number
          qty_tersisa: number
          fasilitas: string[]
          status_kamar: 'tersedia' | 'Tidak tersedia' | 'Dipesan' | 'Maintenance'
        }>
      }
      tb_promo: {
        Row: {
          id: string
          kode_promo: string
          nama_promo: string
          deskripsi: string | null
          jenis_diskon: 'persentase' | 'nominal' | 'gratis'
          nilai_diskon: number
          minimal_pembayaran: number
          maksimum_diskon: number | null
          tanggal_mulai: string
          tanggal_berakhir: string
          max_penggunaan: number | null
          penggunaan_count: number
          kondisi_spesial: Json | null
          aktif: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          kode_promo: string
          nama_promo: string
          deskripsi?: string
          jenis_diskon: 'persentase' | 'nominal' | 'gratis'
          nilai_diskon: number
          minimal_pembayaran: number
          maksimum_diskon?: number
          tanggal_mulai: string
          tanggal_berakhir: string
          max_penggunaan?: number
          penggunaan_count?: number
          kondisi_spesial?: Json
          aktif?: boolean
        }
        Update: Partial<{
          kode_promo: string
          nama_promo: string
          deskripsi: string
          jenis_diskon: 'persentase' | 'nominal' | 'gratis'
          nilai_diskon: number
          minimal_pembayaran: number
          maksimum_diskon: number
          tanggal_mulai: string
          tanggal_berakhir: string
          max_penggunaan: number
          penggunaan_count: number
          kondisi_spesial: Json
          aktif: boolean
        }>
      }
      tb_campaign: {
        Row: {
          id: string
          nama: string
          tipe: 'affiliate' | 'referral' | 'loyalty' | 'flashsale'
          target_duration: string
          value: Json
          aktif: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          nama: string
          tipe: 'affiliate' | 'referral' | 'loyalty' | 'flashsale'
          target_duration: string
          value: Json
          aktif?: boolean
        }
        Update: Partial<{
          nama: string
          tipe: 'affiliate' | 'referral' | 'loyalty' | 'flashsale'
          target_duration: string
          value: Json
          aktif: boolean
        }>
      }
      tb_pesanan: {
        Row: {
          id: string
          booking_reference: string
          user_id: string | null
          user_email: string
          user_nama: string
          user_no_hp: string
          hotel_id: string | null
          check_in: string
          check_out: string
          jumlah_malam: number
          total_harga_dasar: number
          diskon_persentase: number
          diskon_nominal: number
          total_diskon: number
          total_akhir: number
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'refunded'
          payment_status: 'unpaid' | 'partial' | 'paid' | 'failed' | 'refunded'
          promo_id: string | null
          campaign_id: string | null
          metadata: Json | null
          catatan: string | null
          created_at: string
          updated_at: string
          cancelled_at: string | null
          cancelled_reason: string | null
        }
        Insert: {
          booking_reference: string
          user_id?: string
          user_email: string
          user_nama: string
          user_no_hp: string
          hotel_id?: string
          check_in: string
          check_out: string
          jumlah_malam: number
          total_harga_dasar: number
          diskon_persentase?: number
          diskon_nominal?: number
          total_diskon?: number
          total_akhir: number
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'refunded'
          payment_status?: 'unpaid' | 'partial' | 'paid' | 'failed' | 'refunded'
          promo_id?: string
          campaign_id?: string
          metadata?: Json
          catatan?: string
        }
        Update: Partial<{
          booking_reference: string
          user_id: string
          user_email: string
          user_nama: string
          user_no_hp: string
          hotel_id: string
          check_in: string
          check_out: string
          jumlah_malam: number
          total_harga_dasar: number
          diskon_persentase: number
          diskon_nominal: number
          total_diskon: number
          total_akhir: number
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'refunded'
          payment_status: 'unpaid' | 'partial' | 'paid' | 'failed' | 'refunded'
          promo_id: string
          campaign_id: string
          metadata: Json
          catatan: string
          cancelled_at: string
          cancelled_reason: string
        }>
      }
      tb_pembayaran: {
        Row: {
          id: string
          pesanan_id: string
          metode: 'qris' | 'transfer' | 'cod' | 'ovo' | 'goPay' | 'dana' | 'linkAja'
          nominal: number
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'expired'
          qr_code_url: string | null
          qr_code_payload: string | null
          payment_link: string | null
          reference_number: string | null
          tanggal_bayar: string | null
          provider_response: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          pesanan_id: string
          metode: 'qris' | 'transfer' | 'cod' | 'ovo' | 'goPay' | 'dana' | 'linkAja'
          nominal: number
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'expired'
          qr_code_url?: string
          qr_code_payload?: string
          payment_link?: string
          reference_number?: string
          tanggal_bayar?: string
          provider_response?: Json
        }
        Update: Partial<{
          pesanan_id: string
          metode: 'qris' | 'transfer' | 'cod' | 'ovo' | 'goPay' | 'dana' | 'linkAja'
          nominal: number
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'expired'
          qr_code_url: string
          qr_code_payload: string
          payment_link: string
          reference_number: string
          tanggal_bayar: string
          provider_response: Json
        }>
      }
      tb_pengaturan: {
        Row: {
          id: string
          key: string
          value: Json
          tipe: 'string' | 'number' | 'boolean' | 'json'
          kategori: string
          active: boolean
        }
        Insert: {
          key: string
          value: Json
          tipe?: 'string' | 'number' | 'boolean' | 'json'
          kategori?: string
          active?: boolean
        }
        Update: Partial<{
          key: string
          value: Json
          tipe: 'string' | 'number' | 'boolean' | 'json'
          kategori: string
          active: boolean
        }>
      }
    }
    Views: Record<'public', never>
    Functions: Record<'public', never>
    Enums: {
      tb_pesanan_status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'refunded'
      tb_pembayaran_status: 'pending' | 'processing' | 'completed' | 'failed' | 'expired'
      tb_pembayaran_metode: 'qris' | 'transfer' | 'cod' | 'ovo' | 'goPay' | 'dana' | 'linkAja'
      tb_hotel_status_kamar: 'tersedia' | 'Tidak tersedia' | 'Dipesan' | 'Maintenance'
      tb_admin_role: 'admin' | 'superadmin' | 'staff'
      tb_promo_jenis_diskon: 'persentase' | 'nominal' | 'gratis'
      tb_campaign_tipe: 'affiliate' | 'referral' | 'loyalty' | 'flashsale'
    }
  }
}

// Export convenience types
export type Hotel = Database['public']['Tables']['tb_hotel']['Row']
export type Room = Database['public']['Tables']['tb_kamar']['Row']
export type Booking = Database['public']['Tables']['tb_pesanan']['Row']
export type Payment = Database['public']['Tables']['tb_pembayaran']['Row']
export type Promo = Database['public']['Tables']['tb_promo']['Row']
export type Admin = Database['public']['Tables']['tb_admin']['Row']
export type City = Database['public']['Tables']['tb_kota']['Row']