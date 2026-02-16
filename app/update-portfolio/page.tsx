"use client";

import { useState, FormEvent } from "react";
import {
  uploadPortfolioScreenshot,
  addPortfolioItem,
} from "@/lib/firebase";

export default function UpdatePortfolioPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const err: Record<string, string> = {};
    const title = (data.get("title") as string)?.trim();
    const description = (data.get("description") as string)?.trim();
    const badge = (data.get("badge") as string)?.trim();
    const tagsStr = (data.get("tags") as string)?.trim();
    const file = data.get("screenshot") as File | null;

    if (!title || title.length < 2) err.title = "Título obligatorio (mín. 2 caracteres).";
    if (!description || description.length < 10) err.description = "Descripción obligatoria (mín. 10 caracteres).";
    if (!badge) err.badge = "Indica el badge (ej. Demo).";
    if (!file?.size) err.screenshot = "Sube una captura de pantalla.";
    else if (!file.type.startsWith("image/")) err.screenshot = "El archivo debe ser una imagen (jpg, png, webp).";
    const tags = tagsStr ? tagsStr.split(",").map((t) => t.trim()).filter(Boolean) : [];
    if (tags.length === 0) err.tags = "Añade al menos un tag separado por comas.";

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
      const file = data.get("screenshot") as File;
      const imageUrl = await uploadPortfolioScreenshot(file);
      const tagsStr = (data.get("tags") as string)?.trim() ?? "";
      const tags = tagsStr.split(",").map((t) => t.trim()).filter(Boolean);

      const href = (data.get("url") as string)?.trim() || undefined;

      await addPortfolioItem({
        title: (data.get("title") as string)?.trim() ?? "",
        description: (data.get("description") as string)?.trim() ?? "",
        badge: (data.get("badge") as string)?.trim() ?? "Demo",
        tags,
        imageUrl,
        href,
      });

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("No se pudo guardar. Revisa Firebase (Storage y Realtime Database) e intenta de nuevo.");
      setStatus("error");
    }
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-ide-blue dark:text-white">
          Agregar entrada al portafolio
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Los datos se guardan en Firebase (Storage + Realtime Database).
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="portfolio-title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Título *
            </label>
            <input
              id="portfolio-title"
              name="title"
              type="text"
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
              placeholder="Ej. Veterinaria, Restaurante"
              aria-invalid={!!errors.title}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="portfolio-description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Descripción *
            </label>
            <textarea
              id="portfolio-description"
              name="description"
              rows={3}
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none resize-y"
              placeholder="Breve descripción del proyecto o tipo de sitio."
              aria-invalid={!!errors.description}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.description}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="portfolio-url" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              URL del sitio
            </label>
            <input
              id="portfolio-url"
              name="url"
              type="url"
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
              placeholder="https://ejemplo.com"
              aria-invalid={!!errors.url}
            />
            {errors.url && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.url}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="portfolio-badge" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Badge (etiqueta) *
            </label>
            <input
              id="portfolio-badge"
              name="badge"
              type="text"
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
              placeholder="Ej. Demo, En línea"
              aria-invalid={!!errors.badge}
            />
            {errors.badge && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.badge}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="portfolio-tags" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Tags (separados por comas) *
            </label>
            <input
              id="portfolio-tags"
              name="tags"
              type="text"
              className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-white/10 bg-white dark:bg-cursor-bg px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
              placeholder="Ej. Landing, Formulario, Mapa, WhatsApp"
              aria-invalid={!!errors.tags}
            />
            {errors.tags && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.tags}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="portfolio-screenshot" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Captura de pantalla *
            </label>
            <input
              id="portfolio-screenshot"
              name="screenshot"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="mt-1 block w-full text-neutral-600 dark:text-neutral-400 file:mr-4 file:rounded-lg file:border-0 file:bg-ide-mint file:px-4 file:py-2 file:text-ide-blue file:font-medium file:hover:bg-ide-mint-light"
              aria-invalid={!!errors.screenshot}
            />
            {errors.screenshot && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.screenshot}
              </p>
            )}
          </div>

          {status === "sent" && (
            <p className="rounded-lg bg-ide-mint/20 text-ide-blue dark:text-ide-mint-light p-3 text-sm" role="status">
              Entrada agregada al portafolio correctamente.
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
            {status === "sending" ? "Subiendo y guardando…" : "Agregar al portafolio"}
          </button>
        </form>
      </div>
    </div>
  );
}
