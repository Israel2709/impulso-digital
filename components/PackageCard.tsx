import { WhatsAppButton } from "./WhatsAppButton";

export type PackageCardProps = {
  name: string;
  description: string;
  price: string;
  deliverables: string[];
  highlighted?: boolean;
  whatsAppMessage?: string;
  headingLevel?: "h2" | "h3";
};

export function PackageCard({
  name,
  description,
  price,
  deliverables,
  highlighted = false,
  whatsAppMessage,
  headingLevel = "h3",
}: PackageCardProps) {
  const message =
    whatsAppMessage ?? `Hola, me interesa el paquete "${name}". ¿Me pueden dar más información?`;

  const Heading = headingLevel;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
        highlighted
          ? "border-ide-mint bg-ide-mint/5 dark:bg-ide-mint/10 shadow-lg"
          : "border-neutral-200 dark:border-white/10 bg-white dark:bg-cursor-surface-elevated"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ide-mint px-3 py-1 text-xs font-medium text-ide-blue">
          Recomendado
        </span>
      )}
      <div className="flex flex-1 flex-col">
        <Heading className="text-xl font-semibold text-ide-blue dark:text-white">
          {name}
        </Heading>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
          {description}
        </p>
        <p className="mt-4 text-2xl font-bold text-ide-mint dark:text-ide-mint-light">
          {price}
        </p>
        <ul className="mt-4 space-y-2 flex-1" role="list">
          {deliverables.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-ide-mint shrink-0"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex-shrink-0">
        <WhatsAppButton
          variant={highlighted ? "primary" : "outline"}
          message={message}
          className="w-full justify-center"
        >
          Cotizar por WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}
