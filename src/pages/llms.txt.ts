import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { org, results, loans, savings, literacy, faqs } from '../data/site';
import { abs } from '../lib/url';

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('articles')).sort((a, b) => +b.data.date - +a.data.date);
  const l = (p: string) => abs(p, site);
  const body = `# ${org.name} (${org.nameAm})

> NBE-licensed microfinance institution (license ${org.license}, issued ${org.licenseDate}) based in Addis Ababa, Ethiopia. Serves women, youth and farmers with loans, savings and financial literacy training from six branches: ${org.branches.join(', ')}.

- Head office: ${org.address.line}, ${org.address.area}, ${org.address.city}
- Phone: ${org.phones.map((p) => p.display).join(', ')}
- Email: ${org.email}
- ${results.period}: ${results.customers} customers, ETB ${results.deposits} deposits, ETB ${results.loans} loans disbursed, ETB ${results.assets} total assets

## Pages
- [Loan services](${l('/loan-services/')}): ${loans.map((x) => x.name).join('; ')}
- [Saving services](${l('/saving-services/')}): ${savings.map((x) => x.name).join('; ')}
- [Financial literacy](${l('/financial-literacy-and-consultancy/')}): ${literacy.map((x) => x.name).join('; ')}
- [About](${l('/about/')})
- [Contact](${l('/contact/')})

## Notices (Amharic)
${posts.map((p) => `- [${p.data.titleEn}](${l(`/articles/${p.id}/`)})`).join('\n')}

## FAQ
${faqs.map((f) => `- ${f.q} ${f.a}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
