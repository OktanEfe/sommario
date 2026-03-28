import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Sommario <onboarding@resend.dev>",
      to: ["seninmailin@gmail.com"], // şimdilik kendi mailin
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <h2>Yeni Mesaj</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Mail gönderilemedi" }, { status: 500 });
  }
}