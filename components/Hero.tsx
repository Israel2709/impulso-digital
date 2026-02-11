import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

const bullets = [
  { label: "Entrega rápida", desc: "Sitio listo en tiempos acordados" },
  { label: "SEO básico", desc: "Tu negocio visible en búsquedas" },
  { label: "Soporte", desc: "Atención por WhatsApp cuando lo necesites" },
];

export function Hero() {
  return (
    <section
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ide-blue dark:text-white"
          >
            Tu negocio con presencia digital clara
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
            Desarrollamos sitios web para negocios locales y damos soporte técnico cuando lo necesites. Sin complicaciones, con entrega a tiempo y atención por WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton variant="primary">
              Cotizar por WhatsApp
            </WhatsAppButton>
            <Link
              href="/paquetes"
              className="inline-flex items-center justify-center gap-2 font-medium rounded-lg px-4 py-2.5 border-2 border-ide-blue dark:border-ide-mint text-ide-blue dark:text-ide-mint hover:bg-ide-blue hover:text-white dark:hover:bg-ide-mint dark:hover:text-ide-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
            >
              Ver paquetes
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
            {bullets.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ide-mint/20 text-ide-mint dark:bg-ide-mint/30"
                  aria-hidden
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <span className="font-medium text-neutral-900 dark:text-white">{item.label}</span>
                  <span className="block text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
