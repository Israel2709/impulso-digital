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
- **WhatsApp:** El número de contacto para cotizaciones y botones es +52 1 55 2089 0688 (definido en `components/WhatsAppButton.tsx` como `WHATSAPP_NUMBER`). Puedes editar el mensaje por defecto en `DEFAULT_MESSAGE` si lo necesitas.
- **URL del sitio:** Para SEO (canonical, sitemap, OpenGraph) define `NEXT_PUBLIC_SITE_URL` en `.env.local`, por ejemplo: `NEXT_PUBLIC_SITE_URL=https://tudominio.com`
- **Formulario de contacto:** Los envíos llegan a **ventasimpulsode@gmail.com** vía Nodemailer (Gmail SMTP). En `.env.local` define `GMAIL_USER=ventasimpulsode@gmail.com` y `GMAIL_APP_PASSWORD` con una [contraseña de aplicación](https://support.google.com/accounts/answer/185833) de esa cuenta (no la contraseña normal).
- **Analytics:** En `app/layout.tsx` hay un bloque comentado para Google Analytics; descomenta y sustituye el ID cuando lo integres.

## Componentes principales

- `Header` — Logo IDE, navegación, toggle tema, CTA WhatsApp
- `Footer` — Enlaces, aviso de privacidad, redes (placeholder)
- `Hero`, `Services`, `Packages`, `Process`, `Portfolio`, `Testimonials`, `FAQ`, `Contact` — Secciones del home
- `ThemeToggle` — Cambio modo claro/oscuro
- `WhatsAppButton` — Enlace a WhatsApp con mensaje prellenado

Branding: azul profundo (`ide-blue`) + acento menta (`ide-mint`), tipografía Inter vía `next/font`.
