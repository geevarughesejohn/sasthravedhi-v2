"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/navigation";
import { joinCta, primaryNav } from "@/lib/navigation";
import type { Dictionary } from "@/lib/i18n/types";
import { CTA } from "@/components/ui/CTA";
import { Logo } from "@/components/ui/Logo";
import { LanguageToggle } from "./LanguageToggle";
import type { Locale } from "@/lib/i18n/config";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const isFlagship = item.priority === "flagship";

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={[
          "inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-surface-muted hover:text-primary",
          isFlagship ? "font-semibold text-primary" : "text-foreground",
        ].join(" ")}
        aria-expanded={item.children ? open : undefined}
        aria-haspopup={item.children ? "true" : undefined}
      >
        {item.label}
        {item.children && (
          <svg
            aria-hidden
            className="h-3.5 w-3.5 opacity-60"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Link>
      {item.children && open && (
        <div className="absolute left-0 top-full z-50 min-w-56 rounded-xl border border-border bg-surface p-2 shadow-lg">
          <ul>
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-primary-light hover:text-primary"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function Header({ locale, dictionary }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center xl:flex"
        >
          <ul className="flex flex-wrap items-center gap-0.5">
            {primaryNav.map((item) => (
              <NavDropdown key={item.href} item={item} />
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href="/search"
            className="hidden rounded-lg p-2 text-text-muted hover:bg-surface-muted hover:text-foreground sm:inline-flex"
            aria-label={dictionary.common.search}
          >
            <svg
              aria-hidden
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </Link>

          <LanguageToggle currentLocale={locale} />

          <CTA
            href={joinCta.href}
            variant="primary"
            className="hidden sm:inline-flex"
          >
            {dictionary.common.joinMovement}
          </CTA>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-foreground hover:bg-surface-muted xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <svg
              aria-hidden
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-surface xl:hidden"
        >
          <div className="mx-auto max-h-[70vh] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6">
            <ul className="space-y-4">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-lg font-semibold text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 space-y-1 border-l-2 border-primary-light pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-sm text-text-muted hover:text-primary"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-4">
              <CTA href={joinCta.href} variant="primary" className="w-full">
                {dictionary.common.joinMovement}
              </CTA>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
