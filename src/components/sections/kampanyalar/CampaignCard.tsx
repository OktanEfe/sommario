"use client";
import Link from 'next/link';
import { Campaign } from '@/data/campaigns';

export const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
  return (
    <Link
  href={`/kampanyalar/${campaign.slug}`}
  className="group flex flex-col md:flex-row bg-[#FAF9F6] rounded-[2.5rem] overflow-hidden border border-black/[0.02] max-w-[1100px] mx-auto transition-all hover:shadow-xl"
>
  {/* IMAGE */}
  <div className="w-full md:w-[38%] flex items-center justify-center p-6 md:p-8">
    <div className="relative w-full max-w-[220px] md:max-w-[260px] aspect-[3/4] rounded-[2rem] overflow-hidden">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-full object-cover"
      />

      {campaign.badge && (
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#004A30]">
            {campaign.badge}
          </span>
        </div>
      )}
    </div>
  </div>

  {/* TEXT */}
  <div className="w-full md:w-[62%] py-8 md:py-10 pr-8 md:pr-12 pl-6 md:pl-4 flex flex-col justify-center space-y-4">
    
    <div className="space-y-1">
      <h2 className="text-[26px] md:text-[30px] font-light tracking-tight text-[#231F20] leading-snug group-hover:text-[#004A30] transition-colors">
        {campaign.title}
      </h2>

      <p className="text-[#004A30] text-[14px] italic leading-relaxed">
        {campaign.subtitle}
      </p>
    </div>

    <p className="text-[14px] text-black/70 leading-relaxed font-light max-w-[480px]">
      {campaign.description}
    </p>

    <div className="pt-2 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-bold text-[#004A30]">
      İncele
      <span className="h-[1px] w-6 bg-[#004A30] transition-all group-hover:w-10" />
    </div>
  </div>
</Link>
  );
};