# Express Foods

B2B website for **Express Foods** — an Egypt-based exporter of premium fresh and frozen (IQF) fruits and vegetables. Built for credibility, SEO, and lead generation targeting international produce buyers.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| UI | @relume_io/relume-ui + shadcn/ui + Aceternity UI + ReactBits |
| Animation | Framer Motion |
| CMS | Payload CMS 3 (self-hosted, Postgres) |
| Database | Neon Postgres |
| Forms | React Hook Form + Zod + Resend |
| SEO | next-sitemap + JSON-LD structured data |
| Analytics | Plausible (optional) |
| Package Manager | pnpm |
| Hosting | Vercel |

## Pages

- **Home** — 4-tab animated hero, story, features, product range, testimonials, blog preview
- **About Us** — origin story, trust parallax, certifications, stats
- **Products Landing** — 4 category cards (Citrus, Fresh Fruits, Vegetables, IQF Frozen)
- **Category Pages** (x4) — filtered product grids
- **Product Detail** (x40) — specs, packaging, certifications, quote CTA
- **Blog** — listing + 3 starter posts
- **Contact** — validated form with Resend email delivery, FAQ
- **Admin** (`/admin`) — Payload CMS dashboard

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)
- Postgres database (e.g., [Neon](https://neon.tech) free tier)

### Setup

```bash
# Clone
git clone https://github.com/khaleed-dev/Express-Foods.git
cd Express-Foods

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your credentials
```

### Environment Variables

Create a `.env.local` file:

```env
DATABASE_URI=postgresql://user:pass@host/dbname?sslmode=require
PAYLOAD_SECRET=your-64-char-hex-secret
RESEND_API_KEY=re_your_resend_key
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com  # optional
```

Generate a Payload secret: `openssl rand -hex 32`

### Development

```bash
pnpm dev
```

- Site: http://localhost:3000
- CMS Admin: http://localhost:3000/admin (create first user on initial visit)

### Build

```bash
pnpm build   # Builds site + generates sitemap
pnpm start   # Serves production build
```

## Project Structure

```
app/
  (site)/          # Public website (Navbar + Footer)
    page.tsx       # Home
    about/
    products/
    blog/
    contact/
  (payload)/       # CMS admin (separate layout)
    admin/
    api/
components/
  layout/          # Navbar, Footer
  shared/          # PageHero, CTA, Testimonials, FAQ, etc.
  home/            # Home page sections
  about/           # About page sections
  products/        # Product grid, category cards
  product-detail/  # Product header, specs
  blog/            # Blog grid, post header, content
  contact/         # Contact form, channels
  ui/              # shadcn/ui primitives
lib/
  data/            # Static product + blog data
  schemas/         # Zod validation schemas
  types.ts         # TypeScript interfaces
  utils.ts         # Utilities (cn helper)
  json-ld.ts       # Structured data helpers
  seed.ts          # CMS seed script
collections/       # Payload CMS collections
globals/           # Payload CMS globals
public/images/
  products/        # 34 product images
  sections/        # 20 section images
  logos/            # SVG + PNG logo variants
```

## Key Features

- **40 products** with full B2B export data (specs, packaging, certifications, seasons)
- **4-tab animated hero** with framer-motion transitions
- **Contact form** with Zod validation + Resend email delivery
- **Payload CMS** for content management (products, blog, site settings)
- **SEO** — per-page metadata, JSON-LD (Organization, Product, Article), sitemap, robots.txt
- **Responsive** — mobile-first, tested at 375px–1440px
- **Performance** — static generation, next/image optimization, font preloading

## Deployment

Deploy to Vercel:

```bash
# Link to Vercel
npx vercel

# Set environment variables in Vercel dashboard
# Deploy
npx vercel --prod
```

## License

Private project. All rights reserved.
