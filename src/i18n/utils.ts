import type { Translations } from "./en.ts";
import en from "./en.ts";
import mn from "./mn.ts";
import nl from "./nl.ts";

export const LOCALES = ["mn", "en", "nl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "mn";

export const LOCALE_LABELS: Record<Locale, string> = {
  mn: "MN",
  en: "EN",
  nl: "NL",
};

export function isValidLocale(lang: string | undefined): lang is Locale {
  return LOCALES.includes(lang as Locale);
}

const dict: Record<Locale, Translations> = { mn, en, nl };

export function useTranslations(lang: Locale) {
  return function t(key: keyof Translations): string {
    return dict[lang][key] ?? dict["en"][key] ?? key;
  };
}
