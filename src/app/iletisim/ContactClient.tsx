"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

export default function ContantClient() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      link: "#",
      desc: "@sommariocoffee",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      link: "#",
      desc: "Sommario Company",
    },
    {
      name: "X",
      icon: <Twitter size={18} />,
      link: "#",
      desc: "sommario_tr",
    },
  ];

  return (
    <main className="pt-[92px] md:pt-[112px] pb-20 md:pb-28 bg-white font-sans overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-6 md:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 xl:gap-20 items-center mb-14 md:mb-20">
          <div className="lg:col-span-7 max-w-4xl space-y-5 md:space-y-7">
            
              <span className="text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-[#004A30] font-bold block mb-4 md:mb-5">
                Bize Ulaşın
              </span>

              <h1 className="text-[44px] leading-[1.02] sm:text-[56px] md:text-[72px] xl:text-[88px] font-light tracking-[-0.04em] text-[#1A1A1A]">
                Bir kahve eşliğinde <br />
                <span className="italic font-serif text-[#004A30]/80">
                  konuşalım.
                </span>
              </h1>

              <p className="mt-5 md:mt-7 text-[16px] sm:text-[18px] md:text-[22px] text-black/40 font-light leading-relaxed max-w-2xl">
                Sorularınız, iş birliği önerileriniz veya sadece merhaba demek
                için buradayız. Ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[420px] md:w-[380px] md:h-[520px] xl:w-[470px] xl:h-[650px] 2xl:w-[520px] 2xl:h-[720px]">
              <Image
                src="/iletisim/bardak5.png"
                alt="Sommario Bardak"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 md:gap-20 xl:gap-24">
          <div className="lg:col-span-5 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 gap-7 md:gap-9">
              <div className="flex gap-5 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-[#FAF9F6] border border-black/[0.03] flex items-center justify-center text-[#004A30] group-hover:bg-[#004A30] group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">
                    E-posta
                  </h4>
                  <p className="text-[18px] md:text-[24px] text-[#1A1A1A] font-light italic break-all sm:break-normal">
                    info@sommario.com.tr
                  </p>
                </div>
              </div>

              <div className="flex gap-5 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-[#FAF9F6] border border-black/[0.03] flex items-center justify-center text-[#004A30] group-hover:bg-[#004A30] group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">
                    Telefon
                  </h4>
                  <p className="text-[18px] md:text-[24px] text-[#1A1A1A] font-light">
                  +90 543 905 03 78

                  </p>
                </div>
              </div>

              <div className="flex gap-5 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-[#FAF9F6] border border-black/[0.03] flex items-center justify-center text-[#004A30] group-hover:bg-[#004A30] group-hover:text-white transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">
                    Merkez Atölye
                  </h4>
                  <p className="text-[18px] md:text-[24px] text-[#1A1A1A] font-light leading-snug">
                    İzmit, Kocaeli / Türkiye
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 md:pt-12 border-t border-black/[0.05] space-y-7 md:space-y-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/30 font-bold">
                Dijital Topluluk
              </p>

              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="group flex items-center justify-between p-5 md:p-6 bg-[#FAF9F6] rounded-[1.5rem] border border-transparent hover:border-[#004A30]/10 hover:bg-white transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="text-black/40 group-hover:text-[#004A30] transition-colors italic">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-[15px] md:text-[16px] font-medium text-[#1A1A1A]">
                          {social.name}
                        </p>
                        <p className="text-[11px] md:text-[12px] text-black/30 font-light">
                          {social.desc}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-black/10 group-hover:text-[#004A30] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
  <div className="bg-[#FAF9F6] p-6 sm:p-8 md:p-10 xl:p-12 rounded-[2.2rem] md:rounded-[3rem] border border-black/[0.02] shadow-sm">
  <form
 onSubmit={async (e) => {
  e.preventDefault();
  setStatus("idle");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const payload = {
    formType: "contact",
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    kvkk: formData.get("kvkk"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    setStatus("success");
    form.reset();
  } else {
    setStatus("error");
  }
}}
  className="space-y-7 md:space-y-8"
>
  {status === "success" && (
    <div className="rounded-2xl bg-[#004A30]/6 border border-[#004A30]/10 px-5 py-4 text-sm text-[#004A30] font-medium">
      Mesajınız başarıyla gönderildi.
    </div>
  )}

  {status === "error" && (
    <div className="rounded-2xl bg-red-50 border border-red-100 px-5 py-4 text-sm text-red-600 font-medium">
      Bir hata oluştu. Lütfen tekrar deneyin.
    </div>
  )}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    <div className="space-y-3">
      <label className="block text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black font-bold ml-1">
        Ad Soyad
      </label>
      <input
        type="text"
        name="name"
        required
        className="w-full p-4 md:p-5 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-[#004A30]/15 transition-all text-sm md:text-[15px] text-black placeholder:text-black/35 font-normal border border-black/[0.05]"
        placeholder="İsminiz nedir?"
      />
    </div>

    <div className="space-y-3">
      <label className="block text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black font-bold ml-1">
        E-posta
      </label>
      <input
        type="email"
        name="email"
        required
        className="w-full p-4 md:p-5 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-[#004A30]/15 transition-all text-sm md:text-[15px] text-black placeholder:text-black/35 font-normal border border-black/[0.05]"
        placeholder="Adresiniz..."
      />
    </div>
  </div>

  <div className="space-y-3">
    <label className="block text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black font-bold ml-1">
      Konu Başlığı
    </label>
    <select
      name="subject"
      defaultValue="Genel Sorular"
      className="w-full p-4 md:p-5 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-[#004A30]/15 transition-all text-sm md:text-[15px] text-black font-normal border border-black/[0.05] appearance-none cursor-pointer"
    >
      <option>Genel Sorular</option>
      <option>Franchise & İş Ortaklığı</option>
      <option>Kariyer Başvurusu</option>
      <option>Öneri ve Geri Bildirim</option>
    </select>
  </div>

  <div className="space-y-3">
    <label className="block text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black font-bold ml-1">
      Mesajınız
    </label>
    <textarea
      name="message"
      rows={6}
      required
      className="w-full p-4 md:p-5 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-[#004A30]/15 transition-all text-sm md:text-[15px] text-black placeholder:text-black/35 font-normal border border-black/[0.05] resize-none"
      placeholder="Size nasıl yardımcı olabiliriz?"
    />
  </div>

  <label className="flex items-start gap-3 text-[13px] md:text-[14px] text-black/60 leading-relaxed font-light">
    <input
      type="checkbox"
      name="kvkk"
      required
      className="mt-1 h-4 w-4 rounded border-black/20 accent-[#004A30]"
    />
    <span>
      Kişisel verilerimin işlenmesine ilişkin{" "}
      <a href="/kvkk" className="text-[#004A30] underline underline-offset-2">
        KVKK Aydınlatma Metni
      </a>
      ’ni okudum ve kabul ediyorum.
    </span>
  </label>

  <button
    type="submit"
    className="w-full group px-10 md:px-12 py-4 md:py-5 bg-[#004A30] text-white rounded-2xl text-[10px] md:text-[11px] uppercase tracking-[0.28em] md:tracking-[0.36em] font-bold flex items-center justify-center gap-3 md:gap-4 hover:bg-[#003824] transition-all duration-500 shadow-xl shadow-[#004A30]/10"
  >
    Mesajı Gönder
    <Send
      size={14}
      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
    />
  </button>
</form>
  </div>
</div>
        </div>
      </div>
    </main>
  );
}