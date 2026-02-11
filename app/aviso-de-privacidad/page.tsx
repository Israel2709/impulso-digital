import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Impulso Digital Estudio.",
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-ide-blue dark:text-white">
          Aviso de privacidad
        </h1>
        <p className="lead text-neutral-600 dark:text-neutral-400">
          Impulso Digital Estudio (en adelante, &quot;nosotros&quot;) respeta tu privacidad. Este aviso describe cómo recabamos, usamos y protegemos la información que nos proporcionas a través de este sitio y por WhatsApp.
        </p>
        <h2 className="text-xl font-semibold text-ide-blue dark:text-white mt-8">
          Datos que recabamos
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Podemos recabar nombre, nombre del negocio, número de WhatsApp, correo electrónico y mensaje cuando nos contactas por el formulario o por WhatsApp, con el fin de responder a tu solicitud y, en su caso, brindar servicios de desarrollo web o soporte técnico.
        </p>
        <h2 className="text-xl font-semibold text-ide-blue dark:text-white mt-8">
          Uso de los datos
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Utilizamos tus datos únicamente para atender tu consulta, enviar cotizaciones, prestar los servicios contratados y cumplir obligaciones legales. No vendemos ni compartimos tu información con terceros para fines de mercadeo.
        </p>
        <h2 className="text-xl font-semibold text-ide-blue dark:text-white mt-8">
          Derechos
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos personales contactándonos por el medio que utilizaste para comunicarte con nosotros.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 mt-6">
          Última actualización: {new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}.
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="text-ide-mint dark:text-ide-mint-light font-medium hover:underline"
          >
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}
