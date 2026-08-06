'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getBrowserClient } from '@/lib/supabase/client'
import { formatCurrency } from '@/lib/utils'
import { Copy, CheckCircle, Clock, QrCode } from 'lucide-react'
import { toast } from 'sonner'

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const bookingId = searchParams.get('booking')

  const [booking, setBooking] = useState<any>(null)
  const [paymentLink, setPaymentLink] = useState('')
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'completed' | 'failed'>('pending')
  const [qrCodePayload, setQrCodePayload] = useState('')

  useEffect(() => {
    if (!bookingId) {
      router.push('/')
      return
    }

    const fetchBooking = async () => {
      const client = getBrowserClient()
      
      const { data, error } = await client
        .from('tb_pesanan')
        .select(`
          *,
          tb_hotel(nama, foto_url),
          tb_kamar(tipe_kamar)
        `)
        .eq('id', bookingId)
        .single()

      if (error) {
        toast.error('Booking tidak ditemukan')
        router.push('/')
        return
      }

      setBooking(data)
      
      // Generate QRIS payload
      const payload = generateQRISPayload(data.total_akhir, data.booking_reference)
      setQrCodePayload(payload)
      
      // Simulate payment link (in production, integrate with payment gateway)
      setPaymentLink(`https://payment.diskonhotel.com/pay/${data.booking_reference}`)
    }

    fetchBooking()
  }, [bookingId, router])

  // CRC16 calculation for QRIS
  function calculateCRC16(data: string): string {
    let crc = 0xFFFF
    for (let i = 0; i < data.length; i++) {
      crc ^= data.charCodeAt(i) << 8
      for (let j = 0; j < 8; j++) {
        if (crc & 0x8000) {
          crc = (crc << 1) ^ 0x1021
        } else {
          crc <<= 1
        }
      }
    }
    return ('0000' + (crc & 0xFFFF).toString(16)).toUpperCase().slice(-4)
  }

  function generateQRISPayload(amount: number, ref: string): string {
    const id = 'ID:O'
    const app = 'AM:000'
    const code = 'CD:01'
    const refTag = 'RI:'
    const amountTag = 'VA:'
    const crcTag = 'CRC:'
    
    const payload = `${id}${app}${code}${refTag}${ref}${amountTag}${Math.floor(amount)}${crcTag}`
    return payload + calculateCRC16(payload)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentLink)
    toast.success('Link pembayaran disalin!')
  }

  const copyPayload = () => {
    navigator.clipboard.writeText(qrCodePayload)
    toast.success('Payload QRIS disalin!')
  }

  const simulatePayment = () => {
    setPaymentStatus('processing')
    
    setTimeout(() => {
      const client = getBrowserClient()
      
      client
        .from('tb_pembayaran')
        .insert({
          pesanan_id: bookingId,
          metode: 'qris',
          nominal: booking.total_akhir,
          status: 'completed',
          qr_code_payload: qrCodePayload,
          reference_number: booking.booking_reference,
          tanggal_bayar: new Date().toISOString()
        })
        .then(() => {
          client
            .from('tb_pesanan')
            .update({ payment_status: 'paid', status: 'confirmed' })
            .eq('id', bookingId)
          
          setPaymentStatus('completed')
          toast.success('Pembayaran berhasil!')
          
          setTimeout(() => {
            router.push('/booking/success')
          }, 2000)
        })
    }, 2000)
  }

  if (!booking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 border-4 border-tprimary border-r-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-muted-foreground">Memuat pembayaran...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Silakan Lakukan Pembayaran</h1>
          <p className="text-muted-foreground">
            Booking <code className="bg-gray-100 px-2 py-1 rounded">{booking.booking_reference}</code>
          </p>
        </div>

        {/* Hotel Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              {booking.tb_hotel?.foto_url ? (
                <img 
                  src={booking.tb_hotel.foto_url} 
                  alt={booking.tb_hotel.nama}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              ) : (
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {booking.tb_hotel?.nama?.split(' ')[0]?.charAt(0) || 'H'}
                  </span>
                </div>
              )}
              <div>
                <h2 className="font-bold">{booking.tb_hotel?.nama}</h2>
                <p className="text-sm text-muted-foreground">
                  {booking.check_in} - {booking.check_out} ({booking.jumlah_malam} malam)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Detail Pembayaran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Harga Kamar</span>
              <span>Rp {formatCurrency(booking.total_harga_dasar)}</span>
            </div>
            {booking.diskon_persentase > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Diskon {booking.diskon_persentase}%</span>
                <span>- Rp {formatCurrency(booking.total_diskon)}</span>
              </div>
            )}
            <div className="border-t pt-2 flex justify-between text-lg font-bold">
              <span>Total yang Harus Dibayar</span>
              <span className="text-primary">Rp {formatCurrency(booking.total_akhir)}</span>
            </div>
          </CardContent>
        </Card>

        {/* QRIS Payment */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pembayaran QRIS</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-white p-4 rounded-lg inline-block border-2 border-gray-200">
              <div className="w-48 h-48 flex items-center justify-center">
                <QrCode className="h-32 w-32 text-gray-400" />
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">
                Scan QR code dengan aplikasi mobile banking atau e-money
              </p>
              <p className="text-xs mt-2 break-all">
                <strong>{qrCodePayload}</strong>
              </p>
            </div>
            
            <Button variant="outline" onClick={copyPayload}>
              <Copy className="h-4 w-4 mr-2" />
              Salin Payload QRIS
            </Button>
          </CardContent>
        </Card>

        {/* Payment Link Alternative */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Atau Bayar dengan Link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <a 
                href={paymentLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-blue-600 hover:underline break-all text-sm"
              >
                {paymentLink}
              </a>
              <Button size="sm" variant="ghost" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Status */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {paymentStatus === 'pending' && (
            <>
              <Clock className="h-5 w-5 text-orange-500" />
              <span className="text-muted-foreground">Silakan lakukan pembayaran</span>
            </>
          )}
          {paymentStatus === 'processing' && (
            <>
              <div className="w-5 h-5 border-2 border-tprimary border-r-transparent rounded-full animate-spin"></div>
              <span className="text-muted-foreground">Memproses pembayaran...</span>
            </>
          )}
          {paymentStatus === 'completed' && (
            <>
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-green-600 font-medium">Pembayaran berhasil!</span>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => router.push('/')}
          >
            Kembali
          </Button>
          {paymentStatus === 'pending' && (
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={simulatePayment}
            >
              Tanda Bayar (Demo)
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}