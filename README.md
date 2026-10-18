# Zawad's portfolio

Next.js (App Router) + Tailwind CSS.

## Run locally

Needs Node.js 20.9 or newer.

    npm install
    npm run dev

Open http://localhost:3000.

## Before you publish

- Put your CV at `public/resume.pdf` (the Resume button appears once it exists).
- Set `site.url` in `lib/data.ts` to your live address.
- Contact form: create a free account at resend.com with the same email as `links.email`,
  make an API key, and put it in `.env.local` as `RESEND_API_KEY=...`
  (copy `.env.example`). Add the same variable in your host's settings when you deploy.
- Update the year in `components/Footer.tsx` each January.

## Deploy

Push to GitHub, import the repo at vercel.com, add `RESEND_API_KEY`, and deploy.
