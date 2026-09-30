"use client";

import { useState } from "react";
import { siteConfig } from "@/shared/config/site";

const navigation = [
  { label: "Обо мне", href: "#about" },
  { label: "Фокус", href: "#focus" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-line/80 bg-paper/80 shadow-[0_8px_30px_rgba(24,24,27,0.06)] backdrop-blur-lg backdrop-saturate-150">
        <nav className="flex h-16 items-center justify-between px-4 sm:px-6" aria-label="Основная навигация">
          <a href="#top" className="text-sm font-semibold tracking-tight" aria-label="На главную">
            {siteConfig.shortName}
          </a>

          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            {navigation.map((item) => (
              <a key={item.href} className="nav-link transition-colors hover:text-ink" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={`menu-line block h-px w-5 bg-ink ${isMenuOpen ? "menu-line-open-first" : ""}`} />
            <span className={`menu-line block h-px w-5 bg-ink ${isMenuOpen ? "menu-line-open-last" : ""}`} />
          </button>
        </nav>

        <div className={`${isMenuOpen ? "block" : "hidden"} border-t border-line/70 bg-paper/50 px-4 py-6 md:hidden`}>
          <div className="flex flex-col gap-5 text-sm text-muted">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
