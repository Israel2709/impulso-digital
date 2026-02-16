"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getPortfolioItems,
  type PortfolioItem,
} from "@/lib/firebase";

const DESCRIPTION_MAX_LENGTH = 150;

export function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  function toggleExpanded(index: number) {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  useEffect(() => {
    getPortfolioItems()
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="portafolio"
      className="py-16 sm:py-24"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Portafolio
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Ejemplos de sitios que hemos desarrollado para distintos giros.
          </p>
        </div>
        {loading ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-cursor-surface-elevated overflow-hidden shadow-sm animate-pulse"
              >
                <div className="aspect-video bg-neutral-100 dark:bg-cursor-bg" />
                <div className="p-5 space-y-2">
                  <div className="h-5 bg-neutral-200 dark:bg-white/10 rounded w-2/3" />
                  <div className="h-4 bg-neutral-200 dark:bg-white/10 rounded w-full" />
                  <div className="h-4 bg-neutral-200 dark:bg-white/10 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : items.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const description = item.description ?? "";
              const isLong = description.length > DESCRIPTION_MAX_LENGTH;
              const isExpanded = expandedCards.has(index);
              const displayDescription = isLong && !isExpanded
                ? `${description.slice(0, DESCRIPTION_MAX_LENGTH)}…`
                : description;

              const CardContent = (
                <>
                  <div className="aspect-video bg-neutral-100 dark:bg-cursor-bg flex items-center justify-center relative overflow-hidden">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={`Captura o preview del sitio: ${item.title}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-600 group-hover:text-ide-mint/50 transition-colors">
                        IDE
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-ide-blue dark:text-white">
                        {item.title}
                      </h3>
                      <span className="rounded bg-ide-mint/20 px-2 py-0.5 text-xs font-medium text-ide-mint dark:bg-ide-mint/30 dark:text-ide-mint-light">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      {displayDescription}
                    </p>
                    {isLong && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleExpanded(index);
                        }}
                        className="mt-1.5 text-sm font-medium text-ide-mint dark:text-ide-mint-light hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2 rounded"
                      >
                        {isExpanded ? "Leer menos" : "Leer más"}
                      </button>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(item.tags ?? []).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 dark:bg-cursor-surface px-2.5 py-0.5 text-xs text-neutral-600 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );
              const className =
                "group rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-cursor-surface-elevated overflow-hidden shadow-sm hover:shadow-md transition-shadow block";
              return item.href ? (
                <a
                  key={`${item.createdAt}-${index}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {CardContent}
                </a>
              ) : (
                <article key={`${item.createdAt}-${index}`} className={className}>
                  {CardContent}
                </article>
              );
            })}
          </div>
        ) : (
          <p className="mt-12 text-center text-neutral-600 dark:text-neutral-400">
            Aún no hay proyectos en el portafolio.
          </p>
        )}
      </div>
    </section>
  );
}
