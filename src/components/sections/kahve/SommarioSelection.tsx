"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SommarioSelection = () => {
  const selectionFeatures = [
    {
      t: "Trinity Blend",
      d: "Trinity Blend, üç farklı kıtadan gelen nitelikli kahve çekirdeklerinin uyumunu temsil eder. Güçlü gövdesi, dengeli asiditesi ve zengin aromatik profiliyle misafirlerimize karakterli, yoğun ve unutulmaz bir espresso deneyimi sunmayı amaçlar.",
      sub: "ESPRESSO SERİSİ",
      img: "/kahve/trinity.webp",
      icon: "01",
    },
    {
      t: "Oro Azul",
      d: "Oro Azul, İspanyolca’da “Mavi Altın” anlamına gelir. Bu isim, kahvenin kökenindeki değeri, nadide çekirdeklerin kıymetini ve berrak aromatik karakterini simgeler. Dengeli asiditesi, canlı aromaları ve ipeksi gövdesiyle misafirlerimize rafine bir filtre kahve deneyimi yaşatmayı hedefler.",
      sub: "FİLTRE SERİSİ",
      img: "/kahve/oro.webp",
      icon: "02",
    },
    {
      t: "Nitelikli Seçki",
      d: "Nitelikli seçkimiz, dünya üretiminin en üst diliminde yer alan Specialty Coffee standartlarını yansıtır. Her çekirdek; kökeni, işleniş biçimi ve fincandaki karakteriyle özenle değerlendirilir, böylece her yudumda yüksek kalite ve tutarlı bir deneyim sunulur.",
      sub: "KALİTE STANDARDI",
      img: "/kahve/tk.webp",
      icon: "03",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase text-[#004A30]/60 block">
              Yeni Kimlikler
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-[#1A1A1A] leading-tight px-4">
              Sommario <span className="italic font-serif text-[#004A30]">Karakterleri</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black/40 font-light leading-relaxed max-w-xl mx-auto px-6">
              Kahve serimize yeni bir ruh kazandırdık. Her yudumda üç kıtanın uyumu, berrak aromalar ve nitelikli çekirdeklerin karakteri.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {selectionFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-black/[0.03] flex flex-col overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[#004a3008] max-w-[380px] sm:max-w-none mx-auto w-full"
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-[#F2F2F7]/50 relative">
                <Image
                  src={item.img}
                  alt={item.t}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-20" />
              </div>

              <div className="p-8 sm:p-7 md:p-10 flex flex-col flex-grow space-y-4 text-center items-center">
                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.3em] text-[#004A30]/50 uppercase">
                  {item.sub}
                </span>

                <h4 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-[#1A1A1A]">
                  {item.t}
                </h4>

                <p className="text-sm sm:text-[13px] md:text-sm text-black/45 font-light leading-relaxed min-h-[110px] sm:min-h-[140px] md:min-h-[160px]">
                  {item.d}
                </p>

                <div className="pt-6 w-full border-t border-black/[0.04] flex justify-between items-center mt-auto">
                 
                  <span className="text-xl sm:text-2xl font-serif italic text-black">
                    {item.icon}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SommarioSelection;