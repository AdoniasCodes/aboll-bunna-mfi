// Prefix internal links with the deploy base (GitHub Pages serves under /repo/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => base + path;
export const abs = (path: string, site: URL | undefined) => new URL(u(path), site).href;
