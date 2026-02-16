import { type ReactNode } from "react";

export type ProcessStepCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function ProcessStepCard({ title, description, icon }: ProcessStepCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-cursor-surface-elevated p-6 shadow-sm">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-ide-blue dark:text-white">
        <span className="text-ide-mint text-xl" aria-hidden>
          {icon}
        </span>
        {title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </article>
  );
}
