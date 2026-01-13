# SwiftBuild.services - Product Requirements Document

## Overview

**Product:** SwiftBuild.services - Agency website  
**Version:** 1.0  
**Owner:** Wouter + Karol  
**Timeline:** 2 weeks  
**Type:** Multi-page bilingual agency website

---

## Business Context

### What is SwiftBuild?

A web agency targeting Polish SMBs who:
- Have outdated websites (built 2015-2018)
- Are overpaying marketing agencies for vague "services"
- Get blamed by agencies ("it's the website's fault" / "it's the ads' fault")
- Want a single partner who handles everything

### The Team

| Person | Role | Background |
|--------|------|------------|
| Wouter | Builds | Senior Prompt Engineer, Next.js/React, AI integration |
| Karol | Sells | Business Analyst at Colliers, IT department, natural hustler |

### Positioning

**"Strona, SEO i reklamy. Jedna firma, jeden cel."**
(Website, SEO and ads. One company, one goal.)

**Key differentiators:**
- All-in-one (no finger-pointing between agencies)
- Fast delivery (2-3 weeks, not 3 months)
- Transparent pricing
- Single point of contact (Karol)

---

## Site Architecture

### Pages

| Route (PL) | Route (EN) | Purpose |
|------------|------------|---------|
| `/` | `/en` | Homepage - hook + overview |
| `/uslugi` | `/en/services` | Services detail with pricing hints |
| `/realizacje` | `/en/portfolio` | Portfolio index - all cases |
| `/realizacje/[slug]` | `/en/portfolio/[slug]` | Individual case studies |
| `/o-nas` | `/en/about` | About the team |
| `/kontakt` | `/en/contact` | Contact form + booking |
| `/polityka-prywatnosci` | `/en/privacy-policy` | Legal (RODO/GDPR) |

### URL Structure

- Polish is default (root `/`)
- English prefixed with `/en`
- Language switcher preserves current page

---

## Page Specifications

### Homepage (`/`)

**Purpose:** Hook visitors, establish credibility, drive to contact.

#### Section 1: Hero

**This is the most important section. It must stop people scrolling.**

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]                              PL / EN    [Kontakt]       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     STRONA,                        ┌─────────────────────┐     │
│     SEO I REKLAMY.                 │                     │     │
│                                    │   [VIDEO LOOP       │     │
│     Jedna firma,                   │    SHOWING CELTIC,  │     │
│     jeden cel.                     │    DELUXDECO SITES  │     │
│                                    │    IN ACTION]       │     │
│                                    │                     │     │
│     [Bezpłatna wycena]             └─────────────────────┘     │
│                                                                 │
│     ↓                                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Design requirements:**
- **Typography:** Oversized, 72-96px, Clash Display or similar
- **Layout:** Asymmetric split (text left, video right)
- **Video:** Loop of real portfolio sites being scrolled/used (NOT stock)
- **Animation:** Text reveals with stagger, video fades in
- **Scroll indicator:** Subtle animated arrow or line

**Copy (PL):**
- Headline: "STRONA, SEO I REKLAMY." (oversized, bold)
- Subheadline: "Jedna firma, jeden cel." (smaller, lighter)
- CTA Primary: "Bezpłatna wycena"

**Copy (EN):**
- Headline: "WEBSITE, SEO AND ADS."
- Subheadline: "One team, one goal."
- CTA Primary: "Get a free quote"

#### Section 2: Problem/Solution

**Purpose:** Show you understand their pain.

**Copy (PL):**
```
Brzmi znajomo?

• Twoja strona wygląda jakby była z 2015 roku
• Agencja od reklam mówi, że to wina strony. Twórca strony mówi, że to wina reklam.
• Płacisz za "marketing" ale nie wiesz za co dokładnie
• Chcesz zmienić coś na stronie i czekasz 2 tygodnie

Robimy to inaczej.
Jedna firma. Strona, SEO i reklamy.
Jeśli coś nie działa — to nasz problem, nie Twój.
```

**Copy (EN):**
```
Sound familiar?

• Your website looks like it's from 2015
• The ad agency blames the website. The web agency blames the ads.
• You pay for "marketing" but don't know what exactly
• You want to change something on the site and wait 2 weeks

We do it differently.
One company. Website, SEO and ads.
If something doesn't work — it's our problem, not yours.
```

#### Section 3: Services Overview

**Purpose:** Quick preview of what you offer.

3 cards linking to `/uslugi`:

| Service | Icon | Description (PL) |
|---------|------|------------------|
| Strony internetowe | 🌐 | Nowoczesne, szybkie strony które sprzedają |
| Pozycjonowanie SEO | 📈 | Bądź widoczny w Google dla swoich klientów |
| Google Ads | 🎯 | Reklamy które przynoszą konkretne wyniki |

Each card links to `/uslugi#[section]`

#### Section 4: Featured Work

**Purpose:** Visual proof.

- 2-3 featured case studies (best ones)
- Large screenshots with hover effect
- "Zobacz wszystkie realizacje →" link to `/realizacje`

#### Section 5: How It Works

**Purpose:** Reduce uncertainty.

```
1. Rozmowa           2. Realizacja         3. Wyniki
   Opowiedz nam o       Projektujemy i        Uruchamiamy SEO
   swoim biznesie.      budujemy stronę.      i reklamy.
   Zrozumiemy cele      Ty akceptujesz,       Monitorujemy,
   i przygotujemy       my wdrażamy.          optymalizujemy,
   wycenę.              Gotowe w 2-3          raportujemy.
                        tygodnie.
```

#### Section 6: CTA Banner

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     Gotowy na nowoczesną stronę?                               │
│                                                                 │
│     [Porozmawiajmy]                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Section 7: Footer

- Logo
- Navigation links
- Contact info (email, phone)
- Social links (LinkedIn)
- Legal links (Privacy policy)

---

### Services Page (`/uslugi`)

**Purpose:** Detail services with pricing transparency.

#### Hero
- Headline: "Co robimy"
- Subheadline: "Skupiamy się na trzech rzeczach — i robimy je dobrze."

#### Service 1: Strony internetowe

**Content:**
- What you get: Custom design, mobile responsive, fast loading, SEO-ready
- Tech: Next.js, React, WordPress (depending on needs)
- Timeline: 2-3 weeks
- Pricing hint: "od 8 000 PLN" or "8 000 - 20 000 PLN"

**Includes:**
- Design mockup
- Mobile responsive
- Basic SEO setup
- Contact form
- Google Analytics
- 30 days support after launch

#### Service 2: Pozycjonowanie SEO

**Content:**
- What you get: Technical audit, on-page optimization, content strategy
- Timeline: Results in 3-6 months
- Pricing hint: "od 1 500 PLN / miesiąc"

**Includes:**
- Technical SEO audit
- Keyword research
- On-page optimization
- Monthly reporting
- Competitor analysis

#### Service 3: Google Ads

**Content:**
- What you get: Campaign setup, ad copywriting, ongoing optimization
- Pricing hint: "od 1 000 PLN / miesiąc + budżet reklamowy"

**Includes:**
- Campaign strategy
- Ad copywriting
- Landing page recommendations
- A/B testing
- Monthly reporting

#### CTA Section
- "Chcesz poznać dokładną wycenę?"
- Button: "Skontaktuj się" → `/kontakt`

---

### Portfolio Index (`/realizacje`)

**Purpose:** Show all work with premium interactions.

#### Layout

**NOT a boring equal grid.** Feature one project prominently.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Realizacje                                                     │
│                                                                 │
│  ┌─────────────────────────────────────────┐  Celtic Self       │
│  │                                         │  Storage           │
│  │                                         │  ────────────      │
│  │        FEATURED PROJECT                 │  Self-storage      │
│  │           (LARGE)                       │  z 6 lokalizacjami │
│  │                                         │  w Irlandii.       │
│  │        [Video/image on hover]           │                    │
│  │                                         │  [Zobacz →]        │
│  └─────────────────────────────────────────┘                    │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │    DeluxDeco    │  │     Letra       │  │  Common Thread  │ │
│  │                 │  │                 │  │                 │ │
│  │ [Hover effect]  │  │ [Hover effect]  │  │ [Hover effect]  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Interaction Requirements

**On hover (each card):**
- Image scales up slightly (1.05)
- Clip-path reveal effect (image slides in from edge)
- Cursor changes to custom "View" circle
- Overlay with project name appears

**Implementation hint (Framer Motion):**
```tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
>
  <motion.img
    initial={{ clipPath: 'inset(0 100% 0 0)' }}
    whileHover={{ clipPath: 'inset(0 0% 0 0)' }}
  />
</motion.div>
```

#### The 4 Cases

| Client | Slug | One-liner (PL) | Tags |
|--------|------|----------------|------|
| Letra.pl | `letra` | Nowoczesna strona dla firmy usługowej | Strona, SEO |
| Common Thread | `common-thread` | Sklep z marokańskimi dywanami premium | Sklep, E-commerce |
| DeluxDeco | `deluxdeco` | E-commerce meblowy na rynek holenderski | Sklep, SEO, Wielojęzyczny |
| Celtic Self Storage | `celtic` | Self-storage z 6 lokalizacjami w Irlandii | Strona, SEO, Booking |

---

### Individual Case Study (`/realizacje/[slug]`)

**Purpose:** Deep dive into each project.

#### Template Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Wszystkie realizacje                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Client Name]                                                  │
│  [One-line description]                                         │
│                                                                 │
│  Tags: Strona / SEO / E-commerce                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Full-width screenshot]                                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  O projekcie                    Co zrobiliśmy                   │
│  ─────────────                  ──────────────                  │
│  [2-3 paragraphs about         • Custom design                  │
│   the client and challenge]    • Next.js development            │
│                                • SEO optimization               │
│                                • Google Ads setup               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Additional screenshots - gallery]                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Link to live site]                                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Następny projekt: [Next case study card]                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Case Study Content

**Letra.pl:**
- Client: Service company in Poland
- Challenge: Outdated website, no mobile version
- Solution: Modern responsive site, SEO basics
- Results: [To be added after launch metrics]

**Common Thread (Carpet shop):**
- Client: Premium Moroccan carpets
- Challenge: No online presence, needed e-commerce
- Solution: Modern storefront, product catalog
- Results: [To be added]

**DeluxDeco:**
- Client: Luxury cinema furniture
- Challenge: Expand to Dutch market
- Solution: Multi-language Shopify, SEO for Netherlands
- Results: [Mention Dutch market entry]

**Celtic Self Storage:**
- Client: Self-storage with 6 locations in Ireland
- Challenge: Booking system, multi-location management
- Solution: Custom booking flow, location pages, SEO
- Results: [Mention booking conversion if available]

---

### About Page (`/o-nas`)

**Purpose:** Build trust through personal connection.

#### Section 1: Intro

**Copy (PL):**
```
Jesteśmy Wouter i Karol.

Budujemy strony internetowe, które działają.
Nie jesteśmy wielką agencją z salą konferencyjną i account managerem.
Jesteśmy dwójką ludzi, którzy robią konkretną robotę.

Ty dzwonisz — Karol odbiera.
Coś nie działa — Wouter naprawia.
Bez przekazywania między działami. Bez czekania na "odpowiedź zespołu".
```

#### Section 2: Team

Two cards side by side:

**Karol:**
- Photo
- Role: "Twój kontakt"
- Background: "Business Analyst w Colliers. Zrozumie Twój biznes i zadba o każdy szczegół współpracy."
- LinkedIn link

**Wouter:**
- Photo
- Role: "Buduje"
- Background: "Senior developer z doświadczeniem w e-commerce, AI i aplikacjach webowych. Twoja strona w dobrych rękach."
- LinkedIn link (optional)

#### Section 3: Why Us

3 points:
1. **Wszystko w jednym miejscu** - Strona, SEO, reklamy. Bez zbędnych pośredników.
2. **Szybko i konkretnie** - Gotowe w 2-3 tygodnie, nie 3 miesiące.
3. **Rozmawiasz z ludźmi, nie z firmą** - Znasz nas z imienia, my znamy Twój biznes.

---

### Contact Page (`/kontakt`)

**Purpose:** Convert visitors.

#### Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Porozmawiajmy                                                  │
│  Odpowiemy w ciągu 24 godzin.                                  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Contact Form]              [Karol's photo]                    │
│                              Karol Kowalski                     │
│  Imię ___________            📞 +48 XXX XXX XXX                 │
│  Firma __________            📧 karol@swiftbuild.services      │
│  Email __________                                               │
│  Telefon ________            Lub umów się na rozmowę:          │
│  Wiadomość                   [Calendly embed / link]            │
│  ________________                                               │
│  ________________                                               │
│                                                                 │
│  [Wyślij wiadomość]                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Form Fields

| Field | Label (PL) | Label (EN) | Required |
|-------|------------|------------|----------|
| name | Imię | Name | ✅ |
| company | Firma | Company | ❌ |
| email | Email | Email | ✅ |
| phone | Telefon | Phone | ❌ |
| message | Wiadomość | Message | ✅ |

#### Form Submission

- Send email notification to karol@swiftbuild.services
- Use Resend or SendGrid API
- Show success message inline (no redirect)

#### Calendly Integration

- Embed or link to Karol's Calendly
- For scheduling intro calls

---

## Technical Specification

### Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 (App Router) | Fast, SEO-friendly, good DX |
| Language | TypeScript | Type safety |
| Styling | TailwindCSS | Rapid development |
| Components | Shadcn/UI | Clean, accessible base |
| Animations | Framer Motion | Premium interactions |
| Scroll | Lenis (@studio-freight/lenis) | Smooth scroll feel |
| i18n | next-intl | Best Next.js i18n library |
| Forms | React Hook Form + Zod | Validation |
| Email | Resend | Simple email API |
| CMS | MDX or Contentlayer | Case studies as markdown |
| Hosting | Vercel | Zero-config, fast |
| Analytics | Plausible or GA4 | Privacy-friendly option |

### Animation & Interaction Libraries

```bash
npm install framer-motion @studio-freight/lenis
```

**Framer Motion:** Page transitions, scroll animations, hover effects
**Lenis:** Smooth scroll that feels premium (not jerky native scroll)

### Project Structure

```
swiftbuild-site/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx                    # Homepage
│   │   │   ├── layout.tsx                  # Root layout with i18n
│   │   │   ├── uslugi/page.tsx            # Services
│   │   │   ├── realizacje/
│   │   │   │   ├── page.tsx               # Portfolio index
│   │   │   │   └── [slug]/page.tsx        # Case study
│   │   │   ├── o-nas/page.tsx             # About
│   │   │   ├── kontakt/page.tsx           # Contact
│   │   │   └── polityka-prywatnosci/page.tsx
│   │   └── api/
│   │       └── contact/route.ts           # Form submission
│   ├── components/
│   │   ├── ui/                            # Shadcn components
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── language-switcher.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── problem-solution.tsx
│   │   │   ├── services-preview.tsx
│   │   │   ├── featured-work.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   └── cta-banner.tsx
│   │   ├── portfolio/
│   │   │   ├── case-card.tsx
│   │   │   └── case-gallery.tsx
│   │   └── contact/
│   │       └── contact-form.tsx
│   ├── content/
│   │   └── cases/
│   │       ├── letra.mdx
│   │       ├── common-thread.mdx
│   │       ├── deluxdeco.mdx
│   │       └── celtic.mdx
│   ├── lib/
│   │   ├── i18n.ts
│   │   └── utils.ts
│   ├── dictionaries/
│   │   ├── pl.json
│   │   └── en.json
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   │   ├── portfolio/
│   │   │   ├── letra/
│   │   │   ├── common-thread/
│   │   │   ├── deluxdeco/
│   │   │   └── celtic/
│   │   └── team/
│   │       ├── karol.jpg
│   │       └── wouter.jpg
│   └── fonts/
├── CLAUDE.md
└── .claude/
```

### Internationalization

**Dictionary structure (pl.json example):**

```json
{
  "nav": {
    "services": "Usługi",
    "portfolio": "Realizacje",
    "about": "O nas",
    "contact": "Kontakt"
  },
  "hero": {
    "headline": "Strona, SEO i reklamy. Jedna firma, jeden cel.",
    "subheadline": "Nowoczesna strona w 2-3 tygodnie. Jeden kontakt zamiast trzech agencji.",
    "cta_primary": "Bezpłatna wycena",
    "cta_secondary": "Zobacz realizacje"
  },
  "problem": {
    "title": "Brzmi znajomo?",
    "points": [
      "Twoja strona wygląda jakby była z 2015 roku",
      "Agencja od reklam mówi, że to wina strony. Twórca strony mówi, że to wina reklam.",
      "Płacisz za \"marketing\" ale nie wiesz za co dokładnie",
      "Chcesz zmienić coś na stronie i czekasz 2 tygodnie"
    ],
    "solution_title": "Robimy to inaczej.",
    "solution_text": "Jedna firma. Strona, SEO i reklamy. Jeśli coś nie działa — to nasz problem, nie Twój."
  }
}
```

### Case Studies as MDX

Each case study in `/content/cases/`:

```mdx
---
title: Celtic Self Storage
slug: celtic
description: Self-storage z 6 lokalizacjami w Irlandii
tags: [Strona, SEO, Booking]
client: Celtic Self Storage
url: https://celticselfstorage.ie
featured: true
order: 1
images:
  cover: /images/portfolio/celtic/cover.jpg
  gallery:
    - /images/portfolio/celtic/home.jpg
    - /images/portfolio/celtic/locations.jpg
    - /images/portfolio/celtic/booking.jpg
---

## O projekcie

Celtic Self Storage to firma oferująca magazyny self-storage w 6 lokalizacjach w Irlandii...

## Wyzwanie

Klient potrzebował nowoczesnej strony z systemem rezerwacji...

## Rozwiązanie

Zaprojektowaliśmy i zbudowaliśmy stronę w Next.js z...

## Co zrobiliśmy

- Custom design
- System rezerwacji online
- Strony dla 6 lokalizacji
- Optymalizacja SEO
- Integracja z systemem płatności
```

---

## Design Direction

**READ FIRST:** `.claude/skills/premium-design/SKILL.md` - This is critical. The site must NOT look like an AI-generated template.

### Design Philosophy

This is SwiftBuild's calling card. If it doesn't impress, why would anyone hire us?

**Core principles:**
1. **Create moments** - Every scroll should reveal something unexpected
2. **Break the grid** - Strategic asymmetry, not perfect alignment
3. **Typography is the hero** - Bold typeface choices over generic Inter
4. **Motion with purpose** - Animate what matters, not everything
5. **Confidence in choices** - No safe beige, no generic blue

### Visual Style

**NOT THIS:**
- Generic hero with gradient
- Perfectly aligned 3-column grids
- Stock photos
- Safe, boring colors
- Everything fades in on scroll

**THIS:**
- Bold, oversized typography
- Asymmetric layouts
- Real photos, real work
- Confident color palette
- Purposeful animations at key moments

### Typography

**Primary font:** Clash Display or Cabinet Grotesk (from fontshare.com - free, doesn't look free)
**Body font:** Satoshi or Inter

```css
--text-hero: clamp(3rem, 8vw, 6rem);    /* 48-96px, massive impact */
--text-h1: clamp(2rem, 5vw, 3.5rem);    /* 32-56px */
--text-h2: clamp(1.5rem, 3vw, 2rem);    /* 24-32px */
--text-body: 1.125rem;                   /* 18px */
```

### Colors

**Option A: Dark + Electric (recommended)**
```css
--background: #0a0a0a;
--foreground: #fafafa;
--accent: #3b82f6;      /* Electric blue */
--muted: #71717a;
```

**Option B: Light + Bold**
```css
--background: #fafafa;
--foreground: #0a0a0a;
--accent: #16a34a;      /* Confident green */
```

### Required "Wow" Moments

1. **Hero** - Video loop showing Celtic/DeluxDeco sites in action, oversized text
2. **Portfolio hover** - Image zoom + clip-path reveal + custom cursor
3. **Page transitions** - Smooth animated transitions between routes
4. **Scroll feel** - Lenis smooth scroll (not native jerky scroll)
5. **Contact** - Real photo of Karol, not corporate, approachable

### Animation Guidelines

**Use Framer Motion for:**
- Page enter/exit transitions
- Staggered text reveals
- Portfolio image hovers
- Scroll-triggered animations (sparingly)

**Use Lenis for:**
- Smooth scroll throughout site
- Parallax effects (subtle)

**Don't animate:**
- Every element on scroll (overdone)
- Navigation (keep it instant)
- Form interactions (keep them snappy)

### Reference Sites

Study these for inspiration (don't copy):
- **linear.app** - Smooth animations, dark theme
- **vercel.com** - Typography-led, confident whitespace
- **stripe.com** - Gradients and motion done right
- **figure8.be** - Your competitor, do better

---

## Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

### Optimizations

- Images: WebP format, lazy loading, srcset
- Fonts: Subset, preload, swap
- JavaScript: Minimal, code-split
- CSS: Purge unused Tailwind

---

## SEO Requirements

### Meta Tags (per page)

- Title: `{Page} | SwiftBuild - Strony internetowe, SEO, Google Ads`
- Description: Unique per page
- OG Image: Custom per page or default
- Canonical URLs

### Structured Data

- LocalBusiness schema on homepage
- Organization schema
- BreadcrumbList on inner pages

### Technical SEO

- XML Sitemap
- robots.txt
- Proper heading hierarchy (single H1)
- Alt text on all images
- Internal linking

---

## Implementation Plan

### Week 1: Foundation + Core Pages

**Days 1-2:**
- [ ] Initialize Next.js project
- [ ] Set up Tailwind + Shadcn/UI
- [ ] Configure next-intl for i18n
- [ ] Create dictionaries (pl.json, en.json)
- [ ] Build layout (header, footer, language switcher)

**Days 3-4:**
- [ ] Homepage: Hero section
- [ ] Homepage: Problem/Solution section
- [ ] Homepage: Services preview
- [ ] Homepage: Featured work (placeholder)
- [ ] Homepage: How it works
- [ ] Homepage: CTA banner

**Days 5-7:**
- [ ] Services page (`/uslugi`)
- [ ] Contact page with form
- [ ] Set up Resend for email
- [ ] Privacy policy page

### Week 2: Portfolio + Polish

**Days 8-9:**
- [ ] Portfolio index page
- [ ] Case study template
- [ ] Create 4 case studies (MDX)
- [ ] Gather screenshots

**Days 10-11:**
- [ ] About page
- [ ] Team photos
- [ ] Calendly integration

**Days 12-14:**
- [ ] SEO: Meta tags, sitemap, structured data
- [ ] Performance optimization
- [ ] Mobile testing
- [ ] Cross-browser testing
- [ ] Deploy to Vercel
- [ ] Connect domain

---

## Content Checklist

### Required Before Launch

**Copy:**
- [ ] All Polish copy finalized
- [ ] All English copy translated
- [ ] Privacy policy (PL + EN)

**Images & Video:**
- [ ] **Hero video loop** - Screen recording of Celtic + DeluxDeco sites being scrolled (CRITICAL)
- [ ] 4 portfolio cover images (16:10 aspect ratio, high quality)
- [ ] 3-5 screenshots per case study
- [ ] Karol's headshot (friendly, not corporate)
- [ ] Wouter's headshot (optional)
- [ ] Logo/wordmark (simple text logo is fine for v1)

**Contact & Accounts:**
- [ ] Karol's email (karol@swiftbuild.services)
- [ ] Karol's phone number
- [ ] Calendly account set up
- [ ] Resend account for contact form emails
- [ ] Vercel account
- [ ] Domain (swiftbuild.services) registered and DNS ready

---

## Out of Scope for v1

- Blog
- Pricing page (keep it in Services)
- Client testimonials (add when you have them)
- Multi-language beyond PL/EN
- CRM integration (just email for now)
- Chat widget

---

## Success Criteria

| Metric | Target |
|--------|--------|
| Site live | Within 2 weeks |
| Lighthouse scores | 90+ all categories |
| First lead via form | Within 30 days of launch |
| Karol approves design | Before launch |

---

*Document Version: 1.0*
*Last Updated: January 2026*
*Status: Ready for Development*
