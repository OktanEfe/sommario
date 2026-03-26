"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={18} />, link: '#', desc: '@sommariocoffee' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, link: '#', desc: 'Sommario Company' },
    { name: 'X', icon: <Twitter size={18} />, link: '#', desc: 'sommario_tr' },
  ];

  return (
    <main className="pt-32 md:pt-48 pb-20 bg-white font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Üst Başlık Bölümü */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] font-bold block mb-4">Bize Ulaşın</span>
            <h1 className="text-4xl md:text-7xl font-light tracking-tighter text-[#1A1A1A] leading-[1.1]">
              Bir kahve eşliğinde <br /> 
              <span className="italic font-serif text-[#004A30]/80">konuşalım.</span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-black/40 font-light leading-relaxed max-w-xl">
              Sorularınız, iş birliği önerileriniz veya sadece merhaba demek için buradayız. Ekibimiz size en kısa sürede dönüş yapacaktır.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Sol Kolon: Bilgiler ve Sosyal Medya */}
          <div className="lg:col-span-5 space-y-12 md:space-y-16">
            
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-10">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FAF9F6] border border-black/[0.03] flex items-center justify-center text-[#004A30] group-hover:bg-[#004A30] group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">E-posta</h4>
                  <p className="text-base md:text-lg text-[#1A1A1A] font-light italic">merhaba@sommario.com.tr</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FAF9F6] border border-black/[0.03] flex items-center justify-center text-[#004A30] group-hover:bg-[#004A30] group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">Telefon</h4>
                  <p className="text-base md:text-lg text-[#1A1A1A] font-light">+90 (262) 344 00 00</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FAF9F6] border border-black/[0.03] flex items-center justify-center text-[#004A30] group-hover:bg-[#004A30] group-hover:text-white transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">Merkez Atölye</h4>
                  <p className="text-base md:text-lg text-[#1A1A1A] font-light leading-snug">
                    İzmit, Kocaeli / Türkiye
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-black/[0.05] space-y-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">Dijital Topluluk</p>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className="group flex items-center justify-between p-6 bg-[#FAF9F6] rounded-[1.5rem] border border-transparent hover:border-[#004A30]/10 hover:bg-white transition-all duration-500"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-black/40 group-hover:text-[#004A30] transition-colors italic">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">{social.name}</p>
                        <p className="text-[11px] text-black/30 font-light">{social.desc}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-black/10 group-hover:text-[#004A30] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-[3rem] border border-black/[0.02] shadow-sm">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold ml-1">Ad Soyad</label>
                    <input type="text" className="w-full p-5 bg-white rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/10 transition-all text-sm font-light border border-black/[0.03]" placeholder="İsminiz nedir?" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold ml-1">E-posta</label>
                    <input type="email" className="w-full p-5 bg-white rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/10 transition-all text-sm font-light border border-black/[0.03]" placeholder="Adresiniz..." />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold ml-1">Konu Başlığı</label>
                  <select className="w-full p-5 bg-white rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/10 transition-all text-sm font-light border border-black/[0.03] appearance-none cursor-pointer">
                    <option>Genel Sorular</option>
                    <option>Franchise & İş Ortaklığı</option>
                    <option>Kariyer Başvurusu</option>
                    <option>Öneri ve Geri Bildirim</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold ml-1">Mesajınız</label>
                  <textarea rows={6} className="w-full p-5 bg-white rounded-2xl outline-none focus:ring-1 focus:ring-[#004A30]/10 transition-all text-sm font-light border border-black/[0.03] resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
                </div>

                <button className="w-full group px-12 py-5 bg-[#004A30] text-white rounded-2xl text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center gap-4 hover:bg-[#003824] transition-all duration-500 shadow-xl shadow-[#004A30]/10">
                  Mesajı Gönder 
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}