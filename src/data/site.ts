// All facts come from abollbunnamfi.com (pages + shareholder notices, scraped 2026-11-15).
import type { ImageMetadata } from 'astro';

export const org = {
  name: 'Aboll Bunna Microfinance S.C.',
  nameAm: 'አቦል ቡና ማይክሮ ፋይናንስ ተቋም አ.ማ',
  short: 'Aboll Bunna MFI',
  tagline: 'Together we thrive',
  email: 'hello@abollbunnamfi.com',
  phones: [
    { label: 'Head office', display: '+251 11 558 2258', tel: '+251115582258' },
    { label: 'Mobile', display: '+2519 05 11 11 05', tel: '+251905111105' },
    { label: 'Mobile', display: '+2519 05 11 11 04', tel: '+251905111104' },
  ],
  address: {
    line: 'Commercial Nominees Building, 1st floor, behind Dembel City Center',
    area: 'Kirkos Sub-City, Woreda 9, House No. 620',
    city: 'Addis Ababa',
    country: 'ET',
    lineAm: 'ደንበል ሲቲ ሴንተር ጀርባ፣ ኮሜርሻል ኖሚኒስ ህንጻ 1ኛ ፎቅ',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dembel+City+Center+Addis+Ababa',
  license: 'MFI/066/2024',
  licenseDate: '2024-04-16',
  tradeReg: 'MT/AA/3/0057177/2016',
  branches: ['Dembel (Addis Ababa)', 'Gofa (Addis Ababa)', 'Debre Birhan', 'Bahir Dar', 'Chacha', 'Debre Markos'],
};

// From the Board's 2025/2026 annual report (fiscal year ended 30 June 2026).
export const results = {
  period: '2025/2026 fiscal year',
  customers: '5,340',
  customersGrowth: '134%',
  deposits: '89.1M',
  depositsGrowth: '300%',
  loans: '81.6M',
  assets: '147.4M',
  branches: '6',
  paidCapital: '50.8M',
  subscribedCapital: '98.1M',
};

export const mission =
  'We are committed to providing innovative financial products and services while increasing community savings. By focusing on women, youth, and farmers, we aim to foster economic empowerment and sustainable growth.';
export const vision =
  'At Aboll Bunna Microfinance S.C., our vision is to become a leading, sustainable microfinance institution that fulfills the economic and social needs of our shareholders and the communities we serve.';
export const principles = [
  'Customer-centric approach',
  'Superior returns',
  'Professional excellence and innovation',
  'Ethical standards',
  'Corporate social responsibility',
];

type Product = { slug: string; name: string; text: string; img: ImageMetadata };
const imgs = import.meta.glob<{ default: ImageMetadata }>('../assets/img/**/*.{jpg,webp}', { eager: true });
const img = (p: string) => {
  const hit = Object.entries(imgs).find(([k]) => k.includes(`/img/${p}.`));
  if (!hit) throw new Error(`missing image ${p}`);
  return hit[1].default;
};

export const loans: Product[] = [
  { slug: 'sme-loan', name: 'Small and Medium Enterprise (SME) Loan', img: img('loans/sme'), text: 'Our SME loans are designed to support the growth and development of small and medium-sized enterprises. These loans provide the necessary capital to expand operations, purchase inventory, or invest in new technology.' },
  { slug: 'micro-business-loan', name: 'Micro Business Loan', img: img('loans/micro-business'), text: 'For entrepreneurs and small business owners, our micro business loans offer the financial support needed to start or expand a business. This product is ideal for those who need smaller amounts of capital to achieve their business goals.' },
  { slug: 'employee-consumer-loan', name: 'Consumer Loan (Employee)', img: img('loans/consumer-employee'), text: 'Our consumer loans for employees are tailored to meet personal financial needs such as education, medical expenses, or major purchases. These loans are designed to provide financial stability and peace of mind.' },
  { slug: 'non-employee-consumer-loan', name: 'Consumer Loan (Non-employee)', img: img('loans/consumer-non-employee'), text: 'We also offer consumer loans for individuals who are not employed, catering to various personal financial needs. This product is flexible and accessible to a broader audience.' },
  { slug: 'agriculture-loan', name: 'Agriculture Loan (Group and Individual SLLC)', img: img('loans/agriculture'), text: 'Our agricultural loans support farmers and agricultural businesses, helping them invest in equipment, seeds, and other necessary resources to boost productivity and growth.' },
  { slug: 'fixed-asset-loan', name: 'Fixed Asset Purchase Loan', img: img('loans/fixed-asset'), text: 'This loan product is designed for individuals and businesses looking to purchase fixed assets such as machinery, equipment, or property. It provides the capital needed to make significant investments that drive growth.' },
  { slug: 'housing-construction-loan', name: 'Housing and Construction Loan', img: img('loans/housing'), text: 'Our housing and construction loans provide the financial support needed for building, purchasing, or renovating homes. This product is ideal for individuals looking to invest in their living spaces.' },
  { slug: 'emergency-loan', name: 'Special Emergency Loan', img: img('loans/emergency'), text: 'Special emergency loans are designed to provide quick financial relief in times of unexpected crises or emergencies, ensuring that you have the support you need when you need it most.' },
  { slug: 'urban-agriculture-loan', name: 'Urban Agriculture Loan', img: img('loans/urban-agriculture'), text: 'Supporting urban farming initiatives, our urban agriculture loans provide the capital needed for urban farming projects, contributing to food security and sustainable development in urban areas.' },
  { slug: 'women-business-loan', name: 'Women Business Loan', img: img('loans/women-business'), text: 'Our women business loans are specifically designed to support female entrepreneurs, providing them with the financial resources needed to start or expand their businesses.' },
  { slug: 'special-property-loan', name: 'Special Property Loan', img: img('loans/special-property'), text: 'Designed for special property purchases, this loan product provides the necessary funding to acquire unique or high-value properties.' },
  { slug: 'short-term-investment-loan', name: 'Short-term Investment Loan', img: img('loans/short-term-investment'), text: 'These loans are ideal for individuals and businesses looking to make short-term investments. They provide quick access to capital with flexible repayment options.' },
  { slug: 'youth-loan', name: 'Youth Loan', img: img('loans/youth'), text: 'Our youth loans are aimed at young entrepreneurs and individuals looking to start their careers or businesses. This product supports the financial needs of the younger generation.' },
];

export const savings: Product[] = [
  { slug: 'compulsory-saving', name: 'Compulsory Saving', img: img('savings/compulsory'), text: 'Our compulsory saving product is designed for clients who take loans from us. A small portion of the loan amount is saved to ensure financial discipline and provide a safety net for our clients.' },
  { slug: 'individual-voluntary-saving', name: 'Individual Voluntary Saving', img: img('savings/individual'), text: 'This saving account is perfect for individuals who want to save regularly and have access to their funds when needed. It offers flexibility and attractive interest rates.' },
  { slug: 'organizational-saving', name: 'Organizational Saving', img: img('savings/organizational'), text: 'Designed for businesses and organizations, this saving product helps manage and grow corporate funds with ease and security.' },
  { slug: 'fixed-time-deposit', name: 'Fixed Time Deposit', img: img('savings/fixed-time'), text: 'Our fixed time deposit offers higher interest rates for clients who can lock in their funds for a specified period. This product is ideal for those looking to earn more from their savings.' },
  { slug: 'child-saving', name: 'Child Saving', img: img('savings/child'), text: "Our child saving account helps parents and guardians save for their children's future. This product offers attractive interest rates and terms that encourage long-term saving." },
  { slug: 'box-saving', name: 'Box Saving', img: img('savings/box'), text: 'This unique saving product encourages regular saving habits by providing a secure and accessible way to save money at home. Clients can deposit their savings into a provided savings box, which is periodically collected and credited to their account.' },
  { slug: 'women-saving', name: 'Women Saving', img: img('savings/women'), text: "Specifically designed for women, this saving product encourages financial independence and security. It offers favorable terms to support women's financial goals." },
  { slug: 'interest-free-saving', name: 'Interest-Free Saving', img: img('savings/interest-free'), text: 'For clients who prefer to save without earning interest, our interest-free saving account provides a secure way to store money in compliance with specific financial principles.' },
];

export const literacy: Product[] = [
  { slug: 'budgeting', name: 'Budgeting', img: img('literacy/budgeting'), text: 'Learn how to create and maintain a budget that helps you track your income, manage expenses, and save for future goals. Our resources include practical tips and tools for effective budgeting.' },
  { slug: 'saving', name: 'Saving', img: img('literacy/saving'), text: 'Discover the importance of saving and strategies to build your savings over time. We offer insights on setting savings goals, choosing the right saving products, and developing a saving habit.' },
  { slug: 'investing', name: 'Investing', img: img('literacy/investing'), text: 'Understand the basics of investing and how to grow your wealth through smart investment choices. Our resources cover investment options, risk management, and long-term planning.' },
  { slug: 'debt-management', name: 'Debt Management', img: img('literacy/debt'), text: 'Learn how to manage and reduce debt with our practical advice and resources. We provide strategies for paying off debt, understanding interest rates, and improving your credit score.' },
  { slug: 'financial-planning', name: 'Financial Planning', img: img('literacy/planning'), text: 'Get insights into comprehensive financial planning to achieve your short-term and long-term financial goals. Our resources help you plan for retirement, education, and major life events.' },
  { slug: 'entrepreneurship', name: 'Entrepreneurship', img: img('literacy/entrepreneurship'), text: 'For aspiring entrepreneurs, we offer resources to help you start, manage, and grow your business. Learn about business planning, funding options, and effective management practices.' },
  { slug: 'risk-management', name: 'Risk Management', img: img('literacy/risk'), text: 'Understand how to protect your finances through effective risk management. Our resources cover insurance, emergency funds, and strategies to mitigate financial risks.' },
];

export const services = [
  { href: '/loan-services/', name: 'Loans', img: img('services/loans'), text: 'Tailored loans for small businesses, agriculture, housing and personal needs. Thirteen loan products in all.', cta: 'See loan products' },
  { href: '/saving-services/', name: 'Savings', img: img('services/savings'), text: 'Flexible savings accounts with competitive interest rates, from child saving to fixed time deposits.', cta: 'See saving products' },
  { href: '/financial-literacy-and-consultancy/', name: 'Training and consulting', img: img('services/literacy'), text: 'Workshops and resources on budgeting, saving, debt and running a business, so you decide with confidence.', cta: 'See training topics' },
];

export const faqs = [
  { q: 'What types of loans do you offer?', a: 'We offer 13 loan products, including SME and micro business loans, agriculture and urban agriculture loans, housing and construction loans, consumer loans for employees and non-employees, women business loans, youth loans and special emergency loans.' },
  { q: 'How can I open a savings account with Aboll Bunna Microfinance?', a: 'Opening a savings account is simple. Visit our nearest branch or call us to get started.' },
  { q: 'Who can benefit from your services?', a: 'Our services are tailored for women, youth, and farmers in both urban and rural settings, but we welcome all individuals looking to improve their financial wellbeing.' },
  { q: 'What is your interest rate for your loans?', a: 'Interest rates depend on the type of loan, the payment period and other factors. Call us on +251 11 558 2258 for the rate that applies to you.' },
  { q: 'Where are your branches?', a: 'We have six branches: Dembel and Gofa in Addis Ababa, plus Debre Birhan, Bahir Dar, Chacha and Debre Markos in the Amhara region. Our head office is behind Dembel City Center, Addis Ababa.' },
  { q: 'Is Aboll Bunna Microfinance licensed?', a: 'Yes. Aboll Bunna Microfinance S.C. is licensed by the National Bank of Ethiopia under microfinance license No. MFI/066/2024, issued on 16 April 2024.' },
];
