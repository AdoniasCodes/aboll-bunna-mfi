import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site).href;
  return new Response(`User-agent: *\n${noindex ? 'Disallow: /' : 'Allow: /'}\n\nSitemap: ${sitemap}\n`);
};
