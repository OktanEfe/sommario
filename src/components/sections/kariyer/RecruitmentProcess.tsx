"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { time: "01", title: "Başvuru", desc: "Online formumuzu doldurarak Sommario dünyasına ilk adımını at." },
  { time: "02", title: "Tanışma", desc: "Yetenek ekibimiz, vizyonumuzu paylaşmak için seninle kısa bir görüşme yapar." },
  { time: "03", title: "Mülakat", desc: "Mağazamızda, taze demlenmiş bir kahve eşliğinde karakterini tanımak isteriz." },
  { time: "04", title: "Sonuç", desc: "Kararımızı şeffaflıkla paylaşır ve seni ekibimize dahil ederiz." }
];

const RecruitmentProcess = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#004A30]/40 mb-4">
            Kariyer Yolculuğu
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1A1A1A]">
            Seni Neler <span className="italic font-serif">Bekliyor?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative z-10"
            >
              <div className="space-y-8">
                <div className="relative inline-block">
                  <div className="text-5xl font-light text-[#004A30] tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">
                    {step.time}
                  </div>
                  <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#004A30] transition-all duration-500 group-hover:w-full" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-[#1A1A1A] tracking-tight transition-colors duration-500 group-hover:text-[#004A30]">
                    {step.title}
                  </h4>
                  <p className="text-sm text-black/40 font-light leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                </div>

                <div className="w-1 h-1 rounded-full bg-black/10 group-hover:bg-[#E02826] transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-black/[0.03] flex justify-between items-center">
          
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#004A30]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FAF9F6] border border-black/5" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E02826]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;