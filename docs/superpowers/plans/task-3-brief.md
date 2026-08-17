### Task 3: Build Components (Hero, About, Experience)

**Files:**
- Create: `components/hero.tsx`
- Create: `components/about.tsx`
- Create: `components/experience.tsx`

**Interfaces:**
- Produces: Three modular React components to be imported in the main page later.

- [ ] **Step 1: Hero Component**
Create `components/hero.tsx`.
Use standard HTML semantic tags combined with Tailwind typography classes. 
Name: Sakahayu Pribadi
Title: Software Engineer &mdash; Full Stack
Ensure you use the Playfair font class (e.g. `font-playfair`) for the heading and it looks elegant and centered. Use `text-primary` (gold) for the subtitle.

- [ ] **Step 2: About Component**
Run: `npx shadcn@latest add badge`
Create `components/about.tsx`. Detail the education (Universitas Pancasila, Informatics Engineering / Software Engineering) and use the `Badge` component to list the tech stack (C++, Javascript, Typescript, React.js, Next.js, Laravel, SQL, Flutter, Supabase). Add a subtle background color or parchment styling if appropriate.

- [ ] **Step 3: Experience Component**
Run: `npx shadcn@latest add card`
Create `components/experience.tsx`. Detail the internship at PT. Indotech Energi Persada (March 2025 - June 2025). Use the `Card`, `CardHeader`, `CardTitle`, `CardDescription`, and `CardContent` components to frame the experience like a museum plaque.
