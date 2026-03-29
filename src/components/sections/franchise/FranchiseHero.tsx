"use client";
import React from "react";

const FranchiseHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-20 md:pt-36 md:pb-28 xl:pt-44 xl:pb-36">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-16 xl:gap-20">
          
          <div className="relative z-10 max-w-[620px] xl:max-w-[680px] space-y-6 md:space-y-8">
            <span className="block text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-[#004A30] font-semibold">
              İş Ortaklığı
            </span>

            <h1 className="text-[42px] sm:text-[52px] md:text-[64px] xl:text-[76px] font-light tracking-tighter text-[#231F20] leading-[1.02] break-words">
              Birlikte{" "}
              <span className="italic font-serif text-[#004A30]">
                Büyüyelim.
              </span>
            </h1>

            <p className="text-[16px] md:text-[19px] xl:text-[20px] text-black/55 font-light leading-relaxed max-w-[560px]">
              Sommario&apos;nun &quot;Sessiz Lüks&quot; felsefesini kendi şehrinize taşımaya ne dersiniz?
              Nitelikli kahve deneyimini profesyonel bir işletme modeliyle buluşturuyoruz.
            </p>
          </div>

          <div className="relative z-10 order-last lg:order-none">
            <div className="relative w-full max-w-[420px] md:max-w-[520px] xl:max-w-[560px] ml-auto mr-auto lg:mr-0 aspect-[4/5] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="/franchise/hero.webp"
                alt="Franchise"
                className="w-full h-full object-cover scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-transparent to-white/35" />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,255,255,0.22)] rounded-[2.5rem] md:rounded-[3rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHero;