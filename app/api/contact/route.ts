import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "ventasimpulsode@gmail.com";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const rateLimitMap = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  let timestamps = rateLimitMap.get(ip) ?? [];
  timestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  if (rateLimitMap.size > 10000) {
    const oldest = Math.min(...Array.from(rateLimitMap.values()).flat());
    for (const [key, ts] of rateLimitMap.entries()) {
      if (ts.some((t) => t === oldest)) {
        rateLimitMap.delete(key);
        break;
      }
    }
  }
  return false;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiados envíos. Intenta más tarde." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nombre, negocio, whatsapp, email, mensaje, sitio_web } = body;

    if (String(sitio_web ?? "").trim()) {
      return NextResponse.json({ success: true });
    }

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: nombre, email, mensaje." },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER ?? TO_EMAIL;
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!pass) {
      console.error("GMAIL_APP_PASSWORD no está configurada en .env.local");
      return NextResponse.json(
        {
          error:
            "Configura GMAIL_APP_PASSWORD en .env.local (contraseña de aplicación de Google) y reinicia el servidor (npm run dev).",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Impulso Digital Estudio" <${user}>`,
      to: TO_EMAIL,
      replyTo: email as string,
      subject: `Contacto web: ${(negocio as string) || nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${escapeHtml(nombre as string)}</p>
        <p><strong>Negocio:</strong> ${escapeHtml((negocio as string) || "—")}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml((whatsapp as string) || "—")}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email as string)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml((mensaje as string) || "").replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
