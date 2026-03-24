"use client";
import React from 'react';

const FranchiseHero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-8 text-center space-y-8">
        <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] font-semibold">İş Ortaklığı</span>
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-[#231F20] leading-tight">
          Birlikte <span className="italic">Büyüyelim.</span>
        </h1>
        <p className="text-lg text-[#231F20]/50 font-light max-w-2xl mx-auto leading-relaxed">
          Sommario&apos;nun &quot;Sessiz Lüks&quot; felsefesini kendi şehrinize taşımaya ne dersiniz? Nitelikli kahve deneyimini profesyonel bir işletme modeliyle buluşturuyoruz.
        </p>
      </div>
    </section>
  );
};

export default FranchiseHero;