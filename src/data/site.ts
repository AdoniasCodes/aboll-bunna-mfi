// Non-text facts (all text lives in src/i18n/*.json). Sources: abollbunnamfi.com pages and shareholder notices, 2026-11-15.
import type { ImageMetadata } from 'astro';

export const org = {
  name: 'Aboll Bunna Microfinance S.C.',
  nameAm: 'አቦል ቡና ማይክሮ ፋይናንስ ተቋም አ.ማ',
  email: 'hello@abollbunnamfi.com',
  phones: [
    { kind: 'headOffice', display: '+251 11 558 2258', tel: '+251115582258' },
    { kind: 'mobile', display: '+2519 05 11 11 05', tel: '+251905111105' },
    { kind: 'mobile', display: '+2519 05 11 11 04', tel: '+251905111104' },
  ] as const,
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dembel+City+Center+Addis+Ababa',
  license: 'MFI/066/2024',
  licenseDate: '2024-04-16',
  tradeReg: 'MT/AA/3/0057177/2016',
  subscribed: '98,100,000',
  paidUp: '50,800,000',
};

// Board of Directors' 2025/2026 annual report (fiscal year ended 30 June 2026).
export const results = { customers: '5,340', deposits: '89.1', loans: '81.6', assets: '147.4', branches: '6', loanProducts: '13' };

const imgs = import.meta.glob<{ default: ImageMetadata }>('../assets/img/**/*.{jpg,webp}', { eager: true });
export const img = (p: string) => {
  const hit = Object.entries(imgs).find(([k]) => k.includes(`/img/${p}.`));
  if (!hit) throw new Error(`missing image ${p}`);
  return hit[1].default;
};

const list = (group: string, pairs: [string, string][]) => pairs.map(([slug, file]) => ({ slug, img: img(`${group}/${file}`) }));

export const loans = list('loans', [
  ['sme-loan', 'sme'], ['micro-business-loan', 'micro-business'], ['employee-consumer-loan', 'consumer-employee'],
  ['non-employee-consumer-loan', 'consumer-non-employee'], ['agriculture-loan', 'agriculture'], ['fixed-asset-loan', 'fixed-asset'],
  ['housing-construction-loan', 'housing'], ['emergency-loan', 'emergency'], ['urban-agriculture-loan', 'urban-agriculture'],
  ['women-business-loan', 'women-business'], ['special-property-loan', 'special-property'],
  ['short-term-investment-loan', 'short-term-investment'], ['youth-loan', 'youth'],
]);
export const savings = list('savings', [
  ['compulsory-saving', 'compulsory'], ['individual-voluntary-saving', 'individual'], ['organizational-saving', 'organizational'],
  ['fixed-time-deposit', 'fixed-time'], ['child-saving', 'child'], ['box-saving', 'box'], ['women-saving', 'women'],
  ['interest-free-saving', 'interest-free'],
]);
export const literacy = list('literacy', [
  ['budgeting', 'budgeting'], ['saving', 'saving'], ['investing', 'investing'], ['debt-management', 'debt'],
  ['financial-planning', 'planning'], ['entrepreneurship', 'entrepreneurship'], ['risk-management', 'risk'],
]);

// Index-aligned with dict.services
export const services = [
  { href: '/loan-services/', img: img('services/loans'), icon: 'banknote' },
  { href: '/saving-services/', img: img('services/savings'), icon: 'wallet' },
  { href: '/financial-literacy-and-consultancy/', img: img('services/literacy'), icon: 'cap' },
] as const;

// Index-aligned with dict.home.serve
export const segments = [
  { href: '/loan-services/#women-business-loan', img: img('loans/women-business') },
  { href: '/loan-services/#youth-loan', img: img('loans/youth') },
  { href: '/loan-services/#agriculture-loan', img: img('loans/agriculture') },
];
