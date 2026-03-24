"use client";
import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, title: "Anın Özeti", subtitle: "SOMMARIO", img: "/hero1.jpg" },
  { id: 2, title: "Saf Aroma", subtitle: "SEÇKİN", img: "/hero2.jpg" },
  { id: 3, title: "Zarif Kavrum", subtitle: "USTALIK", img: "/hero3.jpg" },
  { id: 4, title: "Anın Özeti", subtitle: "SOMMARIO", img: "/hero1.jpg" },
  { id: 5, title: "Saf Aroma", subtitle: "SEÇKİN", img: "/hero2.jpg" },
  { id: 6, title: "Zarif Kavrum", subtitle: "USTALIK", img: "/hero3.jpg" },

];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`absolute inset-0 transition-transform duration-[6000ms] ease-linear ${
            index === current ? 'scale-110' : 'scale-100'
          }`}>
             <div className="w-full h-full bg-[#f4f4f4]" /> 
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] mb-4 transition-all delay-500 duration-1000 transform">
              {slide.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-[#231F20] mb-8">
              {slide.title.split('').map((char, i) => (
                <span key={i} className="inline-block animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            <div className="h-[1px] w-20 bg-[#004A30]/30 mb-8" />
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 right-12 z-20 flex flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 ${i === current ? 'w-12 bg-[#004A30]' : 'w-6 bg-black/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;