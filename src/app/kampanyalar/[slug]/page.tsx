import { campaigns } from '@/data/campaigns';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Calendar, Info } from 'lucide-react';

export default async function CampaignDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const campaign = campaigns.find(c => c.slug === slug);
  if (!campaign) return notFound();

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-8">
        
        <Link 
          href="/kampanyalar" 
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-black/40 hover:text-[#004A30] transition-colors mb-12"
        >
          <ChevronLeft size={14} /> Tüm Kampanyalara Dön
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#FAF9F6] shadow-2xl shadow-black/5">
              <img 
                src={campaign.image} 
                alt={campaign.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="space-y-10 py-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#004A30]/5 text-[#004A30] px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                  {campaign.badge || "Sommario Özel"}
                </span>
                <div className="flex items-center gap-1 text-[9px] text-black/30 uppercase tracking-widest">
                  <Calendar size={12} /> Sınırlı Süre
                </div>
              </div>
              <h1 className="text-5xl font-light tracking-tighter leading-tight text-[#231F20]">
                {campaign.title}
              </h1>
              <p className="text-xl text-[#004A30] italic font-light">
                {campaign.subtitle}
              </p>
            </div>

            <div className="h-[1px] w-full bg-black/5" />

            <div className="prose prose-sm max-w-none">
              <p className="text-lg text-black/60 leading-relaxed font-light">
                {campaign.content}
              </p>
            </div>

            <div className="p-8 bg-[#FAF9F6] rounded-[2.5rem] border border-black/[0.02] space-y-4">
               <div className="flex items-center gap-2 text-[#004A30]">
                 <Info size={16} />
                 <h4 className="text-[11px] uppercase tracking-widest font-bold">Kampanya Bilgileri</h4>
               </div>
               <ul className="space-y-3">
                  <li className="text-xs text-black/50 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004A30]/20 mt-1 flex-shrink-0" />
                    Bu kampanya tüm Sommario mağazalarında geçerlidir.
                  </li>
                  <li className="text-xs text-black/50 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004A30]/20 mt-1 flex-shrink-0" />
                    Başka bir indirim veya kampanya ile birleştirilemez.
                  </li>
                  <li className="text-xs text-black/50 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004A30]/20 mt-1 flex-shrink-0" />
                    Sommario, kampanya tarihlerini değiştirme hakkını saklı tutar.
                  </li>
               </ul>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  );
}