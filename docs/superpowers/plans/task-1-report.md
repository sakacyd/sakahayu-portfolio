**Status:** DONE

**Commits Made:**
- feat: init nextjs and shadcn

**Test Summary:**
`npm run build` ran successfully, generating static pages and resolving tailwindcss-animate correctly.

**Concerns / Notes:**
- During `npx shadcn@latest init`, it was blocked due to global npm constraints against `--allow-scripts` in project scope, so the project's components were manually initialized via `shadcn add` and missing dependencies (like `tailwindcss-animate`) were manually installed to fix build errors.
- `output: 'export'` has been applied.
- The fonts (Playfair Display and Lora) have been added via Next/Google Fonts to `layout.tsx` and variables set in `globals.css` using Tailwind v4 syntax.
- Formspree was noted as a constraint but will be utilized in later tasks where the actual form components are authored.
