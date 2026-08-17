### Task 3: Experience & Projects Redesign

**Files:**
- Modify: `components/experience.tsx`
- Modify: `components/projects.tsx`

**Interfaces:**
- Produces: Re-architected Experience and Projects components using the Double-Bezel Architecture and deep cinematic rhythm.

**Instructions:**
- **Experience**:
  - Instead of a standard Shadcn Card, implement a "Museum Plaque" Double-Bezel architecture. 
  - Massive whitespace (`py-24`).
  - Use an eyebrow tag "CAREER TRAJECTORY".
  - Outer shell `rounded-[2rem] bg-black/5 p-2`. Inner shell with `bg-background` and `shadow-inner`.
  - Content: PT. Indotech Energi Persada (March 2025 - June 2025).

- **Projects (Gallery Cards)**:
  - Remove standard card grids. Use a vertical cinematic layout where each project gets a massive, full-width Double-Bezel container.
  - Project 1: **Kovalen**. (Matchmaking study partners via swiping, Flutter, Supabase).
  - Project 2: **Indotech Teknisi App**. (Technician scheduling & logs, Flutter, Supabase).
  - Each project should be a split layout: `w-full md:w-1/2` for details (huge `font-playfair` title, Lora description) and `w-full md:w-1/2` for a placeholder abstract asset or UI mockup (since we don't have real app screenshots, use a stylized `div` with a radial gradient or muted color block representing the app's vibe).
  - Use `motion/react` `whileInView` for fade-ups.
