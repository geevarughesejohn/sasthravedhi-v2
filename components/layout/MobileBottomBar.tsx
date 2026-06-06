"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mobileBottomNav } from "@/lib/navigation";

export function MobileBottomBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setHidden(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (hidden) return null;

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-lg">
        {mobileBottomNav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={[
                  "flex flex-col items-center px-2 py-3 text-center text-xs font-semibold transition-colors",
                  active ? "text-primary" : "text-text-muted hover:text-foreground",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                <span>{item.shortLabel}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
