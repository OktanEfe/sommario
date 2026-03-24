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
      date: "15 Mart 2024",
      excerpt: "Kahve tutkunlarıyla bir araya gelerek V60 ve Chemex tekniklerini inceledik.",
      content: "Geçtiğimiz hafta sonu Arastapark mağazamızda gerçekleştirdiğimiz etkinlikte, katılımcılarımıza nitelikli kahve çekirdeklerinin yolculuğunu ve evde profesyonel demleme tekniklerini anlattık...",
      image: "/blog/workshop.jpg"
    },
    {
      id: 2,
      slug: "yeni-hasat-etiyopya",
      title: "Yeni Hasat: Etiyopya Guji Tadım Günü",
      category: "Tadım",
      date: "2 Şubat 2024",
      excerpt: "Meyvemsi notaları ve gövdeli yapısıyla yeni Etiyopya serimizi keşfettik.",
      content: "Yeni sezonun en iddialı çekirdeklerinden biri olan Etiyopya Guji için düzenlediğimiz tadım etkinliğinde, kahvenin yetiştiği rakımdan işleme yöntemine kadar tüm detayları paylaştık...",
      image: "/blog/tadim.jpg"
    },
    {
      id: 3,
      slug: "sanat-ve-kahve-gecesi",
      title: "Sanat ve Kahve: Gece Sohbetleri",
      category: "Kültür",
      date: "20 Ocak 2024",
      excerpt: "Yerel sanatçılarımızın eserleri eşliğinde keyifli bir akşam geçirdik.",
      content: "Sommario sadece bir kahve dükkanı değil, bir yaşam alanı. Sanatçılarımızla gerçekleştirdiğimiz bu özel gecede tabloların gölgesinde en sevdiğimiz blendleri yudumladık...",
      image: "/blog/sanat.jpg"
    }
  ];