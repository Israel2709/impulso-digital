import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dejar opinión",
  description: "Deja tu opinión sobre Impulso Digital Estudio. Tu experiencia puede aparecer en nuestra sección de testimonios.",
};

export default function DejarOpinionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
