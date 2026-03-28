export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    category: string;
    date: string;
    excerpt: string; 
    content: string; 
    image: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: "barista-workshop-2024",
      title: "Evde Kusursuz Kahve Demleme Workshop'u",
      category: "Aktivite",
      date: "5 Aralık 2025",
      excerpt: "Kahve tutkunlarıyla bir araya gelerek V60 ve Chemex tekniklerini inceledik.",
      content: "Tasarımın Kahveyle Buluştuğu Nokta: TMMOB Mimarlar Odası Coffee Workshop Ekim 2024’te, estetiği ve fonksiyonelliği hayatın merkezine koyan TMMOB Mimarlar Odası üyeleriyle bir araya gelerek hafızalarda iz bırakan bir Coffee Workshop gerçekleştirdik.​Mimari projelerdeki o hassas dengeyi, bu kez kahve fincanlarına taşıdık. Etkinliğimiz boyunca katılımcılarla birlikte nitelikli kahvenin teorik dünyasından pratik uygulama tekniklerine kadar geniş bir yelpazeyi keşfettik.​Etkinlikte Neler Mi Yaptık?Çekirdekten Fincana Yolculuk: Kahvenin yetişme koşullarından hasat süreçlerine, mimari bir yapının temeli gibi kahvenin de karakterini belirleyen unsurları inceledik.​Demleme Teknikleri: V60, Chemex ve Aeropress gibi farklı yöntemlerle 'altın oran' arayışımızı demleme parametreleri üzerinden sürdürdük.Tadım (Cupping) Seansı: Farklı coğrafyaların aroma profillerini analiz ederek duyusal bir keşfe çıktık.​Sommario Coffee Company olarak, detaylara önem veren ve 'iyi tasarımı' hayatın her alanında arayan mimarlarımızla bu deneyimi paylaşmak bizim için büyük bir keyifti. Kahvenin birleştirici gücüyle, yaratıcılığın ve sohbetin ön planda olduğu bu özel gün için tüm katılımcılara teşekkür ederiz.Yeni workshoplarda ve taze demlenmiş kahve kokularında buluşmak üzere."
,
      image: "/blog/tmb.webp"
    },
    {
      id: 2,
      slug: "yeni-hasat-etiyopya",
      title: "Yeni Hasat: Etiyopya Guji Tadım Günü",
      category: "Tadım",
      date: "2 Şubat 2024",
      excerpt: "Meyvemsi notaları ve gövdeli yapısıyla yeni Etiyopya serimizi keşfettik.",
      content: "Yeni sezonun en iddialı çekirdeklerinden biri olan Etiyopya Guji için düzenlediğimiz tadım etkinliğinde, kahvenin yetiştiği rakımdan işleme yöntemine kadar tüm detayları paylaştık...",
      image: "/blog/turkkahvesi.webp"
    },
    {
      id: 3,
      slug: "sanat-ve-kahve-gecesi",
      title: "Sanat ve Kahve: Gece Sohbetleri",
      category: "Kültür",
      date: "20 Ocak 2024",
      excerpt: "Yerel sanatçılarımızın eserleri eşliğinde keyifli bir akşam geçirdik.",
      content: "Sommario sadece bir kahve dükkanı değil, bir yaşam alanı. Sanatçılarımızla gerçekleştirdiğimiz bu özel gecede tabloların gölgesinde en sevdiğimiz blendleri yudumladık...",
      image: "/blog/universite.webp"
    }
  ];