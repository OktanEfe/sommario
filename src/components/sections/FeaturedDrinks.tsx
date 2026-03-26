"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeaturedDrinks = () => {
  const drinks = [
    { 
      id: 1, 
      name: "Mio", 
      note: "İmza", 
      desc: "Özel Antep fıstığı özü ve ipeksi süt dokusuyla hazırlanan, Sommario'ya özgü unutulmaz bir lezzet.",
      image: "/drinks/mio.jpg",
    },
    { 
      id: 2, 
      name: "Cold Brew", 
      note: "Klasik", 
      desc: "24 saat boyunca sabırla demlenen, kadifemsi dokusuyla sizi serinleten soğuk kahve deneyimi.",
      image: "/drinks/cold-brew.jpg",
    },
    { 
      id: 3, 
      name: "Cortado", 
      note: "Özel", 
      desc: "Eşit oranda espresso ve sütün mükemmel dengesinde buluşan, sade ama derin bir kahve klasiği.",
      image: "/drinks/cortado.jpg",
    },
    { 
      id: 4, 
      name: "Espresso Freddo", 
      note: "Sezonluk", 
      desc: "Yoğun espresso aromasının buzun üzerinde yavaşça açıldığı, serin ve güçlü bir Yunan klasiği.",
      image: "/drinks/ristrettobianco.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
      
      {/* Başlık */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-12 h-[1px] bg-[#004A30]/20" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#004A30]">
                Özenle Seçilmiş
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-[#1A1A1A]">
              Mevsimin <span className="italic font-serif">Karakterleri</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-black/40 max-w-[280px] sm:max-w-[300px] leading-relaxed font-light">
            Baristalarımızın özenle seçtiği, her yudumda markamızın ruhunu yansıtan imza lezzetler.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px]  mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {drinks.map((drink, index) => (
          <motion.div 
            key={drink.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative"
          >
            <div
              className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-[#004A30] flex flex-col transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#004A30]/10"
              style={{ border: '1.5px solid #004A30' }}
            >
              <div className="px-4 sm:px-6 pt-5 sm:pt-7 pb-3 sm:pb-4 text-center space-y-2">
                <span className="inline-flex items-center px-2.5 py-0.5 sm:py-1 rounded-full bg-[#004A30] text-white text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                  {drink.note}
                </span>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-tight text-white leading-tight">
                  {drink.name}
                </h4>
              </div>

              <div className="relative w-full aspect-square bg-white px-4 py-3 sm:px-6 sm:py-4">
                <div className="relative w-full h-full">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 "
                  />
                </div>
              </div>

              <div
                className="px-4 sm:px-6 py-4 sm:py-6 text-center bg-white"
                style={{ borderTop: '1px solid rgba(0,74,48,0.15)' }}
              >
                <p className="text-[10px] sm:text-xs md:text-[13px] text-black font-light leading-relaxed">
                  {drink.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDrinks;