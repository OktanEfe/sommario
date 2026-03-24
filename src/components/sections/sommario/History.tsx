"use client";
import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { 
    year: "2018", 
    title: "Mutfaktaki Sessizlik", 
    desc: "Henüz tabelamız yoktu. Bir kavurma atölyesi olarak işin özünde, çekirdeğin genetiğini dinleyerek başladık.",
    accent: "bg-[#004A30]"
  },
  { 
    year: "2020", 
    title: "Kent Meydanı", 
    desc: "Kavurduğumuz kahveleri doğru ellerden sunmak için İzmit'in kalbinde ilk kapımızı açtık. Artık bir coffee shop'tuk.",
    accent: "bg-black"
  },
  { 
    year: "2021", 
    title: "Direniş Dönemi", 
    desc: "Sokaklar boşken kavurma makinelerimiz doluydu. Paket kahvelerimizle her eve bir mola, bir nefes olduk.",
    accent: "bg-[#E02826]"
  },
  { 
    year: "2026", 
    title: "Akademi ve Ötesi", 
    desc: "5 aktif şube ve Sommario Akademi ile standart koyan, eğitim veren bir marka haline geldik.",
    accent: "bg-[#004A30]"
  }
];

const History = () => {
  return (
    <section className="py-48 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-40 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#004A30]">Timeline</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1A1A1A]">
              Köklerin <span className="italic font-serif">Yolculuğu.</span>
            </h2>
          </div>
          <p className="text-sm text-black/40 font-light max-w-[280px] leading-relaxed">
            2018&apos;den bugüne, çekirdeğe olan saygımızı her fincanda yeniden kanıtlıyoruz.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          <div className="hidden md:block absolute top-[1.35rem] left-0 w-full h-px bg-black/[0.05]" />

          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative space-y-12"
            >
              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-full bg-white border border-black/[0.05] flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${m.accent} transition-transform group-hover:scale-[2]`} />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-4xl font-light tracking-tighter text-[#1A1A1A] block">
                    {m.year}
                  </span>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#004A30]/60 group-hover:text-[#004A30] transition-colors">
                    {m.title}
                  </h4>
                </div>
                
                <p className="text-sm text-black/40 leading-relaxed font-light transition-colors group-hover:text-black/60">
                  {m.desc}
                </p>
              </div>

              <div className="absolute -bottom-10 left-0 w-8 h-px bg-black/[0.05] group-hover:bg-[#E02826] transition-colors duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] uppercase tracking-[0.5em] text-black/20 font-bold">
            Established in İzmit / Turkey
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#004A30]" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/5" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E02826]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;