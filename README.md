# Koo Soyeon — Portfolio

Personal portfolio website for Koo Soyeon, Senior Environmental Analyst. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Before Publishing

Search the codebase for `TODO` comments and complete each one:

| File | What to supply |
|------|---------------|
| `components/Contact.tsx` | Replace `LINKEDIN_URL` constant with the real LinkedIn profile URL |

```bash
# Find all placeholders
grep -r "TODO" --include="*.tsx" .
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repository — Vercel auto-detects Next.js, no configuration needed
4. Deploy

### Environment variables

No environment variables are required.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   ├── page.tsx         # Page composition
│   └── globals.css      # Base styles, scrollbar, selection
├── components/
│   ├── Navigation.tsx   # Fixed header with scroll transparency
│   ├── Hero.tsx         # Full-viewport hero section
│   ├── WaveformAnimation.tsx  # Canvas air-quality waveform
│   ├── About.tsx        # Professional summary
│   ├── Expertise.tsx    # Four expertise areas
│   ├── TechnicalSkills.tsx   # Laboratory methods (ICP, GC, AA, GC-MS)
│   ├── Certifications.tsx    # Certification list
│   └── Contact.tsx      # LinkedIn CTA
├── public/              # Static assets (add profile photo here if desired)
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Adding a Profile Photo

Place the image at `public/profile.jpg` (or `.png`, `.webp`). Then add an `<Image>` component wherever desired — the About section is a natural location.
