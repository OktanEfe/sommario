"use client";
import Link from 'next/link';
import { Campaign } from '@/data/campaigns';

export const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
  return (
    <Link 
      href={`/kampanyalar/${campaign.slug}`}
      className="group flex flex-col md:flex-row bg-[#FAF9F6] rounded-[3rem] overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 border border-black/[0.02]"
    >
      <div className="w-full md:w-[45%] aspect-[4/3] md:aspect-auto relative overflow-hidden">
  <img 
    src={campaign.image} 
    alt={campaign.title} 
    className="w-full h-full object-cover scale-90 md:scale-95 transition-transform duration-700 group-hover:scale-100" 
  />
        {campaign.badge && (
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-sm">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#004A30]">
              {campaign.badge}
            </span>
          </div>
        )}
      </div>

      <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-[#231F20] leading-tight group-hover:text-[#004A30] transition-colors">
            {campaign.title}
          </h2>
          <p className="text-[#004A30] text-sm font-medium italic">{campaign.subtitle}</p>
        </div>
        
        <p className="text-[14px] text-black/40 leading-relaxed font-light max-w-md">
          {campaign.description}
        </p>

        <div className="pt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[#004A30]">
          İncele <span className="h-[1px] w-8 bg-[#004A30] transition-all group-hover:w-12" />
        </div>
      </div>
    </Link>
  );
};