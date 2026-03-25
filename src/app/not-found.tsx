import React from 'react';
import Link from 'next/link';
import { Coffee, ArrowRight } from 'lucide-react'; 

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden font-sans">
      
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-20 relative">

        <div className="max-w-[900px] w-full text-center relative z-10 space-y-10 sm:space-y-16">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 border border-black/5 bg-white rounded-full shadow-sm">
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-black/[0.03] shrink-0">
              <Coffee size={16} className="text-[#004A30] sm:hidden" />
              <Coffee size={20} className="text-[#004A30] hidden sm:block" />
            </div>
            <div className="text-left">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#004A30] font-bold">Hata Kodu (404)</p>
              <p className="text-xs sm:text-sm text-[#86868b] font-medium">Sayfa Bulunamadı</p>
            </div>
          </div>

          {/* Başlık */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extralight tracking-[-0.05em] text-[#1d1d1f] leading-[1.1]">
              Fincanınız <br />
              <span className="italic font-serif underline decoration-1 underline-offset-4 sm:underline-offset-8 decoration-black/10">
                boş görünüyor.
              </span>
            </h1>
            
            <p className="text-[#86868b] text-base sm:text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed pt-1 sm:pt-2 px-2 sm:px-0">
              Aradığınız sayfa ya taşındı ya da hiç demlenmedi.{' '}
              <br className="hidden md:block" /> 
              Sommario dünyasına geri dönmeye ne dersiniz?
            </p>
          </div>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-10 px-4 sm:px-0">
            <Link 
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 sm:px-12 py-3.5 sm:py-4 bg-[#004A30] text-white rounded-full text-[14px] sm:text-[15px] font-medium transition-all hover:bg-[#003824] hover:shadow-xl hover:shadow-[#004a3020] active:scale-[0.98]"
            >
              Ana Sayfaya Dön
            </Link>
            
            <Link 
              href="/menu" 
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 sm:px-12 py-3.5 sm:py-4 bg-[#F5F5F7] text-[#1d1d1f] rounded-full text-[14px] sm:text-[15px] font-medium transition-all hover:bg-[#E8E8ED] active:scale-[0.98]"
            >
              Menüye Göz At
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 sm:hidden" />
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 hidden sm:block" />
            </Link>
          </div>

        </div>
      </main>
      
    </div>
  );
}