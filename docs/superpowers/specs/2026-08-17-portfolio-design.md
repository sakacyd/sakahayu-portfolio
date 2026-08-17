# Portfolio Website Design Specification

## Overview
A single-page, statically generated portfolio website for Sakahayu Pribadi, a Full Stack Software Engineer (recent IT graduate from Universitas Pancasila). The website adopts a "Modern Classic / Minimalist Renaissance" aesthetic, functioning as an elegant digital gallery for the user's projects and experience.

## Architecture & Tech Stack
- **Framework:** Next.js (latest stable)
- **Rendering:** Static Site Generation (SSG) with `output: 'export'`
- **Language:** TypeScript (preferred for Next.js) or JavaScript
- **Styling:** Vanilla CSS (or TailwindCSS, depending on implementation plan), focusing on utility classes and a strict design system.
- **Hosting:** Vercel
- **Contact Form Backend:** Formspree (POST endpoint for static HTML forms)

## Visual Design System (Modern Classic / Minimalist Renaissance)
- **Color Palette:**
  - Background: Muted parchment/off-white (e.g., `#F9F6F0`)
  - Primary Text: Ink brown/Charcoal (e.g., `#2C2A28`)
  - Accents: Muted gold/bronze (e.g., `#BFA15F`) for borders, hover states, and subtle highlights.
- **Typography:**
  - Headings: Elegant classic Serif font (e.g., *Playfair Display*, *Cinzel*, or *Cormorant Garamond*).
  - Body: Legible, clean Serif or Sans-serif (e.g., *Lora* or *Inter*) with generous line-height and letter-spacing.
- **Layout:**
  - High reliance on whitespace.
  - Symmetrical, framed content blocks resembling museum plaques.
  - Thin hairlines for dividers.
  - Subtle, smooth CSS transitions (no flashy animations, just elegant fades/color shifts).

## Page Structure (Single-Page Scrolling)
1. **Hero Section:**
   - Name: Sakahayu Pribadi
   - Title: Software Engineer - Full Stack
   - Brief intro emphasizing craftsmanship and engineering.
2. **About Me:**
   - Education: Universitas Pancasila, Informatics Engineering (Software Engineering).
   - Tech Stack: C++, Javascript, HTML, CSS, Java, PHP, Typescript, React.js, Next.js, Laravel, SQL, Git, Docker, Kubernetes.
3. **Experience:**
   - Internship: Software Engineer at PT. Indotech Energi Persada (March 2025 - June 2025).
4. **Exhibition (Projects):**
   - **Kovalen:** Matchmaking app for study partners (Flutter & Supabase).
   - **Indotech Teknisi App:** Technician schedule & reporting management (Flutter & Supabase).
5. **The Registry (Contact):**
   - Form: Name, Email, Message (Powered by Formspree, sending to `psakahayu@gmail.com`).
   - Links: LinkedIn (`/in/sakahayu-pribadi`), GitHub (`sakacyd`), Email.

## Dependencies & Constraints
- Must function purely as static HTML/CSS/JS without a backend database.
- Must be fully responsive (mobile-friendly), maintaining the museum aesthetic on small screens.

## Open Questions & Future Scope
- The Formspree endpoint URL needs to be created by the user and inserted into the environment variables / form action prior to final deployment.
