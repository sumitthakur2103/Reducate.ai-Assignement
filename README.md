# JG University — Modern Landing Page

A production-grade, responsive landing page built for the **Reducate.ai** internship assignment. This project reimagines a university/education platform with a bold **deep navy + gold** aesthetic, premium typography, and polished Framer Motion animations.

## 🚀 Live Demo

https://jg-universirt.vercel.app/

## 🎥 Demo Video

Watch Demo Video

## 📸 Screenshots

### Desktop View

./public/screenshots/1.png
./public/screenshots/2.png
./public/screenshots/3.png
./public/screenshots/4.png
./public/screenshots/5.png
./public/screenshots/6.png

### Mobile View

./public/screenshots/7.png
./public/screenshots/8.png
./public/screenshots/9.png
./public/screenshots/10.png
./public/screenshots/11.png
./public/screenshots/12.png
./public/screenshots/13.png

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display + DM Sans

## Features

- Sticky frosted-glass navbar with mobile hamburger menu
- Animated hero with gradient mesh and floating blobs
- About section with scroll-triggered animated stat counters
- 8 program cards with hover lift + glow effects
- Auto-advancing testimonials carousel
- Full-width CTA banner
- Multi-column footer with social links

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
/app
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Main page composing all sections
  globals.css      # Tailwind + custom utilities
/components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Programs.tsx
  Testimonials.tsx
  CTA.tsx
  Footer.tsx
  SectionReveal.tsx
  AnimatedCounter.tsx
/public
  logo.svg
```

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables required for the static landing page.

## Demo Video Checklist

When recording your 2–5 min walkthrough, cover:

- [ ] Desktop layout (1280px+) — hero, programs grid, carousel
- [ ] Mobile layout (375px) — hamburger menu, stacked grids
- [ ] Scroll animations (`whileInView` reveals, stat counters)
- [ ] Hover states on cards, buttons, and links
- [ ] Testimonials auto-scroll and manual navigation

## License

Built as an internship submission. © 2026
