"use client";
import { categories, products, Product } from '@/data/menu';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Sparkles, RotateCcw, ArrowLeft } from 'lucide-react';
import { useRef, useState } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menü",
  description:
    "Sommario Roastery menüsünü keşfedin. Kahveler, özel içecekler ve lezzetli seçeneklerle size en uygun tatları inceleyin.",
  keywords: [
    "Sommario menü",
    "kahve menüsü",
    "espresso",
    "filtre kahve",
    "soğuk kahve",
    "içecek menüsü",
    "cafe menü",
  ],
  alternates: {
    canonical: "https://sommario.com.tr/menu",
  },
  openGraph: {
    title: "Menü | Sommario Roastery",
    description:
      "Kahveler, özel içecekler ve özenle hazırlanan lezzetleri Sommario Roastery menüsünde keşfedin.",
    url: "https://sommario.com.tr/menu",
    type: "website",
  },
  twitter: {
    title: "Menü | Sommario Roastery",
    description:
      "Kahveler, özel içecekler ve özenle hazırlanan lezzetleri Sommario Roastery menüsünde keşfedin.",
  },
};
const globalStyles = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const questions = [
  {
    id: 'time',
    question: 'Saat kaç, ne zaman uğradın bize?',
    emoji: '🕐',
    options: [
      { label: '🌅 Sabah kahvesi vakti', value: 'morning' },
      { label: '☀️ Öğlen molası', value: 'noon' },
      { label: '🌆 Günün yorgunluğunu atıyorum', value: 'afternoon' },
      { label: '🌙 Akşam keyfi', value: 'evening' },
    ],
  },
  {
    id: 'coffee',
    question: 'Kahve içmek ister misin bugün?',
    emoji: '☕',
    options: [
      { label: '☕ Kahvesiz olmaz', value: 'yes' },
      { label: '🙂 Hafifçe olsun', value: 'mild' },
      { label: '🚫 Bugün kahvesiz', value: 'no' },
    ],
  },
  {
    id: 'temp',
    question: 'Sıcak bir şey mi soğuk bir şey mi?',
    emoji: '🌡️',
    options: [
      { label: '☕ Sıcak olsun', value: 'hot' },
      { label: '🧊 Soğuk olsun', value: 'cold' },
      { label: '🤷 Fark etmez', value: 'any' },
    ],
  },
  {
    id: 'milk',
    question: 'Sütlü içecekleri sever misin?',
    emoji: '🥛',
    options: [
      { label: '🥛 Evet, sütlü olsun', value: 'yes' },
      { label: '💧 Çok sütlü olmasın', value: 'less' },
      { label: '🚫 Sütsüz olsun', value: 'no' },
    ],
  },
  {
    id: 'sweetness',
    question: 'Tatlı sever misin peki?',
    emoji: '🍬',
    options: [
      { label: '🍬 Çok severim', value: 'very' },
      { label: '🙂 Orta olsun', value: 'medium' },
      { label: '🍃 Az olsun', value: 'low' },
      { label: '⬛ Hiç istemiyorum', value: 'none' },
    ],
  },
  {
    id: 'intensity',
    question: 'Ne kadar yoğun bir içecek istersin?',
    emoji: '⚡',
    options: [
      { label: '💤 Hafif, rahat bir şey', value: 'light' },
      { label: '😊 Ne çok ne az', value: 'medium' },
      { label: '⚡ Yoğun ve güçlü', value: 'strong' },
    ],
  },
  {
    id: 'mood',
    question: 'Şu an kendini nasıl hissediyorsun?',
    emoji: '✨',
    options: [
      { label: '🔥 Enerjik, odaklanmam lazım', value: 'energetic' },
      { label: '😌 Sakin, mola istiyorum', value: 'calm' },
      { label: '🍫 Kendimi biraz şımartayım', value: 'indulgent' },
      { label: '🌿 Ferahlamak istiyorum', value: 'fresh' },
    ],
  },
];

const coldTypes = ['frozen', 'cold-brew', 'refresher', 'mocktail', 'milkshake'];
const coldCategories = ['iced', 'cream', 'fruit'];

function scoreProduct(product: Product, answers: Record<string, string>): number {
  let score = 0;
  const { coffee, temp, milk, sweetness, intensity, mood, time } = answers;

  const isColdProduct = coldTypes.includes(product.type) || coldCategories.includes(product.category);
  const isHotProduct =
    (product.type === 'coffee' && !coldCategories.includes(product.category)) ||
    product.type === 'seasonal';

  if (coffee === 'no' && product.hasCoffee === true) return -999;
  if (coffee === 'yes' && product.hasCoffee === false) return -999;
  if (temp === 'hot' && isColdProduct) return -999;
  if (temp === 'cold' && isHotProduct) return -999;

  const hasMilk = product.allergens?.includes('Süt') || product.milk === true;
  if (milk === 'no' && hasMilk) score -= 3;
  if (milk === 'yes' && hasMilk) score += 2;

  const sw = product.sweetness ?? 0;
  if (sweetness === 'very' && sw >= 4) score += 3;
  if (sweetness === 'very' && sw < 3) score -= 2;
  if (sweetness === 'medium' && sw >= 2 && sw <= 4) score += 2;
  if (sweetness === 'low' && sw <= 2) score += 3;
  if (sweetness === 'low' && sw >= 4) score -= 2;
  if (sweetness === 'none' && sw <= 1) score += 3;
  if (sweetness === 'none' && sw >= 3) score -= 3;

  const intVal = product.intensity ?? 0;
  if (intensity === 'light' && intVal <= 2) score += 3;
  if (intensity === 'light' && intVal >= 4) score -= 2;
  if (intensity === 'medium' && intVal >= 2 && intVal <= 4) score += 2;
  if (intensity === 'strong' && intVal >= 4) score += 3;
  if (intensity === 'strong' && intVal <= 2) score -= 2;

  if (mood === 'fresh' && (product.type === 'frozen' || product.type === 'refresher' || product.type === 'mocktail')) score += 3;
  if (mood === 'indulgent' && (product.hasChocolate || (product.sweetness ?? 0) >= 4)) score += 3;
  if (mood === 'energetic' && (product.intensity ?? 0) >= 4) score += 2;
  if (mood === 'calm' && (product.intensity ?? 0) <= 2) score += 2;

  if (time === 'morning' && isHotProduct && (product.intensity ?? 0) >= 3) score += 2;
  if (time === 'evening' && isHotProduct) score += 2;
  if (time === 'afternoon' && isColdProduct) score += 2;
  if (time === 'noon' && isColdProduct) score += 1;

  return score;
}

function getRecommendations(answers: Record<string, string>) {
  return [...products]
    .map(p => ({ product: p, score: scoreProduct(p, answers) }))
    .filter(x => x.score > -999)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(x => x.product);
}

function FlipCard({ product, index }: { product: Product; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ animationDelay: `${index * 150}ms`, animation: 'fadeSlideUp 0.5s ease forwards', opacity: 0 }}>
      <div className="cursor-pointer" style={{ perspective: '1000px' }} onClick={() => setFlipped(!flipped)}>
        <div style={{ transformStyle: 'preserve-3d', transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', position: 'relative', height: '240px' }}>
          <div style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }} className="absolute inset-0 rounded-[1.75rem] bg-white overflow-hidden border border-white/10 shadow-sm">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} className="absolute inset-0 rounded-[1.75rem] bg-[#003D26] p-5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <h4 className="text-white font-medium text-sm">{product.name}</h4>
              <p className="text-white/55 text-xs font-light leading-relaxed line-clamp-3">{product.description}</p>
            </div>
            {product.tags && (
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-[9px] font-medium">{tag}</span>
                ))}
              </div>
            )}
            <Link href={`/menu/urun/${product.slug}`} onClick={e => e.stopPropagation()} className="block text-center py-2 rounded-xl bg-white text-[#004A30] text-[10px] font-medium uppercase tracking-widest hover:bg-white/90 transition-colors">
              İncele
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-3 px-1 space-y-0.5">
        <h4 className="text-sm font-medium text-white">{product.name}</h4>
        <p className="text-[10px] text-white/30">Kartı çevir →</p>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const recommended = products.filter(p => p.isRecommended);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const touchStartX = useRef<number>(0);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    setDirection('forward');
    if (step < questions.length) {
      setStep(step + 1);
    }
    if (step === questions.length) {
      setRecommendations(getRecommendations(newAnswers));
      setStep(questions.length + 1);
    }
  };

  const handleBack = () => {
    if (step <= 1) { resetQuiz(); return; }
    setDirection('back');
    const prevQuestion = questions[step - 2];
    const newAnswers = { ...answers };
    delete newAnswers[prevQuestion.id];
    setAnswers(newAnswers);
    setStep(step - 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setRecommendations([]);
  };

  const currentQuestion = questions[step - 1];
  const dotPattern = { backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff < -60) handleBack();
  };

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <style>{globalStyles}</style>

      <div className="max-w-[1280px] mx-auto px-6">

        {/* KATEGORİLER */}
        <div className="relative">
          <button onClick={() => scroll('left')} className="md:hidden absolute left-0 top-[40px] -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white shadow-md rounded-full border border-black/[0.05]">
            <ChevronLeft size={16} />
          </button>
          <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-8 no-scrollbar scroll-smooth px-10 md:px-0">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/menu/kategori/${cat.slug}`} className="flex flex-col items-center gap-4 group min-w-[100px]">
                <div className="w-24 h-24 rounded-full bg-[#FAF9F6] flex items-center justify-center border border-black/[0.03] group-hover:border-[#004A30]/20 transition-all group-active:scale-95 shadow-sm overflow-hidden">
                  <span className="text-[10px] uppercase tracking-widest opacity-30">ICON</span>
                </div>
                <span className="text-[11px] uppercase tracking-widest font-medium text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
          <button onClick={() => scroll('right')} className="md:hidden absolute right-0 top-[40px] -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white shadow-md rounded-full border border-black/[0.05]">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* QUIZ */}
        <section className="mt-12">

          {step === 0 && (
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#004A30] px-8 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative">
              <div className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
              <div className="space-y-3 relative z-10 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Sparkles size={13} className="text-white/50" />
                  <span className="text-[10px] uppercase tracking-widest font-medium text-white/50">Sana Özel Öneri</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-light tracking-tighter text-white">Ne içmeliyim<br />bilmiyorum...</h3>
                <p className="text-white/40 text-sm font-light">7 kısa soruyla sana en uygun içeceği bulalım.</p>
              </div>
              <button
                onClick={() => setStep(1)}
                className="shrink-0 relative z-10 w-full md:w-auto px-10 py-4 rounded-full text-[11px] uppercase tracking-widest font-medium bg-white text-[#004A30] transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                Başlayalım ✨
              </button>
            </div>
          )}

          {step >= 1 && step <= questions.length && currentQuestion && (
            <div
              key={`${step}-${direction}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#004A30] px-6 py-8 md:px-14 md:py-14 relative"
              style={{ animation: `${direction === 'forward' ? 'slideInRight' : 'slideInLeft'} 0.35s cubic-bezier(0.4,0,0.2,1)` }}
            >
              <div className="absolute inset-0 opacity-[0.04]" style={dotPattern} />

              {/* Geri + progress */}
              <div className="relative z-10 flex items-center justify-between mb-5">
                <button onClick={handleBack} className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors">
                  <ArrowLeft size={15} />
                  <span className="text-[11px] uppercase tracking-widest">Geri</span>
                </button>
                <span className="text-[10px] uppercase tracking-widest text-white/30">{step} / {questions.length}</span>
              </div>

              <div className="relative z-10 mb-8 flex gap-1.5">
                {questions.map((_, i) => (
                  <div key={i} className="h-0.5 flex-1 rounded-full transition-all duration-500"
                    style={{ backgroundColor: i < step ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.1)' }} />
                ))}
              </div>

              <div className="relative z-10 mb-7 space-y-2">
                <span className="text-3xl">{currentQuestion.emoji}</span>
                <h3 className="text-xl md:text-3xl font-light tracking-tight text-white leading-snug">{currentQuestion.question}</h3>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:flex-wrap gap-2.5">
                {currentQuestion.options.map((opt, i) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                    style={{ animationDelay: `${i * 60}ms`, animation: 'fadeSlideUp 0.4s ease forwards', opacity: 0 }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-sm font-medium text-white/80 hover:bg-white hover:text-[#004A30] hover:border-white transition-all duration-200 active:scale-95 text-left"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <p className="relative z-10 mt-6 text-[10px] text-white/20 text-center md:hidden">← Geri gitmek için kaydır</p>
            </div>
          )}

          {step === questions.length + 1 && (
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#004A30] px-6 py-8 md:px-14 md:py-14 relative" style={{ animation: 'slideInRight 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
              <div className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
              <div className="relative z-10 flex items-start justify-between mb-8">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-white/50" />
                    <span className="text-[10px] uppercase tracking-widest font-medium text-white/50">Senin İçin Seçtik</span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-light tracking-tight text-white">İşte tam sana göre ✨</h3>
                  <p className="text-white/35 text-xs font-light">Kartlara tıklayarak detayları görebilirsin.</p>
                </div>
                <button onClick={resetQuiz} className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors shrink-0 ml-4">
                  <RotateCcw size={11} /> Tekrar
                </button>
              </div>

              {recommendations.length > 0 ? (
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {recommendations.map((product, i) => (
                    <FlipCard key={product.slug} product={product} index={i} />
                  ))}
                </div>
              ) : (
                <p className="relative z-10 text-center py-8 text-white/30 text-sm font-light">Eşleşen ürün bulunamadı. Tekrar dene!</p>
              )}
            </div>
          )}
        </section>

        {/* ÖNERİLER */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <Star size={16} className="text-[#004A30] fill-[#004A30]" />
            <h2 className="text-xl font-light tracking-tight">Bizim Önerilerimiz</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommended.map(product => (
              <Link key={product.id} href={`/menu/urun/${product.slug}`} className="group space-y-4">
                <div className="aspect-square rounded-[2rem] bg-[#FAF9F6] overflow-hidden relative">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform group-hover:scale-110" />
                </div>
                <h4 className="text-sm font-medium px-2">{product.name}</h4>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}