import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { notFound } from "next/navigation";

const giros: Record<string, { title: string; description: string; features: string[] }> = {
  veterinarias: {
    title: "Sitios web para veterinarias",
    description:
      "Página para tu clínica o consultorio veterinario: servicios, horarios, ubicación y contacto por WhatsApp para emergencias y citas.",
    features: [
      "Presentación de la clínica y equipo",
      "Servicios (consultas, vacunas, cirugía, etc.)",
      "Horarios de atención",
      "Mapa y dirección",
      "Formulario o WhatsApp para citas",
    ],
  },
  consultorios: {
    title: "Sitios web para consultorios médicos",
    description:
      "Sitio profesional para tu consultorio: especialidad, servicios, horarios y canal de contacto para pacientes.",
    features: [
      "Información del consultorio y médico",
      "Especialidad y servicios",
      "Horarios y ubicación",
      "Formulario de contacto o citas",
      "Diseño limpio y confiable",
    ],
  },
  talleres: {
    title: "Sitios web para talleres mecánicos",
    description:
      "Página para tu taller: servicios, tipos de trabajo y WhatsApp para cotizaciones y citas.",
    features: [
      "Servicios que ofreces",
      "Marcas o tipos de vehículos",
      "Ubicación y horarios",
      "WhatsApp para cotizaciones",
    ],
  },
  abogados: {
    title: "Sitios web para despachos de abogados",
    description:
      "Sitio profesional para tu despacho: áreas de práctica, equipo y contacto para consultas.",
    features: [
      "Áreas de práctica (civil, laboral, etc.)",
      "Información del despacho y abogados",
      "Formulario de contacto",
      "Diseño serio y profesional",
    ],
  },
  ropa: {
    title: "Sitios web para tiendas de ropa",
    description:
      "Página para tu tienda: catálogo, ubicación y contacto. Ideal para tiendas locales que quieren presencia en línea.",
    features: [
      "Galería o catálogo de productos",
      "Ubicación y horarios",
      "Redes sociales y WhatsApp",
      "Diseño alineado a tu marca",
    ],
  },
};

type Props = { params: Promise<{ giro: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { giro } = await params;
  const data = giros[giro];
  if (!data) return { title: "Página no encontrada" };
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function SitiosParaGiroPage({ params }: Props) {
  const { giro } = await params;
  const data = giros[giro];

  if (!data) notFound();

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-ide-mint dark:text-ide-mint-light font-medium">
          <Link href="/#portafolio" className="hover:underline">
            Portafolio
          </Link>
          {" / "}
          {data.title}
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
          {data.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          {data.description}
        </p>
        <ul className="mt-6 space-y-2" role="list">
          {data.features.map((item) => (
            <li key={item} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-ide-mint shrink-0" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl border border-ide-mint/30 bg-ide-mint/5 dark:bg-ide-mint/10 p-6">
          <p className="text-ide-blue dark:text-white font-medium">
            ¿Te interesa un sitio para {data.title.toLowerCase()}?
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Escríbenos por WhatsApp y te enviamos una cotización.
          </p>
          <div className="mt-4">
            <WhatsAppButton
              variant="primary"
              message={`Hola, me interesa un sitio web para ${data.title.toLowerCase()}. ¿Me pueden dar información?`}
            >
              Cotizar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
        <p className="mt-8">
          <Link
            href="/#portafolio"
            className="text-ide-mint dark:text-ide-mint-light font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2 rounded"
          >
            ← Ver más ejemplos
          </Link>
        </p>
      </div>
    </div>
  );
}
