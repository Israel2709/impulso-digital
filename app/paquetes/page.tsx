import type { Metadata } from "next";
import Link from "next/link";
import { PackageCard, type PackageCardProps } from "@/components/PackageCard";

export const metadata: Metadata = {
  title: "Paquetes y precios",
  description:
    "Paquetes de sitios web para negocios: landing, sitio profesional y sitio con soporte. Precios desde. Cotización por WhatsApp.",
};

const packages: (PackageCardProps & { whatsAppMessage?: string })[] = [
  {
    name: "Landing",
    description: "Una página con lo esencial para dar a conocer tu negocio.",
    price: "Desde $15,000 MXN",
    deliverables: [
      "Diseño responsive (móvil y escritorio)",
      "Formulario de contacto",
      "Enlace a WhatsApp",
      "Hasta 5 secciones (hero, servicios, contacto, etc.)",
      "Entrega en 1-2 semanas según contenido",
    ],
    highlighted: false,
    whatsAppMessage: 'Hola, me interesa el paquete "Landing". ¿Me pueden dar más información y cotización?',
  },
  {
    name: "Sitio profesional",
    description: "Varias páginas para mostrar tu negocio con claridad.",
    price: "Desde $30,000 MXN",
    deliverables: [
      "Hasta 6 páginas internas",
      "Formularios y mapa de ubicación",
      "Horarios y enlaces a redes",
      "SEO básico incluido",
      "Entrega en 2-4 semanas según contenido",
    ],
    highlighted: true,
    whatsAppMessage: 'Hola, me interesa el paquete "Sitio profesional". ¿Me pueden dar más información y cotización?',
  },
  {
    name: "Sitio + soporte",
    description: "Sitio web más horas de soporte para actualizaciones y ajustes.",
    price: "Desde $45,000 MXN",
    deliverables: [
      "Todo lo incluido en Sitio profesional",
      "X horas de soporte mensual (actualizaciones, cambios)",
      "Atención por WhatsApp",
      "Ideal si prefieres que nosotros actualicemos el contenido",
    ],
    highlighted: false,
    whatsAppMessage: 'Hola, me interesa el paquete "Sitio + soporte". ¿Me pueden dar más información y cotización?',
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

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.name}
              {...pkg}
              headingLevel="h2"
            />
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
