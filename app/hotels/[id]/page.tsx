import { notFound } from 'next/navigation'
import { HotelCard } from '@/components/hotel-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { getBrowserClient } from '@/lib/supabase/client'
import { getServerClient } from '@/lib/supabase/server'
import { formatCurrency, calculateNights } from '@/lib/utils'
import { MapPin, Star, Wifi, Car, Coffee, Shield, Users, Bath, Bed } from 'lucide-react'
import Image from 'next/image'
import type { Hotel, Room } from '@/types/database'
import { Skeleton } from '@/components/ui/skeleton'

interface HotelDetailPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: HotelDetailPageProps) {
  const client = getBrowserClient()
  const { data: hotel } = await client
    .from('tb_hotel')
    .select('nama, deskripsi, foto_url')
    .eq('id', params.id)
    .single()

  return {
    title: hotel ? `${hotel.nama} - DiskonHotel` : 'Hotel Not Found',
    description: hotel?.deskripsi?.substring(0, 160) || 'Hotel details',
  }
}

export default async function HotelDetailPage({ params }: HotelDetailPageProps) {
  const client = getBrowserClient()
  const serverClient = getServerClient()

  // Fetch hotel with location
  const { data: hotel, error: hotelError } = await client
    .from('tb_hotel')
    .select(`
      *,
      tb_kota(nama, provinsi, negara)
    `)
    .eq('id', params.id)
    .single()

  if (hotelError || !hotel) {
    notFound()
  }

  // Fetch rooms
  const { data: rooms = [], error: roomsError } = await serverClient
    .from('tb_kamar')
    .select('*')
    .eq('hotel_id', params.id)
    .eq('status_kamar', 'tersedia')
    .order('harga_dasar', { ascending: true })

  // Fetch promo for this hotel
  const { data: activePromo } = await serverClient
    .from('tb_promo')
    .select('*')
    .eq('aktif', true)
    .gte('tanggal_berakhir', new Date().toISOString().split('T')[0])
    .is('tb_campaign.id', null)
    .not('nilai_diskon', 'eq', 0)
    .single()

  // Calculate discount for rooms
  const getRoomPrice = (basePrice: number) => {
    if (!activePromo) return basePrice
    if (activePromo.jenis_diskon === 'persentase') {
      return basePrice * (1 - activePromo.nilai_diskon / 100)
    }
    return Math.max(basePrice - activePromo.nilai_diskon, 0)
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hotel Header */}
      <section className="mb-8">
        <div className="relative">
          {hotel.foto_url ? (
            <Image
              src={hotel.foto_url}
              alt={hotel.nama}
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
              priority
            />
          ) : (
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <span className="text-white text-4xl font-bold">
                {hotel.nama.split(' ')[0]?.charAt(0) || 'H'}
              </span>
            </div>
          )}
          
          <div className="absolute bottom-6 left-6 right-6 md:left-6 z-10">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {hotel.nama}
                    </h1>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{hotel.tb_kota?.nama}, {hotel.tb_kota?.provinsi}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                      <span className="font-semibold">{hotel.rating || 0}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {hotel.jumlah_rating || 0} review
                      </span>
                    </div>
                  </div>
                  
                  {activePromo && (
                    <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                      -{activePromo.nilai_diskon}{activePromo.jenis_diskon === 'persentase' ? '%' : ''}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hotel Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Deskripsi Hotel
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {hotel.deskripsi || 'Hotel detail yang menarik untuk Anda.'}
              </p>
            </CardContent>
          </Card>

          {/* Facilities */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Fasilitas Utama
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hotel.sarana_dan_perlengkapan?.map((facility) => (
                  <div key={facility} className="flex items-center gap-2 text-sm">
                    {getFacilityIcon(facility)}
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rooms Available */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Kamar Tersedia
              </h2>
              {rooms.length === 0 ? (
                <p className="text-muted-foreground">Tidak ada kamar tersedia saat ini.</p>
              ) : (
                <div className="space-y-4">
                  {rooms.map((room) => {
                    const finalPrice = getRoomPrice(room.harga_dasar)
                    const hasDiscount = room.harga_dasar !== finalPrice

                    return (
                      <div key={room.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{room.tipe_kamar}</h3>
                            <p className="text-sm text-muted-foreground">{room.deskripsi}</p>
                          </div>
                          <div className="text-right">
                            {hasDiscount && (
                              <span className="text-sm text-muted-foreground line-through">
                                Rp {formatCurrency(room.harga_dasar)}
                              </span>
                            )}
                            <div className="text-xl font-bold text-primary">
                              Rp {formatCurrency(finalPrice)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                          {room.fasilitas?.map((f) => (
                            <span key={f}>{f}</span>
                          ))}
                        </div>
                        
                        <Button className="w-full" asChild>
                          <a href={`/booking?hotel=${hotel.id}&room=${room.id}&price=${finalPrice}`}>
                            Pilih Kamar
                          </a>
                        </Button>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{hotel.tb_kota?.nama}</h3>
                <p className="text-sm text-muted-foreground">{hotel.tb_kota?.provinsi}</p>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gratis Kamar</span>
                  <span>{hotel.gratis_kamar ? 'Ya' : 'Tidak'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span>{hotel.rating || 0}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant={hotel.aktif ? 'default' : 'secondary'}>
                    {hotel.aktif ? 'Aktif' : 'Nonaktif'}
                  </Badge>
                </div>
              </div>

              <Button className="w-full" asChild>
                <a href={`/booking?hotel=${hotel.id}`}>
                  Booking Sekarang
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

function getFacilityIcon(facility: string) {
  const icons: Record<string, React.ReactNode> = {
    WiFi: <Wifi className="h-4 w-4 text-primary" />,
    Parkir: <Car className="h-4 w-4 text-primary" />,
    Sarapan: <Coffee className="h-4 w-4 text-primary" />,
    'Keamanan 24 Jam': <Shield className="h-4 w-4 text-primary" />,
    AC: <Bed className="h-4 w-4 text-primary" />,
    'Dapur Umum': <Bath className="h-4 w-4 text-primary" />,
    'Koleksi Buku': <Users className="h-4 w-4 text-primary" />,
  }
  return icons[facility] || <Shield className="h-4 w-4 text-primary" />
}