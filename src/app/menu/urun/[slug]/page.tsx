import { products } from '@/data/menu';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Coffee, Milk, AlertCircle, Zap, Star } from 'lucide-react';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return notFound();

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        <Link href="/menu" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-black/30 hover:text-[#004A30] transition-colors mb-12">
          <ChevronLeft size={14} /> Menüye Dön
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-[3rem] bg-[#FAF9F6] overflow-hidden border border-black/[0.02] relative">
            <Image src={product.image} alt={product.name} fill className="object-contain p-12 drop-shadow-2xl" />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-light tracking-tighter">{product.name}</h1>
              <p className="text-black/40 font-light leading-relaxed">{product.description}</p>
            </div>
            {product.intensity !== undefined && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#004A30]">
                  <Coffee size={14} /> Sertlik
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className={`h-1 flex-1 rounded-full transition-all duration-1000 ${step <= (product.intensity ?? 0) ? 'bg-[#004A30]' : 'bg-black/[0.05]'}`} />
                  ))}
                </div>
              </div>
            )}
            {product.sweetness !== undefined && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#004A30]">
                  <Star size={14} /> Tatlılık
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className={`h-1 flex-1 rounded-full transition-all duration-1000 ${step <= (product.sweetness ?? 0) ? 'bg-[#004A30]' : 'bg-black/[0.05]'}`} />
                  ))}
                </div>
              </div>
            )}
            {product.creaminess !== undefined && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#004A30]">
                  <Zap size={14} /> Kremamsılık
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className={`h-1 flex-1 rounded-full transition-all duration-1000 ${step <= (product.creaminess ?? 0) ? 'bg-[#004A30]' : 'bg-black/[0.05]'}`} />
                  ))}
                </div>
              </div>
            )}
            {(product.hasCoffee !== undefined || product.hasChocolate !== undefined) && (
              <div className="flex gap-2 flex-wrap">
                {product.hasCoffee && (
                  <span className="px-4 py-2 bg-[#004A30]/5 border border-[#004A30]/10 rounded-xl text-[11px] font-medium text-[#004A30]">☕ Kahve İçerir</span>
                )}
                {product.hasChocolate && (
                  <span className="px-4 py-2 bg-[#004A30]/5 border border-[#004A30]/10 rounded-xl text-[11px] font-medium text-[#004A30]">🍫 Çikolata İçerir</span>
                )}
              </div>
            )}
            {product.milkOptions && product.milkOptions.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#004A30]">
                  <Milk size={14} /> Süt Tercihi
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.milkOptions.map(option => (
                    <span key={option} className="px-4 py-2 bg-[#FAF9F6] border border-black/[0.03] rounded-xl text-[11px] font-medium text-black/60">{option}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-start gap-3 p-6 bg-red-50/30 rounded-2xl border border-red-100/50 mt-10">
              <AlertCircle size={18} className="text-red-400 mt-0.5" />
              <div>
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-red-900/60 mb-1">Alerjenler</h5>
                <p className="text-[11px] text-red-800/50 leading-relaxed font-light">
                  {product.allergens.length > 0 ? product.allergens.join(', ') : 'Alerjen bilgisi bulunmamaktadır.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}