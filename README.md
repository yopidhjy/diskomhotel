# DiskonHotel - Modern Hotel Booking Platform

> Temukan hotel dengan diskon terbaik di Indonesia

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Vercel Deployment                    │
├─────────────────────────────────────────────────────────┤
│              Next.js 14 (App Router)                   │
│  - Server Components                                   │
│  - Server Actions (Route Handlers)                     │
│  - React Client Components                             │
├─────────────────────────────────────────────────────────┤
│              Supabase (Backend)                          │
│  - PostgreSQL Database                                 │
│  - Edge Functions (Optional)                           │
│  - Authentication (Email/Password, OAuth)              │
│  - Storage (Images)                                    │
├─────────────────────────────────────────────────────────┤
│              Tailwind CSS + shadcn/ui                  │
│  - Modern UX Components                                │
│  - Dark/Light Theme                                      │
└─────────────────────────────────────────────────────────┘
```

## Prerequisites

- Node.js 18.17.0+ 
- npm 10.0.0+
- Supabase Account
- Vercel Account

## Quick Start

### 1. Setup Local Development

```bash
# Navigate to project
cd /data/data/com.termux/files/home/.openclaw/workspace/diskonhotel

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local and fill in your values

# Start development server
npm run dev
```

### 2. Setup Supabase Backend

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Create new project
   - Note your project URL and keys

2. **Run Database Migration**
   - Go to Supabase Dashboard > SQL Editor
   - Paste contents of `phase1-database-setup.sql`
   - Click "Run"

3. **Configure Environment**
   - Update `.env.local` with your Supabase credentials
   - Enable Email Auth in Supabase > Authentication > Settings

### 3. Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# Or via Vercel Dashboard:
# 1. Import Git repository
# 2. Set environment variables
# 3. Deploy
```

## Project Structure

```
diskonhotel/
├── app/                 # App Router (Next.js 14)
│   ├── api/            # API Routes
│   ├── hotels/[id]/    # Hotel Detail Page
│   ├── booking/        # Booking Flow
│   ├── payment/        # Payment Page
│   ├── booking/success/ # Success Page
│   ├── layout.tsx      # Root Layout
│   ├── page.tsx        # Home Page
│   └── globals.css     # Global Styles
├── components/         # React Components
│   ├── ui/             # shadcn/ui Base
│   ├── hotel-card.tsx
│   └── sticky-bottom-bar.tsx
├── lib/               # Utilities
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── utils.ts
├── types/             # TypeScript Types
│   └── database.ts
└── public/            # Static Assets
```

## Phase Status

## ✅ Phase 1: Database Setup & Supabase Migration
- [x] Database Schema (PostgreSQL) - `phase1-database-setup.sql`
- [x] Supabase Migration Script with FK constraints
- [x] RLS Policies (Read for public, Write for authenticated)
- [x] Connection Utilities - `lib/supabase/`
- [x] TypeScript Types - `types/database.ts`

## ✅ Phase 2: Global Configuration & UI Foundation
- [x] Tailwind CSS Configuration (colors: #0D4A38 green, #F57C00 orange)
- [x] Global Styles (`app/globals.css`) with CSS variables
- [x] Root Layout (`app/layout.tsx`) with SEO meta tags
- [x] HotelCard Component (`components/hotel-card.tsx`)
- [x] StickyBottomBar Component (`components/sticky-bottom-bar.tsx`)
- [x] UI Component Library (Button, Badge, Card, Input, Label, Select, Skeleton)

## ✅ Phase 3: Frontend Pages
- [x] Home Page (`app/page.tsx`) - Hotel listing, search, promo section
- [x] Hotel Detail Page (`app/hotels/[id]/page.tsx`) - Room selection, description
- [x] Booking Flow (`app/booking/page.tsx`) - Check-in/out, guest info, price summary
- [x] Payment Page (`app/payment/page.tsx`) - QRIS code, payment link
- [x] Success Page (`app/booking/success/page.tsx`) - Confirmation screen
- [x] API Route (`app/api/hotels/route.ts`) - Server-side data fetching

## Next Phases

### Phase 4: Server Actions & Core Business Logic
- [ ] QRIS Payment Generator with CRC16 algorithm
- [ ] Telegram Bot API integration
- [ ] Discount Engine (percentage, nominal, flash sale)
- [ ] Payment webhook handlers

### Phase 5: Admin Dashboard
- [ ] Admin authentication with Supabase Auth
- [ ] Hotel management CRUD
- [ ] Booking management
- [ ] User management
- [ ] Analytics dashboard

## Key Features Implemented

### Discount System
- Percentage discounts
- Nominal discounts  
- Automatic discount calculation per booking
- Promo code validation

### Payment System
- QRIS Payment with CRC16 payload generation
- Multiple payment methods support
- Real-time payment status tracking

### SEO Features
- Server-Side Rendering (SSR)
- Dynamic meta tags per page
- Open Graph & Twitter cards
- Structured data ready

## Development Commands

```bash
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run format       # Prettier format
```

## File Structure After Phase 3

```
diskonhotel/
├── app/
│   ├── api/hotels/route.ts
│   ├── hotels/[id]/page.tsx
│   ├── booking/page.tsx
│   ├── booking/success/page.tsx
│   ├── payment/page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── hotel-card.tsx
│   └── sticky-bottom-bar.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── utils.ts
├── types/
│   └── database.ts
├── phase1-database-setup.sql
├── tailwind.config.ts
├── package.json
├── next.config.js
├── .env.example
├── vercel.json
└── README.md
```

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: dev@diskonhotel.com

## License

MIT © DiskonHotel Team