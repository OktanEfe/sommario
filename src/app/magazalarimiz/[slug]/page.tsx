import { stores } from '@/data/stores';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return stores.map(store => ({ slug: store.slug }));
}

export default function MagazaDetayPage({ params }: { params: { slug: string } }) {
  const { slug } = params; 
  const store = stores.find(s => s.slug === slug);

  if (!store || store.status === 'soon') return notFound();

  return (
    <main className="pt-32 pb-20">
      <section className="px-8 max-w-[1440px] mx-auto">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[3rem] bg-[#FAF9F6]">
          {store.mainImage && (
            <img src={store.mainImage} className="w-full h-full object-cover" alt={store.name} />
          )}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-12 left-12 text-white">
            <h1 className="text-6xl font-light tracking-tighter">{store.name}</h1>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square bg-[#FAF9F6] rounded-[2rem]" /> 
            <div className="aspect-square bg-[#FAF9F6] rounded-[2rem]" />
          </div>
        </div>
        
        <div className="space-y-10 p-12 bg-[#FAF9F6] rounded-[3rem] h-fit">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#004A30] font-bold mb-4">İletişim & Adres</h4>
            <p className="text-sm text-black/60 leading-relaxed">{store.address}</p>
            <p className="text-sm text-[#004A30] mt-4 font-medium">{store.phone}</p>
          </div>
          {store.hours && (
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[#004A30] font-bold mb-4">Çalışma Saatleri</h4>
              <p className="text-sm text-black/60">Hafta içi: {store.hours.weekdays}</p>
              <p className="text-sm text-black/60">Hafta sonu: {store.hours.weekend}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}