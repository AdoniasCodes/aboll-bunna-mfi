# Instructions

## Run locally
    cd /Users/eyoel/vibecoding/helper/aboll-bunna-mfi && pnpm install && pnpm dev   # http://localhost:4321 (Amharic: /am/)

## Build and check
    pnpm build && pnpm check:emdash
    python3 ~/.claude/skills/seo-title-score/scripts/check_dist.py dist --brand "Aboll Bunna"

## Preview deploy (GitHub Pages only, never Vercel)
Push to `main`. `.github/workflows/deploy.yml` builds with SITE/BASE from Pages and PUBLIC_NOINDEX=true.
Check: `gh run list -R AdoniasCodes/aboll-bunna-mfi -L 1`, then open https://adoniascodes.github.io/aboll-bunna-mfi/

## cPanel zip (when the client says yes)
    pnpm zip
Builds for https://abollbunnamfi.com (indexable, canonical, sitemap, robots, llms.txt, .htaccess with HTTPS,
security headers, caching, 404) and writes `release/aboll-bunna-site-YYYY-MM-DD.zip`.
Upload: cPanel > File Manager > public_html > back up and remove the WordPress files > Upload the zip > Extract.
Old WordPress article URLs keep working through redirect pages from `src/pages/[old].astro`.

## Change text
English: `src/i18n/en.json`. Amharic: `src/i18n/am.json` (same keys). New or changed Amharic goes through Gemini:
`python3 /Users/eyoel/vibecoding/scripts/llm/ask.py --via gemini --role amharic --timeout 1200 --file <chunk.json> "..."`.
A single 22KB request timed out once at 5 min; send sections under ~6KB (splitter used: scratchpad tr/split.py pattern:
meta+ui, home+org+faq, inner pages, loans, savings+literacy). Validate that keys match en.json and grep for em dashes.

## Add a news post
`src/content/articles/<english-slug>.md`, frontmatter: title (Amharic), titleEn (<=60 chars, contains "Aboll Bunna"),
titleShortAm (<=42 chars, from Gemini), description (Amharic excerpt), descriptionEn (120 to 160 chars, ends "."),
date, modified, oldSlug (unique). Body HTML/markdown. Pages appear at /articles/<slug>/ and /am/articles/<slug>/.

## Re-scrape the live site
WordPress REST API: `/wp-json/wp/v2/{pages,posts,media}?per_page=100`.
