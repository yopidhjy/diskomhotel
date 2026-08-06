import { HotelCard } from '@/components/hotel-card'
import { StickyBottomBar } from '@/components/sticky-bottom-bar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { getBrowserClient } from '@/lib/supabase/client'
import { Search, Filter, MapPin, Star } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { Hotel } from '@/types/database'

export const revalidate = 300 // ISR: refresh every 5 minutes

export default async function HomePage() {
  const { data: promos } = await getBrowserClient().from('tb_promo')
    .select('*, tb_campaign(id, nama)')
    .eq('aktif', true)
    .gte('tanggal_berakhir', new Date().toISOString().split('T')[0])
    .order('tanggal_mulai', { ascending: false })
    .limit(5)

  const { data: featuredHotels = [] } = await getBrowserClient().from('tb_hotel')
    .select(`
      *,
      tb_kota(nama, provinsi),
      tb_kamar(count)
    `)
    .eq('aktif', true)
    .gte('rating', 4)
    .order('rating', { ascending: false })
    .limit(8)

  const { data: cities = [] } = await getBrowserClient().from('tb_kota')
    .select('*')
    .eq('aktif', true)
    .order('nama')

  return (
    <>
      <HeaderSection promos={promos || []} cities={cities as any} />
      <MainContent 
        featuredHotels={featuredHotels as Hotel[]}
        cities={cities}
      />
      <StickyBottomBar />
    </>
  )
}

function HeaderSection({ promos, cities }: {
  promos: any[]
  cities: any[]
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const handleSearch = () => {
    // Search logic will be implemented in Phase 3
    console.log('Search:', searchQuery, 'City:', selectedCity)
  }

  return (
    <header className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Search */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Temukan Hotel Diskon Terbaik
          </h1>
          <p className="text-lg opacity-90 mb-6">
            Dapatkan diskon hingga 70% untuk pengalaman menginap yang tak tertandingi
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-xl p-4 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Cari hotel atau lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-gray-300"
                />
              </div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 rounded-md border bg-white text-gray-700 border-gray-300 focus:ring-2 focus:ring-accent"
              >
                <option value="">Semua Kota</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.nama}
                  </option>
                ))}
              </select>
              <Button 
                onClick={handleSearch}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Search className="h-5 w-5 mr-2" />
                Cari
              </Button>
            </div>
          </div>
        </div>

        {/* Active Promos */}
        {promos.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Promo Aktif
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {promos.map((promo) => (
                <div key={promo.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                    {promo.kode_promo}
                  </Badge>
                  <p className="mt-2 text-sm">{promo.nama_promo}</p>
                  <p className="text-xs opacity-90">
                    {new Date(promo.tanggal_mulai).toLocaleDateString('id-ID')} - {new Date(promo.tanggal_berakhir).toLocaleDateString('id-ID')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </header>
  )
}

async function MainContent({ featuredHotels, cities }: {
  featuredHotels: Hotel[]
  cities: any[]
}) {
  const { data: allHotels = [] } = await getBrowserClient().from('tb_hotel')
    .select(`
      *,
      tb_kota(nama, provinsi),
      tb_kamar(avg_price:avg(harga_dasar))
    `)
    .eq('aktif', true)
    .order('rating', { ascending: false })
    .limit(20)

  const { data: citiesWithCounts = [] } = await getBrowserClient().from('tb_kota')
    .select(`
      *,
      hotels:tb_hotel(count)
    `)
    .eq('aktif', true)
    .order('nama')

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Hotels Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Hotel Unggulan
          </h2>
          <Link href="/hotels">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Lihat Semua
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHotels.length === 0 ? (
            // Loading Skeleton
            Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-[300px] w-full rounded-lg" />
            ))
          ) : (
            featuredHotels.map((hotel) => (
              <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
                <HotelCard 
                  hotel={hotel}
                  discountPercent={0}
                />
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Location Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Nikmati Pengalaman di Berbagai Kota
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {citiesWithCounts.map((city) => (
            <Link key={city.id} href={`/location/${city.id}`} className="group">
              <div className="bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{city.nama}</h3>
                <p className="text-sm text-muted-foreground">
                  {city.hotels?.[0]?.count || 0} hotel
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}