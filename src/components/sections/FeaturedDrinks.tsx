"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FeaturedDrinks = () => {
  const drinks = [
    { 
      id: 1, 
      name: "Iced Pistachio Latte", 
      note: "Sommario Signature", 
      desc: "Özel Antep fıstığı özü ve ipeksi süt dokusuyla." 
    },
    { 
      id: 2, 
      name: "Nitro Cold Brew", 
      note: "Slow Brewed", 
      desc: "24 saat demlenen, kadifemsi nitrojen dokunuşu." 
    },
    { 
      id: 3, 
      name: "Cortado", 
      note: "Roastery Classic", 
      desc: "Eşit oranda espresso ve sütün mükemmel dengesi." 
    },
  ];

  return (
    <section className="py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#004A30]/20" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#004A30]">
                Curated Selection
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-[#1A1A1A]">
              Mevsimin <span className="italic font-serif">Karakterleri</span>
            </h2>
          </div>
          <p className="text-sm text-black/40 max-w-[300px] leading-relaxed font-light">
            Baristalarımızın özenle seçtiği, her yudumda markamızın ruhunu yansıtan imza lezzetler.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {drinks.map((drink, index) => (
          <motion.div 
            key={drink.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white border border-black/[0.03] p-12 flex flex-col items-center justify-center transition-all duration-700 group-hover:border-[#004A30]/20 group-hover:shadow-2xl group-hover:shadow-[#004A30]/5">
              
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-[-4px] group-hover:translate-y-[4px]">
                <ArrowUpRight size={20} className="text-[#004A30]" />
              </div>

              <div className="w-40 h-40 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#004A30]/5 rounded-full scale-100 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative w-24 h-24 bg-white rounded-full shadow-sm border border-black/[0.02] flex items-center justify-center overflow-hidden">
                   <span className="text-[8px] uppercase tracking-widest text-black/20 font-bold">Product Visual</span>
                </div>
              </div>

              <div className="mt-12 text-center space-y-3">
                <span className="text-[9px] text-[#004A30] tracking-[0.3em] uppercase font-bold px-3 py-1 bg-[#004A30]/5 rounded-full">
                  {drink.note}
                </span>
                <h4 className="text-2xl font-light tracking-tight text-[#1A1A1A] pt-2">
                  {drink.name}
                </h4>
                <p className="text-xs text-black/40 font-light leading-relaxed max-w-[200px] mx-auto">
                  {drink.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#004A30] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDrinks;