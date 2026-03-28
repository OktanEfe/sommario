import { stores } from '@/data/stores';
import { StoreCard } from '@/components/sections/magazalarimiz/StoreCard';

export default function MagazalarPage() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] font-bold">Lokasyonlar</span>
          <h1 className="text-5xl font-light tracking-tighter">Mağazalarımız</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
}