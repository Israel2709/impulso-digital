"use client";

import { useState, FormEvent } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const HORARIOS = "Lunes a viernes, 9:00 - 18:00 (hora centro de México)";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const err: Record<string, string> = {};
    const nombre = (data.get("nombre") as string)?.trim();
    const negocio = (data.get("negocio") as string)?.trim();
    const whatsapp = (data.get("whatsapp") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const mensaje = (data.get("mensaje") as string)?.trim();

    if (!nombre || nombre.length < 2) err.nombre = "Escribe tu nombre (mín. 2 caracteres).";
    if (!negocio) err.negocio = "Indica el nombre de tu negocio.";
    if (!whatsapp || whatsapp.length < 10) err.whatsapp = "Indica un número de WhatsApp válido.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Indica un correo válido.";
    if (!mensaje || mensaje.length < 10) err.mensaje = "Escribe tu mensaje (mín. 10 caracteres).";

    return err;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const err = validate(data);
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    setStatus("sending");

    // Placeholder: simular envío. Aquí luego: POST a tu API o servicio de formularios.
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 800);
  }

  return (
    <section
      id="contacto"
      className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/30"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-ide-blue dark:text-white">
              Contacto
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Escríbenos por el formulario o directo por WhatsApp. Te respondemos en horario de oficina.
            </p>
            <div className="mt-8">
              <WhatsAppButton variant="primary" className="inline-flex">
                Escribir por WhatsApp
              </WhatsAppButton>
            </div>
            <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
              <strong>Horarios de atención:</strong> {HORARIOS}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-nombre" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Nombre *
                </label>
                <input
                  id="contact-nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? "contact-nombre-error" : undefined}
                />
                {errors.nombre && (
                  <p id="contact-nombre-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.nombre}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-negocio" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Nombre del negocio *
                </label>
                <input
                  id="contact-negocio"
                  name="negocio"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
                  placeholder="Ej. Mi negocio S.A."
                  aria-invalid={!!errors.negocio}
                  aria-describedby={errors.negocio ? "contact-negocio-error" : undefined}
                />
                {errors.negocio && (
                  <p id="contact-negocio-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.negocio}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-whatsapp" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  WhatsApp *
                </label>
                <input
                  id="contact-whatsapp"
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
                  placeholder="+52 55 1234 5678"
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? "contact-whatsapp-error" : undefined}
                />
                {errors.whatsapp && (
                  <p id="contact-whatsapp-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.whatsapp}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Correo *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none"
                  placeholder="tu@correo.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-mensaje" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Mensaje *
                </label>
                <textarea
                  id="contact-mensaje"
                  name="mensaje"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2.5 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-ide-mint focus:ring-2 focus:ring-ide-mint/20 focus:outline-none resize-y"
                  placeholder="Cuéntanos qué necesitas..."
                  aria-invalid={!!errors.mensaje}
                  aria-describedby={errors.mensaje ? "contact-mensaje-error" : undefined}
                />
                {errors.mensaje && (
                  <p id="contact-mensaje-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.mensaje}
                  </p>
                )}
              </div>
              {status === "sent" && (
                <p className="rounded-lg bg-ide-mint/20 text-ide-blue dark:text-ide-mint-light p-3 text-sm" role="status">
                  Mensaje enviado. Te responderemos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-3 text-sm" role="alert">
                  No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-ide-blue dark:bg-ide-mint text-white dark:text-ide-blue font-medium py-3 px-4 hover:bg-ide-blue-light dark:hover:bg-ide-mint-light transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
