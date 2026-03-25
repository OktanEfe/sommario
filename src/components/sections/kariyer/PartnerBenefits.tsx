"use client";
import React from 'react';
import { Gift, Coffee, Heart, GraduationCap, Percent, Star } from 'lucide-react';

const benefits = [
  { icon: <Gift size={20} />, t: "Doğum Günü İzni", d: "Özel gününde sevdiklerinle olman için sana bir gün hediye ediyoruz." },
  { icon: <Coffee size={20} />, t: "İçecek Hakkı", d: "Vardiyanda en sevdiğin Sommario lezzetleri bizden." },
  { icon: <Heart size={20} />, t: "Tamamlayıcı Sağlık", d: "Senin ve sevdiklerinin sağlığı bizim için öncelikli." },
  { icon: <GraduationCap size={20} />, t: "Sommario Akademi", d: "Baristalıktan yöneticiliğe uzanan sertifikalı eğitim programları." },
  { icon: <Percent size={20} />, t: "Partner İndirimi", d: "Tüm mağazalarımızda ve paket kahvelerimizde sana özel indirimler." },
  { icon: <Star size={20} />, t: "Performans Ödülleri", d: "Başarılarını 'Yılın Partneri' gibi özel ödüllerle kutluyoruz." },
];

const PartnerBenefits = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl font-light tracking-tight text-[#231F20]">Sana Sunduğumuz Ayrıcalıklar</h2>
          <p className="text-sm text-black/40 font-light">Sommario&apos;da değer görmek sadece bir söz değil, bir standarttır.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-[#FAF9F6] border border-black/[0.02] hover:border-[#004A30]/20 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#004A30] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h4 className="text-lg font-medium mb-3 text-[#231F20]">{b.t}</h4>
              <p className="text-[15px] text-black/50 leading-relaxed font-light">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;