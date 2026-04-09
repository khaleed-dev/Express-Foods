# debug.md — Express Foods Website Audit

## CRITICAL BUGS

### 1. Content Not Rendering Below First Viewport (SITE-WIDE)
The `<html>` element has class `h-full` (in the root layout), which sets `height: 100%` (viewport height). Combined with `body` having `min-h-full flex flex-col`, this causes the body content to overflow beyond the html element's painted area. In some browsers/environments, content below the fold is never painted despite being in the DOM.

**Fix:** In the root layout (`layout.tsx` or equivalent), change `h-full` on the `<html>` tag to `min-h-full` (or just remove it). The body already has `min-h-full` so the html element should not constrain height. This is the #1 priority fix — the entire site is essentially broken below the hero on every page.

### 2. 404/Not-Found Page: Missing Root Layout Tags
Navigating to any non-existent URL shows: **"Runtime Error: Missing <html> and <body> tags in the root layout."** The `not-found.tsx` (or equivalent) file is likely not using the root layout properly, or there's a separate `not-found` layout that's missing the html/body wrapper.

**Fix:** Ensure the custom 404 page is inside the root layout and doesn't define its own html/body, OR ensure the not-found layout includes proper html/body tags.

### 3. JSON-LD Schema Rendering as Visible Text
On product detail pages (`/products/[slug]`) and blog posts (`/blog/[slug]`), the JSON-LD structured data is rendered as visible text at the top of the page content. The `<script type="application/ld+json">` tags are likely being placed inside the `<main>` content area instead of in `<head>`, or they're not wrapped in `<script>` tags at all.

**Fix:** Move JSON-LD schema injection to `<Head>` or ensure they're inside `<script type="application/ld+json">` tags and not rendered as raw text within the page body.

---

## NAVIGATION ISSUES

### 4. Nav Contact/CTA Buttons Overflow on Desktop
At `lg` breakpoint (~1024–1280px), the "Contact" and "Get a Quote" buttons in the navbar get clipped or pushed off-screen to the right. The nav items take too much horizontal space.

**Fix:** Reduce nav link spacing/padding, make the CTA buttons smaller at the `lg` breakpoint, or consider combining them into a single CTA. Ensure the nav container doesn't overflow horizontally.

### 5. Resources Mega-Menu Dropdown Not Working / Content Leaking
The "Resources" dropdown button in the desktop nav doesn't visually open any dropdown on click or hover. However, the mega-menu content (Fresh Fruits, Citrus, Vegetables, IQF Frozen, Why Egypt, Export Process, etc.) is rendered in the DOM at positions below the nav bar (top: 138–290px) and is technically visible behind the hero content. The dropdown panel is never shown/hidden properly.

**Fix:** Implement proper dropdown open/close behavior. The mega-menu panel should be `display: none` or `opacity: 0` + `pointer-events: none` when closed, and animate open on hover or click. Check the `Products` link too — it could benefit from a dropdown to subcategories.

### 6. "Quality" Nav Link Points to `/about` Instead of Dedicated Page
The "Quality" link in both the header nav and footer links to `/about`. There's no `/quality` route (returns 404). Either create a dedicated quality page or rename/remove this misleading nav item.

### 7. Mobile Hamburger Menu Not Functional
On mobile viewports, the hamburger icon (3-line button) is present in the DOM but clicking it doesn't open a visible mobile menu. The nav links are hidden but the menu toggle doesn't reveal them.

**Fix:** Check the mobile menu component's state management. The hamburger button should toggle a visible slide-out or dropdown menu with all nav links.

---

## TYPOGRAPHY / SIZING

### 8. Hero & Section Headings Are Extremely Oversized
- H1 on homepage: `text-10xl` → **128px** on `lg` screens. Way too large — the full hero heading "From the banks of the Nile to the world's best supermarkets" requires multiple viewport heights to display.
- H2/H3 section headings: `text-8xl` → **96px** on `lg` screens. Also excessively large.
- On mobile, headings use `text-5xl`/`text-6xl` which still overflows the narrow viewport width.

**Fix:** Reduce heading sizes across the board. A reasonable hero H1 on desktop would be `text-5xl` to `text-7xl` max (~48–72px). Section H2s should be `text-4xl` to `text-5xl` (~36–48px). On mobile, hero text should be `text-3xl` to `text-4xl`. Apply this globally wherever you see `text-8xl`, `text-9xl`, `text-10xl` classes. Also check the homepage hero has an H2 ("What is happening in produce") at 128px — that should be smaller since it's not the primary page heading.

### 9. Text Overflow on Mobile
Because headings are so large, on mobile (390px) the hero text overflows horizontally — words get cut off on both left and right. Hero text like "From the banks..." is unreadable on small screens.

**Fix:** This will be resolved by fixing #8 above. Additionally, ensure all heading containers have `overflow-hidden` or proper `max-width` constraints on mobile.

---

## CONTENT GAPS

### 10. FAQ Sections Have Empty Answers (Contact Page + Product Pages)
The FAQ accordions on the contact page (e.g., "What are minimum orders?", "How fast do you respond?") and on product pages (e.g., "What orange varieties do you export?") have question headers but **zero content** inside the answer panels. The `[role="region"]` elements are completely empty.

**Fix:** Add actual FAQ answer content to all accordion items across contact and product pages.

### 11. Product Detail Accordion Sections Are Empty
On product pages (e.g., `/products/oranges`), the "Specifications", "Packaging", and "Certifications & Markets" accordion sections exist but contain no content.

**Fix:** Populate these sections with actual product data, or hide them until content is available.

### 12. Placeholder Phone Number
The phone number "+20 2 XXXX XXXX" appears on the contact page and footer. The `tel:` link points to `+2021234567` which doesn't match.

**Fix:** Replace with the real phone number or remove it entirely if not ready.

### 13. Social Media Links Are Placeholder `#` Links
All social media icons in the footer link to `href="#"`.

**Fix:** Either add real social media URLs or remove the icons until they're ready.

---

## SEO / TECHNICAL

### 14. Product Page Titles Have Duplicate Brand Name
Product pages render as: `"Oranges | Express Foods | Express Foods"` — the brand name "Express Foods" appears twice. This is likely a metadata template issue where the product page sets its own title suffix AND the root layout also appends it.

**Fix:** In the product page metadata (likely in `products/[slug]/page.tsx`), remove the ` | Express Foods` suffix if the root layout template already appends it. Use Next.js `metadata.title` template pattern properly.

### 15. Sitemap Includes Non-Page URLs
The sitemap at `/sitemap-0.xml` includes URLs that aren't real pages: `/apple-icon`, `/icon.svg`, `/manifest.webmanifest`. These are asset/icon routes that shouldn't be indexed.

**Fix:** Exclude these routes from the sitemap generation. In your `sitemap.ts`, filter out icon/manifest routes.

### 16. Footer Links Point to Wrong Pages
Multiple footer links are incorrectly mapped:
- "Quality" → `/about` (should be `/quality` or a section anchor)
- "Export process" → `/about` (should be its own page or anchor)
- "Why Egypt" → `/about`
- "Markets served" → `/about`
- "Sustainability" → `/about`
- "FAQ" → `/contact` (should be `/contact#faq` or standalone)

**Fix:** Either create dedicated pages for these topics, use proper anchor links to sections within existing pages (e.g., `/about#quality`), or remove the links that don't have real destinations.

### 17. Next.js Image Warnings
Console shows warnings for images with `fill` prop missing `sizes` prop (e.g., `home-slider-01.webp`, `home-slider-02.webp`). Also a warning about `logo-mark-colored.svg` having width or height modified without the other.

**Fix:** Add `sizes` prop to all `<Image fill>` components. For the logo SVG, add `width: "auto"` or `height: "auto"` style to maintain aspect ratio.

---

## SUMMARY — PRIORITY ORDER

1. **Fix `h-full` on `<html>`** → change to `min-h-full` (blocks entire site)
2. **Fix 404 layout** → add proper html/body tags
3. **Fix JSON-LD rendering** → must be in `<script>` tags, not visible text
4. **Reduce all heading sizes** globally (`text-10xl`→`text-6xl`, `text-8xl`→`text-4xl`, scale mobile accordingly)
5. **Fix navigation** → dropdown menus, mobile hamburger, CTA overflow
6. **Fix product page title template** → remove duplicate brand suffix
7. **Populate empty FAQ/accordion content** or hide empty sections
8. **Clean up footer links** → fix incorrect href targets
9. **Clean up sitemap** → exclude non-page URLs
10. **Replace placeholder content** → phone number, social links
11. **Fix Next.js image warnings** → add `sizes` prop