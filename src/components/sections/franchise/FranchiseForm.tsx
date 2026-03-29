"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";

const FranchiseForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <section id="franchise-form" className="py-24 md:py-32 bg-white">
      <div className="max-w-[860px] mx-auto px-5 sm:px-6 md:px-8">
        <div className="border border-black/[0.05] rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 xl:p-16 shadow-sm bg-white">
          <div className="text-center mb-10 md:mb-12 space-y-4">
            <h2 className="text-[32px] md:text-[42px] font-light tracking-tighter text-[#231F20]">
              Başvuru Formu
            </h2>
            <p className="text-[15px] md:text-[16px] text-black/55 font-light leading-relaxed max-w-xl mx-auto">
              Bilgilerinizi bırakın, franchise sürecine dair sizi en kısa sürede bilgilendirelim.
            </p>
          </div>

          <form
           onSubmit={async (e) => {
            e.preventDefault();
            setStatus("idle");
          
            const form = e.currentTarget;
            const formData = new FormData(form);
          
            const payload = {
              formType: "franchise",
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              city: formData.get("city"),
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
                Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
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
                  className="w-full p-4 md:p-5 bg-[#FAF9F6] rounded-2xl text-sm md:text-[15px] text-black placeholder:text-black/35 outline-none border border-black/[0.05] focus:border-[#004A30]/30 focus:ring-2 focus:ring-[#004A30]/10 transition-all"
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
                  className="w-full p-4 md:p-5 bg-[#FAF9F6] rounded-2xl text-sm md:text-[15px] text-black placeholder:text-black/35 outline-none border border-black/[0.05] focus:border-[#004A30]/30 focus:ring-2 focus:ring-[#004A30]/10 transition-all"
                  placeholder="E-posta adresiniz"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black font-bold ml-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-4 md:p-5 bg-[#FAF9F6] rounded-2xl text-sm md:text-[15px] text-black placeholder:text-black/35 outline-none border border-black/[0.05] focus:border-[#004A30]/30 focus:ring-2 focus:ring-[#004A30]/10 transition-all"
                  placeholder="Telefon numaranız"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black font-bold ml-1">
                  Hedeflenen Şehir / Bölge
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full p-4 md:p-5 bg-[#FAF9F6] rounded-2xl text-sm md:text-[15px] text-black placeholder:text-black/35 outline-none border border-black/[0.05] focus:border-[#004A30]/30 focus:ring-2 focus:ring-[#004A30]/10 transition-all"
                  placeholder="Örn. İstanbul / İzmir / Bursa"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black font-bold ml-1">
                Yatırım Bütçesi ve Notlar
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full p-4 md:p-5 bg-[#FAF9F6] rounded-2xl text-sm md:text-[15px] text-black placeholder:text-black/35 outline-none border border-black/[0.05] focus:border-[#004A30]/30 focus:ring-2 focus:ring-[#004A30]/10 transition-all resize-none"
                placeholder="Yatırım bütçeniz, hedefiniz ve eklemek istedikleriniz..."
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
                <a
                  href="/kvkk"
                  className="text-[#004A30] underline underline-offset-2"
                >
                  KVKK Aydınlatma Metni
                </a>
                ’ni okudum ve kabul ediyorum.
              </span>
            </label>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="cursor-pointer w-full sm:w-auto group px-10 md:px-12 py-4 md:py-5 bg-[#004A30] text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.28em] md:tracking-[0.32em] rounded-full transition-all duration-500 shadow-lg shadow-[#004A30]/10 hover:bg-white hover:text-[#004A30] hover:shadow-xl hover:shadow-[#004A30]/15 border border-[#004A30] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Başvuruyu Gönder
                <Send
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FranchiseForm;