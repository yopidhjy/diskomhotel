'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { HotelCard } from '@/components/hotel-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getBrowserClient } from '@/lib/supabase/client'
import { formatCurrency, calculateNights } from '@/lib/utils'
import { Calendar, Users, CreditCard, Shield, CheckCircle } from 'lucide-react'
import { DatePicker } from '@/components/ui/date-picker'
import type { Hotel, Room } from '@/types/database'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from 'sonner'
import Link from 'next/link'

interface BookingData {
  checkIn: Date
  checkOut: Date
  guests: number
  roomType: string
  totalPrice: number
  discountPercent: number
}

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get initial values from URL
  const initialHotelId = searchParams.get('hotel') || ''
  const initialRoomId = searchParams.get('room') || ''
  const initialPrice = parseFloat(searchParams.get('price') || '0')

  const [loading, setLoading] = useState(true)
  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [rooms, setRooms] = useState<Room[]>([])
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  
  const [checkIn, setCheckIn] = useState<Date>(new Date())
  const [checkOut, setCheckOut] = useState<Date>(new Date(Date.now() + 86400000)) // Tomorrow
  const [guests, setGuests] = useState(1)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingReference, setBookingReference] = useState('')

  // Fetch hotel data
  useEffect(() => {
    const fetchHotel = async () => {
      if (!initialHotelId) {
        router.push('/')
        return
      }

      const client = getBrowserClient()
      
      const { data: hotelData } = await client
        .from('tb_hotel')
        .select(`
          *,
          tb_kota(nama, provinsi)
        `)
        .eq('id', initialHotelId)
        .single()

      if (hotelData) {
        setHotel(hotelData)
      }

      const { data: roomData } = await client
        .from('tb_kamar')
        .select('*')
        .eq('hotel_id', initialHotelId)
        .eq('status_kamar', 'tersedia')
        .order('harga_dasar')

      if (roomData) {
        setRooms(roomData)
        
        if (initialRoomId) {
          const room = roomData.find(r => r.id === initialRoomId)
          if (room) {
            setSelectedRoom(room)
          }
        } else if (roomData[0]) {
          setSelectedRoom(roomData[0])
        }
      }

      setLoading(false)
    }

    fetchHotel()
  }, [initialHotelId, initialRoomId, router])

  // Get active promo
  const { data: activePromo } = useState(() => 
    getBrowserClient().from('tb_promo')
      .select('*')
      .eq('aktif', true)
      .gte('tanggal_berakhir', new Date().toISOString().split('T')[0])
      .single()
  )

  const nights = useMemo(() => calculateNights(
    checkIn.toISOString().split('T')[0],
    checkOut.toISOString().split('T')[0]
  ), [checkIn, checkOut])

  const basePrice = selectedRoom?.harga_dasar || initialPrice
  const discountAmount = activePromo ? basePrice * (activePromo.nilai_diskon / 100) : 0
  const discountedPrice = activePromo?.jenis_diskon === 'persentase' 
    ? basePrice * (1 - activePromo.nilai_diskon / 100)
    : basePrice

  const totalPrice = discountedPrice * nights

  // Validation
  const validateBooking = () => {
    if (!selectedRoom) {
      toast.error('Pilih tipe kamar terlebih dahulu')
      return false
    }
    if (checkOut <= checkIn) {
      toast.error('Tanggal Check-out harus setelah Check-in')
      return false
    }
    if (guests < 1) {
      toast.error('Jumlah tamu minimal 1')
      return false
    }
    if (!userEmail) {
      toast.error('Masukkan email untuk booking')
      return false
    }
    return true
  }

  const handleBooking = async () => {
    if (!validateBooking()) return
    
    setShowConfirmation(true)
  }

  const handleConfirmBooking = async () => {
    // Generate booking reference
    const reference = `DSK${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`
    setBookingReference(reference)

    const client = getBrowserClient()
    
    try {
      // Create booking record
      const { data: booking, error: bookingError } = await client
        .from('tb_pesanan')
        .insert({
          booking_reference: reference,
          user_email: userEmail,
          user_nama: userName,
          user_no_hp: userPhone,
          hotel_id: hotel?.id,
          check_in: checkIn.toISOString().split('T')[0],
          check_out: checkOut.toISOString().split('T')[0],
          jumlah_malam: nights,
          total_harga_dasar: basePrice * nights,
          diskon_persentase: activePromo?.jenis_diskon === 'persentase' ? activePromo.nilai_diskon : 0,
          diskon_nominal: activePromo?.jenis_diskon === 'nominal' ? activePromo.nilai_diskon : 0,
          total_diskon: discountAmount * nights,
          total_akhir: totalPrice,
          status: 'pending',
          payment_status: 'unpaid',
        })
        .select()
        .single()

      if (bookingError) throw bookingError

      toast.success('Booking berhasil! Silakan lanjutkan pembayaran.')
      router.push(`/payment?booking=${booking.id}`)
      
    } catch (error) {
      console.error('Booking error:', error)
      toast.error('Gagal membuat booking. Silakan coba lagi.')
    }
  }

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Skeleton className="h-96 w-full rounded-lg mb-6" />
        <Skeleton className="h-48 w-full rounded-lg mb-6" />
      </main>
    )
  }

  if (!hotel) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Hotel Tidak Ditemukan</h1>
        <Link href="/">
          <Button>Kembali ke Beranda</Button>
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {!showConfirmation ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hotel Info & Room Selection */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Info Hotel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  {hotel.foto_url ? (
                    <img 
                      src={hotel.foto_url} 
                      alt={hotel.nama}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {hotel.nama.split(' ')[0]?.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h2 className="font-bold text-lg">{hotel.nama}</h2>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {hotel.tb_kota?.nama}, {hotel.tb_kota?.provinsi}
                    </p>
                    <p className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span>{hotel.rating || 0}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pilih Kamar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rooms.length === 0 ? (
                    <p className="text-muted-foreground">Tidak ada kamar tersedia.</p>
                  ) : (
                    rooms.map((room) => (
                      <div
                        key={room.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedRoom?.id === room.id 
                            ? 'border-primary bg-primary/5' 
                            : 'hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedRoom(room)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{room.tipe_kamar}</h3>
                            <p className="text-sm text-muted-foreground">
                              {room.deskripsi || 'Kamar standar'}
                            </p>
                            <div className="text-xs text-muted-foreground mt-2">
                              {room.fasilitas?.join(', ') || 'Gratis WiFi, AC'}
                            </div>
                          </div>
                          <Badge 
                            variant={selectedRoom?.id === room.id ? 'default' : 'outline'}
                          >
                            Rp {formatCurrency(room.harga_dasar)}
                          </Badge>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Detail Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="check-in">Check-in</Label>
                  <Input
                    id="check-in"
                    type="date"
                    value={checkIn.toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(new Date(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="check-out">Check-out</Label>
                  <Input
                    id="check-out"
                    type="date"
                    min={new Date(checkIn.getTime() + 86400000).toISOString().split('T')[0]}
                    value={checkOut.toISOString().split('T')[0]}
                    onChange={(e) => setCheckOut(new Date(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Jumlah Kamar / Tamu</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <Button
                        key={num}
                        variant={guests === num ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setGuests(num)}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">No. HP</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
                </div>

                {/* Price Summary */}
                <div className="border-t pt-4 space-y-2 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span>Harga per malam</span>
                    <span>Rp {formatCurrency(basePrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jumlah malam</span>
                    <span>{nights} malam</span>
                  </div>
                  {activePromo && (
                    <>
                      <div className="flex justify-between text-green-600">
                        <span>Diskon {activePromo.nilai_diskon}%</span>
                        <span>- Rp {formatCurrency(discountAmount * nights)}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span className="text-primary">Rp {formatCurrency(totalPrice)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleBooking}
                >
                  Lanjut ke Pembayaran
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        /* Confirmation Modal */
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="max-w-md w-full mx-4">
            <CardHeader>
              <CardTitle className="text-center">Konfirmasi Booking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Booking Berhasil!</h3>
                <p className="text-muted-foreground mb-4">
                  Reference: <code className="bg-gray-100 px-2 py-1 rounded">{bookingReference}</code>
                </p>
              </div>

              <div className="border-t pt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Hotel:</span> {hotel.nama}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Tanggal:</span> {checkIn.toLocaleDateString('id-ID')} - {checkOut.toLocaleDateString('id-ID')} ({nights} malam)
                </p>
                <p className="text-sm">
                  <span className="font-medium">Total:</span> Rp {formatCurrency(totalPrice)}
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                  Edit
                </Button>
                <Button onClick={() => router.push('/')}>
                  Selesai
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  )
}

// Icons
const MapPin = (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><line d="M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>
const Star = (props: any) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>