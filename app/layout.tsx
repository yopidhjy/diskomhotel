import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DiskonHotel - Temukan Hotel Diskon Terbaik',
    description: 'Temukan hotel dengan diskon terbaik di Indonesia. Booking mudah, harga kompetitif, dan pengalaman menginap yang tak tertandingi.',
    generator: 'DiskonHotel',
    applicationName: 'DiskonHotel',
  },
  description: 'Temukan hotel dengan diskon terbaik di Indonesia. Booking mudah, harga kompetitif, dan pengalaman menginap yang tak tertandingi.',
  keywords: [
    'hotel diskon',
    'booking hotel',
    'diskon hotel indonesia',
    'cheap hotel',
    'hotel murah',
    'travel',
    'accommodation',
    'vacation',
    'leisure',
    'DiskonHotel',
  ],
  authors: [{ name: 'DiskonHotel' }],
  creator: 'DiskonHotel',
  publisher: 'DiskonHotel',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
    year: false,
    siteIdentity: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://diskonhotel.com',
    siteName: 'DiskonHotel',
    title: 'DiskonHotel - Temukan Hotel Diskon Terbaik',
    description: 'Temukan hotel dengan diskon terbaik di Indonesia. Booking mudah, harga kompetitif, dan pengalaman menginap yang tak tertandingi.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DiskonHotel - Hotel Booking with Discounts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DiskonHotel - Temukan Hotel Diskon Terbaik',
    description: 'Temukan hotel dengan diskon terbaik di Indonesia. Booking mudah, harga kompetitif.',
    creator: '@diskonhotel',
    images: ['/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noydir: false,
    spambots: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    maskIcon: '/mask-icon.svg',
    shortcutIcon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              {/* Header will be added later */}
            </header>
            <main className="flex-1">
              {children}
            </main>
            <Toaster
              position="bottom-center"
              richColors
              closeButton
            />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}