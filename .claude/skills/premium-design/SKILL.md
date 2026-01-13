# Premium Agency Website Design Skill

## The Problem with AI-Generated Sites

Most AI-built sites look the same:
- Generic hero with gradient background
- Perfectly aligned 3-column grids
- Stock-photo aesthetic
- Safe, boring color palettes
- No personality, no memorable moments

**This is death for an agency website.** If your site looks like a template, clients assume your work will too.

---

## Design Philosophy

### 1. Create Moments, Not Just Sections

Every scroll should reveal something unexpected. Not chaos—intentional surprises.

**Bad:** Hero → Services Grid → Portfolio Grid → Contact Form
**Good:** Hero with bold statement → Unexpected layout shift → Portfolio that draws you in → Personal touch in contact

### 2. Break the Grid (Intentionally)

Perfectly aligned everything = boring. Strategic asymmetry = interesting.

```
BORING:                          INTERESTING:
┌─────┬─────┬─────┐              ┌─────────────┬─────┐
│     │     │     │              │             │     │
├─────┼─────┼─────┤              │   LARGE     │     │
│     │     │     │              │   IMAGE     ├─────┤
├─────┼─────┼─────┤              │             │     │
│     │     │     │              └─────┬───────┴─────┤
└─────┴─────┴─────┘                    │  OFFSET     │
                                       │  TEXT       │
                                       └─────────────┘
```

### 3. Typography is Your Secret Weapon

One bold typeface choice does more than any animation.

**Forgettable:** Inter 48px bold
**Memorable:** Clash Display 72px, mixed weights, intentional kerning

**Techniques:**
- Mix serif + sans-serif purposefully
- Use extreme size contrast (72px headline, 14px caption)
- Letter-spacing on small caps
- One word in a different weight/color

### 4. Motion with Purpose

Don't animate everything. Animate what matters.

**Skip:** Fade-in on scroll for every element (everyone does this)
**Do:** 
- Magnetic cursor on buttons
- Image reveal on hover (clip-path)
- Text that responds to scroll position
- Page transitions between routes

### 5. Color Confidence

Beige and safe blue = forgettable. Make a choice and commit.

**Options:**
- Near-black background + one electric accent
- All white + typography-only (hard to pull off, bold when done right)
- Unexpected combination (dark green + cream, rust + navy)

---

## Specific Techniques

### Hero Section

**Don't:** Generic headline centered on gradient

**Do:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  STRONA,                                                    │
│  SEO I REKLAMY.            ┌─────────────────┐             │
│                            │                 │             │
│  Jedna firma,              │  [VIDEO LOOP    │             │
│  jeden cel.                │   OF YOUR WORK] │             │
│                            │                 │             │
│                            └─────────────────┘             │
│                                                             │
│  ↓ scroll                                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Techniques:**
- Split layout (text left, media right)
- Video loop showing your actual work (not stock)
- Oversized typography that bleeds off screen
- Animated arrow or scroll indicator
- Reveal animation on load (not fade—something interesting)

### Portfolio Section

**Don't:** Grid of equal-sized thumbnails

**Do:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────────────────┐                         │
│  │                               │     Celtic Self Storage  │
│  │      FEATURED PROJECT         │     ──────────────────  │
│  │         (LARGE)               │     Self-storage z 6    │
│  │                               │     lokalizacjami       │
│  │                               │                         │
│  └───────────────────────────────┘     [View Project →]    │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   DeluxDeco │  │    Letra    │  │   Common    │        │
│  │             │  │             │  │   Thread    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Techniques:**
- One large featured project, others smaller
- Hover: image scales slightly, overlay appears
- Hover: cursor changes to custom "View" circle
- Click: smooth page transition (not hard reload feel)
- Parallax on scroll (subtle, not nauseating)

### Case Study Pages

**Don't:** Wall of text + screenshots

**Do:**
- Full-bleed hero image
- Stats/results in oversized typography
- Before/after slider (if applicable)
- Device mockups (laptop, phone) with real screenshots
- Horizontal scroll gallery for multiple images
- "Next project" teaser at bottom

### Contact Section

**Don't:** Generic form centered on page

**Do:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Porozmawiajmy.                                             │
│                                                             │
│  ┌──────────────────────┐    ┌────────────────────────┐    │
│  │                      │    │                        │    │
│  │  [KAROL'S PHOTO      │    │  Imię _______________  │    │
│  │   LARGE, FRIENDLY,   │    │  Email ______________  │    │
│  │   NOT CORPORATE]     │    │  Wiadomość            │    │
│  │                      │    │  ____________________  │    │
│  │                      │    │  ____________________  │    │
│  │  Karol Kowalski      │    │                        │    │
│  │  karol@swiftbuild... │    │  [Wyślij]              │    │
│  │  +48 XXX XXX XXX     │    │                        │    │
│  │                      │    │                        │    │
│  └──────────────────────┘    └────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Techniques:**
- Real photo of Karol (not stock, not AI)
- Photo should feel approachable, not corporate
- Form fields with smooth focus animations
- Submit button with loading state
- Success message with personality ("Dzięki! Odezwiemy się szybciej niż myślisz.")

---

## Technical Implementation

### Fonts That Stand Out

**Free options that don't look free:**
- **Clash Display** (fontshare.com) - Bold, modern
- **Satoshi** (fontshare.com) - Clean, geometric
- **Cabinet Grotesk** (fontshare.com) - Distinctive
- **Space Grotesk** (Google) - Techy but warm

**Pairing example:**
```css
--font-heading: 'Clash Display', sans-serif;
--font-body: 'Satoshi', sans-serif;
```

### Animations with Framer Motion

```tsx
// Page transition
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>

// Magnetic button effect
const magneticRef = useRef(null);
// Track mouse position relative to button
// Apply transform based on proximity
```

### Smooth Scroll with Lenis

```bash
npm install @studio-freight/lenis
```

```tsx
// Smooth scroll that feels premium
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);
```

### Image Reveal Effect

```tsx
// Clip-path reveal on scroll
<motion.div
  style={{
    clipPath: useTransform(
      scrollYProgress,
      [0, 1],
      ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']
    )
  }}
>
  <Image ... />
</motion.div>
```

### Custom Cursor

```tsx
// Cursor that changes on interactive elements
const [cursorVariant, setCursorVariant] = useState('default');

<motion.div
  className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50"
  animate={cursorVariant}
  variants={{
    default: { scale: 1 },
    hover: { scale: 3, mixBlendMode: 'difference' },
    view: { scale: 4, /* show "View" text */ }
  }}
/>
```

---

## Reference Sites for Inspiration

Study these (don't copy):

1. **figure8.be** - Clean, professional, good case studies
2. **linear.app** - Smooth animations, dark theme done right
3. **stripe.com** - Gradients and motion that don't feel gimmicky
4. **vercel.com** - Typography-led, confident whitespace
5. **apple.com** - Scroll-based storytelling
6. **awwwards.com** - Search "agency portfolio" for cutting edge

**What to steal:**
- Timing and easing of animations
- Typography scale and contrast
- How they handle transitions
- Confidence in whitespace

**What NOT to steal:**
- Exact layouts (will look copied)
- Overly complex interactions (hard to maintain)
- Dark mode if it doesn't fit your brand

---

## SwiftBuild-Specific Recommendations

### Color Palette
```css
/* Option A: Dark + Electric */
--background: #0a0a0a;
--foreground: #fafafa;
--accent: #3b82f6;      /* Electric blue */
--muted: #71717a;

/* Option B: Light + Bold */
--background: #fafafa;
--foreground: #0a0a0a;
--accent: #16a34a;      /* Confident green */
--muted: #a1a1aa;
```

### Typography Scale
```css
--text-hero: clamp(3rem, 8vw, 6rem);    /* 48-96px */
--text-h1: clamp(2rem, 5vw, 3.5rem);    /* 32-56px */
--text-h2: clamp(1.5rem, 3vw, 2rem);    /* 24-32px */
--text-body: 1.125rem;                   /* 18px */
--text-small: 0.875rem;                  /* 14px */
```

### Must-Have Moments

1. **Hero video loop** - Show Celtic, DeluxDeco sites in action
2. **Portfolio hover** - Image zoom + custom cursor
3. **Smooth page transitions** - Between all routes
4. **Contact photo** - Real Karol, not corporate
5. **Scroll progress** - Subtle indicator

---

## Checklist Before Launch

### Visual Impact
- [ ] Does the hero make you stop scrolling?
- [ ] Is there at least one "wow" moment per page?
- [ ] Does it look different from template sites?
- [ ] Would you be proud to show this to a potential client?

### Technical Polish
- [ ] Animations are smooth (60fps)
- [ ] No layout shift during load
- [ ] Works perfectly on mobile
- [ ] Fast load time despite animations

### Brand Alignment
- [ ] Typography feels intentional, not default
- [ ] Colors are confident, not safe
- [ ] Photos are real, not stock
- [ ] Copy has personality

---

## Common Mistakes to Avoid

1. **Animating everything** - Pick 3-4 key moments, do them well
2. **Slow load for "wow"** - Performance matters more than effects
3. **Dark mode because it's cool** - Only if it fits your brand
4. **Copying Awwwards sites exactly** - Inspired by ≠ copied from
5. **Complex interactions that break** - Simple and polished beats complex and buggy
6. **Forgetting mobile** - 60%+ of traffic, can't be an afterthought

---

## Final Note

Your agency website is your best case study. If it doesn't impress, why would anyone hire you to impress their customers?

Spend extra time here. This isn't a client project with a budget—this is your calling card.
