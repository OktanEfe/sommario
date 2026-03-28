import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY tanımlı değil." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "seninmailin@gmail.com",
      subject: "Yeni iletişim formu",
      html: `
        <h2>Yeni mesaj</h2>
        <p><strong>Ad:</strong> ${body.name || "-"}</p>
        <p><strong>E-posta:</strong> ${body.email || "-"}</p>
        <p><strong>Mesaj:</strong> ${body.message || "-"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Mail gönderilemedi." },
      { status: 500 }
    );
  }
}