"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { localeNames, type Locale } from "@/lib/i18n/config";
import { setLocale } from "@/lib/i18n/actions";

type LanguageToggleProps = {
  currentLocale: Locale;
};

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function handleSetLocale(locale: Locale) {
    if (locale === currentLocale || pending) return;

    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  }

  return (
    <div
      className="flex items-center rounded-lg border border-border bg-surface text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      {(Object.keys(localeNames) as Locale[]).map((locale) => {
        const active = locale === currentLocale;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleSetLocale(locale)}
            className={[
              "px-2.5 py-1.5 transition-colors",
              locale === "ml" ? "font-malayalam" : "",
              active
                ? "bg-primary text-white"
                : "text-text-muted hover:text-foreground",
              locale === "en" ? "rounded-l-md" : "rounded-r-md",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-pressed={active}
          >
            {locale === "en" ? "EN" : "ML"}
          </button>
        );
      })}
    </div>
  );
}
