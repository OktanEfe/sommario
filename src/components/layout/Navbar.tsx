"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isSommarioOpen, setIsSommarioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSommarioOpen, setIsMobileSommarioOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sommarioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSommarioOpen(false);
  };

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-700 ease-in-out ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white py-7'
    }`}>
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        
        <div className="flex-none">
          <Link href="/" className="text-xl font-medium tracking-[0.3em] uppercase transition-opacity hover:opacity-70" style={{ color: '#004A30' }}>
            SOMMARIO
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex flex-grow justify-center items-center gap-10">
          <div 
            className="relative flex items-center group py-2"
            onMouseEnter={() => setIsSommarioOpen(true)}
            onMouseLeave={() => setIsSommarioOpen(false)}
          >
            <Link 
              href="/sommario" 
              className="text-[12px] font-medium text-[#231F20]/80 hover:text-[#004A30] transition-colors uppercase tracking-[0.15em]"
            >
              Sommario
            </Link>
            <button className="ml-1 focus:outline-none">
              <ChevronDown 
                size={12} 
                strokeWidth={1.5} 
                className={`transition-transform duration-500 text-[#231F20]/80 group-hover:text-[#004A30] ${isSommarioOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-black/[0.03] shadow-xl rounded-2xl mt-1 transition-all duration-500 ease-in-out ${
              isSommarioOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-3'
            }`}>
              <div className="p-2">
                <Link href="/kahve" className="block px-4 py-2.5 text-[13px] font-medium text-[#231F20]/70 hover:text-[#004A30] hover:bg-black/[0.02] rounded-lg transition-all">Kahve</Link>
                <Link href="/kampanyalar" className="block px-4 py-2.5 text-[13px] font-medium text-[#231F20]/70 hover:text-[#004A30] hover:bg-black/[0.02] rounded-lg transition-all">Kampanyalar</Link>
                <Link href="/blog" className="block px-4 py-2.5 text-[13px] font-medium text-[#231F20]/70 hover:text-[#004A30] hover:bg-black/[0.02] rounded-lg transition-all">Blog</Link>
              </div>
            </div>
          </div>

          <Link href="/menu" className="text-[12px] font-medium text-[#231F20]/80 hover:text-[#004A30] uppercase tracking-[0.15em] transition-colors">Menü</Link>
          <Link href="/kariyer" className="text-[12px] font-medium text-[#231F20]/80 hover:text-[#004A30] uppercase tracking-[0.15em] transition-colors">Kariyer</Link>
          <Link href="/franchise" className="text-[12px] font-medium text-[#231F20]/80 hover:text-[#004A30] uppercase tracking-[0.15em] transition-colors">Franchise</Link>
          <Link href="/magazalarimiz" className="flex items-center gap-1.5 text-[12px] font-medium text-[#231F20]/80 hover:text-[#004A30] uppercase tracking-[0.15em] transition-colors">
            <MapPin size={14} strokeWidth={1.5} style={{ color: '#004A30' }} />
            Mağazalarımız
          </Link>
        </div>

        <div className="flex-none hidden lg:block">
          <Link 
            href="/iletisim" 
            className="px-8 py-3 rounded-full text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 text-white shadow-lg shadow-[#004A30]/10"
            style={{ backgroundColor: '#004A30' }}
          >
            Bize Ulaşın
          </Link>
        </div>

        {/* MOBİL HAMBURGER */}
        <div className="lg:hidden ml-auto">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-black/[0.03] transition-colors duration-300"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                <X size={24} strokeWidth={1.5} />
              </span>
              <span className={`absolute transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
                <Menu size={24} strokeWidth={1.5} />
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ */}
      <div
        style={{
          maxHeight: isMobileMenuOpen ? '520px' : '0px',
          opacity: isMobileMenuOpen ? 1 : 0,
          transition: 'max-height 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease-in-out',
        }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-8 pb-8 pt-3 flex flex-col gap-1 border-t border-black/[0.04] bg-white">

          {/* Sommario accordion - mobilde tümü buton, link yok */}
          <div>
            <button
              onClick={() => setIsMobileSommarioOpen(!isMobileSommarioOpen)}
              className="w-full flex items-center justify-between py-3.5 text-[12px] font-medium text-[#231F20]/80 uppercase tracking-[0.15em]"
            >
              <span>Sommario</span>
              <ChevronDown 
                size={12} 
                strokeWidth={1.5}
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: isMobileSommarioOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* Alt linkler */}
            <div
              ref={sommarioRef}
              style={{
                maxHeight: isMobileSommarioOpen ? '200px' : '0px',
                opacity: isMobileSommarioOpen ? 1 : 0,
                transition: 'max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 350ms ease-in-out',
              }}
              className="overflow-hidden"
            >
              <div className="pl-4 pb-3 flex flex-col gap-1">
                <Link onClick={closeMenu} href="/sommario" className="py-2 text-[12px] font-medium text-[#231F20]/60 hover:text-[#004A30] transition-colors duration-300">
                  Sommario Hakkında
                </Link>
                <Link onClick={closeMenu} href="/kahve" className="py-2 text-[12px] font-medium text-[#231F20]/60 hover:text-[#004A30] transition-colors duration-300">
                  Kahve
                </Link>
                <Link onClick={closeMenu} href="/kampanyalar" className="py-2 text-[12px] font-medium text-[#231F20]/60 hover:text-[#004A30] transition-colors duration-300">
                  Kampanyalar
                </Link>
                <Link onClick={closeMenu} href="/blog" className="py-2 text-[12px] font-medium text-[#231F20]/60 hover:text-[#004A30] transition-colors duration-300">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {[
            { href: '/menu', label: 'Menü' },
            { href: '/kariyer', label: 'Kariyer' },
            { href: '/franchise', label: 'Franchise' },
          ].map((item, i) => (
            <div
              key={item.href}
              style={{
                transitionDelay: isMobileMenuOpen ? `${(i + 1) * 60}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 400ms ease-in-out, transform 400ms ease-in-out',
              }}
              className="border-t border-black/[0.03]"
            >
              <Link onClick={closeMenu} href={item.href} className="block py-3.5 text-[12px] font-medium text-[#231F20]/80 hover:text-[#004A30] uppercase tracking-[0.15em] transition-colors duration-300">
                {item.label}
              </Link>
            </div>
          ))}

          <div
            style={{
              transitionDelay: isMobileMenuOpen ? '240ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 400ms ease-in-out, transform 400ms ease-in-out',
            }}
            className="border-t border-black/[0.03]"
          >
            <Link onClick={closeMenu} href="/magazalarimiz" className="py-3.5 flex items-center gap-1.5 text-[12px] font-medium text-[#231F20]/80 hover:text-[#004A30] uppercase tracking-[0.15em] transition-colors duration-300">
              <MapPin size={14} strokeWidth={1.5} style={{ color: '#004A30' }} />
              Mağazalarımız
            </Link>
          </div>

          <div
            style={{
              transitionDelay: isMobileMenuOpen ? '300ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 400ms ease-in-out, transform 400ms ease-in-out',
            }}
            className="pt-4 border-t border-black/[0.04]"
          >
            <Link 
              onClick={closeMenu}
              href="/iletisim" 
              className="block text-center px-8 py-3.5 rounded-full text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 text-white shadow-lg shadow-[#004A30]/10"
              style={{ backgroundColor: '#004A30' }}
            >
              Bize Ulaşın
            </Link>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;