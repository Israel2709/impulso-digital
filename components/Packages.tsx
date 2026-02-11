import { WhatsAppButton } from "./WhatsAppButton";

const packages = [
  {
    name: "Landing",
    description: "Una página con lo esencial: presentación, servicios y contacto.",
    price: "Desde $X,XXX MXN",
    deliverables: [
      "Diseño responsive",
      "Formulario de contacto",
      "Enlace a WhatsApp",
      "Hasta 5 secciones",
    ],
    highlighted: false,
  },
  {
    name: "Sitio profesional",
    description: "Varias páginas para mostrar tu negocio con claridad.",
    price: "Desde $X,XXX MXN",
    deliverables: [
      "Hasta 6 páginas",
      "Formularios y mapa",
      "Horarios y redes",
      "SEO básico incluido",
    ],
    highlighted: true,
  },
  {
    name: "Sitio + soporte",
    description: "Sitio web más horas de soporte para actualizaciones y ajustes.",
    price: "Desde $X,XXX MXN",
    deliverables: [
      "Todo lo del sitio profesional",
      "X horas de soporte mensual",
      "Actualizaciones de contenido",
      "Soporte por WhatsApp",
    ],
    highlighted: false,
  },
];

export function Packages() {
  return (
    <section
      id="paquetes"
      className="py-16 sm:py-24"
      aria-labelledby="packages-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="packages-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Paquetes
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Precios desde. Te enviamos una cotización personalizada por WhatsApp.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative rounded-2xl border p-6 sm:p-8 ${
                pkg.highlighted
                  ? "border-ide-mint bg-ide-mint/5 dark:bg-ide-mint/10 shadow-lg"
                  : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ide-mint px-3 py-1 text-xs font-medium text-ide-blue">
                  Recomendado
                </span>
              )}
              <h3 className="text-xl font-semibold text-ide-blue dark:text-white">
                {pkg.name}
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
                {pkg.description}
              </p>
              <p className="mt-4 text-2xl font-bold text-ide-mint dark:text-ide-mint-light">
                {pkg.price}
              </p>
              <ul className="mt-4 space-y-2" role="list">
                {pkg.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-ide-mint shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppButton
                  variant={pkg.highlighted ? "primary" : "outline"}
                  message={`Hola, me interesa el paquete "${pkg.name}". ¿Me pueden dar más información?`}
                  className="w-full justify-center"
                >
                  Cotizar por WhatsApp
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
