# Instructions

## Run locally
    cd /Users/eyoel/vibecoding/helper/aboll-bunna-mfi && pnpm install && pnpm dev   # http://localhost:4321

## Build and check
    pnpm build && pnpm check:emdash
    python3 ~/.claude/skills/seo-title-score/scripts/check_dist.py dist --brand "Aboll Bunna"

## Deploy (preview)
Push to `main`. `.github/workflows/deploy.yml` builds with SITE/BASE from GitHub Pages and PUBLIC_NOINDEX=true.
Check: `gh run list -R AdoniasCodes/aboll-bunna-mfi -L 1` then open https://adoniascodes.github.io/aboll-bunna-mfi/

## Production build (when the client signs)
`pnpm build` with no env gives site https://abollbunnamfi.com, base /, indexable, sitemap + robots + llms.txt.
Old WordPress article URLs (Amharic slugs) get redirect stubs from `src/pages/[old].astro`.
Add server 301s on the real host for the same paths if it supports them.

## Add a news post
Add `src/content/articles/<english-slug>.md` with frontmatter: title (Amharic), titleEn (<=60 chars, contains
"Aboll Bunna"), description (Amharic excerpt), descriptionEn (120 to 160 chars, ends with "."), date, modified,
oldSlug (any unique string if it never existed on WordPress). Body is HTML or markdown.

## Re-scrape the live site
WordPress REST API: `/wp-json/wp/v2/{pages,posts,media}?per_page=100`. Content mapping lives in `src/data/site.ts`.
