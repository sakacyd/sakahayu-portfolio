# Task 4 Report

## Status
DONE

## Overview
- Successfully created the `Projects` component using Shadcn `Card` and `Badge` components. The exhibits are styled elegantly with the `Playfair Display` and `Lora` fonts.
- Successfully created the `Contact` component wrapping a form pointing to `https://formspree.io/f/YOUR_FORM_ID` using Shadcn `Input`, `Textarea`, and `Button`. Due to `lucide-react` versioning issues missing `Github` and `Linkedin` exports, inline SVG icons were used to ensure stability and successful builds.
- Added appropriate semantic tags and applied Tailwind utility classes for elegant layouts matching the overarching theme.

## Testing
- `npm run build` executed successfully without any TypeScript or styling errors.

## Commits
- `feat: build projects and contact components` (Hash: 8696ee2)

## Concerns
- Replaced the brand icons with inline SVGs instead of importing from `lucide-react` as the specific `lucide-react` version used lacks the `Github` and `Linkedin` brand icon exports. This avoids build errors.
