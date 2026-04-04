# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains "The Colour Stylist" — a premium personal colour styling website.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### The Colour Stylist (`artifacts/colour-stylist/`)
A premium personal colour styling website for "The Colour Stylist" business.
- **Tech**: React + Vite + TypeScript + Tailwind CSS
- **Route**: `/` (root)
- **Design**: Soft blush background, Playfair Display serif headings, dark teal (#2d7a7a area) buttons, mobile-first

**Pages:**
- `/` — Home with hero, services overview, about preview, colour analysis preview, testimonials, contact CTA
- `/services` — Services listing with large image cards
- `/services/colour-analysis-in-person` — In person colour analysis detail page
- `/services/colour-analysis-with-friends` — Group colour analysis detail page
- `/services/wardrobe-declutter` — Wardrobe declutter detail page
- `/about` — About Clare
- `/what-is-colour-analysis` — Educational page about the 12 season system
- `/testimonials` — 6 testimonials in a grid
- `/contact` — Contact details + Google Map of Marlow

**Components:** `Header`, `Footer`, `PageHero`, `CTAButtons`, `ServiceCard`, `TestimonialCard`, `ContactStrip`

**Images:** stored in `artifacts/colour-stylist/public/images/`
- `home-hero.jpg`, `about-clare.jpg`, `what-is-colour-analysis.jpg`
- `services-background.jpg`, `in-person-colour-analysis.jpg`
- `colour-analysis-with-friends.jpg`, `wardrobe-declutter.jpg`

**Contact:** WhatsApp `+44 7974 209963` → `https://wa.me/447974209963`, email `clare@thecolourstylist.com`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/colour-stylist run dev` — run website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
