import Image from 'next/image'
import { Star, MapPin, Wifi, Car, Coffee, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import type { Hotel } from '@/types/database'

interface HotelCardProps {
  hotel: Hotel
  discountPercent?: number
  onBook?: (hotel: Hotel) => void
}

export function HotelCard({ hotel, discountPercent = 0, onBook }: HotelCardProps) {
  const discountedPrice = hotel.harga_dasar
  const finalPrice = discountPercent > 0 ? discountedPrice * (1 - discountPercent / 100) : discountedPrice

  const renderRating = () => {
    const stars = []
    const fullStars = Math.floor(hotel.rating || 0)
    const hasHalfStar = (hotel.rating || 0) % 1 >= 0.5

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current" />)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} className="h-4 w-4 fill-current opacity-50" />)
      } else {
        stars.push(<Star key={i} className="h-4 w-4 stroke-current opacity-30" />)
      }
    }
    return stars
  }

  const getRatingDisplay = () => {
    return (hotel.rating || 0).toFixed(1)
  }

  return (
    <Card className="w-full max-w-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-card border border-border">
      <div className="relative">
        {hotel.foto_url ? (
          <Image
            src={hotel.foto_url}
            alt={hotel.nama}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-t-lg"
            priority
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-primary to-accent rounded-t-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {hotel.nama.split(' ')[0]?.charAt(0) || 'H'}
            </span>
          </div>
        )}
        
        {discountPercent > 0 && (
          <Badge 
            className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white"
            variant="default"
          >
            Diskon {discountPercent}%
          </Badge>
        )}
        
        {hotel.gratis_kamar && (
          <Badge 
            className="absolute top-3 left-3 bg-green-500 hover:bg-green-600 text-white"
            variant="default"
          >
            GRATIS KAMAR
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-foreground line-clamp-2">
            {hotel.nama}
          </h3>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{hotel.kota?.nama || 'Lokasi tidak tersedia'}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {renderRating()}
              <span className="ml-2 text-sm font-medium">
                {getRatingDisplay()}
              </span>
            </div>
            
            <Badge variant="outline" className="text-xs">
              {hotel.fasilitas_utama?.[0] || 'Hotel'}
            </Badge>
          </div>

          {hotel.sarana_dan_perlengkapan && (
            <div className="flex flex-wrap gap-1 mt-2">
              {hotel.sarana_dan_perlengkapan.slice(0, 3).map((facility) => (
                <div key={facility} className="flex items-center text-xs text-muted-foreground">
                  {facility === 'WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                  {facility === 'Parkir' && <Car className="h-3 w-3 mr-1" />}
                  {facility === 'Sarapan' && <Coffee className="h-3 w-3 mr-1" />}
                  {facility === 'Keamanan 24 Jam' && <Shield className="h-3 w-3 mr-1" />}
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div>
          {discountPercent > 0 ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">
                Rp {hotel.harga_dasar.toLocaleString('id-ID')}
              </span>
              <span className="text-lg font-bold text-primary">
                Rp {Math.floor(finalPrice).toLocaleString('id-ID')}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-primary">
              Rp {hotel.harga_dasar.toLocaleString('id-ID')}
            </span>
          )}
        </div>
        
        <Button 
          size="sm"
          onClick={() => onBook?.(hotel)}
          className="bg-primary hover:bg-primary/90"
        >
          Pilih
        </Button>
      </CardFooter>
    </Card>
  )
}