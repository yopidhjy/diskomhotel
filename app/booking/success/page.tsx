import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Share2, Copy } from 'lucide-react'

export default function BookingSuccessPage() {
  const reference = 'DSK202608060001'
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Booking Berhasil!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Terima kasih telah melakukan booking di DiskonHotel. 
            Konfirmasi booking telah dikirim ke email Anda.
          </p>

          {/* Booking Details */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Reference Number</span>
                  <code className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
                    {reference}
                  </code>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-sm text-muted-foreground">Hotel</span>
                    <p className="font-medium">Hotel Example</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Tanggal Check-in</span>
                    <p className="font-medium">06 Agustus 2026</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Tanggal Check-out</span>
                    <p className="font-medium">08 Agustus 2026</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Total Bayar</span>
                    <p className="font-bold text-primary">Rp 1.200.000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Langkah Selanjutnya</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-left">
                  <p className="text-sm text-muted-foreground mb-2">1. Pastikan sudah bayar</p>
                  <p className="text-sm">Lihat status di menu Pembayaran</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-left">
                  <p className="text-sm text-muted-foreground mb-2">2. Tidak perlu tunggu konfirmasi</p>
                  <p className="text-sm">Check-in langsung dengan reference</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                Kembali ke Beranda
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-4 w-4 mr-2" />
              Bagikan Booking
            </Button>
            <Button variant="outline" size="lg">
              <Copy className="h-4 w-4 mr-2" />
              Salin Reference
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}