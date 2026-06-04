# Cosmo Car Customs

> Premium Next.js 15 website for [Cosmo Car Customs](https://cosmocarcustoms.com/) — a luxury auto detailing studio in Mississauga, GTA.

## Overview

A high-end, lead-converting marketing site built with the Ferrari editorial design language adapted for a vehicle protection studio. Cinematic hero, multi-page service architecture, Three.js 3D layer, and a guided consultation intake.

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| 3D | React Three Fiber + Drei |
| Icons | Lucide React |
| Smooth scroll | Lenis |
| Carousel | Embla Carousel |
| Numbers | @number-flow/react |
| Font | Inter (FerrariSans substitute) |

## Design System

- **Canvas:** `#181818` — near-black, never pure black
- **Elevated surfaces:** `#303030`
- **Accent (Cosmo Gold):** `#c79a3b` — replaces Rosso Corsa
- **Ink:** `#ffffff`
- **Body text:** `#a1a1a1`
- **Radius:** `0px` sharp on all CTAs and cards (pill only for badges)
- **CTA labels:** uppercase, 1.4px tracking
- **Nav labels:** uppercase, 0.65px tracking
- **Spacing base:** 4px (xxxs 4 / xxs 8 / xs 16 / sm 24 / md 32 / lg 48 / xl 64 / xxl 96 / super 128)

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, services, stats, gallery, reviews, CTA |
| `/services` | Services overview |
| `/services/ceramic-coating` | Highest-ticket page with 3D finish sphere |
| `/services/paint-protection-film` | PPF with 3D shield canvas |
| `/services/paint-correction` | Bridge service page |
| `/services/window-tinting` | Tint page |
| `/services/car-detailing` | Entry-level trust builder |
| `/gallery` | Before/after transformation gallery |
| `/about` | Team, Rajinder, shop, certifications |
| `/testimonials` | Social proof wall |
| `/faq` | Objection handling |
| `/consultation` | Multi-step guided intake |
| `/contact` | Direct contact fallback |

## 3D Strategy

- **Hero:** metallic particle field (R3F + `maath`) — deferred, no SSR
- **Ceramic coating page:** reflective PBR sphere (`MeshPhysicalMaterial` + `Environment preset="city"`)
- **PPF page:** glass transmission icosahedron (`MeshTransmissionMaterial`)
- All Three.js canvases loaded via `next/dynamic({ ssr: false })` and IntersectionObserver

## Getting Started

```bash
npm install
npm run dev
```

Requires Node.js 20+.

## Deployment

Deploy on [Vercel](https://vercel.com) — zero config with Next.js 15 App Router.

## Business Info

- **Studio:** Cosmo Car Customs
- **Location:** 1380 Cardiff Blvd Unit 9, Mississauga, ON L5S 1P9
- **Phone:** 905-971-8186 / 647-643-0187
- **Rating:** 4.9/5 across 250+ Google Reviews
- **Services:** Ceramic Coating, PPF, Paint Correction, Window Tinting, Detailing
