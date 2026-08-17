### Task 4: Build Components (Projects, Contact)

**Files:**
- Create: `components/projects.tsx`
- Create: `components/contact.tsx`

**Interfaces:**
- Produces: Projects and Contact modular React components to be imported in the main page later.

- [ ] **Step 1: Projects Component**
Create `components/projects.tsx` using shadcn `Card` for the exhibition.
Project 1: **Kovalen** (Matchmaking app for study partners, conceptualized with swiping. Engineered with Flutter and Supabase).
Project 2: **Indotech Teknisi App** (A comprehensive mobile tool for technicians to view schedules, manage tasks, and submit reporting logs. Engineered with Flutter and Supabase).
Frame them elegantly as museum exhibits.

- [ ] **Step 2: Contact Component**
Run: `npx shadcn@latest add button input textarea`
Wait, sometimes `textarea` is not an official standalone add command if it's included in another, but it usually is. 
Create `components/contact.tsx` with a `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">` wrapping the Shadcn `Input` (for Name and Email), `Textarea` (for Message), and `Button` (to Submit). 
Ensure the form is elegant and matches the theme.
Also add links below the form to GitHub (https://github.com/sakacyd), LinkedIn (https://www.linkedin.com/in/sakahayu-pribadi/), and Email (mailto:psakahayu@gmail.com).
