"use client";
import React from 'react';

const steps = [
  { id: "01", t: "Başvuru & Değerlendirme", d: "Formu doldurduktan sonra ekibimiz profilinizi ve yatırım hedeflerinizi inceler." },
  { id: "02", t: "Lokasyon Seçimi", d: "Sommario standartlarına uygun, potansiyeli yüksek lokasyon analizi yapılır." },
  { id: "03", t: "Mimari Projelendirme", d: "Mağazanız, imza mimari dilimize uygun olarak uzman ekibimizce tasarlanır." },
  { id: "04", t: "Eğitim & Açılış", d: "Barista ve işletme eğitimlerinin ardından Sommario ailesine hoş geldiniz." }
];

const FranchiseSteps = () => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-8">
      <h2 className="text-4xl font-light mb-16 text-black ">
  Franchise Süreci
</h2>        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="space-y-4 relative">
              <span className="text-4xl font-light text-[#004A30]">{s.id}</span>
              <h4 className="text-lg font-medium text-[#231F20]">{s.t}</h4>
              <p className="text-m text-black/40 font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseSteps;