import en from './en.json';

export type Lang = 'en' | 'am';
export type Dict = typeof en;
// am.json is produced by the Amharic translator; fall back to English until it exists.
const found = import.meta.glob<{ default: Dict }>('./am.json', { eager: true });
const am: Dict = Object.values(found)[0]?.default ?? en;

export const dicts: Record<Lang, Dict> = { en, am };
export const t = (lang: Lang) => dicts[lang];
/** Path of the same page in a given language ('/about/' -> '/am/about/'). */
export const lp = (lang: Lang, path: string) => (lang === 'en' ? path : `/am${path}`);
