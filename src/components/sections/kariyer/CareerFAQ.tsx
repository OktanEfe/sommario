"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Deneyimim olması şart mı?",
    a: "Hayır. Sommario Akademi bünyesinde sana gereken tüm eğitimi veriyoruz. Kahve tutkun ve öğrenme isteğin yeterli!",
  },
  {
    q: "Part-time çalışabilir miyim?",
    a: "Evet, öğrenciler ve yarı zamanlı çalışmak isteyenler için esnek vardiya sistemimiz mevcuttur. Okul saatlerine göre ayarlama yapabiliyoruz.",
  },
  {
    q: "Yaş sınırı var mı?",
    a: "Yasal olarak 18 yaşını doldurmuş olman gerekmektedir. Üst yaş sınırı yoktur, her yaştan tutkulu insanı bekliyoruz.",
  },
  {
    q: "Başvuru süreci nasıl işliyor?",
    a: "Formu doldurduktan sonra İK ekibimiz 3 iş günü içinde seninle iletişime geçer. Ardından kısa bir tanışma görüşmesi yapılır.",
  },
  {
    q: "Hangi pozisyonlar için başvurabilirim?",
    a: "Barista, kasa, temizlik ve mağaza sorumlusu pozisyonlarımız için başvuru alıyoruz. Her mağazanın ihtiyacı farklı olabilir.",
  },
];

const CareerFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 xl:py-32 bg-[#FAF9F6]">
      <div className="max-w-[980px] mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14 xl:mb-16">
          <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#004A30] font-semibold mb-4">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-light tracking-tight text-[#1A1A1A]">
            Merak Edilenler
          </h2>
        </div>

        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.04] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 flex justify-between items-center text-left gap-4"
                >
                  <span className="text-[15px] sm:text-[17px] md:text-[20px] font-medium text-[#1A1A1A] leading-snug pr-2">
                    {faq.q}
                  </span>

                  <span
                    className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? "#004A30" : "#FAF9F6",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={16} className="text-white" />
                    ) : (
                      <Plus size={16} className="text-[#004A30]" />
                    )}
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "260px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition:
                      "max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-in-out",
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-7 pt-4 border-t border-black/[0.04] text-[14px] sm:text-[15px] md:text-[17px] text-black/70 font-normal leading-7 md:leading-8">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerFAQ;