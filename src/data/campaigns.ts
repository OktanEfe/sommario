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
      slug: "ikindi-sefasi",
      title: "İkindi Sefası",
      subtitle: "Filtre Kahve & Günlük Pasta Uyumu",
      description: "Günün yorgunluğunu, taze demlenmiş bir filtre kahve ve şefimizin günlük pastasıyla atın.",
      content: "Sommario'da öğleden sonraları artık daha tatlı. Seçtiğiniz herhangi bir filtre kahve ve vitrinimizin eşsiz pastalarından biri, özel fiyatıyla sizi bekliyor. Bu kampanya tüm mağazalarımızda her gün saat 14:00 - 18:00 arasında geçerlidir.",
      image: "/campaigns/coffee-cake.jpg",
      badge: "Popüler"
    },
    {
      id: 2,
      slug: "sabah-enerjisi",
      title: "Güne Zinde Başla",
      subtitle: "Double Espresso & Kruvasan",
      description: "Sabahın ilk ışıklarında ihtiyacınız olan enerji Sommario'da.",
      content: "Güne hızlı bir başlangıç yapmak isteyenler için çıtır kruvasan ve sert bir double espresso ikilisi. Sabah saat 10:00'a kadar geçerli olan bu özel eşleşmeyi kaçırmayın.",
      image: "/campaigns/espresso-croissant.jpg",
      badge: "Yeni"
    }
  ];