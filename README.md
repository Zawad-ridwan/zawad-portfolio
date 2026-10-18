# Zawad's Portfolio

My personal developer portfolio: a single-page site with About, Skills, Journey, Projects and Contact sections, a light/dark theme toggle, and a working contact form.

**Live site:** https://zawad-portfolio-alpha.vercel.app

## Built with

- [Next.js](https://nextjs.org/) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- [Resend](https://resend.com/) for the contact form emails
- Deployed on [Vercel](https://vercel.com/)

## Features

- Responsive layout with a sticky navigation bar and mobile menu
- Dark and light themes (follows the system setting, remembers your choice)
- Skills grouped by area, a tabbed Journey section and project cards
- Contact form with spam protection (hidden honeypot field) and a copy-email button
- Resume button that only appears when `public/resume.pdf` exists
- Auto-generated link preview image for LinkedIn, WhatsApp and similar

## Project structure

    app/
      api/contact/route.ts   Contact form endpoint (sends email via Resend)
      layout.tsx             Fonts, metadata, theme script
      page.tsx               Page sections in order
      globals.css            Theme colours and base styles
      opengraph-image.tsx    Link preview image
      icon.tsx               Browser tab icon
    components/              Header, Hero, About, Skills, Journey, Projects, Contact, Footer
    lib/
      data.ts                All site content (edit this to change text, skills, projects, links)
      styles.ts              Shared button and link styles
    public/
      resume.pdf             My CV

## Run locally

Needs Node.js 20.9 or newer.

    npm install
    npm run dev

Open http://localhost:3000.

To check that the production build works before pushing:

    npm run build

## Environment variables

| Name             | Purpose                                  |
| ---------------- | ---------------------------------------- |
| `RESEND_API_KEY` | Sends contact form messages by email     |

For local use, copy `.env.example` to `.env.local` and fill in the key. On Vercel, add the same variable under **Settings > Environment Variables**.

With Resend's free sender (`onboarding@resend.dev`), emails are only delivered to the address used to sign up to Resend. That address must match `links.email` in `lib/data.ts`.

## Updating the content

Almost everything lives in `lib/data.ts`:

- `site`: name, role, location, intro and live URL
- `links`: email, GitHub, LinkedIn and resume path
- `skills`, `journey` and `projects`: the content of each section

To replace my CV, overwrite `public/resume.pdf` with the new file, keeping the same name.

Update the year in `components/Footer.tsx` each January.

## Deploy

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) (Framework preset: Next.js, root directory `./`).
3. Add `RESEND_API_KEY` as an environment variable.
4. Deploy.

Every push to `main` redeploys the site automatically.

## Contact

- Email: zawad.ridwan2002@gmail.com
- GitHub: [Zawad-ridwan](https://github.com/Zawad-ridwan)
- LinkedIn: [Zawad Ridwan](https://www.linkedin.com/in/zawad-ridwan-10b68928b/)
