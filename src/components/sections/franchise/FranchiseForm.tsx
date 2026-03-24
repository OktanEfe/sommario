"use client";
import React from 'react';

const FranchiseForm = () => {
  return (
    <section id="franchise-form" className="py-32 bg-white">
      <div className="max-w-[800px] mx-auto px-8 border border-black/[0.05] rounded-[3rem] p-12 md:p-20 shadow-sm">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-light">Başvuru Formu</h2>
          <p className="text-sm text-black/40">Bilgilerinizi bırakın, en kısa sürede sizinle iletişime geçelim.</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Ad Soyad" className="w-full p-4 bg-[#FAF9F6] rounded-xl text-sm outline-none border border-transparent focus:border-[#004A30]/20 transition-all" />
          <input type="email" placeholder="E-posta" className="w-full p-4 bg-[#FAF9F6] rounded-xl text-sm outline-none border border-transparent focus:border-[#004A30]/20 transition-all" />
          <input type="tel" placeholder="Telefon" className="w-full p-4 bg-[#FAF9F6] rounded-xl text-sm outline-none border border-transparent focus:border-[#004A30]/20 transition-all" />
          <input type="text" placeholder="Hedeflenen Şehir/Bölge" className="w-full p-4 bg-[#FAF9F6] rounded-xl text-sm outline-none border border-transparent focus:border-[#004A30]/20 transition-all" />
          
          <div className="md:col-span-2">
            <textarea placeholder="Yatırım bütçeniz ve eklemek istedikleriniz..." rows={4} className="w-full p-4 bg-[#FAF9F6] rounded-xl text-sm outline-none border border-transparent focus:border-[#004A30]/20 transition-all resize-none"></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <button className="w-full py-5 bg-[#004A30] text-white text-[10px] uppercase tracking-[0.3em] rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#004A30]/10">
              Başvuruyu Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FranchiseForm;