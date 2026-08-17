### Task 1: Design System & Styling Update

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: CSS Noise filter, adjusted color palette (richer parchment, deeper espresso), global padding adjustments, and ensures `framer-motion` (or `motion/react`) readiness.

**Instructions:**
- Read `high-end-visual-design` rules.
- Add a subtle CSS noise/film-grain overlay to the entire page (`opacity-[0.03]`). This can be done by adding a fixed, pointer-events-none div in `layout.tsx` or using a CSS pseudo-element on the body.
- Deepen the background to a warmer cream/parchment `#FDFBF7` and the text to an espresso `#1A1714`. (Update `@theme` in `globals.css`).
- Ensure `Playfair Display` and `Lora` are preserved but use them appropriately: Lora for body text, Playfair for massive headings.
- Ensure the layout breathes heavily: minimum `py-24` or `py-32` for sections.
