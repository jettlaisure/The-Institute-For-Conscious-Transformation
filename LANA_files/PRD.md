# Product Requirements Document
## Institute for Conscious Transformation — Website

**Project codename:** LANA
**Document version:** 1.0
**Date:** April 28, 2026
**Owner:** Jett Laisure
**Implementer:** Claude Code

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Success Criteria](#2-goals--success-criteria)
3. [Target Audience](#3-target-audience)
4. [Brand Identity](#4-brand-identity)
5. [Design System](#5-design-system)
6. [Information Architecture](#6-information-architecture)
7. [Page-by-Page Specifications](#7-page-by-page-specifications)
8. [Global Components](#8-global-components)
9. [Technical Requirements](#9-technical-requirements)
10. [Forms & Integrations](#10-forms--integrations)
11. [Asset Inventory](#11-asset-inventory)
12. [Build Order & Acceptance Criteria](#12-build-order--acceptance-criteria)
13. [Out of Scope](#13-out-of-scope)

---

## 1. Project Overview

### 1.1 What we're building

A polished, production-ready marketing website for the **Institute for Conscious Transformation** — a thought-leadership organization founded by **Svetlana Bolotina** that bridges developmental psychology, somatic intelligence, identity evolution, and integrative transformation.

The site is the public face of the Institute. It is not a course platform, a learning management system, or an e-commerce store. Its job is to:

- Communicate the Institute's philosophy and credibility
- Introduce the founder and her work
- Surface current programs and the upcoming book *Ending with Awareness*
- Capture leads (interest list, contact form, newsletter, affiliate inquiries, speaking inquiries)
- Establish a quiet, premium, intellectually serious tone

### 1.2 Tone & feel — non-negotiable

The website must feel like the **published edition of a thoughtful book**, not a wellness funnel and not a SaaS landing page. Specifically:

- **Quiet confidence over enthusiasm.** No exclamation points, no "Transform your life today!" copy, no "What's included" bullet stacks.
- **Editorial typography.** Generous line height, wide measure, serif headlines that breathe.
- **Restrained motion.** Subtle fades and slow reveals on scroll. No bouncing, no parallax theatrics.
- **Plenty of whitespace.** Sections breathe. Type breathes. Hero images breathe.
- **No stock-photo-overload.** Each image is chosen deliberately and given room.

If a design choice makes the site feel busier, louder, or more commercial, it is wrong for this project.

### 1.3 Reference comparisons

For aesthetic and structural reference, the closest comparable sites are:
- **The School of Life** (theschooloflife.com) — for editorial restraint
- **Esalen Institute** (esalen.org) — for institutional weight
- **Aeon** (aeon.co) — for typographic discipline

The site should feel intellectually adjacent to these — never imitative, but in the same family.

---

## 2. Goals & Success Criteria

### 2.1 Primary goals

| Goal | Measurable criterion |
|---|---|
| Communicate Institute credibility | A visitor unfamiliar with the brand can articulate, after 60 seconds on the homepage, what the Institute does and who it is for. |
| Introduce the founder | Svetlana's bio, credentials, and approach are clear within one click of any page. |
| Capture book interest | The *Ending with Awareness* interest list is visible from the homepage and book page, with a frictionless email capture. |
| Capture inquiries | Speaking, affiliate, and general inquiries route through working forms with email confirmation. |
| Build mailing list | Newsletter signup is present in the global footer on every page. |

### 2.2 Non-goals

- Not a paid course platform
- Not a community/forum
- Not multilingual (English only for v1)
- Not a blog with frequent posts (a future Articles page is allowed but not required for launch)

---

## 3. Target Audience

The site speaks to **three distinct audiences** simultaneously. Copy and structure must serve all three without alienating any.

### 3.1 Primary — Individuals in transition

People navigating relationship endings, identity shifts, or pivotal life transitions. They are educated, introspective, often in their 30s–60s, and looking for depth rather than quick fixes. They distrust wellness clichés.

**They want to know:** Is this serious work? Can I trust this person? Will this help me understand what I'm going through?

### 3.2 Secondary — Practitioners

Coaches, therapists, hypnotherapists, and developmental practitioners looking for frameworks, referrals, or affiliate relationships.

**They want to know:** What's the lineage and methodology? Can I refer clients here? Is there an affiliate path?

### 3.3 Tertiary — Scholars & researchers

Academics and graduate students working in developmental psychology, integral theory, or postconventional development.

**They want to know:** What's the research basis? Who is Svetlana academically? Is this rigorous?

---

## 4. Brand Identity

### 4.1 Brand name

**Institute for Conscious Transformation**
Tagline: *Evolve · Heal · Thrive*

(The internal codename "LANA" is for the project repo only and should not appear anywhere on the site.)

### 4.2 Logo system

The Institute uses a **paired logo system**: an icon mark + a wordmark. Claude Code should pair them together.

**Icon mark** (provided in `assets/logos/`):
- `icon-mark-option-1.png` — hand holding flame, circular ring, **default for header use**
- `icon-mark-option-2.png` — hand holding flame, alternate composition, available as fallback

The icon mark depicts an open hand holding a flame inside a circular crescent — symbolizing offered light, conscious awareness, and the cyclical/evolving nature of transformation.

**Wordmark** (provided in `assets/logos/`):
- `wordmark-with-tagline.png` — "Institute *for* Conscious Transformation" stacked, with "*Evolve · Heal · Thrive*" tagline beneath in muted gold. **Default for footer and About pages.**
- `wordmark-stacked.png` — same wordmark without tagline, two lines
- `wordmark-horizontal.png` — single-line horizontal version, for narrow header use on desktop

### 4.3 Logo usage rules

| Context | Use |
|---|---|
| Desktop header (top-left) | Icon mark (option 1) + horizontal wordmark to its right, locked-up |
| Mobile header | Icon mark only |
| Footer | Wordmark with tagline, centered |
| Favicon | Icon mark cropped tight |
| Social share image | Icon mark + stacked wordmark on cream background |
| Loading/splash | Icon mark, animated subtle fade-in |

**Clear space:** Maintain padding equal to half the height of the icon mark on all sides. Never crop the circular crescent.

**Don'ts:** Do not recolor. Do not place on busy photographs without a tint overlay. Do not stretch.

### 4.4 Color palette

Primary palette (verbatim from brand guidance):

| Name | Hex | Use |
|---|---|---|
| **Deep Slate Blue** | `#1F2E3D` | Primary text, headlines, navigation, primary buttons |
| **Muted Warm Gold** | `#C9A86A` | Accents, italicized scholarly emphasis, button hovers, dividers, link underlines |

Extended palette (derived — required for production UI):

| Name | Hex | Use |
|---|---|---|
| Cream / Warm White | `#FAF7F2` | Default page background |
| Pure White | `#FFFFFF` | Card backgrounds, form fields |
| Soft Blue Tint | `#E8EDF2` | Section background alternation |
| Slate 80% | `#3D4D5E` | Body copy when on cream |
| Slate 60% | `#6B7785` | Captions, metadata, secondary text |
| Slate 30% | `#C5CCD3` | Hairline rules, disabled states |
| Gold Hover | `#B8965A` | Gold button hover state |
| Error Red | `#A6453F` | Form validation only — used sparingly |

**Color rules:**
- Body text on cream: Slate 80%, never pure black.
- Headlines: Deep Slate Blue.
- Gold is for emphasis, not for body text or large surfaces. Treat it like gold leaf — used in small amounts to elevate.
- No gradients except optional 8% slate-blue overlay on hero images for text legibility.

### 4.5 Typography

**Per brand guidance:** the entire site uses a **classical serif** in the family of Garamond / Cormorant Garamond.

**Implementation:**
- **Display & headings:** `Cormorant Garamond` (Google Fonts, weights 400, 500, 600 italic)
- **Body & UI:** `EB Garamond` (Google Fonts, weights 400, 500, 600, italic)

`EB Garamond` is used for body copy because it is optimized for screen reading at small sizes; `Cormorant Garamond` is reserved for display sizes (32px+) where its elegance is most visible.

**No sans-serif fallback in the brand.** UI elements (buttons, form labels, nav) also use `EB Garamond` 500 weight, slightly tracked-out for legibility. Per brand guidance, the entire site is serif.

Type scale (rem, base 16px):

| Token | Size | Line height | Weight | Usage |
|---|---|---|---|---|
| `display-1` | 4.5rem (72px) | 1.05 | 500 | Hero headlines, desktop |
| `display-2` | 3.5rem (56px) | 1.1 | 500 | Section openers, desktop |
| `h1` | 2.75rem (44px) | 1.15 | 500 | Page titles |
| `h2` | 2.125rem (34px) | 1.2 | 500 | Section headings |
| `h3` | 1.5rem (24px) | 1.3 | 500 | Subsections |
| `h4` | 1.25rem (20px) | 1.4 | 600 | Card titles |
| `body-lg` | 1.25rem (20px) | 1.7 | 400 | Lead paragraphs, hero sublines |
| `body` | 1.0625rem (17px) | 1.7 | 400 | Default body |
| `body-sm` | 0.9375rem (15px) | 1.6 | 400 | Captions, metadata |
| `eyebrow` | 0.8125rem (13px) | 1.4 | 500 | All-caps preamble labels, tracked +0.1em |

**Mobile scale:** All display and h1/h2 sizes scale down approximately 65% on viewports ≤ 768px (e.g., display-1 becomes ~46px). Use `clamp()` in CSS for fluid typography.

**Italic usage:** Reserved for emphasis on key concepts ("*initiations*", "*Conscious Development Advisor*"), book titles, and the tagline. Italics are part of the editorial voice — use them as the source documents do.

**Em dashes:** Use real em dashes (`—`), not double hyphens. The source copy uses them heavily and they are part of the voice.

### 4.6 Voice & copy rules

- **No emojis.** Anywhere.
- **No exclamation points.** Conviction comes from clarity, not punctuation.
- **Sentence-case headlines.** Not Title Case.
- **Em dashes welcome.** Already part of the voice.
- **"You" is allowed**, but sparingly. The default register is reflective, not confrontational.
- **First-person plural ("we," "our")** when speaking from the Institute.
- **Long sentences are okay.** This is editorial copy, not marketing copy. Don't truncate ideas to fit a punchy rhythm.

---

## 5. Design System

### 5.1 Layout grid

- **Max content width:** 1200px (centered)
- **Reading column max width:** 680px (for body prose — never wider)
- **Wide section width:** 1080px (for cards, image grids)
- **Gutters:** 32px desktop, 20px tablet, 16px mobile
- **Vertical rhythm:** Section padding `py-24` desktop (96px top/bottom), `py-16` mobile (64px)
- **Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`

### 5.2 Spacing scale

Use Tailwind defaults (4px base). Common patterns:
- Between paragraphs: `mb-6` (24px)
- Between subsections within a section: `mb-16` (64px)
- Between major sections: built-in via `py-24`
- Card internal padding: `p-8` (32px) desktop, `p-6` (24px) mobile

### 5.3 Buttons

**Primary button**
- Background: Deep Slate Blue `#1F2E3D`
- Text: Cream `#FAF7F2`, EB Garamond 500, 16px, tracked +0.02em
- Padding: `py-4 px-8` (16px / 32px)
- Border radius: `rounded-none` (zero — sharp rectangles, editorial feel)
- Hover: background shifts to `#2A3D50`, gold underline animates in below text
- Transition: 250ms ease-out

**Secondary (ghost) button**
- Border: 1px Deep Slate Blue
- Background: transparent
- Text: Deep Slate Blue
- Hover: background fills to Deep Slate Blue, text inverts to cream

**Tertiary (text link)**
- Deep Slate Blue text
- Gold underline (`#C9A86A`), 1px, offset 4px below baseline
- Hover: underline thickens to 2px

**Do not use rounded buttons, gradient buttons, or shadow effects on buttons.** Sharp corners and flat colors only.

### 5.4 Cards

- Background: Pure White `#FFFFFF`
- Border: none, OR 1px Slate 30% hairline if needed for separation
- Shadow: very subtle — `0 1px 2px rgba(31, 46, 61, 0.04), 0 4px 12px rgba(31, 46, 61, 0.04)`. Almost invisible. Just enough to lift off cream.
- Border radius: `rounded-none`
- Padding: 32px desktop / 24px mobile
- Hover (when interactive): shadow deepens slightly, no transform, no scale

### 5.5 Form fields

- Background: Pure White
- Border: 1px Slate 30%, becomes Deep Slate Blue on focus (no glow, no ring)
- Padding: 16px vertical, 16px horizontal
- Font: EB Garamond 400, 17px
- Label: above field, eyebrow style (uppercase, tracked, 13px, slate 60%)
- Border radius: `rounded-none`
- Error state: 1px border Error Red, message below in Error Red 14px italic

### 5.6 Imagery treatment

- **Aspect ratios:** Hero images 16:9 or wider. Portraits 4:5. Cards 3:2. Be consistent within a page.
- **Tinting:** Hero images get an optional 8–15% Deep Slate Blue overlay if text sits on top, applied as a `::after` pseudo-element so the image stays sharp.
- **Corners:** Sharp. No `border-radius` on imagery.
- **Captions:** Slate 60%, body-sm italic, left-aligned beneath the image with 12px top margin.

### 5.7 Motion

- **Page transitions:** Fade only, 300ms.
- **Scroll reveals:** Fade-in + 12px upward translate over 500ms, triggered when element is 20% into viewport. Use `IntersectionObserver`.
- **No parallax.** No scroll-jacking. No marquee scrollers.
- **Hover states:** 250ms ease-out for color changes. No transforms on cards or images.
- **Honor `prefers-reduced-motion`:** Disable all reveal animations and reduce transition durations to 0ms when set.

### 5.8 Accessibility

- WCAG 2.1 AA minimum.
- All text contrast ratios checked (Slate Blue on cream = 12:1 ✓, gold on cream = 3.4:1 — gold is ONLY decorative or used at 18px+ bold).
- Focus states visible on all interactive elements: 2px Gold outline, 2px offset.
- All images have meaningful `alt` text (specs in section 11).
- Forms have proper `<label>` associations.
- Skip-to-content link at top of every page.
- Semantic HTML: proper heading hierarchy, `<main>`, `<nav>`, `<article>`, `<section>` used correctly.

---

## 6. Information Architecture

### 6.1 Sitemap

```
/                          Home
/about-the-institute       About the Institute
/about-the-founder         About the Founder
/programs                  Programs & Offerings
/book                      Ending with Awareness (book page)
/community                 Community, Affiliates & Resources
/contact                   Contact
```

Plus a global footer with newsletter signup that lives on every page.

### 6.2 Primary navigation (header)

Order, left to right:

1. **Home** (also the logo, top-left, returns to /)
2. **The Institute** → `/about-the-institute`
3. **Founder** → `/about-the-founder`
4. **Programs** → `/programs`
5. **The Book** → `/book`
6. **Community** → `/community`
7. **Contact** → `/contact` *(rendered as a small ghost button, visually distinct)*

### 6.3 Footer columns

Three columns + newsletter row:

- **Column 1 — The Institute:** About / Founder / Values / Vision
- **Column 2 — Engage:** Programs / The Book / Community / Affiliate Inquiry
- **Column 3 — Contact:** Email / Speaking / Press
- **Newsletter row** (full width, above copyright): "Join the Institute mailing list — receive reflections on conscious development, occasional updates on programs, and early access to *Ending with Awareness*." Email input + Subscribe button.

Bottom row: Wordmark (centered) + © 2026 Institute for Conscious Transformation. Privacy. Terms.

---

## 7. Page-by-Page Specifications

> **Note on copy:** All copy below should be used **verbatim** from the source documents unless explicitly marked `[ADAPTED]` or `[NEW]`. The founder has written this copy carefully and changes risk shifting tone.

---

### 7.1 Home Page (`/`)

**Purpose:** Establish tone, communicate the Institute's purpose, route visitors to the three primary destinations (Institute, Founder, Book).

#### Section 1 — Hero

- **Background image:** `assets/images/home-hero-light-water.jpeg` — soft luminous water/sky. Full viewport width, 85vh tall on desktop, 70vh on mobile.
- **Overlay:** 12% Deep Slate Blue gradient from bottom (`linear-gradient(to top, rgba(31,46,61,0.18), rgba(31,46,61,0.04))`) for text legibility.
- **Eyebrow** (centered, gold, eyebrow style): `INSTITUTE FOR CONSCIOUS TRANSFORMATION`
- **Headline** (centered, display-1, white): **Where consciousness meets development.**
- **Subline** (centered, body-lg, white at 90% opacity, max-width 640px): A grounded, integrative pathway through life's most pivotal transitions — bridging developmental psychology, somatic intelligence, and conscious evolution.
- **CTA row** (centered, two buttons side by side):
  - Primary button: **Explore the Institute** → `/about-the-institute`
  - Secondary (ghost, white border + white text): **Meet the Founder** → `/about-the-founder`
- **Scroll indicator:** Subtle gold downward chevron at bottom, gentle vertical bob animation (~2.5s loop).

#### Section 2 — Introduction (cream background)

Two-column layout on desktop (collapses to stacked on mobile).

- **Left column** (5/12): Eyebrow `OUR WORK`, h2 headline: **A new paradigm of human development.**
- **Right column** (7/12): Body prose [VERBATIM from About the Institute, opening]:

> The Institute for Conscious Transformation exists to guide individuals and leaders into the deeper reaches of their human potential — cultivating psychological wellbeing, emotional regulation, somatic coherence, and a direct understanding of their true nature.
>
> In contemporary society, most people plateau at conventional levels of development, unaware that many further expansions of consciousness remain dormant yet fully accessible through intentional, sustained, and skillfully guided practice.

Below: text link **Read about the Institute →** with gold underline.

#### Section 3 — Three pillars (alternating soft blue tint background)

A horizontal three-card row showing the three core entry points to the Institute.

Each card: image at top (3:2 ratio), eyebrow, h3 title, 2–3 sentence description, "Learn more →" gold-underlined link at bottom. Cards have very subtle shadow per design system.

| Card | Image | Eyebrow | Title | Body |
|---|---|---|---|---|
| 1 | `staircase-curve.png` | THE INSTITUTE | The architecture of transformation | An integrative approach uniting developmental psychology, somatic intelligence, and contemplative wisdom. |
| 2 | `founder-svetlana-portrait.jpeg` | THE FOUNDER | Svetlana Bolotina | Scholar-practitioner, Conscious Development Advisor, and PhD researcher exploring the architecture of identity. |
| 3 | `book-page-rays.png` | THE BOOK | Ending with Awareness | A guide to navigating endings, identity shifts, and the emergence of your next self. *Forthcoming.* |

Card links route to `/about-the-institute`, `/about-the-founder`, and `/book` respectively.

#### Section 4 — Featured book teaser (cream background, full-width image-left layout)

Two-column desktop layout, image left (5/12), text right (7/12). Vertically centered.

- **Image:** `book-page-rays.png` (open book with light rays — already brand-toned)
- **Eyebrow:** `FORTHCOMING BOOK`
- **Headline (h1):** *Ending with Awareness*
- **Subline (body-lg italic):** A book for anyone navigating endings, identity shifts, and the emergence of their next self.
- **Body prose** [ADAPTED — first paragraph from book page]:

> *Ending with Awareness* is the foundational book of the Institute for Conscious Transformation — the starting point for anyone moving through the emotional and psychological upheaval of a relationship ending. It reframes endings as initiations: not as loss, but as the threshold of identity evolution.

- **CTA buttons** (row):
  - Primary: **Join the interest list** → opens modal or scrolls to interest form
  - Secondary: **Read more about the book** → `/book`

#### Section 5 — Quote / value pull (soft blue tint)

Single centered quotation block, max-width 720px.

- **Eyebrow:** `THE HEART OF OUR WORK` (centered, gold)
- **Pull quote** (display-2, slate blue, centered, italic):

> *Human beings are capable of far more depth, clarity, and wholeness than they realize.*

- **Attribution** (body-sm italic, slate 60%, centered, 24px top margin): — Svetlana Bolotina, Founder

#### Section 6 — Newsletter teaser (cream background)

Centered, single column, max-width 560px.

- **Headline (h2, centered):** Stay connected.
- **Body** (body, centered): Receive reflections on conscious development, occasional updates on programs, and early access to *Ending with Awareness*.
- **Form:** Inline email input + Subscribe button (primary). On submit, replace with confirmation message: *"Thank you. We'll be in touch."*

#### SEO meta — Home

- Title: `Institute for Conscious Transformation — Evolve, Heal, Thrive`
- Meta description: `A grounded, integrative pathway through life's most pivotal transitions. Bridging developmental psychology, somatic intelligence, and conscious evolution.`
- OG image: Hero image with logo + tagline overlay (provide as `assets/social/og-home.jpg` — Claude Code generates this from hero + wordmark)

---

### 7.2 About the Institute (`/about-the-institute`)

**Purpose:** Establish institutional credibility, articulate mission/values/vision in depth.

#### Section 1 — Hero (full-width image with overlay)

- **Background image:** `staircase-curve.png` — modernist white spiral staircase.
- **Overlay:** 15% Deep Slate Blue gradient.
- **Layout:** Text overlay, vertically centered, left-aligned within content max-width.
- **Eyebrow:** `THE INSTITUTE`
- **Headline (display-2, white):** The Architecture of Transformation — Where Identity Evolves Into Conscious Development.
- **Subline (body-lg, white 90%, max-width 640px):** The Institute for Conscious Transformation integrates developmental psychology, cognitive sciences, mindfulness, and embodied practice to cultivate inner coherence and authentic growth.

Hero is 70vh on desktop, 60vh on mobile.

#### Section 2 — Mission

Single-column reading layout, max-width 680px, centered, cream background.

- **Eyebrow** (centered): `MISSION`
- **Headline (h2, centered):** Advancing human development through integrative science, somatic intelligence, and conscious evolution.
- **Body prose** (left-aligned, body-lg for first para, body for rest) — **VERBATIM** from "Mission of the Institute for Conscious Transformation" section:

> The Institute for Conscious Transformation exists to guide individuals and leaders into the deeper reaches of their human potential — cultivating psychological wellbeing, emotional regulation, somatic coherence, and a direct understanding of their true nature.
>
> In contemporary society, most people plateau at conventional levels of development, unaware that many further expansions of consciousness remain dormant yet fully accessible through intentional, sustained, and skillfully guided practice. Our work illuminates these higher possibilities and supports the unfolding of the profound capabilities inherent in every human being.
>
> We integrate applied scientific research, psychology, neurophysiology, systems theory, and developmental science with the enduring wisdom of contemplative and spiritual traditions. This multi-theoretical, multi-practical approach allows us to address the whole human being — mind, body, and consciousness — while grounding transformation in both empirical rigor and lived experience.
>
> The founders of the Institute actively embody these principles. Their ongoing commitment to inner work demonstrates that human potential is vast, dynamic, and largely untapped — and that our deepest nature is one of peace, clarity, and equanimity with ourselves, others, and the world.
>
> We share this work not from ambition or obligation, but because it is the most natural expression of who we have become — and because when individuals awaken to their true nature, the world transforms with them.

#### Section 3 — Atmospheric image break

Full-width image, no text. Slight zoom-on-scroll allowed (max 1.05x over the section's scroll distance).

- **Image:** `water-ripples-gold.jpeg` — gold-on-blue water ripples. 480px tall desktop, 320px mobile.
- **Caption** (centered below, body-sm italic, slate 60%): *The pattern repeats, and the pattern evolves.*

#### Section 4 — Values (soft blue tint)

A two-column grid of values cards on desktop (collapses to single column mobile). Twelve values — six rows of two. Each value is a small card:

- **Eyebrow** (above section, centered): `VALUES FRAMEWORK`
- **Headline (h2, centered):** What we hold true.

For each value (use **VERBATIM** content from About the Institute "Values Framework"):

Card structure: bold value name in slate blue (h4, 20px), then a 1-line description (body, 17px) in slate 80%. Cards are flat (no shadow) on the soft blue tint background, separated by 1px slate 30% hairlines on three sides forming a quiet grid.

The twelve values:
1. **Lifelong Growth and Development** — Human development is continuous and multi-dimensional. Every person is capable of profound evolution.
2. **Radical Honesty and Inner Transparency** — Transformation begins with truth — meeting the unseen and uncomfortable with humility and courage.
3. **Personal Responsibility and Sovereignty** — Each individual is responsible for their thoughts, emotions, actions, and impact.
4. **Life as Practice** — Insight becomes real only when lived — in relationships, work, conflict, creativity, and choice.
5. **Embodied Presence and Regulation** — Grounded presence and emotional regulation are the foundations of conscious living.
6. **Compassionate Discipline** — Sustainable growth requires both rigor and gentleness.
7. **Integration of Science and Wisdom** — Transformation emerges from the union of empirical research and contemplative traditions.
8. **Humility and Openness to the Unknown** — No matter how far one develops, there is always more to discover.
9. **Integrity in Action** — Authenticity arises from coherence between knowing, speaking, and acting.
10. **Relational Responsibility and Conscious Connection** — Transformation is relational; we honor our impact on others.
11. **Service as Natural Expression** — As individuals grow, service emerges organically from inner alignment.
12. **Trust in Human Potential** — We hold a fundamental belief in the vast, untapped capacities within every human being.

#### Section 5 — Vision (cream background)

Reading-column layout, max-width 680px.

- **Eyebrow** (centered): `VISION`
- **Headline (h2, centered):** A world transformed through inner wholeness.
- **Body prose** — **VERBATIM** from "Vision of the Institute for Conscious Transformation" — formatted as six sub-sections, each with bold lede + paragraph:

> **A World Transformed Through Inner Wholeness.** We envision a world shaped by individuals and leaders who act from clarity, compassion, and grounded purpose.
>
> **Healing Fragmentation at Its Source.** The fractures in society mirror the fractures within the human psyche. Our work supports the restoration of inner coherence.
>
> **Wholeness as Catalyst for Collective Transformation.** When individuals reclaim their inner wholeness, they become stabilizing forces in families, organizations, and communities.
>
> **A New Paradigm of Human Development.** Human development is lifelong and multi-dimensional — encompassing emotional maturity, somatic intelligence, relational skill, and expanded awareness.
>
> **A Global Community of Conscious Leaders.** We aspire to cultivate leaders capable of holding multiple perspectives, bridging divides, and acting with integrity.
>
> **Wholeness as Our Natural State.** Beneath all fragmentation, human beings are inherently whole. Our work helps people remember this truth as a lived experience.

#### Section 6 — Closing CTA

Full-width band, soft blue tint background, padded `py-20`.

- **Headline (h2, centered):** Continue exploring.
- **CTA row** (centered, three text-link cards):
  - **Meet the Founder** → `/about-the-founder`
  - **Explore Programs** → `/programs`
  - **Read about the Book** → `/book`

#### SEO meta — About the Institute

- Title: `About the Institute — Institute for Conscious Transformation`
- Meta description: `Advancing human development through integrative science, somatic intelligence, and conscious evolution. Mission, values, and vision of the Institute for Conscious Transformation.`

---

### 7.3 About the Founder (`/about-the-founder`)

**Purpose:** Establish Svetlana's credibility, articulate her unique role as a *Conscious Development Advisor*, and humanize the Institute.

#### Section 1 — Hero (split layout, no overlay image)

A clean two-column hero — no background photograph here. The portrait carries the visual weight.

Desktop layout: text left (5/12), portrait right (5/12), 2-column gap. Cream background. Aligned to viewport center, ~80vh tall.

- **Left column:**
  - Eyebrow: `THE FOUNDER`
  - Headline (display-2): A developmental approach to identity, consciousness, and human evolution.
  - Subline (body-lg, slate 80%): Integrating developmental psychology, neuroscience, somatic intelligence, and awareness-based practice to help individuals and practitioners evolve with clarity, integrity, and depth.
  - Two CTA buttons (row):
    - Primary: **Read Svetlana's approach** → scrolls to Section 3
    - Secondary: **Speaking & collaboration** → `/contact?topic=speaking`

- **Right column:**
  - Image: `founder-svetlana-portrait.jpeg`
  - Aspect: 4:5 portrait, no rounding, soft 1px gold hairline frame at 4px offset (a thin gold line outside the image at small distance).
  - Caption beneath (body-sm italic, slate 60%, left-aligned): *Svetlana Bolotina — Founder, Author, Conscious Development Advisor.*

#### Section 2 — Micro-bio (cream, single column reading layout)

Max-width 680px. **VERBATIM** from Images doc "Micro-Bio":

> Svetlana is the founder of the Institute for Conscious Transformation, a developmental advisor, author, and PhD researcher exploring the architecture of identity, meaning-making, and post-conventional growth. Her work integrates developmental psychology, somatic intelligence, and awareness-based methods to guide people through the profound transitions that reshape who they are becoming.

#### Section 3 — Long-form biography

Reading-column layout, max-width 680px. Multiple subsections with h3 dividers. **VERBATIM** from About the Founder document:

**Subsection 3a — Opening**

> Svetlana Bolotina is the founder of the Institute for Conscious Transformation and a scholar-practitioner dedicated to understanding the deeper architecture of human potential. Her work bridges developmental psychology, somatic intelligence, identity evolution, and integrative transformation — offering a grounded, precise, and deeply human pathway through life's most pivotal transitions.
>
> She is currently completing her PhD at the California Institute for Human Science, where her research focuses on human potential and post-conventional stages of development. Her work explores how people make meaning, how identity reorganizes during rupture and transition, and how individuals evolve toward greater coherence and wholeness.
>
> Svetlana is also completing her certification in clinical hypnotherapy, specializing in the unconscious layers of identity — the beliefs, patterns, and protective structures that shape how individuals interpret their world and respond to their inner experience.

**Subsection 3b — h3: A Conscious Development Advisor**

Eyebrow above h3: `A NEW PARADIGM OF TRANSFORMATIVE SUPPORT`

> Svetlana does not identify as a coach or consultant. Her role as a *Conscious Development Advisor* represents a more integrative approach — one that brings together developmental psychology, somatic awareness, cognitive science, and unconscious pattern work into a coherent, personalized process.
>
> She helps individuals:

A bulleted list (using design system bullet style — small gold square `■` 4px, indented 24px):
- understand their developmental stage and meaning-making structure
- recognize how they interpret and assign meaning to their experiences
- navigate identity shifts and transitions
- integrate emotional, somatic, and cognitive patterns
- work with unconscious identity structures
- cultivate inner coherence and psychological wholeness
- respond to complexity with clarity and grounded presence

> Her advisory work is reflective, relational, and attuned — helping people access deeper layers of insight, stability, and self-knowledge.

**Subsection 3c — h3: An Integrative Scholar-Practitioner**

> Svetlana's work is grounded in Integral Theory and the Integral Life Practice model — comprehensive frameworks for understanding how human beings grow, evolve, and make meaning. She translates these models into accessible, embodied practices that support transformation across all dimensions of being: somatic, emotional, cognitive, relational, behavioral, and existential.
>
> Her approach is both developmental and deeply human. She helps individuals understand not only *what* they are experiencing, but *why* — and how to move through complexity with clarity, coherence, and grounded presence.
>
> Svetlana designs and facilitates integrative, experiential practices that guide transformation across the whole human system. Her work draws from developmental psychology, neuroscience and nervous system regulation, somatic and embodiment practices, NLP and cognitive-emotional patterning, attachment theory, narrative and identity reconstruction, shadow and parts work, and mindfulness-based methods.
>
> Her facilitation is grounded, relational, and experiential — helping individuals move from insight into embodiment, and from self-understanding into meaningful change.

**Subsection 3d — h3: A Life Lived Through Practice**

> Svetlana's authority comes not only from academic study, but from lived experience. She has used every framework and practice she teaches in her own evolution — through meaning-making crises, identity shifts, and complex transitions.
>
> She teaches what she has lived. Her work is not conceptual — it is embodied.

**Subsection 3e — h3: A Vision for a Global Community of Transformation**

> Through the Institute for Conscious Transformation, Svetlana is building a global community of:

Bulleted list:
- individuals navigating endings and identity evolution
- scholars studying development, psychology, and consciousness
- coaches, therapists, and practitioners in the transformation space

> This community is a field for depth, inquiry, and shared evolution — a place where people grow together, learn together, and support one another through life's most meaningful transitions.

#### Section 4 — Pull quote (soft blue tint)

Centered pull quote, full-width band.

- **Eyebrow:** `THE HEART OF HER WORK`
- **Quote (display-2, italic, slate blue, centered, max-width 800px):**

> *Human beings are capable of far more depth, clarity, and wholeness than they realize.*

- **Body** (body-lg, centered, max-width 680px, 32px top margin, slate 80%):

> Her mission is to help people access that potential — not by bypassing their pain, but by understanding it, integrating it, and allowing it to become the doorway into their most authentic, coherent, and liberated selves.

#### Section 5 — Engagement CTA

Full-width band, cream background. Three-column card row:

- **Card 1:** Eyebrow `WORK TOGETHER`, h4 *Conscious Development Advisory*, body: For individuals navigating identity transitions or post-conventional development. Link → `/contact?topic=advisory`
- **Card 2:** Eyebrow `INSTITUTE PROGRAMS`, h4 *Explore offerings*, body: Programs and integrative practices for ongoing development. Link → `/programs`
- **Card 3:** Eyebrow `SPEAKING & COLLABORATION`, h4 *Speaking inquiries*, body: For conferences, podcasts, retreats, and research collaboration. Link → `/contact?topic=speaking`

#### SEO meta — Founder

- Title: `Svetlana Bolotina — Founder, Conscious Development Advisor`
- Meta description: `Founder of the Institute for Conscious Transformation, scholar-practitioner, and author of the forthcoming Ending with Awareness.`

---

### 7.4 Programs & Offerings (`/programs`)

**Purpose:** Surface current offerings and signal forthcoming programs.

#### Section 1 — Hero

- **Background image:** `spiral-staircase-vatican.jpeg` — Vatican spiral staircase, warm tones.
- **Overlay:** 25% Deep Slate Blue (slightly heavier — image is busy).
- **Eyebrow:** `PROGRAMS & OFFERINGS`
- **Headline (display-2, white):** Programs for conscious development and identity evolution.
- **Subline (body-lg, white 90%, max-width 720px):** Guided pathways that integrate psychology, somatic intelligence, and awareness-based practice to support deep, lasting transformation.
- **Supporting line** (body, white 80%, italic, max-width 680px, 16px top margin): Each program is designed as a developmental journey — structured, experiential, and grounded in the architecture of human growth.

70vh hero, centered text.

#### Section 2 — Introduction

Reading-column, max-width 680px, cream. **VERBATIM** opening from Programs document:

> The Institute for Conscious Transformation supports individuals moving through profound psychological, emotional, and somatic shifts following relationship endings and other life-altering transitions. Our offerings provide a grounded, developmentally informed pathway for understanding patterns, regulating the nervous system, integrating shadow and protective parts, and embodying a more coherent, self-authored, and eventually self-transforming identity. Each program is part of a larger developmental ecosystem that helps individuals move from fragmentation into clarity, coherence, and inner wholeness.

#### Section 3 — Current offering: Identity Repatterning Pilot Study

Featured-program layout. Image-right, content-left split (7/12 + 5/12 desktop).

- **Image (right column):** `meditation-circle-window.jpeg` — meditation circle by window. Sharp corners.
- **Left column:**
  - Eyebrow (gold): `CURRENT PROGRAM · LIMITED ENROLLMENT`
  - Headline (h2): Identity Repatterning Pilot Study
  - Sub-headline (body-lg italic): A 6-week course — the Institute's first flagship program.
  - Body prose **VERBATIM**:

> This pilot study is a structured exploration of identity reorganization after major relationship endings. It is designed for individuals navigating destabilization, grief, complexity, and the emergence of a new self.

  - Sub-heading (h4): Participants explore:
  - Bulleted list (using design system bullets):
    - How identity reorganizes across multiple developmental stages, including post-self-authored capacities
    - Nervous system regulation during rupture
    - Attachment activation and emotional loops
    - Somatic grounding and emotional digestion
    - Shadow and parts integration
    - The formation of a more coherent, self-authored, and eventually self-transforming identity

  - Closing prose:

> This pilot is both a program and a research-informed study, helping refine the developmental frameworks that will shape future Institute offerings.

  - Primary CTA button: **Inquire about enrollment** → `/contact?topic=pilot-study`

#### Section 4 — Current offering: Somatic, Cognitive & Emotional Integration Practices

Mirrored layout: image-left, content-right (5/12 + 7/12 desktop).

- **Image (left):** `figure-mountain-cliff.jpeg` — figure on mountain edge at sunrise.
- **Right column:**
  - Eyebrow: `ONGOING OFFERING`
  - Headline (h2): Somatic, Cognitive & Emotional Integration Practices
  - Sub-headline (body-lg italic): Tools for stabilizing the inner world and supporting developmental evolution.
  - Body **VERBATIM**:

> This offering provides a suite of integrative practices that help individuals:

  - Bulleted list:
    - Regulate their nervous systems
    - Digest emotional intensity
    - Shift cognitive patterns and limiting beliefs
    - Integrate protective parts and shadow
    - Cultivate grounded presence and somatic coherence
    - Build the inner capacities required for later-stage development

  - Closing:

> These practices bridge the gap between insight and embodiment — helping individuals live the work in real time.

  - Tertiary text link: **Get in touch about practices →** `/contact?topic=practices`

#### Section 5 — Coming soon: Ending with Awareness Foundations Program

Soft blue tint background, single-column reading layout, max-width 720px, centered.

- **Eyebrow** (centered, gold): `COMING SOON · CORE PROGRAM`
- **Headline (h2, centered):** Ending with Awareness — Foundations Program
- **Body prose** (centered alignment for first line, then left-aligned for paragraph) **VERBATIM**:

> This program introduces the core developmental, somatic, and psychological frameworks that shape all Institute offerings. Grounded in the book *Ending with Awareness*, it offers a developmental lens on how identity reorganizes during rupture, transition, and the dissolution of old meaning-making structures. Participants learn to understand the anatomy of transformation, recognize patterns activated by endings, and begin rebuilding coherence and self-trust as they move toward a more integrated, self-authored identity.

- **CTA buttons** (row, centered):
  - Primary: **Join the Foundations interest list** → opens interest modal
  - Secondary: **Read about the book** → `/book`

#### Section 6 — Closing band

Full-width cream band.

- Centered text link card: **Have a question about programs? Get in touch →** `/contact?topic=programs`

#### SEO meta — Programs

- Title: `Programs & Offerings — Institute for Conscious Transformation`
- Meta description: `Guided pathways integrating psychology, somatic intelligence, and awareness-based practice. Pilot study, integrative practices, and forthcoming Foundations Program.`

---

### 7.5 Ending with Awareness — Book Page (`/book`)

**Purpose:** Build interest in the forthcoming book and capture the interest list.

#### Section 1 — Hero (centered, image background)

- **Background image:** `book-page-rays.png` — open book with golden rays. This image already has perfect brand colors (blue + gold).
- **Overlay:** 25% Deep Slate Blue.
- **Eyebrow:** `FORTHCOMING BOOK`
- **Headline (display-1, white, italic for "Awareness"):** Ending with *Awareness*
- **Subline (body-lg, white 90%, max-width 640px):** A book for anyone navigating endings, identity shifts, and the emergence of their next self.
- **CTA row** (three buttons, all white-bordered ghost on the dark hero):
  - **Get updates** → opens interest modal
  - **Speaking & collaboration** → `/contact?topic=speaking`
  - **Affiliate partnerships** → `/contact?topic=affiliate`

80vh hero, centered text.

#### Section 2 — Introduction

Reading column, cream, max-width 680px. **VERBATIM** from book page document Section: Introduction:

> *Ending with Awareness* is the first book in the Institute for Conscious Transformation's foundational series — the starting point for anyone moving through the emotional and psychological upheaval of a relationship ending.
>
> This book reframes endings as initiations — not as loss, but as the threshold of identity evolution. It reveals why rupture feels like collapse, how developmental stages shape the way you love, and how self-knowledge becomes the doorway to emotional integrity, relational clarity, and conscious future love.
>
> It's not a book about "getting over it." It's a book about becoming the person you were always meant to be.

#### Section 3 — What you'll learn (soft blue tint)

Two-column layout: image left (5/12), checklist right (7/12).

- **Image:** `letter-rays.jpeg` — blue envelope with golden rays.
- **Right column:**
  - Eyebrow: `WHAT YOU'LL LEARN`
  - Headline (h2): Inside the book.
  - Bulleted list (each item ~1 line, body-lg, generous spacing — design system bullet style):
    - Why endings destabilize your sense of self — and how to find coherence again
    - How identity reorganizes across developmental stages
    - How your nervous system shapes your reactions to loss
    - Why certain patterns repeat — and how to break them consciously
    - How to navigate endings with clarity instead of collapse
    - How to prepare for future love from a more evolved self
  - Closing paragraph (body, italic, slate 80%):

> A blend of developmental psychology, somatic awareness, and mindfulness practices helps you understand yourself at the deepest level — not as a set of patterns to fix, but as a consciousness unfolding.

#### Section 4 — Who it's for

Reading column, cream, max-width 680px. **VERBATIM**:

- Eyebrow (centered): `WHO IT'S FOR`
- Headline (h2, centered): A book for anyone at a relational threshold.
- Body:

> This book is for anyone standing at a relational threshold — ending a relationship, healing from one, or trying to understand why certain patterns keep repeating. It's written for both women and men, and for anyone who wants to grow through transition rather than be defined by it.
>
> It is also a resource for coaches, therapists, and practitioners supporting clients through relational transformation — offering a developmental lens that integrates psychology, somatic intelligence, and awareness-based practice.

#### Section 5 — Publication status & interest list (soft blue tint)

Centered, single column, max-width 600px.

- Eyebrow (centered): `PUBLICATION STATUS`
- Headline (h2, centered): *Ending with Awareness* is in publication.
- Body (body-lg, centered):

> If you'd like updates, early access opportunities, or to explore speaking engagements or affiliate partnerships, we'd love to connect.

- Inline interest form (Email + Subscribe button) directly below.
- Below form, three quiet text links separated by gold dots:
  - **Request speaking info** → `/contact?topic=speaking`
  - **Affiliate inquiry** → `/contact?topic=affiliate`
  - **General inquiries** → `/contact`

#### Section 6 — Atmospheric closing image (full-width)

- **Image:** `golden-particles-waves.jpeg` — golden particles on blue waves. 380px tall, full width, no text overlay.

#### SEO meta — Book

- Title: `Ending with Awareness — A Forthcoming Book by Svetlana Bolotina`
- Meta description: `A guide to navigating endings, identity shifts, and the emergence of your next self. From the Institute for Conscious Transformation.`
- OG image: Custom card using `book-page-rays.png` with title overlay.

---

### 7.6 Community, Affiliates & Resources (`/community`)

**Purpose:** Establish the broader ecosystem, list current affiliates, surface recommended works, route inquiries.

#### Section 1 — Hero

- **Background image:** `network-nodes-watercolor.png` — abstract blue/gold network nodes (already brand-toned).
- **Overlay:** None — image is light and works with text directly. Optional 8% cream wash if needed for legibility.
- Layout: Centered text on image, 60vh.
- Eyebrow: `COMMUNITY`
- Headline (display-2, slate blue): A community for conscious evolution.
- Subline (body-lg, slate 80%, max-width 720px): A global field of individuals, practitioners, and scholars committed to deep development, relational coherence, and meaningful transformation.
- Supporting line (body, italic, slate 60%, max-width 600px): Where growth becomes shared, embodied, and amplified.

#### Section 2 — Introduction

Reading column, cream, max-width 720px. **VERBATIM** from Affiliates doc:

> The Institute for Conscious Transformation collaborates with a select group of practitioners, scholars, and organizations whose work aligns with our developmental, somatic, and integrative approach to human evolution. This page serves as a living library — a place to explore offerings, teachings, and resources that complement and deepen the Institute's work.

#### Section 3 — Affiliates & Partner Offerings

Cream background.

- Eyebrow (centered): `AFFILIATES & PARTNER OFFERINGS`
- Headline (h2, centered): Practitioners and organizations aligned with conscious development.

Single affiliate card (centered, max-width 720px), expandable as more partners are added:

- **Card structure:**
  - Title (h3): Converging Zone
  - Body (body, slate 80%):

> At Converging Zone, we believe that personal and professional growth is an ongoing journey — one that requires clarity, strategy, and the right guidance. Whether you're an individual seeking transformation, a leader looking to inspire, or an organization striving for excellence, we're here to support you every step of the way.

  - Tertiary text link: **Visit Converging Zone →** (link `#` for now — placeholder noted in technical section)

#### Section 4 — Webinars, Retreats & Events

Soft blue tint band.

- Eyebrow (centered): `WEBINARS, RETREATS & EVENTS`
- Headline (h3, centered): Live experiences for deeper practice and community learning.
- Body (centered, body-lg italic, slate 60%): Coming soon.

A simple state — no cards yet, just a quiet placeholder. Add a small text link: **Be notified when events are announced →** (opens a small modal or routes to newsletter signup).

#### Section 5 — Books, Articles & Publications

Cream background.

- Eyebrow (centered): `BOOKS, ARTICLES & PUBLICATIONS`
- Headline (h2, centered): Developmental, psychological, somatic, and integrative works we recommend.

Two-column featured book card (image-left, content-right, max-width 960px centered):

- **Image (left):** `intentional-evolution-book-cover.png` — book cover.
- **Right column:**
  - Tag/eyebrow: `RECOMMENDED READING`
  - Title (h3): *Intentional Evolution: Awaken Your Inner Leader Consciousness and Actualize Your Limitless Potential*
  - Authors (body-sm, slate 60%, italic): John Shindler, PhD and Robert Ricciardelli
  - Body **VERBATIM**:

> This book is for everyone — especially those ready for growth and inner harmony. It speaks to individuals who feel called to evolve, to move forward, and to become more of who they were meant to be. It guides readers through liberating shifts in consciousness, helping them unpack and activate their inner potential, quiet mental noise, and clarify life purpose.

  - Tertiary text link: **View on Amazon →** (link the verbatim Amazon URL from source: `https://www.amazon.com/dp/9798294608217`)

#### Section 6 — Additional Resources

Soft blue tint band.

- Eyebrow (centered): `ADDITIONAL RESOURCES`
- Headline (h3, centered): Tools, frameworks, and practices to support your developmental journey.
- Body (centered, body-lg italic, slate 60%): Coming soon.

#### Section 7 — Contact & Inquiries

Cream background, full contact form (this section is a duplicate of `/contact` but placed inline so users don't have to navigate away).

- Eyebrow (centered): `CONTACT & INQUIRIES`
- Headline (h2, centered): Get in touch.
- Body (centered, max-width 580px): For questions about our offerings — or for affiliate, marketing, and collaborative inquiries — please reach out using the form below.
- Form: Name, Email, Message + Send Inquiry button. Same form pattern as Contact page (specifications in section 10).
- Contact email shown beneath form (body-sm, slate 60%, centered): `info@instituteconscious.org`. *Note:* this email is a placeholder per source — replace before launch.

#### SEO meta — Community

- Title: `Community, Affiliates & Resources — Institute for Conscious Transformation`
- Meta description: `A curated ecosystem of aligned practitioners, teachings, and developmental tools.`

---

### 7.7 Contact (`/contact`)

**Purpose:** Single, focused contact form. Pre-fill topic when arriving via deep links from other pages.

#### Section 1 — Hero (compact)

40vh, no background image. Cream.

- Eyebrow (centered): `CONTACT`
- Headline (display-2, centered): We'd love to hear from you.
- Subline (body-lg, centered, max-width 580px, slate 80%): Whether you're exploring our programs, navigating a transition, or interested in collaboration, please get in touch.

#### Section 2 — Form (centered)

Two-column desktop: form on left (7/12), brief contact info on right (4/12, with 1/12 gap).

**Form fields** (in order):
1. **Name** (required, text)
2. **Email** (required, email format validation)
3. **Topic** (required, dropdown):
   - General inquiry
   - Programs
   - Pilot Study
   - Practices
   - Speaking & Media
   - Affiliate / Partnership
   - Press
   - Advisory work with Svetlana
4. **Message** (required, textarea, min 4 rows, max 800 chars)
5. **Submit button** (primary, full-width on mobile, fixed-width on desktop): **Send Inquiry**

**Topic pre-fill:** When the URL contains `?topic=<value>`, pre-select the matching dropdown option:
- `?topic=advisory` → "Advisory work with Svetlana"
- `?topic=speaking` → "Speaking & Media"
- `?topic=affiliate` → "Affiliate / Partnership"
- `?topic=programs` → "Programs"
- `?topic=pilot-study` → "Pilot Study"
- `?topic=practices` → "Practices"
- `?topic=press` → "Press"

**Right column (contact info):**
- Eyebrow: `EMAIL`
- Email (body, slate blue): info@instituteconscious.org
- Eyebrow (32px down): `RESPONSE TIME`
- Body (body, slate 80%): We typically respond within 3–5 business days.
- Eyebrow (32px down): `LOCATION`
- Body (body, slate 80%): California, USA. Virtual sessions worldwide.

#### Section 3 — Confirmation state

After successful submission, replace the form area with:

- Centered, padded card (cream-on-cream, hairline border)
- Headline (h2): Thank you.
- Body (body-lg, slate 80%, max-width 480px): Your message has been received. We'll be in touch soon.
- Tertiary link (40px down): **Return home →** `/`

#### SEO meta — Contact

- Title: `Contact — Institute for Conscious Transformation`
- Meta description: `Reach out about programs, advisory work, speaking engagements, affiliate partnerships, and more.`

---

## 8. Global Components

### 8.1 Header / navigation

- **Position:** Sticky on scroll. Background fades in from transparent (when over hero) to cream-with-95%-opacity-and-backdrop-blur after 80px scroll.
- **Height:** 80px desktop, 64px mobile.
- **Layout:** Logo lockup left, nav links centered, Contact button right.
- **Links:** EB Garamond 500, 16px, slate 80% default, slate blue on hover with gold underline animating in from left.
- **Active page:** Persistent gold underline.
- **Mobile:** Hamburger icon (custom, three thin slate-blue rules, no border) opens full-screen overlay menu. Menu fades in over 250ms. Items stack centered, h2 typography. Icon mark appears at top of overlay.
- **Skip-to-content link:** Hidden by default, appears on Tab focus, links to `#main`.

### 8.2 Footer

Full-width, Deep Slate Blue background, cream text.

**Top section** — full-width, padded `py-16`:

Newsletter row (full-width, max-width 720px centered):
- Eyebrow (centered, gold): `STAY CONNECTED`
- Headline (h3, centered, cream): Join the Institute mailing list.
- Body (body, centered, cream 80%, max-width 560px): Receive reflections on conscious development, occasional updates on programs, and early access to *Ending with Awareness*.
- Inline form: email input + Subscribe button (gold ghost button — gold border, cream text, gold-fill on hover with slate-blue text).

**Middle section** — three-column grid + wordmark column:

- **Column 1 — The Institute:** About / Founder / Values / Vision
- **Column 2 — Engage:** Programs / The Book / Community / Affiliates
- **Column 3 — Contact:** info@instituteconscious.org / Speaking inquiries / Press
- **Column 4 (right-aligned):** Wordmark (use cream version — Claude Code generates a cream-on-transparent SVG of the wordmark from the source files), centered above tagline `EVOLVE · HEAL · THRIVE` in gold.

**Bottom row:**
- Hairline rule (1px, cream at 20% opacity)
- Copyright (left, body-sm, cream 60%): © 2026 Institute for Conscious Transformation. All rights reserved.
- Legal links (right, body-sm, cream 60%): Privacy · Terms

Mobile: All columns stack. Wordmark moves to top of stacked footer, centered.

### 8.3 Newsletter signup form (reusable)

Used in: home page section 6, every page footer, and book page section 5. Single React component with a `variant` prop:
- `variant="hero"` (large, centered, used on home & book pages)
- `variant="footer"` (compact, two-column dark, used in global footer)

Logic identical regardless of variant: email validation → submit to ConvertKit (see Section 10.2) → confirmation message inline.

### 8.4 Interest-list modal

Triggered from buttons labeled "Join the interest list" on Home and Book pages, and "Join the Foundations interest list" on Programs page.

Modal contents:
- Backdrop: Deep Slate Blue at 60% opacity, no blur.
- Card: Cream, max-width 480px, padded `p-12`, sharp corners.
- Eyebrow (centered): `INTEREST LIST`
- Headline (h3, centered): Be the first to know.
- Body (body, centered): Get notified when *Ending with Awareness* and the Foundations Program become available.
- Form: First name + Email + Submit button.
- Close `×` icon in top-right (slate blue, 24px).
- Submitting routes to ConvertKit form, tagged with origin (home, book, programs).
- On success, replace contents with: *"You're on the list. Thank you."*

### 8.5 Accessibility components

- **Skip-to-content link:** Hidden until focused, then top-left fixed positioning, slate-blue background, cream text, sharp corners.
- **Focus trap** in mobile menu and modals.
- **Escape key** closes mobile menu and any open modal.
- **ARIA labels** on icon-only buttons (hamburger, modal close).

---

## 9. Technical Requirements

### 9.1 Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Package manager:** npm
- **Node version:** 20 LTS or later

### 9.2 Project structure (recommended)

```
lana/
├── app/
│   ├── layout.tsx               (root layout, Header + Footer)
│   ├── page.tsx                 (Home)
│   ├── globals.css              (Tailwind + design tokens)
│   ├── about-the-institute/
│   │   └── page.tsx
│   ├── about-the-founder/
│   │   └── page.tsx
│   ├── programs/
│   │   └── page.tsx
│   ├── book/
│   │   └── page.tsx
│   ├── community/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       ├── contact/route.ts     (handles contact form POST)
│       └── newsletter/route.ts  (handles newsletter POST)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Eyebrow.tsx
│   │   ├── PullQuote.tsx
│   │   └── ScrollReveal.tsx
│   ├── forms/
│   │   ├── NewsletterSignup.tsx
│   │   ├── ContactForm.tsx
│   │   └── InterestListModal.tsx
│   ├── sections/
│   │   ├── Hero.tsx             (variants: imageBackground, splitImage, compact)
│   │   ├── PillarCards.tsx
│   │   ├── BookTeaser.tsx
│   │   └── ValuesGrid.tsx
│   └── common/
│       ├── Logo.tsx
│       ├── ImageCaption.tsx
│       └── SectionHeading.tsx
├── lib/
│   ├── tokens.ts                (design tokens: colors, spacing, type scale)
│   └── analytics.ts
├── public/
│   ├── logos/                   (copied from /assets/logos)
│   ├── images/                  (copied from /assets/images, optimized)
│   └── og/                      (generated OG images)
├── styles/
│   └── (tailwind config + custom utilities)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

### 9.3 Design tokens

Implement in `tailwind.config.ts` and `app/globals.css` as CSS variables:

```css
:root {
  --color-slate-blue: #1F2E3D;
  --color-slate-blue-2: #2A3D50;
  --color-slate-80: #3D4D5E;
  --color-slate-60: #6B7785;
  --color-slate-30: #C5CCD3;
  --color-gold: #C9A86A;
  --color-gold-hover: #B8965A;
  --color-cream: #FAF7F2;
  --color-blue-tint: #E8EDF2;
  --color-error: #A6453F;

  --font-display: 'Cormorant Garamond', 'Garamond', serif;
  --font-body: 'EB Garamond', 'Garamond', serif;

  --max-content: 1200px;
  --max-reading: 680px;
  --max-wide: 1080px;
}
```

Tailwind extends:
```ts
theme: {
  extend: {
    colors: {
      slate: {
        blue: '#1F2E3D',
        // ... etc
      },
      gold: {
        DEFAULT: '#C9A86A',
        hover: '#B8965A',
      },
      cream: '#FAF7F2',
      // etc
    },
    fontFamily: {
      display: ['Cormorant Garamond', 'serif'],
      body: ['EB Garamond', 'serif'],
    },
    maxWidth: {
      reading: '680px',
      wide: '1080px',
    },
  },
}
```

### 9.4 Performance

- **Lighthouse targets (mobile):** Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- **Images:** Use Next.js `<Image>` for all imagery. Provide explicit width/height. Use `priority` only on above-the-fold hero images.
- **Fonts:** Self-host via `next/font/google` for Cormorant Garamond and EB Garamond. Subset to Latin. Use `display: swap`.
- **No external trackers** by default. If analytics is added, use Plausible or Vercel Analytics — privacy-friendly, no cookies. Confirm with user before adding.
- **No layout shift:** All images must have intrinsic dimensions. All web fonts loaded via `next/font` (which prevents FOUT/CLS).

### 9.5 SEO

Each page exports proper Next.js `metadata`:

```ts
export const metadata: Metadata = {
  title: 'Page title — Institute for Conscious Transformation',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: [{ url: '/og/page-name.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}
```

Plus a global `app/layout.tsx` `metadata` with site-wide defaults.

Also include:
- `app/sitemap.ts` listing all routes.
- `app/robots.ts` allowing all.
- JSON-LD structured data on:
  - Home page: `Organization` schema with name, URL, logo, founder.
  - Founder page: `Person` schema for Svetlana Bolotina.
  - Book page: `Book` schema for *Ending with Awareness*.

### 9.6 Browser support

- Modern evergreen browsers: Chrome, Firefox, Safari, Edge (last 2 versions).
- iOS Safari 16+, Android Chrome (last 2 versions).
- No IE11 support.

### 9.7 Hosting

Designed for **Vercel deploy**. Site should work out of the box with `vercel deploy`. README includes instructions for environment variables (see Section 10).

---

## 10. Forms & Integrations

### 10.1 Decision: ConvertKit + Formspree

The user has approved working forms wired to a service. Recommended approach:

- **Newsletter & interest lists:** ConvertKit (free tier, 1,000 subscribers).
  - Newsletter form → ConvertKit form ID `<NEWSLETTER_FORM_ID>`
  - Book interest list → ConvertKit form ID `<BOOK_INTEREST_FORM_ID>`, tagged `book-interest`
  - Programs/Foundations interest list → ConvertKit form ID `<FOUNDATIONS_FORM_ID>`, tagged `foundations-interest`
- **Contact form:** Formspree (free tier, 50/month). Handles spam protection, sends to `info@instituteconscious.org`.

The user must create accounts and provide form IDs. README scaffolds where to put them.

### 10.2 Environment variables

`.env.local` template:

```
NEXT_PUBLIC_CONVERTKIT_NEWSLETTER_FORM_ID=
NEXT_PUBLIC_CONVERTKIT_BOOK_INTEREST_FORM_ID=
NEXT_PUBLIC_CONVERTKIT_FOUNDATIONS_FORM_ID=
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=
NEXT_PUBLIC_CONTACT_EMAIL=info@instituteconscious.org
```

Forms gracefully fall back to a `mailto:info@instituteconscious.org` link if env vars are missing — shown as: *"Form temporarily unavailable. Please email us at info@instituteconscious.org."* This keeps the site functional during local dev or before service signup.

### 10.3 Form handling spec

All forms must:
- Validate email format client-side and server-side.
- Show inline error states matching the design system (red border, italic message below).
- Disable submit button while submitting (text changes to *"Sending…"*).
- Show success state inline replacing the form.
- Show error state inline if API call fails: *"Something went wrong. Please email us at info@instituteconscious.org."*
- Include a hidden honeypot field for bot protection (in addition to Formspree's spam handling).
- Track UTM parameters on hidden fields when present in URL (for the contact form's `topic`).

### 10.4 No localStorage/sessionStorage

The site must not use browser storage APIs (per project standards and to honor visitor privacy). Form state lives in React component state only.

---

## 11. Asset Inventory

All assets are provided in `assets/logos/` and `assets/images/`. They should be copied into `public/logos/` and `public/images/` during setup.

### 11.1 Logo files

| Filename | Format | Use |
|---|---|---|
| `icon-mark-option-1.png` | PNG, transparent bg | Primary icon mark — header (default) |
| `icon-mark-option-2.png` | PNG, transparent bg | Alternate icon mark |
| `wordmark-with-tagline.png` | PNG | Full lockup with "Evolve · Heal · Thrive" tagline. Use in About pages, footer, social cards. |
| `wordmark-stacked.png` | PNG | Two-line wordmark, no tagline |
| `wordmark-horizontal.png` | PNG | Single-line wordmark, narrow header use |

**Action item for Claude Code:** Generate SVG versions of the icon mark and wordmark by tracing the existing PNGs OR by using the existing PNGs at high resolution. SVG preferred for scalability. If tracing isn't feasible, use 2x PNGs with proper Next.js Image scaling.

### 11.2 Image files

| Filename | Format | Page | Section | Alt text |
|---|---|---|---|---|
| `home-hero-light-water.jpeg` | JPG | Home | Hero | A serene horizon where light meets water — symbolizing the threshold of conscious development. |
| `staircase-curve.png` | PNG | Home & About Institute | Pillar card 1 / hero | A curved white staircase rising in a sunlit modern interior. |
| `founder-svetlana-portrait.jpeg` | JPG | Home & Founder | Pillar card 2 / hero | Svetlana Bolotina, Founder, seated in her study with books behind her. |
| `book-page-rays.png` | PNG | Home & Book | Pillar card 3 / hero | An open book with golden light radiating from its pages. |
| `water-ripples-gold.jpeg` | JPG | About Institute | Atmospheric break | Gold and blue water ripples reflecting light. |
| `institute-library-interior.jpeg` | JPG | (reserved — optional secondary use) | — | A spacious modern library with curved shelves and natural light. |
| `institute-glass-atrium.jpeg` | JPG | (reserved — optional secondary use) | — | People standing in a sunlit glass atrium. |
| `spiral-staircase-vatican.jpeg` | JPG | Programs | Hero | A descending bronze and stone spiral staircase. |
| `figure-mountain-cliff.jpeg` | JPG | Programs | Practices section | A figure standing on a mountain cliff at sunrise above misty valleys. |
| `meditation-circle-window.jpeg` | JPG | Programs | Pilot Study section | A small group sitting in meditation by a large window overlooking a river. |
| `ending-with-awareness-room.jpeg` | JPG | (alternate Book hero option) | — | Group seated in a circular sunlit room beneath rays, with the book title above. |
| `letter-rays.jpeg` | JPG | Book | What you'll learn section | A blue envelope opening with golden light radiating from within. |
| `golden-particles-waves.jpeg` | JPG | Book | Closing image | Golden particles flowing in waves over a blue surface. |
| `network-nodes-watercolor.png` | PNG | Community | Hero | A watercolor network of blue and gold nodes connected by fine lines. |
| `intentional-evolution-book-cover.png` | PNG | Community | Recommended reading | Book cover: *Intentional Evolution* by John Shindler and Robert Ricciardelli. |
| `desk-window-plants.png` | PNG | (reserved — optional Contact background) | — | A sunlit desk with a laptop and plants by a window. |
| `forest-path.png` | PNG | (reserved — optional secondary use) | — | A sunlit forest path bordered by tall trees. |
| `open-book-shadows.png` | PNG | (reserved — optional secondary use) | — | An open book on white linen with soft window shadows. |

### 11.3 Image optimization rules

Claude Code should:

- Convert all JPEGs to WebP at 80% quality, keeping JPEG fallback.
- For PNGs without transparency, also convert to WebP.
- For the icon mark and wordmark PNGs, attempt to convert to SVG if possible; otherwise serve as PNG with appropriate intrinsic sizing.
- Generate responsive `sizes` for all `<Image>` components based on layout.

### 11.4 Social/OG cards

Generate 1200×630 OG cards for each page:
- `og-home.jpg` — hero image cropped + wordmark + tagline overlay
- `og-institute.jpg` — staircase image + page title overlay
- `og-founder.jpg` — founder portrait + name overlay
- `og-programs.jpg` — spiral staircase + page title
- `og-book.jpg` — book rays image + book title overlay
- `og-community.jpg` — network nodes + page title
- `og-contact.jpg` — wordmark on cream background

Place in `public/og/`.

---

## 12. Build Order & Acceptance Criteria

### 12.1 Recommended build order

1. **Setup:** Initialize Next.js project, configure Tailwind, set up design tokens, install fonts.
2. **Global components:** Build Header, Footer, Logo, Button, Card, Eyebrow, ScrollReveal.
3. **Home page:** Build first as it exercises most components and patterns.
4. **About the Institute:** Builds on Home patterns; introduces Values grid and reading-column layout.
5. **About the Founder:** Introduces split hero and long-form reading layout.
6. **Programs:** Reuses Home patterns.
7. **Book:** Reuses patterns; introduces interest modal.
8. **Community:** Mostly reuses; introduces resource card layouts.
9. **Contact:** Final page; build and wire forms.
10. **Forms integration:** Wire ConvertKit and Formspree; test end-to-end.
11. **SEO & metadata:** Sweep all pages, add OG images, sitemap, robots.
12. **Performance pass:** Lighthouse audit, image optimization, font loading verification.
13. **Accessibility pass:** Keyboard navigation, screen reader sweep, focus states.
14. **Final polish:** Motion timing, copy proofread against source documents (must be verbatim where specified).

### 12.2 Acceptance criteria

For each page, the following must be true before it can be considered complete:

**Visual fidelity**
- [ ] All copy matches source documents verbatim where specified.
- [ ] Color palette matches `#1F2E3D` and `#C9A86A` exactly with extended palette as specified.
- [ ] Typography uses Cormorant Garamond (display) + EB Garamond (body) only — no sans-serif fallback in production.
- [ ] All images load and display with correct alt text.
- [ ] Logo system used correctly (icon mark + wordmark per Section 4.3).
- [ ] No emojis. No exclamation points. No marketing-speak.

**Layout & responsive**
- [ ] Page renders correctly at 320px, 768px, 1024px, 1280px, 1920px widths.
- [ ] Reading-column max width respected (680px) on long-form prose.
- [ ] No horizontal scrolling at any viewport.
- [ ] Mobile menu opens and closes correctly.

**Interactions**
- [ ] All links route correctly.
- [ ] All buttons have hover and focus states.
- [ ] Forms validate and submit correctly (or show graceful fallback).
- [ ] Newsletter signup works end-to-end (test with real ConvertKit form).
- [ ] Contact form delivers to email (test with real Formspree).
- [ ] Interest modal opens, closes (× and Esc), and submits.
- [ ] `?topic=…` URL parameter pre-selects Contact form dropdown.

**Accessibility**
- [ ] All interactive elements keyboard accessible.
- [ ] Focus visible everywhere (gold outline).
- [ ] Heading hierarchy correct (one h1, no skipped levels).
- [ ] All images have alt text.
- [ ] All form fields have labels.
- [ ] Skip-to-content link works.
- [ ] Lighthouse Accessibility score ≥ 95.

**Performance**
- [ ] Lighthouse Performance score ≥ 90 mobile.
- [ ] No CLS issues.
- [ ] Fonts loaded via `next/font` (no FOUC/FOIT).
- [ ] Hero images use `priority`; below-fold images lazy-load.

**SEO**
- [ ] Each page has unique title and meta description per spec.
- [ ] OG image and Twitter card present on every page.
- [ ] Sitemap and robots.txt accessible.
- [ ] JSON-LD present on Home, Founder, Book.

---

## 13. Out of Scope

The following are explicitly **not** part of this build and should not be implemented unless requested separately:

- E-commerce / payment processing
- User accounts / authentication
- Course delivery / video hosting
- Multilingual content (English only for v1)
- Blog / Articles section (reserved for future)
- Community forum / member portal
- Calendar / event booking system
- Live chat / chatbot
- A/B testing infrastructure
- Analytics dashboards (basic Plausible/Vercel Analytics is okay if user opts in)
- Custom CMS (content edited in code for v1)

---

## Appendix A — Source documents

The following source documents were used to author this PRD. All copy on the live site should match these documents verbatim where specified. They are included in the project repo at `assets/source-docs/` for reference.

- `About_the_Founder.docx` — Source for `/about-the-founder` page copy
- `About_the_Institute.docx` — Source for `/about-the-institute` page copy
- `Affiliates_and_Recommended_Resources_-_Revised.docx` — Source for `/community` page copy
- `Ending_with_Awareness_Book_page.docx` — Source for `/book` page copy
- `Images.docx` — Source for image search terms, headlines, sublines, and brand voice notes
- `Programs_and_Offerings.docx` — Source for `/programs` page copy
- `Recommended_Final_Color_for_logo_Pairing.docx` — Source for color palette, typography, and logo guidance

If anything in this PRD conflicts with the source documents, the source documents win for copy and the PRD wins for design/structure. When in doubt, ask.

---

## Appendix B — Open questions / decisions to confirm pre-launch

1. **Final email address:** Source uses `info@instituteconscious.org` as a placeholder. Confirm or replace before launch.
2. **Converging Zone affiliate URL:** The source document shows the link as `NULL`. Need a real URL.
3. **Founder's photo:** Confirm `founder-svetlana-portrait.jpeg` is the final approved portrait. (It appears AI-generated; confirm if a real photograph is preferred.)
4. **ConvertKit & Formspree accounts:** User must create accounts and provide form IDs before forms will function.
5. **Domain:** The site is called the Institute for Conscious Transformation. Confirm production domain (likely `instituteconscious.org` or similar).
6. **Privacy policy & Terms of Service content:** Footer links exist; content needs to be drafted (typically a separate effort).
7. **Analytics:** Decide whether to include Plausible or Vercel Analytics, or skip analytics entirely for v1.

---

*End of PRD.*
