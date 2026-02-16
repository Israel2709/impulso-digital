import { ProcessStepCard, type ProcessStepCardProps } from "./ProcessStepCard";
import { HiChatBubbleLeftRight, HiDocumentText, HiCodeBracket, HiCheckCircle } from "react-icons/hi2";

const steps: ProcessStepCardProps[] = [
  {
    title: "Consulta",
    description: "Nos cuentas qué necesitas por WhatsApp. Te respondemos con opciones y precios.",
    icon: <HiChatBubbleLeftRight />,
  },
  {
    title: "Propuesta",
    description: "Te enviamos una propuesta clara: qué incluye, plazos y precio. Sin sorpresas.",
    icon: <HiDocumentText />,
  },
  {
    title: "Desarrollo",
    description: "Trabajamos en tu sitio. Puedes ver avances y dar feedback en el camino.",
    icon: <HiCodeBracket />,
  },
  {
    title: "Entrega",
    description: "Tu sitio queda en línea. Te explicamos cómo actualizarlo y quedamos para soporte.",
    icon: <HiCheckCircle />,
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="py-16 sm:py-24 bg-neutral-50 dark:bg-cursor-surface"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Proceso simple y transparente, de la primera consulta a la entrega.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <ProcessStepCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
