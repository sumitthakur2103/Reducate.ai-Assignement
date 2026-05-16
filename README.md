# JG University — Modern Landing Page

A production-grade, responsive landing page built for the **Reducate.ai** internship assignment. This project reimagines a university/education platform with a bold **deep navy + gold** aesthetic, premium typography, and polished Framer Motion animations.

## 🚀 Live Demo

https://jg-universirt.vercel.app/

## 🎥 Demo Video

Watch Demo Video

## 📸 Screenshots

### Desktop View
<img width="1919" height="1079" alt="1" src="https://github.com/user-attachments/assets/429f18cf-09bd-44c7-a0c7-84e887ca7693" />
<img width="1919" height="1075" alt="2" src="https://github.com/user-attachments/assets/1de1c3c0-61c6-4f5f-914a-457fc9399ed7" />
<img width="1919" height="1079" alt="3" src="https://github.com/user-attachments/assets/cb0e83a4-6cda-4fba-940d-854b47370fe5" />
<img width="1919" height="1079" alt="4" src="https://github.com/user-attachments/assets/9990b673-2c80-4a51-ac53-6e3aa17c0714" />
<img width="1919" height="1079" alt="5" src="https://github.com/user-attachments/assets/da2b6d1c-c691-4e5e-acc8-b0fbf566d38b" />
<img width="1919" height="1079" alt="6" src="https://github.com/user-attachments/assets/cd1ef242-4b4a-4ab0-8c25-c147557441d1" />

### Mobile View
<img width="720" height="1600" alt="7" src="https://github.com/user-attachments/assets/efbf3e45-2a66-42a6-beb9-010b70888a5b" />
<img width="720" height="1600" alt="8" src="https://github.com/user-attachments/assets/970ea150-ec72-4b49-9366-ddc689cc2a35" />
<img width="720" height="1600" alt="9" src="https://github.com/user-attachments/assets/8fe4ee28-993e-4391-8579-1323cc35cb25" />
<img width="720" height="1600" alt="10" src="https://github.com/user-attachments/assets/baba1d34-6e8e-4189-9715-4c45cb523fe1" />
<img width="720" height="1600" alt="11" src="https://github.com/user-attachments/assets/6c9ee829-ea74-4d27-8b7d-0248a2e60b5c" />
<img width="720" height="1600" alt="12" src="https://github.com/user-attachments/assets/1ba9588f-a437-4ab3-a465-404fdadb6ad2" />
<img width="720" height="1600" alt="13" src="https://github.com/user-attachments/assets/71172d69-1c7a-437e-b436-19db86085f1a" />


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
