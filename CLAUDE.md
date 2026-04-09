# Express Foods Website — Project Context

## Overview
B2B website for Express Foods, an Egypt-based exporter of fresh and frozen (IQF) fruits & vegetables. Credibility-first, SEO-strong, lead-generating site for international produce buyers. NOT e-commerce.

## Stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 with `@theme inline` directive
- **UI:** @relume_io/relume-ui + shadcn/ui where needed
- **Animation:** framer-motion
- **CMS:** Payload CMS 3 (self-hosted inside Next.js) + Postgres (Neon) — Phase 8
- **Forms:** React Hook Form + Zod + Resend
- **SEO:** next-sitemap + JSON-LD + Next.js Metadata API
- **Analytics:** Plausible — Phase 9
- **Package manager:** pnpm
- **Hosting:** Vercel

## Phase Tracker
| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Dev Environment & Scaffold | COMPLETE |
| 2 | Core Layout & Shared Components | COMPLETE |
| 3 | Home Page (11 sections, 4-tab hero) | COMPLETE |
| 4 | About Us Page (no team section) | COMPLETE |
| 5 | Products System (40 products, 4 categories, detail pages) | COMPLETE |
| 6 | Contact Page (form + server action + channels) | COMPLETE |
| 7 | Blog System (3 posts, listing + detail) | COMPLETE |
| 8 | Payload CMS Integration (collections, admin, seed script) | COMPLETE |
| 9 | SEO, Analytics & Polish (JSON-LD, sitemap, favicon, Plausible) | COMPLETE |
| 10 | Final QA (lint 0 warnings, build 58 pages, 0 errors) | COMPLETE |

## Key Decisions
- English only (no i18n)
- No team section (Team3 component excluded from About page)
- IQF/frozen is a LIVE capability (not "coming soon")
- 31 products derived from product image files
- Blog: 3 starter posts, MDX initially, migrated to Payload in Phase 8
- SVG logos preferred; logomark for favicon
- Nav uses dark or white logo only (not colored)
- Copywriting comes from Relume components (embedded in JSX)
- Missing assets get placeholder fallbacks

## Folder Structure
```
express-foods-site/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── globals.css             # Design tokens + Tailwind v4 @theme
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── products/
│   │   ├── page.tsx            # Products landing
│   │   ├── [slug]/page.tsx     # Product detail (dynamic)
│   │   ├── citrus/page.tsx
│   │   ├── fresh-fruits/page.tsx
│   │   ├── vegetables/page.tsx
│   │   └── iqf-frozen/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post detail
│   └── contact/page.tsx
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── shared/                 # CTA, PageHero, LogoPartners, Testimonials, FAQ, BlogPreview
│   ├── home/                   # HeroTabs, StorySection, FourPillars, etc.
│   ├── about/                  # OriginStory, WhatSetsUsApart, WhyBuyersTrustUs, Stats
│   ├── products/               # CategoryPage template, ProductGrid
│   ├── product-detail/         # ProductHeader, ProductSpecs, RelatedProducts
│   ├── blog/                   # BlogGrid, BlogPostHeader, BlogContent
│   ├── contact/                # ContactForm, ContactChannels
│   └── ui/                     # shadcn primitives
├── lib/
│   ├── data/                   # products.ts, blog.ts (static data)
│   ├── schemas/                # Zod schemas (contact form)
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # cn() helper
├── content/blog/               # MDX blog posts
├── public/images/
│   ├── products/               # 34 product images (PNG + WebP)
│   ├── sections/               # 20 section images (WebP)
│   └── logos/                  # 12 logo files (SVG + PNG)
└── CLAUDE.md                   # This file
```

## Relume-to-Tailwind Token Mapping
Relume components use semantic class names that are aliased in globals.css:

| Relume Class | Maps To | Color |
|---|---|---|
| `bg-background-primary` | `var(--background)` | #f8f5ee (warm cream) |
| `bg-background-secondary` | `var(--secondary)` | #e9f6ea (light green) |
| `bg-background-alternative` | `var(--primary)` | #307b34 (forest green) |
| `text-text-primary` | `var(--foreground)` | #2a332b (dark green-gray) |
| `text-text-alternative` | `var(--primary-foreground)` | #ffffff (white) |
| `border-border-primary` | `var(--border)` | #d7d7d7 |
| `bg-neutral-lightest` | `var(--muted)` | #efeae4 |
| `text-neutral-light` | `var(--muted-foreground)` | #5f6561 |
| `bg-neutral-white` / `text-neutral-white` | `#ffffff` | white |

## Component Deduplication Map
112 Relume JSX files → ~30 unique components. Source files in `/DEVELOPMENT/express-foods/`.

### Shared (appear on multiple pages)
| Relume File | Target Component | Used On |
|---|---|---|
| Navbar5.jsx (×11) | `components/layout/Navbar.tsx` | All pages |
| Footer3.jsx (×11) | `components/layout/Footer.tsx` | All pages |
| Cta31.jsx (×11) | `components/shared/CtaSection.tsx` | All pages |
| Header65.jsx (×9) | `components/shared/PageHero.tsx` | Most pages |
| Logo6.jsx (×7) | `components/shared/LogoPartners.tsx` | Major pages |
| Testimonial17.jsx (×5) | `components/shared/Testimonials.tsx` | Home, About, Citrus, Product Detail, Blog Post |
| Faq4.jsx (×3) | `components/shared/FaqSection.tsx` | Contact, Product Detail, IQF |
| Blog18.jsx (×2) | `components/shared/BlogPreview.tsx` | Home, Blog Post |

### Page-specific
| Relume File | Target Component | Page |
|---|---|---|
| Header103.jsx | `components/home/HeroTabs.tsx` | Home |
| Layout89.jsx | `components/home/StorySection.tsx` | Home |
| Layout399.jsx | `components/home/FourPillars.tsx` | Home |
| Layout300.jsx | `components/home/ProductRange.tsx` | Home |
| Layout494.jsx | `components/home/FeaturedLayout.tsx` | Home |
| Layout377.jsx | `components/home/ProcessSection.tsx` | Home |
| Layout195.jsx | `components/home/GlobalReach.tsx` | Home |
| Layout16.jsx | `components/about/OriginStory.tsx` | About |
| Layout371.jsx | `components/about/WhatSetsUsApart.tsx` | About |
| Layout513.jsx | `components/shared/ParallaxLayout.tsx` | About, Vegetables, Fresh Fruits |
| Stats53.jsx | `components/about/Stats.tsx` | About |
| ProductHeader3.jsx | `components/product-detail/ProductHeader.tsx` | Product Detail |
| Contact6.jsx | `components/contact/ContactForm.tsx` | Contact |
| Contact24.jsx | `components/contact/ContactChannels.tsx` | Contact |
| Blog44.jsx | `components/blog/BlogGrid.tsx` | Blog listing |
| BlogPostHeader1.jsx | `components/blog/BlogPostHeader.tsx` | Blog post |
| Content29.jsx | `components/blog/BlogContent.tsx` | Blog post |

## Product Catalog (31 products)
### Citrus
Oranges, Mandarin Oranges, Lemon, Grapefruit

### Fresh Fruits
Mango, Strawberries, Grapes, Guava, Pomegranate, Watermelon, Cantaloupe, Avocado, Barhi Dates, Medjool Dates

### Vegetables
Bell Peppers, Broccoli, Cauliflower, Green Beans, Okra, Potatoes, Pumpkins, Red Chili Peppers, Red Onions, Spring Onions, Sweet Potatoes, Yellow Onions, Iceberg Lettuce, Artichoke, Garlic

### IQF Frozen (subset available frozen)
Okra, Green Beans, Strawberries, Mango, Broccoli, Cauliflower, Bell Peppers, Pomegranate, Sweet Potatoes, Pumpkins, Artichoke

## Image Assets
- **Products:** `public/images/products/` — 31 PNG + 3 WebP hero composites
- **Sections:** `public/images/sections/` — 20 WebP (home-slider-01/02/03, home-usp-01/02, home-products-range, home-global-reach, home-process, about-hero, about-origins, about-apart, about-trust-01/02/03/04, about-stats, contact-hero, contact-cta, shared-cta-01/02)
- **Logos:** `public/images/logos/` — 6 SVG + 6 PNG (logo-colored, logo-dark, logo-white, logo-mark-colored, logo-mark-dark, logo-mark-white)

## Environment Variables (needed later)
```
DATABASE_URI=           # Neon Postgres (Phase 8)
PAYLOAD_SECRET=         # Payload CMS (Phase 8)
RESEND_API_KEY=         # Email delivery (Phase 6)
PLAUSIBLE_DOMAIN=       # Analytics (Phase 9)
```

## Conventions
- TypeScript strict mode
- `@/*` import alias for project root
- `cn()` utility from `lib/utils.ts` for class merging
- `next/image` for all images with proper width/height/alt
- Server Components by default; `"use client"` only when needed (interactivity, framer-motion)
- File naming: kebab-case for routes, PascalCase for components
- Relume components are converted to TypeScript, parameterized via props, and placed in the appropriate `components/` subdirectory
