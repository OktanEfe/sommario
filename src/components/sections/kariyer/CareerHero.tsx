"use client";
import React from "react";
import Image from "next/image";

const CareerHero = () => {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <span className="text-[11px] tracking-[0.5em] uppercase text-[#004A30] font-bold">
            Kariyer
          </span>

          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-[#231F20] leading-[0.95]">
            Sommario&apos;da <br /> bir partner, <br />
            <span className="italic font-serif">bir hikayesin.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#231F20]/60 font-light leading-relaxed max-w-md">
            Her fincanda yeni bir başarı hikayesine ortak olmaya var mısın?
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollToSection("career-form")}
              className="px-10 py-5 bg-[#004A30] text-white text-[11px] uppercase tracking-[0.2em] rounded-full border border-[#004A30]
              transition-all duration-300 ease-out shadow-xl shadow-[#004A30]/20
              hover:bg-white hover:text-[#004A30] hover:shadow-[#004A30]/10 hover:scale-[1.03]"
            >
              Hemen Başvur
            </button>

            
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
          <Image
            src="/kariyer/hero.webp"
            alt="Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;