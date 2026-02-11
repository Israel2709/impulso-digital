# Impulso Digital Estudio — Landing

Landing profesional para **Impulso Digital Estudio** (IDE): desarrollo de sitios web para negocios y soporte técnico.

## Stack

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- Diseño responsive (mobile-first), accesible (ARIA, semántica) y optimizado para Lighthouse
- Modo claro/oscuro con toggle
- SEO: metadata, OpenGraph, Twitter cards, `robots.txt`, `sitemap.xml`

## Estructura

- **`/`** — Home (una sola página larga con secciones)
- **`/servicios`** — Detalle de servicios (desarrollo web, soporte técnico)
- **`/paquetes`** — Paquetes y precios “desde”, CTA WhatsApp
- **`/contacto`** — Formulario + CTA WhatsApp + horarios
- **`/sitios-para/[giro]`** — Plantilla dinámica por giro (veterinarias, consultorios, talleres, abogados, ropa)
- **`/aviso-de-privacidad`** — Aviso de privacidad

## Cómo instalar, correr y hacer build

### Requisitos

- Node.js 18+
- npm (o yarn/pnpm)

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Build para producción

```bash
npm run build
```

### Ejecutar en producción

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Configuración opcional

- **Logo:** Coloca tu imagen del logo en `public/logo.png` para que aparezca en la navbar. Si no existe, se muestra el texto "IDE · Impulso Digital Estudio" con la paleta del logo (azul profundo + menta). La paleta del sitio está basada en el logo: `ide-blue` y `ide-mint` en Tailwind.
- **WhatsApp:** Edita el número y mensaje por defecto en `components/WhatsAppButton.tsx` (constantes `WHATSAPP_NUMBER` y `DEFAULT_MESSAGE`). El número actual es un placeholder: `+52 55 0000 0000`.
- **URL del sitio:** Para SEO (canonical, sitemap, OpenGraph) define `NEXT_PUBLIC_SITE_URL` en `.env.local`, por ejemplo: `NEXT_PUBLIC_SITE_URL=https://tudominio.com`
- **Formulario de contacto:** La validación es solo en cliente y muestra “Mensaje enviado”. Para enviar a un backend o servicio (Resend, Formspree, etc.), integra la llamada en `components/Contact.tsx` dentro de `handleSubmit`.
- **Analytics:** En `app/layout.tsx` hay un bloque comentado para Google Analytics; descomenta y sustituye el ID cuando lo integres.

## Componentes principales

- `Header` — Logo IDE, navegación, toggle tema, CTA WhatsApp
- `Footer` — Enlaces, aviso de privacidad, redes (placeholder)
- `Hero`, `Services`, `Packages`, `Process`, `Portfolio`, `Testimonials`, `FAQ`, `Contact` — Secciones del home
- `ThemeToggle` — Cambio modo claro/oscuro
- `WhatsAppButton` — Enlace a WhatsApp con mensaje prellenado

Branding: azul profundo (`ide-blue`) + acento menta (`ide-mint`), tipografía Inter vía `next/font`.
