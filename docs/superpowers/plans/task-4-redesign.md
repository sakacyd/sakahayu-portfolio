### Task 4: Contact & Page Assembly

**Files:**
- Modify: `components/contact.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: Re-architected Contact form using Double-Bezel and Button-in-Button patterns, and the final page assembly with massive whitespace.

**Instructions:**
- **Contact Form**:
  - Encapsulate the `<form>` inside a Double-Bezel structure (`bg-black/5` outer, `bg-background` inner).
  - Use `font-lora` for inputs.
  - Apply the "Button-in-Button" Trailing Icon pattern to the Submit button:
    - Button: `rounded-full px-6 py-3 bg-primary text-primary-foreground`.
    - Inner trailing icon: An arrow (`→` or SVG) inside its own `w-8 h-8 rounded-full bg-black/10` nested flush with the right padding.
  - Animate entry with `motion/react`.

- **Page Assembly (`app/page.tsx`)**:
  - Remove the Shadcn `<Separator />` components. High-end editorial design uses massive whitespace instead of lines. Replace them with huge vertical gaps (e.g. `gap-32` or `py-32`).
  - Ensure the outermost `main` container is unconstrained or uses a very wide max-width (`max-w-[1400px]`) rather than a narrow `max-w-4xl`. Let the components dictate their own asymmetry.
  - Final test: `npm run build`.
