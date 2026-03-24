import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params; 
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="pt-32 pb-20 bg-white">
      <article className="max-w-[800px] mx-auto px-8">
        <Link href="/blog" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-black/30 hover:text-[#004A30] transition-colors mb-12">
          <ChevronLeft size={14} /> Geri Dön
        </Link>

        <header className="space-y-6 mb-12">
          <span className="text-[10px] font-bold text-[#004A30] uppercase tracking-[0.3em]">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter leading-tight">{post.title}</h1>
          <div className="text-sm text-black/30 italic">{post.date} tarihinde yayınlandı</div>
        </header>

        <div className="aspect-[16/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl shadow-black/5">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-black/70 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left">
            {post.content}
          </p>
        </div>
      </article>
    </main>
  );
}