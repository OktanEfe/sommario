"use client";
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Zanaat",
    desc: "Her çekirdek, karakterini en iyi yansıtacağı sıcaklıkta dinlenir. Bizim için rutin değil, bir zanaattır.",
    color: "text-[#004A30]"
  },
  {
    title: "Şeffaflık",
    desc: "Çekirdeğin tarladan fincana olan yolculuğunda her detay net, her aroma samimidir.",
    color: "text-[#E02826]"
  },
  {
    title: "Disiplin",
    desc: "Her şubede aynı kalite, her fincanda aynı özen ve her baristada aynı bilinç.",
    color: "text-black"
  }
];

const Values = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1A1A1A] leading-none">
            Değerlerimiz, <br />
            <span className="italic font-serif text-[#004A30]">Duruşumuz.</span>
          </h2>
          <p className="text-[10px] uppercase tracking-[0.5em] text-black/20 font-bold pb-2">
            Sommario Coffee Company © 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`group space-y-8 ${i === 1 ? 'md:mt-20' : ''} ${i === 2 ? 'md:mt-10' : ''}`}
            >
              <div className="space-y-4">
                
                <div className="h-[1px] w-full bg-black/[0.05] relative overflow-hidden">
                  <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-1000 ease-in-out ${v.color === 'text-white' ? 'bg-black' : 'bg-current'}`} />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-light text-[#1A1A1A] tracking-tighter transition-transform duration-500 group-hover:translate-x-2">
                  {v.title}
                </h3>
                <p className="text-sm text-black/40 leading-relaxed font-light max-w-[280px]">
                  {v.desc}
                </p>
              </div>

              <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E02826]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;