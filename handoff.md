# Handoff

**Phase:** v1 built and deployed as a GitHub Pages preview (2026-11-15). Waiting on Eyoel's review before pitching.

## Done
- Astro 7 static site, 8 pages + 3 Amharic notices + 404 + redirect stubs for old WP URLs.
- SEO: titles/descriptions scored 86 to 96 (mean 90.8, 0 hard fails), JSON-LD (FinancialService, Breadcrumb,
  FAQPage, OfferCatalog with LoanOrCredit/DepositAccount, NewsArticle, Course), sitemap, robots, llms.txt, OG image.
- Images optimised to responsive WebP by astro:assets (hero 468KB to 44-138KB).

## Key files
- Copy + facts: `src/data/site.ts`. Notices: `src/content/articles/`. Styles: `src/styles/global.css`.
- Repo: github.com/AdoniasCodes/aboll-bunna-mfi. Preview: https://adoniascodes.github.io/aboll-bunna-mfi/

## Open questions for the client
- Contact form uses mailto (opens the visitor's mail app). Swap for a form service or Telegram if they want inbox delivery.
- Head office map pin (only "behind Dembel City Center" known), real board member names/photos, partner logos,
  social media links: none exist on the live site.
- Photos are the old site's stock images. Real branch/customer photos would lift trust a lot.
- Is hello@abollbunnamfi.com a working inbox?

## Next steps
- Eyoel reviews preview, then pitch. On approval: point domain, production build, Search Console.
