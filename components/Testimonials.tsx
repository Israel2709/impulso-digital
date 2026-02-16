import Link from "next/link";
import { TestimonialCard, type TestimonialCardProps } from "./TestimonialCard";

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "Necesitábamos una página sencilla para nuestro negocio. Nos la entregaron a tiempo y nos explican todo por WhatsApp.",
    author: "Cliente placeholder",
    role: "Negocio local",
  },
  {
    quote:
      "Buen trato y respuesta rápida. El sitio se ve bien en el celular y nos sirve para que nos contacten.",
    author: "Cliente placeholder",
    role: "Negocio local",
  },
  {
    quote:
      "Contratamos el paquete con soporte y nos han ayudado a actualizar horarios y fotos sin complicaciones.",
    author: "Cliente placeholder",
    role: "Negocio local",
  },
];

export function Testimonials() {
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
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/dejar-opinion"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-ide-mint px-4 py-2.5 font-medium text-ide-mint dark:text-ide-mint-light hover:bg-ide-mint hover:text-ide-blue dark:hover:bg-ide-mint dark:hover:text-ide-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ide-mint focus-visible:ring-offset-2"
          >
            Dejar mi opinión
          </Link>
        </div>
      </div>
    </section>
  );
}
