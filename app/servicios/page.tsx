import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo de sitios web para negocios y soporte técnico. Diseño responsive, formularios, mapa, horarios y SEO básico.",
};

const services = [
  {
    id: "desarrollo-web",
    title: "Desarrollo web",
    description:
      "Creamos sitios web para tu negocio: página de presentación, servicios, contacto, mapa, horarios y formularios. Diseño responsive y rápido, pensado para que tus clientes te encuentren y te contacten fácil.",
    features: [
      "Diseño responsive (se ve bien en celular y computadora)",
      "Formularios de contacto",
      "Enlace directo a WhatsApp",
      "Mapa de ubicación e integración con Google Maps",
      "Horarios de atención",
      "SEO básico para aparecer en búsquedas locales",
      "Entrega en los plazos acordados",
    ],
  },
  {
    id: "soporte-tecnico",
    title: "Soporte técnico",
    description:
      "Mantenimiento, actualizaciones de contenido, corrección de errores y asesoría por WhatsApp. Sin contratos largos: pagas por lo que necesitas.",
    features: [
      "Actualización de textos e imágenes",
      "Corrección de errores y ajustes",
      "Asesoría por WhatsApp",
      "Mantenimiento puntual o por horas",
      "Soporte para sitios que no desarrollamos nosotros (según el caso)",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
          Servicios
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Desarrollo de sitios web para negocios y soporte técnico cuando lo necesites.
        </p>

        <div className="mt-12 space-y-16">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
              aria-labelledby={`${service.id}-heading`}
            >
              <h2 id={`${service.id}-heading`} className="text-2xl font-semibold text-ide-blue dark:text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2" role="list">
                {service.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ide-mint shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-ide-mint/30 bg-ide-mint/5 dark:bg-ide-mint/10 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ide-blue dark:text-white">
            ¿Qué necesitas?
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Cuéntanos por WhatsApp y te enviamos una propuesta sin compromiso.
          </p>
          <div className="mt-6">
            <WhatsAppButton variant="primary">Cotizar por WhatsApp</WhatsAppButton>
          </div>
        </div>

        <p className="mt-8">
          <Link
            href="/#paquetes"
            className="text-ide-mint dark:text-ide-mint-light font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2 rounded"
          >
            ← Ver paquetes y precios
          </Link>
        </p>
      </div>
    </div>
  );
}
