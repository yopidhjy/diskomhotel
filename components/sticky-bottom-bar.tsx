import { ChevronLeft, ChevronRight, Home, Search, MapPin, Heart, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigationItems = [
  { name: 'Beranda', href: '/', icon: Home },
  { name: 'Cari', href: '/search', icon: Search },
  { name: 'Lokasi', href: '/locations', icon: MapPin },
  { name: 'Favorit', href: '/favorites', icon: Heart },
  { name: 'Profil', href: '/profile', icon: User },
]

export function StickyBottomBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-screen-lg">
      <nav className="sticky bottom-0 w-full bg-card border-t border-border shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="flex justify-around items-center py-2 px-4">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-200',
                  'hover:bg-accent/10 hover:shadow-md',
                  isActive && 'bg-accent/20 shadow-md',
                  isActive && 'text-accent',
                  !isActive && 'text-muted-foreground hover:text-primary'
                )}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

// Gradient Navigation Bar (Alternative Style)
export function GradientBottomBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <nav className="bg-gradient-to-r from-primary to-accent border-t border-black/10 shadow-xl">
        <div className="flex justify-around items-center py-3 px-6 max-w-screen-lg mx-auto">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
                  isActive && 'bg-white/20 backdrop-blur-sm',
                )}
              >
                <Icon className={cn(
                  'h-5 w-5 transition-colors duration-200',
                  isActive ? 'text-white' : 'text-white/90'
                )} />
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}