/**
 * DiskonHotel - Supabase Server Client
 * Production-ready server-side Supabase integration (RSC, Server Actions)
 */

import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

export function createServerClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  )
}

// Singleton pattern
let supabaseServerClient: ReturnType<typeof createClient> | null = null

export function getServerClient() {
  if (!supabaseServerClient) {
    supabaseServerClient = createServerClient()
  }
  return supabaseServerClient
}