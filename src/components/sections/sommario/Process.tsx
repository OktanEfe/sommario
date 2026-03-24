"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { 
      step: "01", 
      t: "Seçki & Terroir", 
      d: "Çekirdeğin geldiği toprağı, çiftçinin emeğini ve hasat zamanındaki nem oranını tek tek dinliyoruz." 
    },
    { 
      step: "02", 
      t: "Kavrum Eğrisi", 
      d: "Genetik mirası bozmadan, her çekirdeğin karakter kazanana kadar geçirdiği o hassas ısıl yolculuk." 
    },
    { 
      step: "03", 
      t: "Net Aromalar", 
      d: "Daha temiz bir içim ve daha samimi bir yaklaşım için her fincanda aynı disiplin ve bilinç." 
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="w-full lg:w-1/2 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#FAF9F6] border border-black/[0.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[10px] uppercase tracking-[0.5em] text-black/10 font-bold rotate-90">
                   Sommario Roastery 2018
                 </span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="absolute -bottom-8 -right-8 w-44 h-44 bg-[#004A30] rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl -rotate-6 transition-all duration-500"
            >
               <div className="flex gap-1 mb-4">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-1 h-1 rounded-full bg-[#E02826]" />
               </div>
               <span className="text-white text-[10px] font-bold leading-tight tracking-[0.3em] uppercase">
                 Karakterli <br/> Kahveler
               </span>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 space-y-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#004A30]/10 bg-[#004A30]/5">
                <div className="w-1 h-1 rounded-full bg-[#E02826] animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#004A30]">Atölye Disiplini</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-[#1A1A1A] leading-tight">
                İlk adımımız vitrin değil, <br />
                <span className="italic font-serif text-[#004A30]">kavurma makinesiydi.</span>
              </h2>
              <p className="text-lg text-black/40 font-light max-w-lg leading-relaxed">
                2018 yılında, işin mutfağında duran bir kavurma atölyesi olarak başladık. Kahveyi önce anlamak, sonra anlatmak istedik.
              </p>
            </div>

            <div className="grid gap-12">
              {steps.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-8 group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[12px] font-bold text-[#E02826] transition-transform group-hover:scale-110">{item.step}</span>
                    <div className="w-px h-full bg-black/[0.05] group-last:hidden" />
                  </div>
                  <div className="pb-8 border-b border-black/[0.03] w-full">
                    <h4 className="text-xl font-medium text-[#1A1A1A] mb-3 tracking-tight group-hover:text-[#004A30] transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-sm text-black/40 font-light leading-relaxed max-w-md">
                      {item.d}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;