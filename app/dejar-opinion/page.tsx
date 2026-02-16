"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { addOpinion } from "@/lib/firebase";
import { trackEvent } from "@/lib/analytics";

export default function DejarOpinionPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  function validate(data: FormData): Record<string, string> {
    const err: Record<string, string> = {};
    const author = (data.get("author") as string)?.trim();
    const role = (data.get("role") as string)?.trim();
    const quote = (data.get("quote") as string)?.trim();
    if (!author || author.length < 2) err.author = "Escribe tu nombre (mín. 2 caracteres).";
    if (!role) err.role = "Indica tu negocio o rol.";
    if (!quote || quote.length < 20) err.quote = "Escribe tu opinión (mín. 20 caracteres).";
    return err;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const err = validate(data);
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await addOpinion({
        author: (data.get("author") as string)?.trim() ?? "",
        role: (data.get("role") as string)?.trim() ?? "",
        quote: (data.get("quote") as string)?.trim() ?? "",
      });
      trackEvent("opinion_submitted", { form_name: "dejar_opinion" });
      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("No se pudo enviar. Revisa la configuración de Firebase o intenta más tarde.");
      setStatus("error");
    }
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#portafolio"
          className="text-sm font-medium text-ide-mint dark:text-ide-mint-light hover:underline"
        >
          ← Volver
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-ide-blue dark:text-white">
          Dejar opinión
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Si trabajaste con nosotros, nos ayudaría mucho tu opinión. Puede publicarse en la sección de testimonios.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="opinion-author" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Nombre *
            </label>
            <input
              id="opinion-author"
              name="author"
              type="text"
              autoComplete="name"
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
              placeholder="Tu nombre"
              aria-invalid={!!errors.author}
            />
            {errors.author && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.author}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="opinion-role" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Negocio o rol *
            </label>
            <input
              id="opinion-role"
              name="role"
              type="text"
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
              placeholder="Ej. Mi negocio, Cliente"
              aria-invalid={!!errors.role}
            />
            {errors.role && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.role}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="opinion-quote" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Tu opinión *
            </label>
            <textarea
              id="opinion-quote"
              name="quote"
              rows={4}
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none resize-y"
              placeholder="Cuéntanos tu experiencia..."
              aria-invalid={!!errors.quote}
            />
            {errors.quote && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.quote}
              </p>
            )}
          </div>
          {status === "sent" && (
            <p className="rounded-lg bg-ide-mint/20 text-ide-blue dark:text-ide-mint-light p-3 text-sm" role="status">
              Gracias por tu opinión. La revisaremos y podríamos publicarla en la sección de testimonios.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-3 text-sm" role="alert">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-ide-blue dark:bg-ide-mint text-white dark:text-ide-blue font-medium py-3 px-4 hover:bg-ide-blue-light dark:hover:bg-ide-mint-light transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
          >
            {status === "sending" ? "Enviando…" : "Enviar opinión"}
          </button>
        </form>
      </div>
    </div>
  );
}
