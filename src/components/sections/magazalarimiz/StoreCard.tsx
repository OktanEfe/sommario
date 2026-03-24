import Link from 'next/link';
import { Store } from '@/data/stores';

export const StoreCard = ({ store }: { store: Store }) => {
  const isSoon = store.status === 'soon';

  return (
    <Link 
      href={isSoon ? "#" : `/magazalarimiz/${store.slug}`}
      className={`group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#FAF9F6] transition-all duration-500 ${isSoon ? 'cursor-default' : 'hover:shadow-2xl hover:-translate-y-2'}`}
    >
      {store.mainImage ? (
        <img src={store.mainImage} alt={store.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      ) : (
        <div className="flex h-full w-full items-center justify-center italic text-black/10 tracking-widest uppercase">Sommario</div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-light text-white">{store.name}</h3>
        {isSoon && <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] mt-2">Çok Yakında</span>}
      </div>
    </Link>
  );
};