import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualizar portafolio",
  robots: { index: false, follow: false },
};

export default function UpdatePortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
