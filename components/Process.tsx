const steps = [
  {
    step: 1,
    title: "Consulta",
    description: "Nos cuentas qué necesitas por WhatsApp. Te respondemos con opciones y precios.",
  },
  {
    step: 2,
    title: "Propuesta",
    description: "Te enviamos una propuesta clara: qué incluye, plazos y precio. Sin sorpresas.",
  },
  {
    step: 3,
    title: "Desarrollo",
    description: "Trabajamos en tu sitio. Puedes ver avances y dar feedback en el camino.",
  },
  {
    step: 4,
    title: "Entrega",
    description: "Tu sitio queda en línea. Te explicamos cómo actualizarlo y quedamos para soporte.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/30"
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <span
                  className="absolute left-8 top-16 hidden h-[2px] w-[calc(100%-4rem)] bg-neutral-200 dark:bg-neutral-700 lg:block"
                  aria-hidden
                />
              )}
              <div className="flex flex-col items-center text-center">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-ide-mint text-2xl font-bold text-ide-blue"
                  aria-hidden
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ide-blue dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
