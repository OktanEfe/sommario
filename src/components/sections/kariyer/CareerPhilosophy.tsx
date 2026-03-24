"use client";
import React from 'react';

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
                 <h4 className="font-medium text-[#004A30]">Kapsayıcı Kültür</h4>
                 <p className="text-sm text-black/50 font-light leading-relaxed">Farklılıkların zenginlik olduğuna inanıyor, her partnerimizin kendisi olabildiği bir ortam yaratıyoruz.</p>
               </div>
               <div className="space-y-2">
                 <h4 className="font-medium text-[#004A30]">Sürekli Gelişim</h4>
                 <p className="text-sm text-black/50 font-light leading-relaxed">Sadece kahveyi değil, birbirimizi de geliştiriyoruz. Mentorluk programlarımızla kariyer basamaklarını güvenle çık.</p>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
             <div className="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-end shadow-sm">
                <span className="text-3xl font-light text-[#004A30] mb-2">%90</span>
                <p className="text-[10px] uppercase tracking-widest text-black/40">İç Terfi Oranı</p>
             </div>
             <div className="aspect-square bg-[#004A30] rounded-3xl p-8 flex flex-col justify-end text-white">
                <span className="text-3xl font-light mb-2">500+</span>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Aktif Partner</p>
             </div>
             <div className="col-span-2 aspect-[2/1] bg-white rounded-3xl p-8 border border-black/[0.03] flex items-center justify-center italic text-black/20 uppercase tracking-[0.3em]">
                [Partnerlerimizin Gülen Yüzleri]
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPhilosophy;