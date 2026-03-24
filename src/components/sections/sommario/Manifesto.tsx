"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <section className="relative py-60 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.25]">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#004A30]" />
        <div className="absolute top-0 left-1/3 w-1/3 h-full bg-white" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E02826]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#004A30]" />
            <div className="w-8 h-[1px] bg-black/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E02826]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <blockquote className="text-4xl md:text-7xl font-light tracking-tighter text-[#1A1A1A] leading-[1.1]">
              Kahve sadece bir içecek değildir; <br />
              <span className="italic font-serif text-[#004A30]">zor zamanlarda</span> <br />
              insana eşlik eden bir dosttur.
            </blockquote>
            
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.6em] uppercase text-black/30 font-bold">
                Sommario Manifesto
              </p>
              <div className="flex flex-col items-center gap-1">
                 <span className="text-xs font-light text-black/40 italic">Çekirdeğe, emeğe ve insana saygıyla.</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 100 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-px bg-gradient-to-b from-[#004A30] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Manifesto;