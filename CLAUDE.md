# Aboll Bunna Microfinance website (proposal rebuild)

Workspace rules (em dashes, pnpm, git identity, phone format) live in `/Users/eyoel/vibecoding/CLAUDE.md`.

- Client: Aboll Bunna Microfinance S.C. (NBE license MFI/066/2024), current live site abollbunnamfi.com (WordPress).
  This is a speculative redesign Eyoel is pitching to them. Commercial: SEO and security rules apply.
- Content is a 1:1 copy of the live site, with placeholders dropped (lorem partners, "Board Member 1..4", fake
  +251 911 111 111 phone, WP sample "Articles" page). Real phones came from their own shareholder notices.
- Amharic notices stay word for word as the client published them. Never rewrite or translate their body.
- Brand colours come from the logo (roast brown, ochre bean, red arrows), not the old site's pink-red #DD183B.
- Stats on the site come only from the Board's 2025/2026 annual report post. Do not inflate reported figures.
- Bilingual: English at `/`, Amharic at `/am/`. Every string lives in `src/i18n/en.json` + `am.json` (same keys).
  Amharic copy comes from Gemini (amharic role), never written by Claude. Notices are Amharic only; their
  `/am/articles/...` URL is canonical for both language versions.
- Type: Archivo (block, slightly expanded headings) + Noto Sans Ethiopic. Eyoel rejected Bricolage Grotesque/Mulish
  (2026-11-15): wants a solid financial-institution look, clean and modern, no 3D.
- Hosting: GitHub Pages preview only. NEVER Vercel. If the client buys, deliver a cPanel zip (`pnpm zip`).
- GitHub Pages build is a preview: noindex + Disallow. The production build (no env) is indexable with canonical
  https://abollbunnamfi.com.
