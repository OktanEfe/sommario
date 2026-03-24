"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SommarioSelection = () => {
  const selectionFeatures = [
    { 
      t: "Tek Köken", 
      d: "Karışımların içinde kaybolmayan, bölgesel karakterini %100 koruyan çekirdekler.",
      icon: "Origin" 
    },
    { 
      t: "Taze Hasat", 
      d: "Mevsimsellik ilkesine sadık kalarak, en taze mahsulleri fincanınıza taşıyoruz.",
      icon: "Fresh" 
    },
    { 
      t: "Adil Ticaret", 
      d: "Çiftçilerimizle doğrudan bağ kuruyor, emeğin karşılığını saygıyla veriyoruz.",
      icon: "Fair" 
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#FAF9F6] relative overflow-hidden">
      {/* Dekoratif Yan Yazı - Mobilde Gizli */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[8vw] font-bold text-black/[0.02] select-none pointer-events-none uppercase tracking-widest hidden md:block">
        Specialty
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        {/* ÜST BAŞLIK ALANI */}
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5 md:space-y-6"
          >
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <div className="w-6 md:w-8 h-px bg-[#004A30]/20" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#004A30]">
                Seçki Standartları
              </span>
              <div className="w-6 md:w-8 h-px bg-[#004A30]/20" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-[#1A1A1A] leading-[1]">
              Neden <span className="italic font-serif text-[#004A30]">Sommario</span> Çekirdeği?
            </h2>
            
            <p className="text-lg md:text-xl text-black/40 font-light leading-relaxed max-w-2xl mx-auto">
              Dünya kahve üretiminin sadece en üstteki <span className="text-[#E02826] font-medium">%5&apos;lik</span> kısmını temsil eden &quot;Specialty&quot; çekirdekler, bizim tek standardımızdır.
            </p>
          </motion.div>
        </div>

        {/* KARTLAR GRID - Mobilde Hover Kaldırıldı, Kompakt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {selectionFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[3.5rem] border border-black/[0.03] shadow-sm flex flex-col justify-between h-[320px] md:h-[400px]"
            >
              <div className="space-y-5">
                {/* İkon / Badge Alanı - Hover'sız, Statik */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#FAF9F6] border border-black/[0.03] flex items-center justify-center bg-white border-black/[0.03]">
                  <span className="text-[8px] font-bold text-[#004A30] uppercase tracking-tighter">
                    {item.icon}
                  </span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-light tracking-tighter text-[#1A1A1A]">
                  {item.t}
                </h4>
                
                <p className="text-sm text-black/40 font-light leading-relaxed max-w-[260px]">
                  {item.d}
                </p>
              </div>

              {/* Alt Detay Çizgisi - Mobilde Daha Kompakt */}
              <div className="relative pt-6 md:pt-8 mt-auto border-t border-black/[0.05]">
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#004A30]">
                  Detaylı Analiz
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SommarioSelection;