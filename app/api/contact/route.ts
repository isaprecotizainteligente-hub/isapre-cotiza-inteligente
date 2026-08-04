import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      nombre,
      whatsapp,
      edad,
      beneficiarios,
      sistema,
      renta,
      clinica,
      comentario,
    } = await request.json();

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "isaprecotizainteligente@gmail.com", // <-- Cambia por tu Gmail
      subject: `Nueva cotización - ${nombre}`,
      html: `
        <h2>Nueva cotización desde Isapre Cotiza Inteligente</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>WhatsApp:</strong> ${whatsapp}</p>

        <p><strong>Edad:</strong> ${edad}</p>

        <p><strong>Beneficiarios:</strong> ${beneficiarios}</p>

        <p><strong>Sistema actual:</strong> ${sistema}</p>

        <p><strong>Renta imponible:</strong> ${renta}</p>

        <p><strong>Clínica:</strong> ${clinica}</p>

        <p><strong>¿Qué está buscando?</strong></p>

        <p>${comentario}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "No fue posible enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );

  }
}