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
