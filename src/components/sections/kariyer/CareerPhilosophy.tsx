"use client";
import React from "react";
import Image from "next/image";

const CareerPhilosophy = () => {
  return (
    <section className="py-32 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          
          <div className="w-full md:w-1/2 space-y-10">
            <h2 className="text-4xl font-light tracking-tighter text-[#231F20]">
              Sommario&apos;da <span className="italic">her ses</span> değerlidir.
            </h2>

            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-2xl text-[#004A30]">Kapsayıcı Kültür</h4>
                <p className="text-lg text-black/50 font-light leading-relaxed">
                  Farklılıkların zenginlik olduğuna inanıyor, her partnerimizin kendisi olabildiği bir ortam yaratıyoruz.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl text-[#004A30]">Sürekli Gelişim</h4>
                <p className="text-lg text-black/50 font-light leading-relaxed">
                  Sadece kahveyi değil, birbirimizi de geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center gap-6">
            
            <div className="flex flex-col gap-4 w-[45%]">
            <div className="bg-[#004A30] rounded-3xl p-6 flex flex-col justify-end text-white">
                <span className="text-2xl font-light mb-1">
                  100+
                </span>
                <p className="text-[9px] uppercase tracking-widest opacity-60">
                  Aktif Partner
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 flex flex-col justify-end shadow-sm">
                <span className="text-2xl font-light text-[#004A30] mb-1">
                  %70
                </span>
                <p className="text-[9px] uppercase tracking-widest text-black/40">
                  İç Terfi Oranı
                </p>
              </div>

             
              <div className="bg-[#E02826] rounded-3xl p-6 flex flex-col justify-end shadow-sm">
                <span className="text-2xl font-light text-white mb-1">
                  5+
                </span>
                <p className="text-[9px] uppercase tracking-widest text-white">
Şube               </p>
              </div>

             

            </div>

            <div className="relative w-[55%] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-sm border border-black/[0.03] group">
              <Image
                src="/kariyer/kariyer.webp"
                alt="Sommario Team"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerPhilosophy;