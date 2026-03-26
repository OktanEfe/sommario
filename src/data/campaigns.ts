export interface Campaign {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    content: string; // Detay sayfasındaki uzun yazı
    image: string;
    badge?: string; // "Yeni", "Sınırlı Süre" vb.
  }
  
  export const campaigns: Campaign[] = [
    {
      id: 1,
  slug: "soguk-filtre-pasta",
  title: "Serinleten Lezzet",
  subtitle: "Filtre Kahvenin En Yakın Arkadaşı: En Taze Pastalar",
  description: "Ferahlatıcı soğuk filtre kahve ve enfes pastalarla keyfinizi ikiye katlayın.",
  content: "Özellikle sıcak günlerde ferahlatıcı bir mola arayanlar için soğuk filtre kahve ve günlük pastalarımız mükemmel bir uyum sunuyor. Hafif, serin ve lezzet dolu bu deneyimi kaçırmayın.",
  image: "/campaigns/cold-filter-cake.jpg",
  badge: "Yeni"
    },
    {
      id: 2,
      slug: "sicak-filtre-pasta",
      title: "Günün Mola Saati",
      subtitle: "Sıcak Bir Yudum, Tatlı Bir Dokunuş.",
      description: "Sıcak bir kahve ve taptaze bir pasta ile günün en keyifli molasını verin.",
      content: "Yoğun geçen günün ortasında kendinize küçük bir ödül verin. Özenle demlenmiş sıcak filtre kahveniz ve günlük taze pastalarımız, özel fiyatıyla sizi bekliyor. Günün temposuna kısa ama lezzetli bir mola verin.",
      image: "/campaigns/hot-filter-cake.jpg",
      badge: "Popüler"
    },
    {
      id: 3,
      slug: "turk-kahvesi-gunu",
      title: "Gelenek Paylaşınca Güzel",
      subtitle: "1 Türk Kahvesi Alana 1 Hediye",
      description: "Türk kahvesinin eşsiz lezzetini paylaşmanın en keyifli hali Sommario’da.",
      content: "Türk Kahvesi Günü’ne özel hazırladığımız bu kampanyada, bir Türk kahvesi alana ikincisi bizden. Geleneksel lezzetin en saf halini sevdiklerinizle paylaşın. Bu özel fırsat sınırlı süreyle tüm mağazalarımızda geçerlidir.",
      image: "/campaigns/turkish-coffee.jpg",
      badge: "Sınırlı Süre"
    }
  ];