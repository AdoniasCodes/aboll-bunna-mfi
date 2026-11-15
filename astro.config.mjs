import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE/BASE are set by the GitHub Pages workflow; production defaults to the real domain.
export default defineConfig({
  site: process.env.SITE || 'https://abollbunnamfi.com',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !/%E1%|[ሀ-፿]/i.test(p) })],
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: true },
});
