"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, MapPin } from "lucide-react";

const Navbar = () => {
  const [isSommarioOpen, setIsSommarioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSommarioOpen, setIsMobileSommarioOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSommarioOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-[100] w-full bg-white transition-all duration-500 ${
        scrolled ? "py-2 shadow-sm" : "py-4"
      }`}
    >
      <div className="w-[96%] md:w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex-none">
          <Link href="/" className="block transition-opacity hover:opacity-80">
            <Image
              src="/logo/logo.png"
              alt="Sommario"
              width={566}
              height={400}
              priority
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-14 sm:h-16" : "h-24 sm:h-28"
              }`}
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-grow justify-center items-center gap-8 xl:gap-10">
          <div
            className="relative flex items-center group py-2"
            onMouseEnter={() => setIsSommarioOpen(true)}
            onMouseLeave={() => setIsSommarioOpen(false)}
          >
            <Link
              href="/sommario"
              className="text-[13px] font-semibold tracking-[0.14em] text-[#231F20]/80 hover:text-[#004A30] transition-colors uppercase"
            >
              Sommarıo
            </Link>

            <button className="ml-1 focus:outline-none" aria-label="Sommario Menüsü">
              <ChevronDown
                size={13}
                strokeWidth={1.6}
                className={`transition-all duration-300 text-[#231F20]/70 group-hover:text-[#004A30] ${
                  isSommarioOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-52 bg-white border border-black/[0.04] shadow-xl rounded-2xl mt-2 transition-all duration-300 ${
                isSommarioOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              <div className="p-2">
                <Link
                  href="/kahve"
                  className="block px-4 py-2.5 text-[13px] font-medium tracking-[0.04em] text-[#231F20]/75 hover:text-[#004A30] hover:bg-black/[0.02] rounded-lg transition-all"
                >
                  Kahve
                </Link>
                <Link
                  href="/kampanyalar"
                  className="block px-4 py-2.5 text-[13px] font-medium tracking-[0.04em] text-[#231F20]/75 hover:text-[#004A30] hover:bg-black/[0.02] rounded-lg transition-all"
                >
                  Kampanyalar
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2.5 text-[13px] font-medium tracking-[0.04em] text-[#231F20]/75 hover:text-[#004A30] hover:bg-black/[0.02] rounded-lg transition-all"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/menu"
            className="text-[13px] font-semibold tracking-[0.14em] text-[#231F20]/80 hover:text-[#004A30] uppercase transition-colors"
          >
            Menü
          </Link>

          <Link
            href="/kariyer"
            className="text-[13px] font-semibold tracking-[0.14em] text-[#231F20]/80 hover:text-[#004A30] uppercase transition-colors"
          >
            Kariyer
          </Link>

          <Link
            href="/franchise"
            className="text-[13px] font-semibold tracking-[0.14em] text-[#231F20]/80 hover:text-[#004A30] uppercase transition-colors"
          >
            Franchıse
          </Link>

          <Link
            href="/magazalarimiz"
            className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.14em] text-[#231F20]/80 hover:text-[#004A30] uppercase transition-colors"
          >
            Mağazalarımız
          </Link>
        </div>

        <div className="hidden lg:block flex-none">
          <Link
            href="/iletisim"
            className={`inline-flex items-center justify-center rounded-full font-semibold uppercase border border-[#004A30] transition-all duration-500 bg-[#004A30] text-white hover:bg-white hover:text-[#004A30] shadow-md shadow-[#004A30]/10 hover:shadow-[0_12px_25px_rgba(0,74,48,0.20)] active:scale-[0.97] ${
              scrolled
                ? "px-7 py-2.5 text-[10px] tracking-[0.20em]"
                : "px-8 py-3 text-[11px] tracking-[0.22em]"
            }`}
          >
            Bize Ulaşın
          </Link>
        </div>
        <div className="lg:hidden ml-auto">
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="p-2.5 rounded-xl bg-[#FAF9F6] text-[#231F20] border border-black/[0.08] shadow-sm hover:bg-[#F2F2F7] transition-all duration-300"
    aria-label="Menüyü Aç"
  >
  
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              >
<X size={26} strokeWidth={2} />
</span>
              <span
                className={`absolute transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                }`}
              >
<Menu size={26} strokeWidth={2} />              </span>
            </div>
          </button>
        </div>
      </div>

      <div
        style={{
          maxHeight: isMobileMenuOpen ? "560px" : "0px",
          opacity: isMobileMenuOpen ? 1 : 0,
          transition:
            "max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease",
        }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-6 pb-7 pt-3 flex flex-col gap-1 border-t border-black/[0.05] bg-white">
          <div>
            <button
              onClick={() => setIsMobileSommarioOpen(!isMobileSommarioOpen)}
              className="w-full flex items-center justify-between py-3.5 text-[14px] font-semibold tracking-[0.12em] text-[#231F20] uppercase"
            >
              <span>Sommarıo</span>
              <ChevronDown
                size={14}
                strokeWidth={1.6}
                className={`transition-transform duration-300 ${
                  isMobileSommarioOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              style={{
                maxHeight: isMobileSommarioOpen ? "220px" : "0px",
                opacity: isMobileSommarioOpen ? 1 : 0,
                transition:
                  "max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease",
              }}
              className="overflow-hidden"
            >
              <div className="pl-4 pb-3 flex flex-col gap-0.5">
                <Link
                  onClick={closeMenu}
                  href="/sommario"
                  className="py-2.5 text-[14px] font-medium text-[#231F20]/70 hover:text-[#004A30] transition-colors"
                >
                  Sommarıo Hakkında
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/kahve"
                  className="py-2.5 text-[14px] font-medium text-[#231F20]/70 hover:text-[#004A30] transition-colors"
                >
                  Kahve
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/kampanyalar"
                  className="py-2.5 text-[14px] font-medium text-[#231F20]/70 hover:text-[#004A30] transition-colors"
                >
                  Kampanyalar
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/blog"
                  className="py-2.5 text-[14px] font-medium text-[#231F20]/70 hover:text-[#004A30] transition-colors"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {[
            { href: "/menu", label: "Menü" },
            { href: "/kariyer", label: "Kariyer" },
            { href: "/franchise", label: "Franchıse" },
          ].map((item, i) => (
            <div
              key={item.href}
              style={{
                transitionDelay: isMobileMenuOpen ? `${(i + 1) * 50}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 300ms ease, transform 300ms ease",
              }}
              className="border-t border-black/[0.04]"
            >
              <Link
                onClick={closeMenu}
                href={item.href}
                className="block py-3.5 text-[14px] font-semibold tracking-[0.12em] text-[#231F20] hover:text-[#004A30] uppercase transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}

          <div
            style={{
              transitionDelay: isMobileMenuOpen ? "220ms" : "0ms",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
            className="border-t border-black/[0.04]"
          >
            <Link
              onClick={closeMenu}
              href="/magazalarimiz"
              className="py-3.5 flex items-center gap-1.5 text-[14px] font-semibold tracking-[0.12em] text-[#231F20] hover:text-[#004A30] uppercase transition-colors"
            >
              Mağazalarımız
            </Link>
          </div>

          <div
            style={{
              transitionDelay: isMobileMenuOpen ? "280ms" : "0ms",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
            className="pt-4 border-t border-black/[0.05]"
          >
            <Link
              onClick={closeMenu}
              href="/iletisim"
              className="block text-center px-8 py-3.5 rounded-full text-[11px] font-semibold tracking-[0.18em] bg-[#004A30] text-white border border-[#004A30] hover:bg-white hover:text-[#004A30] transition-all"
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