export type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <blockquote className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-cursor-surface-elevated p-6 shadow-sm">
      <p className="text-neutral-700 dark:text-neutral-300">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4">
        <cite className="not-italic font-medium text-ide-blue dark:text-white">
          {author}
        </cite>
        <span className="block text-sm text-neutral-500 dark:text-neutral-500">{role}</span>
      </footer>
    </blockquote>
  );
}
