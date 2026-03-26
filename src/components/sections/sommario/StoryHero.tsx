"use client";
import React from 'react';
import { motion } from 'framer-motion';

const StoryHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-20">
        
        <div className="relative z-10 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            
            
            <h1 className="text-6xl md:text-[5.5rem] font-light tracking-tighter text-[#1A1A1A] leading-[0.95]">
              Bir Kahvenin, <br />
              <span className="italic font-serif text-[#004A30]">Derin Saygıyla</span> <br />
              Yazılan Hikâyesi.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-md space-y-8"
          >
            <p className="text-xl text-black/40 font-light leading-relaxed">
              Her hikâye bir ihtiyaçla başlar. Sommario’nun ise bir tutku, bir arayış ve kahveye duyulan derin bir saygıyla...
            </p>
            
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-light text-[#1A1A1A]">5+</span>
                <span className="text-[10px] uppercase tracking-widest text-black/30">Aktif Şube</span>
              </div>
              <div className="w-px h-10 bg-black/5" />
              <div className="flex flex-col">
                <span className="text-2xl font-light text-[#E02826]">Akademi</span>
                <span className="text-[10px] uppercase tracking-widest text-black/30">Eğitim Odaklı</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-[600px] md:h-[750px] w-full"
        >
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5 border border-black/[0.03]">
            <img 
              src="/path-to-your-uploaded-image.jpg" 
              alt="Sommario Brewing Craft" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          
        </motion.div>

      </div>

      {/* Arka Plan Dekoratif Yazı */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 text-[15rem] font-bold text-black/[0.01] select-none pointer-events-none rotate-90">
        ROASTERY
      </div>
    </section>
  );
};

export default StoryHero;