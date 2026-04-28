# LANA — Institute for Conscious Transformation Website

> **For Claude Code:** Start here, then read `PRD.md` end-to-end before writing any code.

## What's in this folder

```
lana_prd/
├── README.md          ← you are here
├── PRD.md             ← full product requirements (read this next)
├── COPY-GUIDE.md      ← verbatim copy from source docs, organized by page
└── assets/
    ├── logos/         ← all logo files
    └── images/        ← all photography and illustrations
```

## Project summary

A polished, production-ready marketing website for the **Institute for Conscious Transformation** — a thought-leadership organization founded by Svetlana Bolotina. The site introduces the Institute, the founder, programs, the forthcoming book *Ending with Awareness*, and captures inquiries.

**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
**Hosting:** Vercel
**Forms:** ConvertKit (newsletter & interest lists) + Formspree (contact)

## Brand essentials at a glance

| | |
|---|---|
| **Colors** | Deep Slate Blue `#1F2E3D` + Muted Warm Gold `#C9A86A` on cream `#FAF7F2` |
| **Typography** | Cormorant Garamond (display) + EB Garamond (body). **All-serif. No sans-serif anywhere.** |
| **Tone** | Quiet, editorial, intellectually serious. No marketing-speak. No emojis. No exclamation points. |
| **Logo** | Icon mark (hand + flame) + wordmark — paired together |
| **Tagline** | Evolve · Heal · Thrive |

## Read in this order

1. **`PRD.md`** — sections 1–4 first to understand tone and brand. Then sections 5–8 for design system and pages. Then 9–12 for technical execution.
2. **`COPY-GUIDE.md`** — when you're building a page, pull copy from here verbatim. Do not rewrite or paraphrase.
3. **`assets/`** — review all images and logos before designing layouts so you understand the visual material you're working with.

## Critical rules (do not skip)

- **Copy is verbatim.** Where the PRD says "VERBATIM", use the exact text from `COPY-GUIDE.md`. The founder wrote this carefully.
- **No sans-serif.** The brand is all-serif. Body, UI, buttons — everything is Cormorant Garamond or EB Garamond.
- **No emojis. No exclamation points. No "Transform your life today" energy.** This is editorial, not marketing.
- **Sharp corners.** No `border-radius` on buttons, cards, or images.
- **Reading column 680px max.** Long prose should never stretch wider.
- **Honor `prefers-reduced-motion`.**
- **Logo is locked-up.** Icon mark + wordmark together in header. See PRD section 4.3.

## Build order

1. Setup project + design tokens + fonts
2. Global components (Header, Footer, Logo, Button, Card)
3. Home → About Institute → About Founder → Programs → Book → Community → Contact
4. Wire forms (ConvertKit + Formspree)
5. SEO sweep, performance pass, a11y pass

## Environment variables you'll need

```
NEXT_PUBLIC_CONVERTKIT_NEWSLETTER_FORM_ID=
NEXT_PUBLIC_CONVERTKIT_BOOK_INTEREST_FORM_ID=
NEXT_PUBLIC_CONVERTKIT_FOUNDATIONS_FORM_ID=
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=
NEXT_PUBLIC_CONTACT_EMAIL=info@instituteconscious.org
```

The user will provide these. Forms should fall back to a `mailto:` link if env vars are missing so the site stays functional during dev.

## Acceptance criteria

The site is done when:
- Every page matches the PRD specs visually and structurally.
- All copy matches source documents verbatim where specified.
- Forms work end-to-end against real ConvertKit + Formspree accounts.
- Lighthouse mobile scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- Site looks polished at 320px through 1920px.
- No JavaScript errors in console.

## Open questions to flag (don't guess — ask the user)

These are listed in PRD Appendix B:
1. Final email address (`info@instituteconscious.org` is a placeholder)
2. Real Converging Zone affiliate URL
3. Whether the founder portrait is final
4. ConvertKit and Formspree form IDs
5. Production domain
6. Whether to include analytics
7. Privacy/Terms content

If any of these block progress, leave a clearly-marked `TODO` comment and continue.

---

Ready? Open `PRD.md`.
