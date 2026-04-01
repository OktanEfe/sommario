import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY tanımlı değil." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const {
      formType,
      name,
      email,
      phone,
      subject,
      city,
      position,
      message,
    } = body;

    if (!formType || !name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        { success: false, error: "Geçerli bir e-posta adresi girin." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeCity = escapeHtml(city);
    const safePosition = escapeHtml(position);
    const safeMessage = escapeHtml(message);

    const logoUrl = "https://sommario.com.tr/logo/logo.png";

    let to = process.env.CONTACT_RECEIVER_EMAIL?.trim() || "";
    let mailSubject = "[Sommario] Yeni Mesaj";
    let html = "";

    if (formType === "contact") {
      to = process.env.CONTACT_RECEIVER_EMAIL?.trim() || "";
      mailSubject = `[İletişim Formu] ${safeSubject || "Yeni Mesaj"}`;

      html = `
        <div style="margin:0;padding:40px 20px;background:#f7f5f1;font-family:Arial,Helvetica,sans-serif;color:#231F20;">
          <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid rgba(0,0,0,0.06);border-radius:24px;overflow:hidden;">
            
            <div style="background:#ffffff;padding:28px 32px 20px;border-bottom:1px solid rgba(0,0,0,0.06);text-align:center;">
              <img 
                src="${logoUrl}" 
                alt="Sommario"
                style="max-width:180px;width:100%;height:auto;display:block;margin:0 auto 18px;"
              />
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#004A30;font-weight:700;">
                Sommario Web Formu
              </p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:500;color:#231F20;">
                Yeni İletişim Mesajı
              </h1>
            </div>

            <div style="padding:32px;">
              <p style="margin:0 0 24px;font-size:14px;line-height:1.8;color:rgba(35,31,32,0.7);">
                Web sitesi üzerinden yeni bir iletişim formu mesajı alındı. Detaylar aşağıda yer almaktadır.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Ad Soyad</div>
                    <div style="font-size:15px;color:#231F20;">${safeName || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">E-posta</div>
                    <div style="font-size:15px;color:#231F20;">${safeEmail || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Konu</div>
                    <div style="font-size:15px;color:#231F20;">${safeSubject || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:8px;">Mesaj</div>
                    <div style="
                      font-size:16px;
                      line-height:1.9;
                      color:#231F20;
                      white-space:pre-line;
                      word-break:break-word;
                    ">
                      ${safeMessage || "-"}
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div style="padding:18px 32px;border-top:1px solid rgba(0,0,0,0.06);background:#fff;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:rgba(35,31,32,0.45);">
                Bu e-posta Sommario web sitesi üzerinden otomatik olarak oluşturulmuştur.
              </p>
            </div>
          </div>
        </div>
      `;
    } else if (formType === "franchise") {
      to = process.env.FRANCHISE_RECEIVER_EMAIL?.trim() || "";
      mailSubject = "[Franchise Başvurusu] Yeni Başvuru";

      html = `
        <div style="margin:0;padding:40px 20px;background:#f7f5f1;font-family:Arial,Helvetica,sans-serif;color:#231F20;">
          <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid rgba(0,0,0,0.06);border-radius:24px;overflow:hidden;">
            
            <div style="background:#ffffff;padding:28px 32px 20px;border-bottom:1px solid rgba(0,0,0,0.06);text-align:center;">
              <img 
                src="${logoUrl}" 
                alt="Sommario"
                style="max-width:180px;width:100%;height:auto;display:block;margin:0 auto 18px;"
              />
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#004A30;font-weight:700;">
                Sommario Web Formu
              </p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:500;color:#231F20;">
                Yeni Franchise Başvurusu
              </h1>
            </div>

            <div style="padding:32px;">
              <p style="margin:0 0 24px;font-size:14px;line-height:1.8;color:rgba(35,31,32,0.7);">
                Web sitesi üzerinden yeni bir franchise başvurusu alındı. Başvuru sahibine ait bilgiler aşağıda detaylı olarak yer almaktadır.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Ad Soyad</div>
                    <div style="font-size:15px;color:#231F20;">${safeName || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">E-posta</div>
                    <div style="font-size:15px;color:#231F20;">${safeEmail || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Telefon</div>
                    <div style="font-size:15px;color:#231F20;">${safePhone || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Hedeflenen Şehir / Bölge</div>
                    <div style="font-size:15px;color:#231F20;">${safeCity || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:8px;">Yatırım Bütçesi ve Notlar</div>
                    <div style="
                      font-size:16px;
                      line-height:1.9;
                      color:#231F20;
                      white-space:pre-line;
                      word-break:break-word;
                    ">
                      ${safeMessage || "-"}
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div style="padding:18px 32px;border-top:1px solid rgba(0,0,0,0.06);background:#fff;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:rgba(35,31,32,0.45);">
                Bu e-posta Sommario web sitesi üzerinden otomatik olarak oluşturulmuştur.
              </p>
            </div>
          </div>
        </div>
      `;
    } else if (formType === "career") {
      to = process.env.CAREER_RECEIVER_EMAIL?.trim() || "";
      mailSubject = "[Kariyer Başvurusu] Yeni Başvuru";

      html = `
        <div style="margin:0;padding:40px 20px;background:#f7f5f1;font-family:Arial,Helvetica,sans-serif;color:#231F20;">
          <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid rgba(0,0,0,0.06);border-radius:24px;overflow:hidden;">
            
            <div style="background:#ffffff;padding:28px 32px 20px;border-bottom:1px solid rgba(0,0,0,0.06);text-align:center;">
              <img 
                src="${logoUrl}" 
                alt="Sommario"
                style="max-width:180px;width:100%;height:auto;display:block;margin:0 auto 18px;"
              />
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#004A30;font-weight:700;">
                Sommario Web Formu
              </p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:500;color:#231F20;">
                Yeni Kariyer Başvurusu
              </h1>
            </div>

            <div style="padding:32px;">
              <p style="margin:0 0 24px;font-size:14px;line-height:1.8;color:rgba(35,31,32,0.7);">
                Web sitesi üzerinden yeni bir kariyer başvurusu alındı. Adaya ait bilgiler aşağıda yer almaktadır.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Ad Soyad</div>
                    <div style="font-size:15px;color:#231F20;">${safeName || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">E-posta</div>
                    <div style="font-size:15px;color:#231F20;">${safeEmail || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Telefon</div>
                    <div style="font-size:15px;color:#231F20;">${safePhone || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:16px 18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:6px;">Başvurulan Pozisyon</div>
                    <div style="font-size:15px;color:#231F20;">${safePosition || "-"}</div>
                  </td>
                </tr>

                <tr>
                  <td style="background:#FAF9F6;padding:18px;border-radius:16px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#004A30;font-weight:700;margin-bottom:8px;">Kısa Ön Yazı</div>
                    <div style="
                      font-size:16px;
                      line-height:1.9;
                      color:#231F20;
                      white-space:pre-line;
                      word-break:break-word;
                    ">
                      ${safeMessage || "-"}
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div style="padding:18px 32px;border-top:1px solid rgba(0,0,0,0.06);background:#fff;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:rgba(35,31,32,0.45);">
                Bu e-posta Sommario web sitesi üzerinden otomatik olarak oluşturulmuştur.
              </p>
            </div>
          </div>
        </div>
      `;
    } else {
      return NextResponse.json(
        { success: false, error: "Geçersiz form tipi." },
        { status: 400 }
      );
    }

    if (!to) {
      return NextResponse.json(
        { success: false, error: "Hedef mail adresi tanımlı değil." },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from: "Sommario <admin@sommario.com.tr>",
      to: [to],
      replyTo: safeEmail,
      subject: mailSubject,
      html,
    });

    console.log("Resend result:", result);

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { success: false, error: "Mail gönderilemedi." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, error: "Mail gönderilemedi." },
      { status: 500 }
    );
  }
}