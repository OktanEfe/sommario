import { notFound } from "next/navigation";

export default function StoreSlugPage() {
  return notFound();
}

// import { stores } from "@/data/stores";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, MapPin, Phone, Clock } from "lucide-react";



// export async function generateStaticParams() {
//   return stores.map((s) => ({ slug: s.slug }));
// }
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const store = stores.find(s => s.slug === slug);
//   return {
//     title: store?.name ?? 'Mağaza',
//     description: store?.address ?? '',
//   }
// }

// export default async function MagazaDetayPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const store = stores.find((s) => s.slug === slug);

//   if (!store || store.status === "soon") return notFound();

//   return (
//     <main className="pb-20 bg-white min-h-screen">

//       {/* HERO - büyük fotoğraf tam genişlik */}
//       <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
//         <Image
//           src={store.gallery[0]}
//           alt={store.name}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
//         {/* Geri butonu hero üstünde */}
//         <div className="absolute top-8 left-6 md:left-12 z-10">
//           <Link
//             href="/magazalarimiz"
//             className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
//           >
//             <ChevronLeft size={14} />
//             Tüm Mağazalara Dön
//           </Link>
//         </div>

//         {/* Mağaza ismi hero altında */}
//         <div className="absolute bottom-8 left-6 md:left-12">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-white">
//             {store.name}
//           </h1>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

//         {/* LEFT - 2 küçük fotoğraf */}
//         <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//           <div className="relative aspect-[4/3] sm:aspect-square rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
//             <Image
//               src={store.gallery[1]}
//               alt={store.name}
//               fill
//               className="object-cover transition-transform duration-700 hover:scale-105"
//             />
//           </div>
//           <div className="relative aspect-[4/3] sm:aspect-square rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
//             <Image
//               src={store.gallery[2]}
//               alt={store.name}
//               fill
//               className="object-cover transition-transform duration-700 hover:scale-105"
//             />
//           </div>
//         </div>

//         {/* RIGHT - Bilgi Kutusu */}
//         <div className="space-y-8 p-8 md:p-10 bg-[#FAF9F6] rounded-[2rem] sm:rounded-[2.5rem] h-fit lg:sticky lg:top-32">

//           {/* Adres */}
//           <div className="space-y-3">
//             <div className="flex items-center gap-2 text-[#004A30]">
//               <MapPin size={15} />
//               <h4 className="text-[10px] uppercase tracking-widest font-bold">Adres</h4>
//             </div>
//             <p className="text-sm text-black/60 leading-relaxed">{store.address}</p>
//           </div>

//           <div className="h-px bg-black/[0.05]" />

//           {/* Telefon */}
//           {store.phone && (
//             <>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2 text-[#004A30]">
//                   <Phone size={15} />
//                   <h4 className="text-[10px] uppercase tracking-widest font-bold">Telefon</h4>
//                 </div>
//                 <p className="text-sm text-black/60">{store.phone}</p>
//               </div>
//               <div className="h-px bg-black/[0.05]" />
//             </>
//           )}

//           {/* Saatler */}
//           {store.openingHours?.open && (
//             <>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2 text-[#004A30]">
//                   <Clock size={15} />
//                   <h4 className="text-[10px] uppercase tracking-widest font-bold">Çalışma Saatleri</h4>
//                 </div>
//                 <p className="text-sm text-black/60">
//                   {store.openingHours.open} – {store.openingHours.close}
//                 </p>
//               </div>
//               <div className="h-px bg-black/[0.05]" />
//             </>
//           )}

          
            
           
//         </div>
//       </section>
//     </main>
//   );
// }