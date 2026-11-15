# Handoff

**Phase:** v2 (bilingual redesign) live on the GitHub Pages preview, 2026-11-15. Waiting on Eyoel's review before pitching.

## Done
- v2 redesign after Eyoel's feedback: Archivo block type, cleaner banking layout (top bar with license + phone +
  language switch, hero with deposit card, quick-action tiles, who-we-serve, results band, notices, FAQ, CTA panel),
  product pages with a sticky index and swipeable chips on mobile.
- Bilingual: English `/`, Amharic `/am/`, hreflang pairs, language switch on every page. am.json translated by Gemini,
  keys checked against en.json, no em dashes.
- cPanel package: `pnpm zip` > `release/aboll-bunna-site-2026-11-15.zip` (6.4MB, 172 files, .htaccess included).
- SEO: English titles 86 to 96/100, JSON-LD, sitemap (both languages), robots, llms.txt, old WP URL redirects.

## Open
- Gemini proofread of am.json NOT done: agy timed out at 20 min and 9 min (2026-11-15 night). Re-run when it answers,
  in sections under ~6KB (see instructions.md). Also ask Gemini for a short title (<=42 chars) for the board report
  notice (`titleShortAm` in its frontmatter); its Amharic page title is 97 chars now.
- Native Amharic speaker should read /am/ once before the pitch.

## Key files
- Strings: `src/i18n/en.json`, `src/i18n/am.json`. Facts/images: `src/data/site.ts`. Pages: `src/views/*.astro`
  (thin routes in `src/pages/` and `src/pages/am/`). Styles: `src/styles/global.css`. Notices: `src/content/articles/`.
- Repo github.com/AdoniasCodes/aboll-bunna-mfi. Preview https://adoniascodes.github.io/aboll-bunna-mfi/ (noindex).

## Questions for the client
- Contact form opens the visitor's mail app (mailto). Want inbox delivery or Telegram instead?
- Head office map pin, board names/photos, partner logos, social links, real branch photos.
- Is hello@abollbunnamfi.com a working inbox?
