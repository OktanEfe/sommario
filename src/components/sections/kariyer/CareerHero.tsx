"use client";
import React from 'react';

const CareerHero = () => {
  return (
    <section className="pt-32 pb-20 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] font-semibold">Kariyer</span>
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-[#231F20] leading-[1.1]">
            Sommario&apos;da bir çalışan değil, <br />
            <span className="italic">bir partnersin.</span>
          </h1>
          <p className="text-lg text-[#231F20]/60 font-light leading-relaxed">
            Bizimle birlikte her fincanda bir hikaye yazmaya, misafirlerimize sadece kahve değil bir deneyim sunmaya var mısın?
          </p>
          <button className="px-10 py-4 bg-[#004A30] text-white text-[11px] uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-all">
            Hemen Başvur
          </button>
        </div>
        <div className="aspect-[4/5] bg-white rounded-[4rem] border border-black/[0.03] shadow-sm">
        </div>
      </div>
    </section>
  );
};

export default CareerHero;