import type { Locale } from '../i18n/utils.ts';

const parseTime = (t: string) => {
  const match = t.match(/^(\d{1,2}):(\d{2})$/);
  return match ? { h: parseInt(match[1]), m: match[2] } : null;
};

// Mongolian locale data isn't bundled with Deno's ICU, so `toLocaleDateString('mn')`
// falls back to English. Format Mongolian dates by hand: "2026 оны 11-р сарын 12".
export const formatDate = (d: string, lang: Locale = 'en') => {
  const date = new Date(d + 'T00:00:00');
  if (isNaN(date.getTime())) return d;
  if (lang === 'mn') {
    return `${date.getFullYear()} оны ${date.getMonth() + 1}-р сарын ${date.getDate()}`;
  }
  return date.toLocaleDateString(lang === 'nl' ? 'nl-NL' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// English uses 12-hour time (2:05 PM); Mongolian and Dutch use 24-hour time (14:05).
export const formatTime = (t: string, lang: Locale = 'en') => {
  if (/AM|PM/i.test(t)) return t;
  const time = parseTime(t);
  if (!time) return t;
  const { h, m } = time;
  if (lang === 'en') return `${h % 12 || 12}:${m} ${h >= 12 ? 'PM' : 'AM'}`;
  return `${String(h).padStart(2, '0')}:${m}`;
};
