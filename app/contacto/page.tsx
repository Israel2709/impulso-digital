import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Impulso Digital Estudio por formulario o WhatsApp. Horarios de atención y cotizaciones sin compromiso.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-[60vh]">
      <Contact />
    </div>
  );
}
