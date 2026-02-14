import Link from "next/link";

const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/paquetes", label: "Paquetes" },
  { href: "/contacto", label: "Contacto" },
  { href: "/#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/aviso-de-privacidad", label: "Aviso de privacidad" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-ide-blue/10 dark:border-white/10 bg-ide-blue/5 dark:bg-cursor-surface"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-ide-blue dark:text-white">IDE</span>
              <span className="block text-sm text-ide-mint dark:text-ide-mint-light font-medium">
                Impulso Digital Estudio
              </span>
            </Link>
            <p className="mt-3 text-sm text-ide-blue/80 dark:text-neutral-400 max-w-sm">
              Sitios web y soporte técnico para negocios locales. Presencia digital clara y al día.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ide-blue dark:text-white">Enlaces</h3>
            <ul className="mt-3 space-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ide-blue/80 dark:text-neutral-400 hover:text-ide-mint dark:hover:text-ide-mint-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ide-blue dark:text-white">Legal</h3>
            <ul className="mt-3 space-y-2" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ide-blue/80 dark:text-neutral-400 hover:text-ide-mint dark:hover:text-ide-mint-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-ide-blue dark:text-white mt-4">Redes</h3>
            <p className="mt-1 text-sm text-ide-blue/70 dark:text-neutral-500">
              Próximamente
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-ide-blue/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ide-blue/70 dark:text-neutral-500">
            © {new Date().getFullYear()} Impulso Digital Estudio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
