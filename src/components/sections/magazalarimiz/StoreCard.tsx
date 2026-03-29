import { Store } from '@/data/stores';
import { MapPin, Phone, Clock } from 'lucide-react';

export const StoreCard = ({ store }: { store: Store }) => {
  const isSoon = store.status === 'soon';

  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] bg-[#FAF9F6] border border-black/[0.03] transition-all duration-500 ${
        isSoon ? 'opacity-95' : 'hover:shadow-xl'
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {store.mainImage ? (
          <img
            src={store.mainImage}
            alt={store.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center italic text-black/10 tracking-widest uppercase">
            Sommario
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
          <h3 className="text-[28px] md:text-[32px] font-light tracking-tight text-white leading-none">
            {store.name}
          </h3>

          {isSoon && (
            <span className="inline-flex mt-3 text-[10px] text-white/70 uppercase tracking-[0.28em]">
              Çok Yakında
            </span>
          )}
        </div>
      </div>

      <div className="p-6 md:p-7 space-y-5">
        {store.address && (
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-[#004A30] mt-0.5 shrink-0" />
            <p className="text-[14px] text-black/60 leading-relaxed font-light">
              {store.address}
            </p>
          </div>
        )}

        {store.phone && (
          <div className="flex items-start gap-3">
            <Phone size={16} className="text-[#004A30] mt-0.5 shrink-0" />
            <p className="text-[14px] text-black/60 leading-relaxed font-light">
              {store.phone}
            </p>
          </div>
        )}

        {store.openingHours?.open && store.openingHours?.close && (
          <div className="flex items-start gap-3">
            <Clock size={16} className="text-[#004A30] mt-0.5 shrink-0" />
            <p className="text-[14px] text-black/60 leading-relaxed font-light">
              {store.openingHours.open} – {store.openingHours.close}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};