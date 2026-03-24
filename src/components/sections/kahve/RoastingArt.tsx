"use client";
import React from 'react';
import { motion } from 'framer-motion';

const RoastingArt = () => {
  const roastingFeatures = [
    { title: "Mikro-Kavrum", desc: "Küçük gruplar halinde butik üretim." },
    { title: "Hassas Isı", desc: "Veri takibi ile her saniye kontrol." },
    { title: "Dinlendirme", desc: "Karakterin oturması için 48 saat." },
  ];

  return (
    <section className="py-40 bg-[#004A30] text-white overflow-hidden relative">
      {/* Arka Plan Dekoratif Işık (Karanlık Atölye Hissi) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] bg-white/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          {/* SOL: GÖRSEL ALANI (Kavrum Makinesi / Çekirdek Dokusu) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] bg-black/20 rounded-[4rem] border border-white/5 overflow-hidden group shadow-2xl">
              {/* Buraya yüksek kontrastlı, kahverengi tonlarında bir kavrum fotoğrafı gelecek */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004A30] via-transparent to-transparent opacity-40" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[10px] uppercase tracking-[1em] text-white/5 font-bold -rotate-90 select-none">
                  Roasting Process 2026
                </div>
              </div>

              {/* Mikro Animasyon: Isı Göstergesi Paneli */}
              <div className="absolute bottom-12 left-12 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 space-y-2">
                 <div className="w-8 h-[1px] bg-[#E02826]" />
                 <p className="text-[10px] uppercase tracking-widest text-white/40">Kavrum Isısı</p>
                 <p className="text-2xl font-light tracking-tighter italic">214.5°C</p>
              </div>
            </div>
          </motion.div>

          {/* SAĞ: İÇERİK ANLATIMI */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.5em] uppercase text-white/50 font-bold">
                  Zanaat & Bilim
                </span>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>

              <h2 className="text-6xl md:text-7xl font-light tracking-tighter leading-[0.95]">
                Ateş ve Zamanın <br />
                <span className="italic font-serif text-white/40 text-5xl md:text-6xl">Kusursuz Dengesi.</span>
              </h2>

              <p className="text-xl text-white/60 font-light leading-relaxed max-w-lg">
                Çekirdeği yakmıyoruz, onu uyandırıyoruz. Geleneksel yöntemleri modern veri takibi ile birleştirerek, her çekirdeğin içindeki meyvemsi, çiçeksi veya çikolatalı notaları ortaya çıkarıyoruz.
              </p>
            </motion.div>

            {/* Premium Özellik Listesi */}
            <div className="grid grid-cols-1 gap-6 pt-8">
              {roastingFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-6 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#004A30]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-xs text-white/30 font-light italic">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoastingArt;