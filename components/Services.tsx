import Link from "next/link";

const services = [
  {
    title: "Desarrollo web",
    description:
      "Sitios web para tu negocio: página de presentación, servicios, contacto, mapa, horarios y formularios. Diseño responsive y rápido.",
    items: ["Diseño responsive", "Formularios de contacto", "Mapa y horarios", "SEO básico"],
    href: "/servicios#desarrollo-web",
  },
  {
    title: "Soporte técnico",
    description:
      "Mantenimiento, actualizaciones de contenido, corrección de errores y asesoría por WhatsApp. Resolvemos lo que necesites sin contratos largos.",
    items: ["Actualización de contenido", "Corrección de errores", "Asesoría por WhatsApp", "Mantenimiento puntual"],
    href: "/servicios#soporte-tecnico",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="py-16 sm:py-24 bg-neutral-50 dark:bg-cursor-surface"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Servicios
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Lo que ofrecemos para darle presencia digital a tu negocio.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-cursor-surface-elevated p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-ide-blue dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2" role="list">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-ide-mint shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center text-sm font-medium text-ide-mint dark:text-ide-mint-light hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
              >
                Ver más
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center font-medium text-ide-mint dark:text-ide-mint-light hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
          >
            Ver todos los servicios
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
