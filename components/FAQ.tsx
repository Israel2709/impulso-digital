"use client";

import { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "¿Cuánto tarda en estar listo mi sitio?",
    answer:
      "Depende del paquete y del contenido que nos proporciones. Una landing puede estar lista en 1-2 semanas; un sitio de varias páginas en 2-4 semanas. Te damos una fecha estimada al cotizar.",
  },
  {
    id: "faq-2",
    question: "¿Incluyen el dominio y hosting?",
    answer:
      "El dominio y el hosting no están incluidos en el precio base. Te podemos recomendar opciones económicas y ayudarte a configurarlos, o incluirlos en la cotización si lo prefieres.",
  },
  {
    id: "faq-3",
    question: "¿Puedo actualizar el contenido yo mismo?",
    answer:
      "Sí. Al entregar el sitio te explicamos cómo hacer cambios básicos (textos, imágenes). Si prefieres que lo hagamos nosotros, está el paquete con soporte técnico.",
  },
  {
    id: "faq-4",
    question: "¿Qué pasa si necesito cambios después?",
    answer:
      "Ofrecemos soporte técnico por horas o en paquete mensual. Puedes escribirnos por WhatsApp y te cotizamos el ajuste o la actualización que necesites.",
  },
  {
    id: "faq-5",
    question: "¿Cómo es el pago?",
    answer:
      "Suele ser un anticipo al iniciar y el resto al entregar. Los detalles los acordamos por WhatsApp según el proyecto.",
  },
  {
    id: "faq-6",
    question: "¿Trabajan con negocios fuera de mi ciudad?",
    answer:
      "Sí. Todo el proceso puede ser por WhatsApp y videollamada. No es necesario vernos en persona.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faq"
      className="py-16 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Resolvemos las dudas más comunes.
          </p>
        </div>
        <dl className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden"
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-ide-blue dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                  aria-expanded={openId === faq.id}
                  aria-controls={faq.id}
                  id={`${faq.id}-q`}
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <svg
                    className={`h-5 w-5 shrink-0 text-ide-mint transition-transform ${openId === faq.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <dd
                id={faq.id}
                role="region"
                aria-labelledby={`${faq.id}-q`}
                className={`overflow-hidden transition-all ${openId === faq.id ? "max-h-48" : "max-h-0"}`}
              >
                <p className="px-5 pb-4 pt-0 text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
