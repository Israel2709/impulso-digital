import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Paquetes y precios",
  description:
    "Paquetes de sitios web para negocios: landing, sitio profesional y sitio con soporte. Precios desde. Cotización por WhatsApp.",
};

const packages = [
  {
    name: "Landing",
    description: "Una página con lo esencial para dar a conocer tu negocio.",
    price: "Desde $X,XXX MXN",
    deliverables: [
      "Diseño responsive (móvil y escritorio)",
      "Formulario de contacto",
      "Enlace a WhatsApp",
      "Hasta 5 secciones (hero, servicios, contacto, etc.)",
      "Entrega en 1-2 semanas según contenido",
    ],
    highlighted: false,
  },
  {
    name: "Sitio profesional",
    description: "Varias páginas para mostrar tu negocio con claridad.",
    price: "Desde $X,XXX MXN",
    deliverables: [
      "Hasta 6 páginas internas",
      "Formularios y mapa de ubicación",
      "Horarios y enlaces a redes",
      "SEO básico incluido",
      "Entrega en 2-4 semanas según contenido",
    ],
    highlighted: true,
  },
  {
    name: "Sitio + soporte",
    description: "Sitio web más horas de soporte para actualizaciones y ajustes.",
    price: "Desde $X,XXX MXN",
    deliverables: [
      "Todo lo incluido en Sitio profesional",
      "X horas de soporte mensual (actualizaciones, cambios)",
      "Atención por WhatsApp",
      "Ideal si prefieres que nosotros actualicemos el contenido",
    ],
    highlighted: false,
  },
];

export default function PaquetesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Paquetes y precios
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Precios desde. Cada proyecto se cotiza según lo que necesites. Escríbenos por WhatsApp para una propuesta personalizada.
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
              <h2 className="text-xl font-semibold text-ide-blue dark:text-white">
                {pkg.name}
              </h2>
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
                  message={`Hola, me interesa el paquete "${pkg.name}". ¿Me pueden dar más información y cotización?`}
                  className="w-full justify-center"
                >
                  Cotizar por WhatsApp
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/contacto"
            className="text-ide-mint dark:text-ide-mint-light font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2 rounded"
          >
            ¿Necesitas algo a la medida? Contáctanos
          </Link>
        </p>
      </div>
    </div>
  );
}
