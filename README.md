# Zawad's Portfolio

My personal developer portfolio: It's a single-page website with About, Skills, Journey, Projects and Contact sections, a light/dark theme toggle, and a working contact form.

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
- Resume button that contains my CV/Resume
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

