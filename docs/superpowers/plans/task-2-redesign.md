### Task 2: Hero & About Redesign

**Files:**
- Modify: `components/hero.tsx`
- Modify: `components/about.tsx`

**Interfaces:**
- Produces: Re-architected Hero and About components using Editorial Split and Asymmetrical Bento patterns.

**Instructions:**
- **Hero (Editorial Split)**:
  - Container must use `min-h-[100dvh]` and breathe heavily (`py-32`).
  - Left Side (`w-full md:w-1/2`): Massive `font-playfair` typography.
    - Add a microscopic eyebrow badge before the main heading (`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-primary`).
    - Main heading: "Sakahayu Pribadi." Subtitle: "Software Engineer — Full Stack".
  - Right Side (`w-full md:w-1/2`): An elegantly framed image using the "Double-Bezel" technique.
    - Image source: `/images/sakahayu_portrait.jpg` (Use Next.js Image component, width 800, height 800, object-cover).
    - Wrap the image in a Double-Bezel: Outer shell `rounded-[2rem] bg-black/5 p-2`, Inner core `rounded-[calc(2rem-0.5rem)] overflow-hidden relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`.
  - Add motion: Use `motion/react` to fade up the typography and the image as they enter. `whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }}`.

- **About (Asymmetrical Bento)**:
  - Build an asymmetrical CSS Grid (`grid-cols-1 md:grid-cols-3 gap-6`).
  - Cell 1 (`md:col-span-2 md:row-span-2`): Main bio. "Fresh graduate from Universitas Pancasila, Informatics Engineering...". Double-Bezel card.
  - Cell 2 (`md:col-span-1`): Frameworks & Languages (C++, JS, TS, React, Next.js, Laravel).
  - Cell 3 (`md:col-span-1`): Mobile & Infra (Flutter, Supabase, Docker, Kubernetes).
  - Use `motion.div` for a scroll-reveal stagger.
