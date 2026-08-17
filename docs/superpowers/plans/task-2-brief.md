### Task 2: Renaissance Design System

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx` (if needed to adjust fonts setup for Tailwind v4)

**Interfaces:**
- Produces: Custom CSS variables for shadcn to match the Renaissance theme (Parchment, Ink Brown, Gold).

- [ ] **Step 1: Update globals.css**
Modify the CSS to match the Renaissance theme:
- Parchment Background (`#F9F6F0`)
- Ink Brown text (`#2C2A28`)
- Gold primary color (`#BFA15F`)
Since Tailwind v4 is being used, update the `@theme` variables in `globals.css` or the appropriate CSS custom properties so that shadcn uses these colors. For instance:
- `--background: #F9F6F0`
- `--foreground: #2C2A28`
- `--primary: #BFA15F`
- `--primary-foreground: #2C2A28`
- `--muted: #EBE5D9` (darker parchment)
- `--muted-foreground: #5C5855` (lighter ink)
- `--border: #BFA15F` (gold)
Remove `.dark` variants entirely (force light mode for this aesthetic, or you can map dark mode to dark brown/gold if you prefer, but forcing light mode is easier).

- [ ] **Step 2: Add CSS base styling**
Add any base styling needed in `globals.css` for `body` (e.g. `font-family: var(--font-lora), serif;`), `h1` through `h6` (e.g. `font-family: var(--font-playfair), serif; font-weight: normal;`).
Ensure the font variables from `layout.tsx` are properly mapped to tailwind fonts so we can use `font-playfair` and `font-lora` utility classes. Tailwind v4 uses `@theme { --font-sans: var(--font-lora); }` etc.
