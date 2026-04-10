"use client";
import React from "react";
import Image from "next/image";


const CareerPhilosophy = () => {
  return (
    <section className="relative w-full min-h-[800px] flex items-center bg-[#FAF9F6] overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent z-10" />
        <div className="relative w-full h-full lg:w-3/4 lg:ml-auto">
          <Image
            src="/kariyer/kariyer.webp"
            alt="Sommario Team"
            fill
            className="object-cover object-center grayscale-[20%] opacity-80"
            priority
          />
        </div>
      </div>

      <div className="relative z-20 max-w-[1280px] mx-auto px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-6">
              <span className="text-[#E02826] text-[11px] uppercase tracking-[0.4em] font-bold">Bizim Hikayemiz</span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#231F20] leading-[0.95]">
                Sommario&apos;da <br />
                <span className="italic font-serif text-[#004A30]">her ses</span> <br /> 
                yankı bulur.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#004A30]">Kapsayıcı Kültür</h4>
                <p className="text-lg text-black/50 font-light leading-relaxed">
                  Farklılıkların zenginlik olduğuna inanıyor, her partnerimizin kendisi olabildiği bir ortam yaratıyoruz.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-[#004A30]">Sürekli Gelişim</h4>
                <p className="text-lg text-black/50 font-light leading-relaxed">
                  Sadece kahveyi değil, birbirimizi de geliştiriyoruz. Kariyer yolculuğunuzda daima yanınızdayız.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center gap-12">
            
          <div className="flex items-center gap-5 md:gap-8 group">
  <div className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#004A30] tracking-tighter w-20 md:w-32">
    100+
  </div>
  <div className="space-y-1">
    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-black/70">Aktif Partner</h5>
    <p className="text-xs md:text-sm text-black/70 font-light">Büyük bir aile olarak büyüyoruz.</p>
  </div>
</div>

<div className="flex items-center gap-5 md:gap-8 group">
  <div className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#004A30] tracking-tighter w-20 md:w-32">
    %70
  </div>
  <div className="space-y-1">
    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-black/70">İç Terfi Oranı</h5>
    <p className="text-xs md:text-sm text-black/70 font-light">Liderlerimizi içeriden yetiştiriyoruz.</p>
  </div>
</div>

<div className="flex items-center gap-5 md:gap-8 group">
  <div className="text-4xl md:text-6xl lg:text-7xl font-extralight text-[#E02826] tracking-tighter w-20 md:w-32">
    5+
  </div>
  <div className="space-y-1">
    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-black/70">Şube</h5>
    <p className="text-xs md:text-sm text-black/70 font-light">Nitelikli kahveyi her yere taşıyoruz.</p>
  </div>
</div>

          </div>

        </div>
      </div>

{/* Mobil: /90 */}
<div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent z-10 lg:hidden" />
{/* Desktop: /95 */}
<div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 to-transparent z-10 hidden lg:block" />    </section>
  );
};

export default CareerPhilosophy;