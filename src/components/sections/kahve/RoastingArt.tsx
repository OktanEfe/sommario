"use client";
import React from 'react';
import { motion } from 'framer-motion';

const RoastingArt = () => {
  return (
    <section className="py-24 md:py-32 bg-[#004A30] text-white overflow-hidden relative font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/5] bg-black/10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
              {/* ANA GÖRSEL */}
              <img 
                src="/images/roasting-process.jpg" 
                alt="Sommario Kavurma Süreci"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004A30]/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10">
                 <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-1 text-center">Yeni Seri</p>
                 <p className="text-xl md:text-2xl font-light italic font-serif text-center">Oro Azul</p>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Zanaat & Kimlik</span>
                <div className="w-10 h-px bg-white/10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter leading-tight text-white">
                Mavi Altın ve <br />
                <span className="italic font-serif text-white/40">Trinity Uyumu</span>
              </h2>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-md">
                Filtre kahve serimizde Oro Azul, espresso serimizde ise Trinity Blend ile marka kimliğimizi güçlendirdik. Çekirdeği yakmıyoruz, onu uyandırıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-4 border-t border-white/5">
              {[
                { t: "Trinity Blend", d: "Üç kıtanın kusursuz espresso dengesi." },
                { t: "Oro Azul", d: "İpeksi gövde ve berrak filtre deneyimi." }
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-default">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-500 shrink-0">
                    <div className="w-1 h-1 rounded-full bg-white group-hover:bg-[#004A30]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-widest">{f.t}</h4>
                    <p className="text-xs text-white/30 italic font-light">{f.d}</p>
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

export default RoastingArt;