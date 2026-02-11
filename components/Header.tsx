"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#paquetes", label: "Paquetes" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#portafolio", label: "Portafolio" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-neutral-950/80"
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-ide-blue dark:text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2 rounded"
            aria-label="Impulso Digital Estudio - Inicio"
          >
            <span className="text-xl tracking-tight font-bold text-ide-blue dark:text-white">
              IDE
            </span>
            <span className="hidden sm:inline text-sm text-neutral-600 dark:text-neutral-400 font-normal">
              Impulso Digital Estudio
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-ide-mint dark:hover:text-ide-mint-light rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <span className="hidden sm:inline">
              <WhatsAppButton variant="primary">Cotizar por WhatsApp</WhatsAppButton>
            </span>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Abrir menú"
              onClick={() => setOpen(!open)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-200 ${open ? "max-h-80 pb-4" : "max-h-0"}`}
          aria-hidden={!open}
        >
          <nav className="flex flex-col gap-1 pt-2" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <WhatsAppButton variant="primary" className="w-full justify-center">
                Cotizar por WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
