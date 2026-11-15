import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { org, results } from '../data/site';
import { t } from '../i18n';
import { abs } from '../lib/url';

export const GET: APIRoute = async ({ site }) => {
  const d = t('en');
  const posts = (await getCollection('articles')).sort((a, b) => +b.data.date - +a.data.date);
  const l = (p: string) => abs(p, site);
  const names = (g: Record<string, { name: string }>) => Object.values(g).map((x) => x.name).join('; ');
  const body = `# ${org.name} (${org.nameAm})

> NBE-licensed microfinance institution (license ${org.license}, issued ${org.licenseDate}) based in Addis Ababa, Ethiopia. Serves women, youth and farmers with loans, savings and financial literacy training from six branches: ${d.org.branches.join(', ')}. Website in English and Amharic (/am/).

- Head office: ${d.org.addressLine}, ${d.org.addressArea}, ${d.org.city}
- Phone: ${org.phones.map((p) => p.display).join(', ')}
- Email: ${org.email}
- 2025/2026 fiscal year: ${results.customers} customers, ETB ${results.deposits}M deposits, ETB ${results.loans}M loans disbursed, ETB ${results.assets}M total assets

## Pages
- [Loan services](${l('/loan-services/')}): ${names(d.products.loans)}
- [Saving services](${l('/saving-services/')}): ${names(d.products.savings)}
- [Financial literacy](${l('/financial-literacy-and-consultancy/')}): ${names(d.products.literacy)}
- [About](${l('/about/')})
- [Contact](${l('/contact/')})
- [Amharic home page](${l('/am/')})

## Notices (Amharic)
${posts.map((p) => `- [${p.data.titleEn}](${l(`/am/articles/${p.id}/`)})`).join('\n')}

## FAQ
${d.faq.map((f) => `- ${f.q} ${f.a}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
