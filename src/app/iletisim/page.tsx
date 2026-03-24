"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-40 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        
        {/* Üst Başlık Alanı */}
        <div className="max-w-2xl mb-20 space-y-6">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] font-bold">İletişim</span>
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-[#231F20] leading-tight">
            Bir kahve eşliğinde <br /> <span className="italic">konuşalım.</span>
          </h1>
          <p className="text-lg text-black/40 font-light leading-relaxed">
            Sorularınız, önerileriniz veya sadece merhaba demek için bize her zaman ulaşabilirsiniz. Ekibimiz size en kısa sürede dönüş yapacaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Sol Kolon: İletişim Bilgileri */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#004A30]">
                  <Mail size={18} />
                </div>
                <h4 className="text-sm font-medium">E-posta</h4>
                <p className="text-sm text-black/50 font-light">merhaba@sommario.com</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#004A30]">
                  <Phone size={18} />
                </div>
                <h4 className="text-sm font-medium">Telefon</h4>
                <p className="text-sm text-black/50 font-light">0262 XXX XX XX</p>
              </div>

              <div className="space-y-4 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#004A30]">
                  <MapPin size={18} />
                </div>
                <h4 className="text-sm font-medium">Genel Merkez</h4>
                <p className="text-sm text-black/50 font-light leading-relaxed">
                  İzmit, Kocaeli / Türkiye
                </p>
              </div>
            </div>

            {/* Sosyal Medya Hatırlatması */}
            <div className="p-8 bg-[#FAF9F6] rounded-[2rem] border border-black/[0.03]">
              <p className="text-[11px] uppercase tracking-widest text-black/30 mb-4">Sosyal Medyada Biz</p>
              <div className="flex gap-6 text-sm font-medium text-[#004A30]">
                <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                <a href="#" className="hover:opacity-50 transition-opacity">X</a>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Form */}
          <div className="relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/40 ml-4">Ad Soyad</label>
                  <input type="text" className="w-full p-5 bg-[#FAF9F6] rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/20 transition-all text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/40 ml-4">E-posta</label>
                  <input type="email" className="w-full p-5 bg-[#FAF9F6] rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/20 transition-all text-sm" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black/40 ml-4">Konu</label>
                <select className="w-full p-5 bg-[#FAF9F6] rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/20 transition-all text-sm appearance-none">
                  <option>Genel Sorular</option>
                  <option>Franchise Hakkında</option>
                  <option>Kariyer</option>
                  <option>Geri Bildirim</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black/40 ml-4">Mesajınız</label>
                <textarea rows={5} className="w-full p-5 bg-[#FAF9F6] rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/20 transition-all text-sm resize-none" placeholder="Nasıl yardımcı olabiliriz?"></textarea>
              </div>

              <button className="w-full md:w-fit px-12 py-5 bg-[#004A30] text-white rounded-2xl text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-[#004A30]/10">
                Mesajı Gönder <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}