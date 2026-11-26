import type { Translations } from "./en.ts";
import en from "./en.ts";
import mn from "./mn.ts";
import nl from "./nl.ts";
import mnMong from "./mn-mong.ts";

// "mng" is Mongolian in the traditional script (Mongol bichig). It is a
// prototype: see mn-mong.ts for which strings are drafted.
export const LOCALES = ["mn", "en", "nl", "mng"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "mn";

export const LOCALE_LABELS: Record<Locale, string> = {
  mn: "MN",
  en: "EN",
  nl: "NL",
  mng: "ᠮᠣᠩᠭᠣᠯ",
};

/** BCP 47 tag for `<html lang>`: the URL segment "mng" is not a real language tag */
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  mn: "mn",
  en: "en",
  nl: "nl",
  mng: "mn-Mong",
};

export function isValidLocale(lang: string | undefined): lang is Locale {
  return LOCALES.includes(lang as Locale);
}

const dict: Record<Locale, Translations> = { mn, en, nl, mng: mnMong };

export function useTranslations(lang: Locale) {
  return function t(key: keyof Translations): string {
    return dict[lang][key] ?? dict["en"][key] ?? key;
  };
}
