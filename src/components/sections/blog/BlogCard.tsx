"use client";
import Link from 'next/link';
import { BlogPost } from '@/data/blog';

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group space-y-5">
      <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#FAF9F6] relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#004A30]">{post.category}</span>
        </div>
      </div>
      
      <div className="space-y-3 px-2">
        <span className="text-[10px] text-black/30 uppercase tracking-widest">{post.date}</span>
        <h3 className="text-xl font-light leading-tight group-hover:text-[#004A30] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-black/50 font-light line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};