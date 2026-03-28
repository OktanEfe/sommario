import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 relative">
          <div className="aspect-[16/10] bg-[#FAF9F6] rounded-2xl overflow-hidden shadow-2xl relative">
            
            <Image
              src="/anasayfahero/hikayemiz.webp"
              alt="Sommario Hikayemiz"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />

          </div>

          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FAF9F6] -z-10 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-[#004A30] text-[11px] font-medium tracking-[0.3em] uppercase">
              Hikayemiz
            </h3>

            <h2 className="text-4xl font-light text-[#231F20] leading-[1.1]">
              Sadece kahve değil, <br />
              <span className="italic">bir özet</span> sunuyoruz.
            </h2>
          </div>

          <p className="text-[#231F20]/70 leading-relaxed font-light">
            Sommario, İtalyanca &quot;özet&quot; demektir. Biz en iyi çekirdeğin, en doğru kavurma tekniğinin ve en samimi sohbetin özeti olmak için yola çıktık. Modern minimalizmi, geleneksel kahve tutkusuyla birleştiriyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;