"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, img: "/anasayfahero/hero1.webp", position: "center center" },
  { id: 2, img: "/anasayfahero/hero2.webp", position: "center center" },
  { id: 3, img: "/anasayfahero/hero3.webp", position: "center center" },
  { id: 4, img: "/anasayfahero/hero4.webp", position: "center center" },
  { id: 5, img: "/anasayfahero/hero5.webp", position: "center center" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="relative w-[96%] md:w-[94%] xl:w-[90%] 2xl:w-[85%] max-w-[1600px] mx-auto">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.img}
                  alt={`hero-${slide.id}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  style={{ objectPosition: slide.position }}
                  sizes="(max-width: 768px) 96vw, (max-width: 1280px) 94vw, 90vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-transparent to-white/12 pointer-events-none" />
            </div>
          ))}

          <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-20 flex flex-col gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[2px] transition-all duration-500 ${
                  i === current ? "w-12 bg-black" : "w-6 bg-black/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;