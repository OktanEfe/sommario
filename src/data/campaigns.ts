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
      subtitle: "Filtre Kahvenin En Yakın Arkadaşı: Günlük Taze Pastalar",
      description:
        "Uzun ve yoğun bir günün ortasında, sizi serinleten bir yudum ve hafif bir tatlı dokunuş... Soğuk filtre kahvemizin dengeli aroması, günlük hazırlanan pastalarımızla buluşarak sade ama unutulmaz bir mola sunar.",
      content:
        "Sıcak havalarda ağır seçeneklerden uzaklaşıp, daha hafif ve ferah bir deneyim arayanlar için bu kombinasyon özenle hazırlandı. Uzun süre demlenerek karakter kazanan soğuk filtre kahvemiz, tatlı notaları baskılamadan öne çıkarırken; vitrindeki günlük pastalarımız her lokmada tazeliğini hissettirir. Bu ikili, sadece bir kahve molası değil; günün ritmini yavaşlatan, keyifli bir ara vermenizi sağlayan küçük bir kaçış sunar.",
      image: "/kampanya/soguk.png",
      badge: "Yeni"
    },
    {
      id: 2,
      slug: "sicak-filtre-pasta",
      title: "Günün Mola Saati",
      subtitle: "Sıcak Bir Yudum, Tatlı Bir Dokunuş",
      description:
        "Yoğun geçen günün içinde kendinize ayırdığınız o kısa an… Taze demlenmiş sıcak filtre kahve ve günlük pastalarımızla, sıradan bir molayı küçük bir ritüele dönüştürün.",
      content:
        "Her fincan, özenle seçilmiş çekirdeklerin doğru demleme yöntemiyle buluşmasıyla hazırlanır. Sıcak filtre kahvemizin yumuşak içimi ve dengeli gövdesi, yanında sunulan taze pastalarla birlikte tamamlanır. Bu kampanya, sadece bir indirim değil; günün temposuna kısa bir ara verip kendinize iyi hissettiren bir deneyim yaşamanız için tasarlandı. İster tek başınıza, ister sevdiklerinizle… Bu mola size ait.",
      image: "/kampanya/sıcak.png",
      badge: "Popüler"
    },
    {
      id: 3,
      slug: "turk-kahvesi-gunu",
      title: "Gelenek Paylaşınca Güzel",
      subtitle: "1 Türk Kahvesi Alana 1 Hediye",
      description:
        "Köpüğü, kokusu ve ritüeliyle Türk kahvesi… Şimdi paylaşmanın en güzel haliyle. Bir kahve alın, bir kahve bizden; keyfi birlikte çoğaltın.",
      content:
        "Sadece Türk Kahvesi gününde olan bu kampanya:Yüzyıllardır süregelen Türk kahvesi geleneğini modern bir yorumla sunuyoruz. Her fincan, doğru öğütülmüş çekirdekler ve ideal pişirme süreciyle hazırlanır. Bu özel kampanya ile bir kahve siparişi verdiğinizde ikincisi bizden. Çünkü kahve, tek başına güzel olsa da paylaşıldığında anlam kazanır. Sevdiklerinizle aynı masada buluşun, sohbeti uzatın ve bu özel anın tadını çıkarın. Sınırlı süreyle tüm mağazalarımızda sizi bekliyor.",
      image: "/kampanya/tk.png",
      badge: "Sınırlı Süre"
    }
  ];