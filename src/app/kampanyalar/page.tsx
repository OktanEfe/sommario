import { campaigns } from '@/data/campaigns';
import { CampaignCard } from '@/components/sections/kampanyalar/CampaignCard';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kampanyalar",
  description:
    "Sommario Roastery kampanyalarını keşfedin. Güncel fırsatlar, özel teklifler ve avantajlı seçeneklerle kahve deneyiminizi daha keyifli hale getirin.",
  keywords: [
    "Sommario kampanyalar",
    "kahve kampanyası",
    "güncel fırsatlar",
    "özel teklif",
    "indirimli kahve",
    "cafe kampanya",
  ],
  alternates: {
    canonical: "https://sommario.com.tr/kampanyalar",
  },
  openGraph: {
    title: "Kampanyalar | Sommario Roastery",
    description:
      "Güncel kampanyalar, özel fırsatlar ve avantajlı tekliflerle Sommario dünyasını keşfedin.",
    url: "https://sommario.com.tr/kampanyalar",
    type: "website",
  },
  twitter: {
    title: "Kampanyalar | Sommario Roastery",
    description:
      "Güncel kampanyalar, özel fırsatlar ve avantajlı tekliflerle Sommario dünyasını keşfedin.",
  },
};
export default function CampaignsPage() {
  return (
    <main className="pt-40 pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        
        <header className="mb-24 space-y-4 max-w-xl">
          <span className="text-[10px] tracking-[0.6em] uppercase text-[#004A30] font-bold">Ayrıcalıklar</span>
          <h1 className="text-6xl font-light tracking-tighter leading-tight">
            Sommario <br /> <span className="italic">Deneyimini Katlayın.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-10">
          {campaigns.map((camp) => (
            <CampaignCard key={camp.id} campaign={camp} />
          ))}
        </div>
      </div>
    </main>
  );
}