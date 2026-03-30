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
      id: 2,
      slug: "barista-workshop-2024",
      title: "Evde Kusursuz Kahve Demleme Workshop'u",
      category: "Aktivite",
      date: "24 Kasım 2025",
      excerpt: "Kahve tutkunlarıyla bir araya gelerek V60 ve Chemex tekniklerini inceledik.",
      content: "Tasarımın Kahveyle Buluştuğu Nokta: TMMOB Mimarlar Odası Coffee Workshop Kasım 2025’te, estetiği ve fonksiyonelliği hayatın merkezine koyan TMMOB Mimarlar Odası üyeleriyle bir araya gelerek hafızalarda iz bırakan bir Coffee Workshop gerçekleştirdik.​Mimari projelerdeki o hassas dengeyi, bu kez kahve fincanlarına taşıdık. Etkinliğimiz boyunca katılımcılarla birlikte nitelikli kahvenin teorik dünyasından pratik uygulama tekniklerine kadar geniş bir yelpazeyi keşfettik.​Etkinlikte Neler Mi Yaptık?Çekirdekten Fincana Yolculuk: Kahvenin yetişme koşullarından hasat süreçlerine, mimari bir yapının temeli gibi kahvenin de karakterini belirleyen unsurları inceledik.​Demleme Teknikleri: V60, Chemex ve Aeropress gibi farklı yöntemlerle 'altın oran' arayışımızı demleme parametreleri üzerinden sürdürdük.Tadım (Cupping) Seansı: Farklı coğrafyaların aroma profillerini analiz ederek duyusal bir keşfe çıktık.​Sommario Coffee Company olarak, detaylara önem veren ve 'iyi tasarımı' hayatın her alanında arayan mimarlarımızla bu deneyimi paylaşmak bizim için büyük bir keyifti. Kahvenin birleştirici gücüyle, yaratıcılığın ve sohbetin ön planda olduğu bu özel gün için tüm katılımcılara teşekkür ederiz.Yeni workshoplarda ve taze demlenmiş kahve kokularında buluşmak üzere."
,
      image: "/blog/tmb.webp"
    },
    {
      id: 1,
      slug: "turk-kahvesi-workshop",
      title: "Bir Fincanın Hikayesi: Türk Kahvesi Atölyesi",
      category: "Atölye",
      date: "5 Aralık 2025",
      excerpt: "Türk kahvesinin geçmişinden bugüne uzanan yolculuğunu birlikte keşfettik, demleme tekniklerini deneyimledik.",
      content:
        "Sommario olarak kahveyi sadece sunmak değil, anlatmak ve deneyimletmek istiyoruz. Bu doğrultuda düzenlediğimiz Türk kahvesi atölyesinde katılımcılarla birlikte geleneksel kahve kültürünü detaylarıyla ele aldık. Çekirdeğin seçilmesinden öğütülmesine, ideal pişirme tekniklerinden köpük oluşumuna kadar her adımı uygulamalı olarak deneyimledik. Katılımcılar kendi kahvelerini hazırlarken, doğru ekipman kullanımı ve püf noktalar hakkında bilgi edindi. Bu atölye, sadece bir eğitim değil; kahveyle kurulan bağı derinleştiren, keyifli ve öğretici bir buluşma oldu.",
      image: "/blog/turkkahvesi.webp"
    },
    {
      id: 3,
      slug: "kocaeli-universitesi-tadim",
      title: "Kampüste Kahve: Kocaeli Üniversitesi Tadım Etkinliği",
      category: "Etkinlik",
      date: "20 Kasım 2025",
      excerpt: "Kocaeli Üniversitesi’nde kurduğumuz stand ile öğrencilerle buluştuk, kahve tadımı deneyimi sunduk.",
      content:
        "Kahveyi daha fazla insana ulaştırmak ve doğru kahve deneyimini paylaşmak için Kocaeli Üniversitesi’nde özel bir tadım etkinliği gerçekleştirdik. Kampüs içerisinde kurduğumuz Sommario standında, farklı demleme yöntemleriyle hazırladığımız kahveleri öğrencilere sunduk. Katılımcılar sadece kahve tatmakla kalmadı; çekirdeğin karakteri, aroma profilleri ve demleme teknikleri hakkında bilgi edinme fırsatı buldu. Gün boyunca süren bu etkinlik, hem kahveye ilgi duyanlar için keyifli bir keşif alanı oldu hem de Sommario’nun kahveye yaklaşımını doğrudan deneyimleme imkanı sundu.",
      image: "/blog/universite.webp"
    }
  ];