### Task 3: Security & Code Audit (The Sentinel)

**Skills to Apply:** 
- `penetration-testing-with-strix`
- `ci-security-scanning-with-strix`

**Scope:** 
Review `package.json`, `components/contact.tsx`, and overall code hygiene.

**Instructions:**
1. Since this is a static site export (`output: 'export'`), the attack surface is minimal. 
2. Check for exposed secrets or hardcoded tokens.
3. Verify that the Formspree endpoint doesn't expose sensitive info and handles state securely (no XSS on success messages).
4. Apply the Strix tools if applicable to look for web vulnerabilities.
5. Fix any direct security vulnerabilities and commit (`fix(security): patch vulnerabilities`).
6. Write a brief summary to `docs/superpowers/plans/audit-security-report.md`.
