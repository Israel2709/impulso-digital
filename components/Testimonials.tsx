"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TestimonialCard } from "./TestimonialCard";
import { getOpinions, type Opinion } from "@/lib/firebase";

export function Testimonials() {
  const [opinions, setOpinions] = useState<Opinion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOpinions()
      .then(setOpinions)
      .catch(() => setOpinions([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  if (opinions.length === 0) {
    return (
      <section
        className="py-16 sm:py-24 bg-neutral-50 dark:bg-cursor-surface"
        aria-labelledby="testimonials-cta-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="testimonials-cta-heading" className="sr-only">
            Dejar opinión
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            ¿Trabajaste con nosotros? Deja tu opinión y podría publicarse en la web.
          </p>
          <Link
            href="/dejar-opinion"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-ide-mint px-4 py-2.5 font-medium text-ide-mint dark:text-ide-mint-light hover:bg-ide-mint hover:text-ide-blue dark:hover:bg-ide-mint dark:hover:text-ide-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
          >
            Dejar mi opinión
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16 sm:py-24 bg-neutral-50 dark:bg-cursor-surface"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Experiencias de negocios que ya tienen presencia digital con nosotros.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {opinions.map((opinion, index) => (
            <TestimonialCard
              key={`${opinion.createdAt}-${index}`}
              quote={opinion.quote}
              author={opinion.author}
              role={opinion.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
