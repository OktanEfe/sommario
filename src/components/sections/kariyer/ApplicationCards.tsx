"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    title: "Mağaza Partneri Ol",
    desc: "Barista veya Mağaza Yöneticisi olarak ekibimize katıl, kahve tutkunu misafirlerimizle paylaş.",
    link: "/kariyer/magaza-basvuru",
    theme: "green"
  },
  {
    title: "Merkez Ofis Rolleri",
    desc: "Pazarlama, operasyon veya tedarik zinciri gibi alanlarda kariyerini bir adım ileriye taşı.",
    link: "/kariyer/ofis-basvuru",
    theme: "white"
  },
  {
    title: "Geleceğin Yıldızları",
    desc: "Öğrencilik döneminde Sommario kültürünü yakından tanı ve profesyonel dünyaya ilk adımını at.",
    link: "/kariyer/staj-basvuru",
    theme: "red"
  }
];

const ApplicationCards = () => {
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "green":
        return "bg-[#004A30] text-white border-transparent shadow-2xl shadow-[#004A30]/20";
      case "red":
        return "bg-[#E02826] text-white border-transparent shadow-2xl shadow-[#E02826]/20";
      default:
        return "bg-white text-[#1A1A1A] border-black/[0.05] shadow-sm hover:shadow-xl hover:shadow-black/5";
    }
  };

  const getButtonClasses = (theme: string) => {
    return theme === "white" 
      ? "bg-[#004A30] text-white hover:bg-black" 
      : "bg-white text-black hover:bg-[#FAF9F6]";
  };

  return (
    <section className="py-32 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`group relative p-12 rounded-[3.5rem] flex flex-col justify-between h-[500px] transition-all duration-700 border ${getThemeClasses(c.theme)}`}
          >
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <h3 className="text-4xl font-light tracking-tighter leading-[1.1] max-w-[200px]">
                  {c.title}
                </h3>
                <div className={`p-3 rounded-full border transition-all duration-500 ${
                  c.theme === "white" ? "border-black/10 group-hover:rotate-45" : "border-white/20 group-hover:rotate-45"
                }`}>
                  <ArrowRight size={20} />
                </div>
              </div>
              
              <p className={`text-m font-light leading-relaxed max-w-[260px] ${
                c.theme === "white" ? "text-black/50" : "text-white/80"
              }`}>
                {c.desc}
              </p>
            </div>

            <div className="space-y-6">
              <Link 
                href={c.link} 
                className={`inline-flex items-center justify-center w-full py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 transform active:scale-95 ${getButtonClasses(c.theme)}`}
              >
                Hemen Başvur
              </Link>
              
              <div className="flex items-center justify-center gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`w-1 h-1 rounded-full ${c.theme === "white" ? "bg-[#004A30]" : "bg-white"}`} />
                <div className={`w-1 h-1 rounded-full ${c.theme === "white" ? "bg-black/20" : "bg-white/40"}`} />
                <div className={`w-1 h-1 rounded-full ${c.theme === "white" ? "bg-[#E02826]" : "bg-white"}`} />
              </div>
            </div>

            <div className={`absolute -bottom-4 -right-4 text-[160px] font-bold leading-none select-none pointer-events-none opacity-[0.04] transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6 ${
              c.theme === "white" ? "text-black" : "text-white"
            }`}>
              {i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationCards;