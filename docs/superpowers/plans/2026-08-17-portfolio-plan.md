# Portfolio Website Implementation Plan (with shadcn/ui)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Build a single-page, statically exported Next.js portfolio with a Modern Classic Renaissance aesthetic, utilizing shadcn/ui for the design system and Formspree for the contact form.

**Architecture:** Next.js App Router (static export), Tailwind CSS, shadcn/ui primitives.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui.

## Global Constraints

- Must function purely as static HTML/CSS/JS (`output: 'export'`).
- Use shadcn/ui for components (Card, Button, Input, Textarea, Badge).
- Must use Formspree for the contact form.
- Use Playfair Display and Lora from `next/font/google`.

---

### Task 1: Next.js Setup & Shadcn Init

**Files:**
- Create: `package.json`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `components.json`

**Interfaces:**
- Produces: A configured Next.js project with Tailwind and shadcn initialized.

- [ ] **Step 1: Initialize project**
Run: `npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir=false --import-alias="@/*" --use-npm --force`

- [ ] **Step 2: Configure Next.js for static export**
Modify `next.config.ts`:
```typescript
import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
export default nextConfig;
```

- [ ] **Step 3: Initialize Shadcn UI**
Run: `npx shadcn@latest init --defaults`

- [ ] **Step 4: Verify setup**
Run: `npm run build`

### Task 2: Renaissance Design System

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: Custom CSS variables for shadcn to match the Renaissance theme (Parchment, Ink Brown, Gold).

- [ ] **Step 1: Update globals.css**
Modify the `--background` and `--foreground` variables to match Parchment (`#F9F6F0`) and Ink (`#2C2A28`). 
Set `--primary` to Gold (`#BFA15F`) and `--primary-foreground` to Ink. 
Set `--muted` to a darker parchment and `--muted-foreground` to a lighter ink.
Apply `.dark` variants or remove them if strictly light-mode.

- [ ] **Step 2: Add Google Fonts**
In `app/layout.tsx`, load `Playfair_Display` and `Lora` and apply `font-lora` to body, and configure `font-playfair` in Tailwind (or via CSS variables).

### Task 3: Build Components (Hero, About, Experience)

**Files:**
- Create: `components/hero.tsx`, `components/about.tsx`, `components/experience.tsx`

- [ ] **Step 1: Hero Component**
Use standard HTML semantic tags combined with Tailwind typography classes. Include the Playfair font for the name.

- [ ] **Step 2: About Component**
Add shadcn `Badge` for the skills.
Run: `npx shadcn@latest add badge`
Create `about.tsx` using `Badge` to list tech stack.

- [ ] **Step 3: Experience Component**
Create `experience.tsx` using shadcn `Card` (Card, CardHeader, CardTitle, CardDescription, CardContent).
Run: `npx shadcn@latest add card`

### Task 4: Build Components (Projects, Contact)

**Files:**
- Create: `components/projects.tsx`, `components/contact.tsx`

- [ ] **Step 1: Projects Component**
Create `projects.tsx` using shadcn `Card` for the "Kovalen" and "Indotech Teknisi App" projects.

- [ ] **Step 2: Contact Component**
Run: `npx shadcn@latest add button input textarea`
Wait, shadcn uses `textarea` natively or has a `Textarea` component.
Run: `npx shadcn@latest add button input textarea`
Create `contact.tsx` with a `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">` wrapping the Shadcn Input, Textarea, and Button.

### Task 5: Page Assembly

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Combine all components**
Import and stack Hero, About, Experience, Projects, and Contact in `app/page.tsx` with generous `gap` and `Separator` (shadcn).
Run: `npx shadcn@latest add separator`

- [ ] **Step 2: Final Verify build**
Run `npm run build`. Expected: Success.
