import { blogPosts } from '@/data/blog';
import { BlogCard } from '@/components/sections/blog/BlogCard';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Sommario Roastery blog sayfasında kahve kültürü, demleme yöntemleri, yeni lezzetler ve markadan güncel içerikleri keşfedin.",
  keywords: [
    "kahve blogu",
    "Sommario blog",
    "kahve rehberi",
    "demleme yöntemleri",
    "kahve kültürü",
    "kahve içerikleri",
  ],
  alternates: {
    canonical: "https://sommario.com.tr/blog",
  },
  openGraph: {
    title: "Blog | Sommario Roastery",
    description:
      "Kahve kültürü, demleme yöntemleri ve ilham veren içeriklerle Sommario Roastery blogunu keşfedin.",
    url: "https://sommario.com.tr/blog",
    type: "website",
  },
  twitter: {
    title: "Blog | Sommario Roastery",
    description:
      "Kahve kültürü, demleme yöntemleri ve ilham veren içeriklerle Sommario Roastery blogunu keşfedin.",
  },
};
export default function BlogPage() {
  return (
    <main className="pt-40 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <header className="mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#004A30] font-bold">Sommario Günlük</span>
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter">Hikayeler & <span className="italic">Aktiviteler</span></h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}