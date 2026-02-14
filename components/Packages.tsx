import { PackageCard, type PackageCardProps } from "./PackageCard";

const packages: PackageCardProps[] = [
  {
    name: "Landing",
    description: "Una página con lo esencial: presentación, servicios y contacto.",
    price: "Desde $15,000 MXN",
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
    price: "Desde $30,000 MXN",
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
    price: "Desde $45,000 MXN",
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
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
