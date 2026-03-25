"use client";
import React from "react";
import { ShieldCheck, BarChart3, Palette, Truck, Users, Leaf } from "lucide-react";

const advantages = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Güçlü Marka İmajı",
    desc: "Sessiz lüks ve nitelikli kahve odağındaki özgün kimliğimizle, sadık bir müşteri kitlesine hazır başlayın."
  },
  {
    icon: <Palette size={24} />,
    title: "İmza Mimari Tasarım",
    desc: "Mağazanız, Sommario'nun ferah ve modern estetiğine uygun olarak uzman mimarlarımızca projelendirilir."
  },
  {
    icon: <Truck size={24} />,
    title: "Kesintisiz Tedarik Zinciri",
    desc: "En taze çekirdekler ve sarf malzemeleri, merkez lojistik ağımız üzerinden kapınıza kadar ulaştırılır."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Operasyonel Destek",
    desc: "Karlılık analizi, stok yönetimi ve personel eğitimi gibi konularda sürekli profesyonel danışmanlık sağlıyoruz."
  },
  {
    icon: <Users size={24} />,
    title: "Sommario Akademi",
    desc: "Baristalarınızın dünya standartlarında kahve hazırlaması için kapsamlı teknik eğitimler veriyoruz."
  },
  {
    icon: <Leaf size={24} />,
    title: "Sürdürülebilir Model",
    desc: "Sıfır atık hedefli ve yüksek verimlilik odaklı işletme modelimizle geleceğe yatırım yapın."
  }
];

const FranchiseAdvantages = () => {
  return (
    <section className="py-32 bg-[#004A30] relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />

      <div className="relative max-w-[1280px] mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/60 font-semibold">
              Neden Biz?
            </span>

            <h2 className="text-4xl font-light tracking-tighter text-white">
              Sommario Yatırımcısına <br />
              <span className="italic">ne sunar?</span>
            </h2>
          </div>

          <p className="text-sm text-white/60 font-light max-w-sm pb-2">
            İş ortaklarımızın başarısını, kendi başarımız olarak görüyor ve her adımda yanınızda oluyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {advantages.map((adv, i) => (
            <div key={i} className="group space-y-6">

              <div className="w-12 h-12 flex items-center justify-center rounded-2xl 
              bg-white/10 backdrop-blur-md text-white 
              group-hover:bg-white group-hover:text-[#004A30] 
              transition-all duration-500 shadow-sm">
                {adv.icon}
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium text-white">
                  {adv.title}
                </h4>

                <p className="text-[14px] text-white/70 leading-relaxed font-light">
                  {adv.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseAdvantages;