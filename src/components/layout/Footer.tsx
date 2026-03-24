"use client";
import Link from 'next/link';
import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] pt-24 pb-12 border-t border-black/[0.03]">
      <div className="max-w-[1280px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div className="space-y-8">
            <h2 className="text-7xl md:text-8xl font-light tracking-tighter text-[#004A30] opacity-90">
              Sommario
            </h2>
            <p className="text-xl text-black/40 font-light max-w-sm leading-relaxed">
              Her fincanda bir hikaye, her köşede bir huzur. Nitelikli kahvenin en saf hali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/magazalarimiz" className="group p-8 bg-white rounded-[2rem] border border-black/[0.02] hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#004A30] font-bold">Lokasyonlar</span>
                <ArrowUpRight size={18} className="text-black/20 group-hover:text-[#004A30] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-lg font-light tracking-tight text-black/60 group-hover:text-black transition-colors">Size en yakın <br />şubemizi bulun.</p>
            </Link>

            <Link href="/franchise" className="group p-8 bg-[#004A30] rounded-[2rem] hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">İş Birliği</span>
                <ArrowUpRight size={18} className="text-white/20 group-hover:text-white transition-all" />
              </div>
              <p className="text-lg font-light tracking-tight text-white/80 group-hover:text-white transition-colors">Sommario ailesine <br />katılın.</p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24 border-t border-black/[0.05] pt-24">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30">Kurumsal</h4>
            <ul className="space-y-4">
              <li><Link href="/hakkimizda" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Hikayemiz</Link></li>
              <li><Link href="/blog" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Blog & Haberler</Link></li>
              <li><Link href="/kariyer" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Kariyer</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30">Deneyim</h4>
            <ul className="space-y-4">
              <li><Link href="/menu" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Menü</Link></li>
              <li><Link href="/kampanyalar" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Kampanyalar</Link></li>
              <li><Link href="/etkinlikler" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Etkinlikler</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30">Destek</h4>
            <ul className="space-y-4">
              <li><Link href="/iletisim" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Bize Ulaşın</Link></li>
              <li><Link href="/sss" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">Sıkça Sorulanlar</Link></li>
              <li><Link href="/kvkk" className="text-sm text-black/60 hover:text-[#004A30] transition-colors font-light">KVKK</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30">Bültene Katılın</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-[#004A30] transition-all text-sm font-light"
              />
              <button className="absolute right-0 bottom-4 text-[10px] uppercase tracking-widest font-bold text-[#004A30]">Kaydol</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/[0.05] gap-8">
          <p className="text-[10px] uppercase tracking-widest text-black/30 font-medium">
            © {currentYear} Sommario Coffee Roastery. Tüm hakları saklıdır.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-black/40 hover:text-[#004A30] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-black/40 hover:text-[#004A30] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-black/40 hover:text-[#004A30] transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;