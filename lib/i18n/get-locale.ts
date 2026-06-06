import { cookies } from "next/headers";
import { LOCALE_COOKIE } from "./constants";
import { defaultLocale, type Locale } from "./config";
import { isValidLocale } from "./get-dictionary";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  return value && isValidLocale(value) ? value : defaultLocale;
}
