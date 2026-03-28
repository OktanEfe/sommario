"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";


const BrewGuide = () => {
  const brewDetails = [
    { label: "Oran", value: "1:16", detail: "60g Kahve / 1L Su" },
    { label: "Süre", value: "2:45", detail: "İdeal Ekstraksiyon" },
    { label: "Isı", value: "93°C", detail: "Hassas Dengeli" },
    { label: "Öğütüm", value: "Orta", detail: "Deniz Tuzu Kıvamı" },
  ];

  return (
  

<section className="py-32 bg-[#004A30] overflow-hidden relative">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
  
  <div className="max-w-[1280px] mx-auto px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
      <div className="relative group order-2 lg:order-1">
        <div className="relative aspect-[4/5] bg-black/20 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
          
          <Image
            src="/sommario/brewing.webp"
            alt="Brewing Craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#004A30] via-transparent to-transparent opacity-60" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-12 h-12 bg-[#E02826] rounded-full animate-ping opacity-10" />
              <div className="absolute inset-0 m-auto w-3 h-3 bg-[#E02826] rounded-full shadow-[0_0_15px_#E02826]" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16 order-1 lg:order-2">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-white/30" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/60">
              Bunu da Bil!
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none">
            Mükemmel Bir <br />
            <span className="italic font-serif text-white/40">Ekstraksiyon.</span>
          </h2>
          
          <p className="text-lg text-white/40 font-light max-w-md leading-relaxed italic border-l border-white/10 pl-6">
            &quot;Kahveyi sadece demlemiyoruz; onun potansiyelini serbest bırakıyoruz.&quot;
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-12 gap-x-8">
          {brewDetails.map((item, index) => (
            <div key={index} className="space-y-3 group">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-[#E02826] transition-colors duration-500">
                {item.label}
              </p>
              <div className="flex flex-col">
                <span className="text-4xl font-light tracking-tighter text-white">
                  {item.value}
                </span>
                <span className="text-[11px] text-white/20 font-light mt-1">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default BrewGuide;