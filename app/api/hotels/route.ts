/**
 * DiskonHotel - Hotels API Route
 * Server-side data fetching for hotel listings
 */

import { NextRequest, NextResponse } from 'next/server'
import { getServerClient } from '@/lib/supabase/server'

interface HotelsParams {
  search?: string
  city?: string
  page?: number
  limit?: number
  sortBy?: 'rating' | 'price' | 'distance'
  sortOrder?: 'asc' | 'desc'
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const params: HotelsParams = {
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || '20'),
    sortBy: searchParams.get('sortBy') as any || 'rating',
    sortOrder: (searchParams.get('sortOrder') as any) || 'desc',
  }
  
  if (searchParams.get('search')) {
    params.search = searchParams.get('search')!
  }
  
  if (searchParams.get('city')) {
    params.city = searchParams.get('city')!
  }

  const client = getServerClient()
  const offset = (params.page! - 1) * params.limit!

  // Build query
  let query = client
    .from('tb_hotel')
    .select(`
      *,
      tb_kota(nama, provinsi),
      tb_kamar(avg_price:avg(harga_dasar), count:count)
    `, { count: 'exact' })
    .eq('aktif', true)
    .order(params.sortBy!, { ascending: params.sortOrder === 'asc' })
    .range(offset, offset + params.limit! - 1)

  // Apply search filter
  if (params.search) {
    query = query.or(`nama.ilike.%${params.search}%,deskripsi.ilike.%${params.search}%`)
  }

  // Apply city filter
  if (params.city) {
    query = query.eq('kota_id', params.city)
  }

  const { data, error, count } = await query

  if (error) {
    return NextResponse.json(
      { error: 'Gagal mengambil data hotel' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    data,
    pagination: {
      page: params.page,
      limit: params.limit,
      total: count,
      totalPages: Math.ceil((count || 0) / params.limit!),
    }
  })
}