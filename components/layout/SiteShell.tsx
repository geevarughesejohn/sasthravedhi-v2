import { Analytics } from "./Analytics";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomBar } from "./MobileBottomBar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export async function SiteShell({ children }: SiteShellProps) {
  const locale = await getLocale();
  const dictionary = await getDictionary(locale);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {dictionary.common.skipToContent}
      </a>
      <Header locale={locale} dictionary={dictionary} />
      <main id="main-content" className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer dictionary={dictionary} />
      <MobileBottomBar />
      <Analytics />
    </>
  );
}
