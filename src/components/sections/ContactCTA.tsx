"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="px-6 md:px-8 py-24 bg-white">
      <div className="max-w-[1280px] mx-auto relative h-[500px] rounded-[2rem] overflow-hidden bg-[#FAF9F6] border border-black/[0.03]">
        
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              opacity: [0.08, 0.15, 0.08],
              x: [0, 30, 0] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -left-1/4 w-full h-full bg-[#E02826] blur-[160px] rounded-full"
          />
          <motion.div 
            animate={{ 
              opacity: [0.05, 0.12, 0.05],
              x: [0, -30, 0] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[#004A30] blur-[160px] rounded-full"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          
          <div className="mb-12 flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E02826]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/20">
              Sommario Coffee Roastery
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#004A30]" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1A1A1A] mb-16 leading-tight">
            Nitelikli bir deneyim için <br />
            <span className="italic text-[#004A30]/80 font-serif">sizi bekliyoruz.</span>
          </h2>

          <div className="flex flex-col items-center gap-8">
            <Link 
              href="/iletisim"
              className="group relative flex items-center gap-4 px-12 py-5 bg-[#004A30] rounded-full transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,74,48,0.25)] active:scale-95"
            >
              <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em]">
                Bize Ulaşın
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-2 h-[1px] bg-[#E02826]" />
              <div className="w-2 h-[1px] bg-black/10" />
              <div className="w-2 h-[1px] bg-[#004A30]" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-black/30 ml-1 font-medium">
                Sommario 
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-12 w-px bg-black/[0.02]" />
        <div className="absolute top-0 bottom-0 right-12 w-px bg-black/[0.02]" />
        
        <div className="absolute top-8 left-8">
          <div className="w-4 h-4 border-l border-t border-[#E02826]/30" />
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="w-4 h-4 border-r border-b border-[#004A30]/30" />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;