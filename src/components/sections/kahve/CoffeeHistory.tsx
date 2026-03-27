"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CoffeeHistory = () => {
  return (
    <section className="py-40 bg-white overflow-hidden relative">


      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.6em] uppercase text-[#004A30] font-bold">
                  Kökler & Tarihçe
                </span>
                <div className="w-12 h-[1px] bg-black/10" />
              </div>

              <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-[#1A1A1A] leading-[0.9]">
                Kahvenin <br />
                <span className="italic font-serif text-[#004A30]">Sessiz Mirası.</span>
              </h2>

              <p className="text-xl text-black/40 font-light leading-relaxed max-w-xl">
                Etiyopya’da Çoban Kaldi’nin merakıyla başlayan kahvenin yolculuğu, Yemen’in Mocha limanından İstanbul kahvehanelerine uzanarak bir içecekten çok daha fazlasına dönüştü; bugün ise üçüncü dalga kahve anlayışıyla birlikte çekirdeğin kökenine, karakterine ve işlenişine saygı duyan modern bir kültüre evrildi. Sommario, bu köklü mirası nitelikli çekirdekler ve çağdaş kavurma yaklaşımıyla bugünün fincanına taşır.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-black/[0.05]">
              <div className="space-y-2">
                <p className="text-3xl font-light italic tracking-tighter text-[#1A1A1A]">850</p>
                <p className="text-[10px] uppercase tracking-widest text-[#004A30] font-bold">İlk Keşif</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-light italic tracking-tighter text-[#1A1A1A]">1550</p>
                <p className="text-[10px] uppercase tracking-widest text-[#004A30] font-bold">Kahvehane Kültürü</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-square lg:aspect-[4/5] bg-[#FAF9F6] rounded-[4rem] overflow-hidden group border border-black/[0.02] shadow-sm"
          >
            <div className="absolute inset-0 flex items-center justify-center p-16">
              <div className="w-full h-full border border-[#004A30]/5 rounded-[3rem] flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4 group-hover:scale-110 transition-transform duration-1000">
                  <div className="text-4xl italic font-serif text-[#004A30]/20">Miras</div>
                  <div className="w-12 h-px bg-[#E02826]/20 mx-auto" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoffeeHistory;