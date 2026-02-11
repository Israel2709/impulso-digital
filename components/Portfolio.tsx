const items = [
  {
    title: "Veterinaria",
    description: "Sitio para clínica veterinaria con servicios, horarios y contacto.",
    href: "#",
    badge: "Demo",
    tags: ["Landing", "Formulario", "Mapa"],
  },
  {
    title: "Consultorio médico",
    description: "Página para consultorio con información de especialidad y citas.",
    href: "#",
    badge: "Demo",
    tags: ["Landing", "Formulario"],
  },
  {
    title: "Taller mecánico",
    description: "Presentación del taller, servicios y WhatsApp para cotizaciones.",
    href: "#",
    badge: "Demo",
    tags: ["Landing", "WhatsApp"],
  },
  {
    title: "Despacho de abogados",
    description: "Sitio profesional con áreas de práctica y contacto.",
    href: "#",
    badge: "Demo",
    tags: ["Varias páginas", "Formulario"],
  },
  {
    title: "Tienda de ropa",
    description: "Catálogo y contacto para tienda local.",
    href: "#",
    badge: "Demo",
    tags: ["Landing", "Galería"],
  },
  {
    title: "Restaurante",
    description: "Menú, horarios, ubicación y reservas por WhatsApp.",
    href: "#",
    badge: "Demo",
    tags: ["Landing", "Mapa", "WhatsApp"],
  },
];

export function Portfolio() {
  return (
    <section
      id="portafolio"
      className="py-16 sm:py-24"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Portafolio
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Ejemplos de sitios que hemos desarrollado para distintos giros.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-600 group-hover:text-ide-mint/50 transition-colors">
                  IDE
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-ide-blue dark:text-white">
                    {item.title}
                  </h3>
                  <span className="rounded bg-ide-mint/20 px-2 py-0.5 text-xs font-medium text-ide-mint dark:bg-ide-mint/30 dark:text-ide-mint-light">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
