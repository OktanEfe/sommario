"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Deneyimim olması şart mı?", a: "Hayır. Sommario Akademi bünyesinde sana gereken tüm eğitimi veriyoruz. Kahve tutkun ve öğrenme isteğin yeterli!" },
  { q: "Part-time çalışabilir miyim?", a: "Evet, öğrenciler ve yarı zamanlı çalışmak isteyenler için esnek vardiya sistemimiz mevcuttur. Okul saatlerine göre ayarlama yapabiliyoruz." },
  { q: "Yaş sınırı var mı?", a: "Yasal olarak 18 yaşını doldurmuş olman gerekmektedir. Üst yaş sınırı yoktur, her yaştan tutkulu insanı bekliyoruz." },
  { q: "Başvuru süreci nasıl işliyor?", a: "Formu doldurduktan sonra İK ekibimiz 3 iş günü içinde seninle iletişime geçer. Ardından kısa bir tanışma görüşmesi yapılır." },
  { q: "Hangi pozisyonlar için başvurabilirim?", a: "Barista, kasa, temizlik ve mağaza sorumlusu pozisyonlarımız için başvuru alıyoruz. Her mağazanın ihtiyacı farklı olabilir." },
];

const CareerFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#FAF9F6]">
      <div className="max-w-[800px] mx-auto px-8">
        <h2 className="text-3xl font-light mb-16 text-center">Merak Edilenler</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-black/[0.03] overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left gap-4"
              >
                <span className="text-sm font-medium">{faq.q}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#FAF9F6] flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: openIndex === i ? '#004A30' : '#FAF9F6' }}
                >
                  {openIndex === i 
                    ? <Minus size={14} className="text-white" />
                    : <Plus size={14} className="text-[#004A30]" />
                  }
                </span>
              </button>

              {/* Animasyonlu içerik */}
              <div
                style={{
                  maxHeight: openIndex === i ? '200px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                  transition: 'max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-in-out',
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-sm text-black/50 font-light leading-relaxed border-t border-black/[0.03] pt-4">
                  {faq.a}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerFAQ;