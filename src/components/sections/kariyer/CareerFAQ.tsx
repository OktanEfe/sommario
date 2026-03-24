"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Deneyimim olması şart mı?", a: "Hayır. Sommario Akademi bünyesinde sana gereken tüm eğitimi veriyoruz." },
  { q: "Part-time çalışabilir miyim?", a: "Evet, öğrenciler için esnek vardiya sistemimiz mevcuttur." },
  { q: "Yaş sınırı var mı?", a: "Yasal olarak 18 yaşını doldurmuş olman gerekmektedir." }
];

const CareerFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#FAF9F6]">
      <div className="max-w-[800px] mx-auto px-8">
        <h2 className="text-3xl font-light mb-16 text-center">Merak Edilenler</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-black/[0.03] overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="text-sm font-medium">{faq.q}</span>
                {openIndex === i ? <Minus size={18}/> : <Plus size={18}/>}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-sm text-black/50 font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerFAQ;