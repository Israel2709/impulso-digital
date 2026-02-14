import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://impulsodigitalestudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Impulso Digital Estudio | Sitios web y soporte para tu negocio",
    template: "%s | Impulso Digital Estudio",
  },
  description:
    "Desarrollo de sitios web para negocios locales, soporte técnico y presencia digital. Entrega rápida, SEO básico y soporte por WhatsApp.",
  keywords: [
    "sitios web negocios",
    "desarrollo web",
    "soporte técnico",
    "presencia digital",
    "páginas web México",
  ],
  authors: [{ name: "Impulso Digital Estudio" }],
  creator: "Impulso Digital Estudio",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Impulso Digital Estudio",
    title: "Impulso Digital Estudio | Sitios web y soporte para tu negocio",
    description:
      "Desarrollo de sitios web para negocios locales, soporte técnico y presencia digital.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Impulso Digital Estudio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulso Digital Estudio | Sitios web y soporte para tu negocio",
    description: "Desarrollo de sitios web para negocios locales y soporte técnico.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/isotipo.png",
    shortcut: "/isotipo.png",
    apple: "/isotipo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-cursor-bg`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* Analytics: descomentar e importar next/script cuando integres Google Analytics o similar */}
        </ThemeProvider>
      </body>
    </html>
  );
}
