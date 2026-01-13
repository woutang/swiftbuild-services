# SwiftBuild.services

## What This Is
Multi-page bilingual agency website for SwiftBuild (Wouter + Karol). Polish SMBs are the target.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: TailwindCSS + Shadcn/UI
- **i18n**: next-intl
- **Content**: MDX for case studies
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Hosting**: Vercel
- **Package Manager**: npm

## Commands
```bash
npm run dev        # Dev server on :3000
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

## Key Files
```
src/app/[locale]/page.tsx              # Homepage
src/app/[locale]/uslugi/page.tsx       # Services
src/app/[locale]/realizacje/page.tsx   # Portfolio index
src/app/[locale]/realizacje/[slug]/    # Case studies
src/app/[locale]/o-nas/page.tsx        # About
src/app/[locale]/kontakt/page.tsx      # Contact
src/dictionaries/pl.json               # Polish copy
src/dictionaries/en.json               # English copy
src/content/cases/*.mdx                # Case study content
```

## Code Rules
- `type` over `interface`
- No `enum` → use union types
- No `any` → use `unknown` and narrow
- All copy in dictionaries, not hardcoded
- Components are reusable, copy comes from props/i18n

## Component Pattern
```tsx
type Props = {
  dictionary: Dictionary;
};

export function Hero({ dictionary }: Props) {
  return (
    <section>
      <h1>{dictionary.hero.headline}</h1>
    </section>
  );
}
```

## i18n Pattern
```tsx
// In page.tsx
import { getDictionary } from '@/lib/i18n';

export default async function Page({ params }: { params: { locale: string } }) {
  const dict = await getDictionary(params.locale);
  return <Hero dictionary={dict} />;
}
```

## The 4 Case Studies
| Slug | Client | Priority |
|------|--------|----------|
| celtic | Celtic Self Storage | Featured |
| deluxdeco | DeluxDeco | Featured |
| letra | Letra.pl | Normal |
| common-thread | Common Thread (carpets) | Normal |

## Don't Do
- ❌ Hardcoded Polish/English strings (use dictionaries)
- ❌ Stock photos
- ❌ Generic Inter font (use Clash Display or Cabinet Grotesk)
- ❌ Everything fades in on scroll (pick key moments)
- ❌ Blog, pricing page, testimonials (out of scope for v1)
- ❌ Safe, boring design (this is our portfolio piece #1)

---

## CRITICAL: Premium Design

**READ `.claude/skills/premium-design/SKILL.md` FIRST**

This website is SwiftBuild's calling card. If it looks like a template, clients will assume our work is template-quality.

**Must have:**
- Oversized, bold typography (Clash Display)
- Video loop in hero showing real work
- Smooth scroll (Lenis)
- Page transitions (Framer Motion)
- Portfolio hover effects (clip-path, custom cursor)
- Real photo of Karol (not stock)

**Must avoid:**
- Generic layouts (perfect 3-column grids)
- Fade-in-on-scroll everything
- Safe color choices (beige, generic blue)
- Stock photos or AI-generated images
- Looking like every other agency site

---

## PLAN FIRST (Important!)

Before writing ANY code, always:

1. **State what you're about to build** in plain English
2. **List the files you'll create/modify**
3. **Identify edge cases** (empty state, errors, missing images)
4. **Wait for confirmation** if the task is complex

---

## Self-Review (Before Completing ANY Task)

Before marking any task complete, review your own code:

1. **i18n**: Is all user-facing text from dictionaries? Both PL and EN?
2. **Accessibility**: Proper headings, alt text, keyboard nav, focus states?
3. **Responsive**: Works on mobile (390px)?
4. **Performance**: Images optimized? No unnecessary JS?
5. **SEO**: Meta tags, heading hierarchy, structured data?

If you find issues, **fix them before presenting the code**.

---

## Available Agents

- **code-reviewer**: Security, bugs, types, performance (`/review`)
- **ui-ux-reviewer**: Accessibility, UX, visual consistency (`/ux-review`)
- **code-simplifier**: Dead code, duplication, complexity (`/simplify`)
- **test-writer**: Comprehensive tests (`/test [component]`)

---

## Slash Commands

- `/review` - Critical code review before commit
- `/ux-review` - UI/UX and accessibility review
- `/simplify` - Clean up working code
- `/test [name]` - Write tests for a component
- `/verify` - Run typecheck, lint, build
- `/commit-push-pr` - Stage, commit, push with PR summary
