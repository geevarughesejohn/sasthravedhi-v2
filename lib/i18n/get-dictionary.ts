import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  ml: () => import("./dictionaries/ml").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export function isValidLocale(value: string): value is Locale {
  return value === "en" || value === "ml";
}
