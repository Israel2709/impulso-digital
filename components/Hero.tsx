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
      className="relative min-h-[480px] py-16 sm:py-24 lg:py-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Fondo: mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/hero-mobile.png')" }}
        aria-hidden
      />
      {/* Fondo: desktop */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: "url('/hero-desktop.png')" }}
        aria-hidden
      />
      {/* Overlay para legibilidad del texto */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/60"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-sm"
          >
            Tu negocio con presencia digital clara
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/95 drop-shadow-sm">
            Desarrollamos sitios web para negocios locales y damos soporte técnico cuando lo necesites. Sin complicaciones, con entrega a tiempo y atención por WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton variant="primary">
              Cotizar por WhatsApp
            </WhatsAppButton>
            <Link
              href="/paquetes"
              className="inline-flex items-center justify-center gap-2 font-medium rounded-lg px-4 py-2.5 border-2 border-white text-white hover:bg-white hover:text-ide-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
            >
              Ver paquetes
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
            {bullets.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white"
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
                  <span className="font-medium text-white">{item.label}</span>
                  <span className="block text-sm text-white/90">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
