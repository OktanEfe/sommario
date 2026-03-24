import { categories, products } from '@/data/menu';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);
  if (!category) return notFound();

  return (
    <main className="pt-40 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-16 space-y-6">
          <Link href="/menu" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-black/30 hover:text-[#004A30] transition-colors">
            <ChevronLeft size={14} /> Menüye Dön
          </Link>
          <h1 className="text-5xl font-light tracking-tighter">{category.name}</h1>
          <p className="text-black/40 font-light italic">Sommario kalitesiyle hazırlanan seçkin lezzetler.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <Link key={product.id} href={`/menu/urun/${product.slug}`} className="group space-y-4">
              <div className="aspect-square bg-[#FAF9F6] rounded-[2.5rem] overflow-hidden border border-black/[0.02] transition-all group-hover:shadow-xl group-hover:-translate-y-1 relative">
                <Image src={product.image} alt={product.name} fill className="object-contain p-8 transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="px-2">
                <h4 className="text-sm font-medium text-[#231F20]">{product.name}</h4>
                <p className="text-[11px] text-black/40 line-clamp-1 mt-1 font-light">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
        {categoryProducts.length === 0 && (
          <div className="py-20 text-center text-black/20 uppercase tracking-widest text-sm italic">
            Bu kategoride henüz ürün bulunmuyor.
          </div>
        )}
      </div>
    </main>
  );
}