### Task 5: Page Assembly

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: The final assembled main page combining all components.

- [ ] **Step 1: Combine all components**
Run: `npx shadcn@latest add separator`
Modify `app/page.tsx` to import and stack Hero, About, Experience, Projects, and Contact.
Use the `<Separator />` component between the main sections (About, Experience, Projects, Contact) to maintain the clean, partitioned museum layout. Wrap the content in a `main` tag with Tailwind classes like `max-w-4xl mx-auto px-6 py-12` to constrain the width and add padding.

- [ ] **Step 2: Final Verify build**
Run `npm run build`. Expected: Success.
