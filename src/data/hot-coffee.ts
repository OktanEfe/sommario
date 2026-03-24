export const hotCoffeeProducts = [
    // ☕ ESPRESSO BASE
    {
      type: "coffee",
      category: "espresso",
      slug: "espresso",
      name: "Espresso",
      description: "Yoğun, kısa ve güçlü kahve deneyimi.",
      image: "/menu/coffee/espresso.jpg",
  
      intensity: 5,
      milk: false,
  
      tags: ["Yoğun", "Klasik"],
      allergens: [],
    },
  
    {
      type: "coffee",
      category: "espresso",
      slug: "espresso-doppio",
      name: "Espresso Doppio",
      description: "Daha yoğun ve çift shot espresso deneyimi.",
      image: "/menu/coffee/espresso-doppio.jpg",
  
      intensity: 5,
      milk: false,
  
      tags: ["Çift Shot", "Güçlü"],
      allergens: [],
    },
  
    {
      type: "coffee",
      category: "espresso",
      slug: "lungo",
      name: "Lungo",
      description: "Daha uzun ekstraksiyon ile yumuşayan espresso.",
      image: "/menu/coffee/lungo.jpg",
  
      intensity: 3,
      milk: false,
  
      tags: ["Hafif", "Uzun"],
      allergens: [],
    },
  
    {
      type: "coffee",
      category: "espresso",
      slug: "ristretto",
      name: "Ristretto",
      description: "Kısa, yoğun ve aromatik espresso.",
      image: "/menu/coffee/ristretto.jpg",
  
      intensity: 5,
      milk: false,
  
      tags: ["Yoğun", "Kısa"],
      allergens: [],
    },
  
    {
      type: "coffee",
      category: "espresso",
      slug: "espresso-macchiato",
      name: "Espresso Macchiato",
      description: "Üzerine süt köpüğü dokunuşu eklenmiş espresso.",
      image: "/menu/coffee/espresso-macchiato.jpg",
  
      intensity: 4,
      milk: true,
      foam: true,
  
      tags: ["Köpüklü", "Dengeli"],
      allergens: ["Süt"],
    },
  
    // ☕ CLASSIC
    {
      type: "coffee",
      category: "classic",
      slug: "americano",
      name: "Americano",
      description: "Espresso bazlı, daha hafif içimli klasik kahve.",
      image: "/menu/coffee/americano.jpg",
  
      intensity: 3,
      milk: false,
  
      tags: ["Klasik", "Hafif"],
      allergens: [],
    },
  
    // 🥛 MILK BASED
    {
      type: "coffee",
      category: "milk",
      slug: "latte",
      name: "Caffe Latte",
      description: "Süt ağırlıklı, yumuşak içimli kahve.",
      image: "/menu/coffee/latte.jpg",
  
      intensity: 2,
      milk: true,
  
      tags: ["Yumuşak", "Sütlü"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "milk",
      slug: "cappuccino",
      name: "Cappuccino",
      description: "Yoğun süt köpüğü ile dengeli kahve deneyimi.",
      image: "/menu/coffee/cappuccino.jpg",
  
      intensity: 3,
      milk: true,
      foam: true,
  
      tags: ["Köpüklü", "Dengeli"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "milk",
      slug: "flat-white",
      name: "Flat White",
      description: "Yoğun espresso ve ince süt dengesi.",
      image: "/menu/coffee/flat-white.jpg",
  
      intensity: 4,
      milk: true,
  
      tags: ["Yoğun", "Dengeli"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "milk",
      slug: "cortado",
      name: "Cortado",
      description: "Espresso ve süt dengesinin birebir olduğu kahve.",
      image: "/menu/coffee/cortado.jpg",
  
      intensity: 4,
      milk: true,
  
      tags: ["Dengeli", "Yoğun"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "milk",
      slug: "ristretto-bianco",
      name: "Ristretto Bianco",
      description: "Kısa shot espresso ve yoğun süt köpüğü birleşimi.",
      image: "/menu/coffee/ristretto-bianco.jpg",
  
      intensity: 4,
      milk: true,
      foam: true,
  
      tags: ["Yoğun", "Köpüklü"],
      allergens: ["Süt"],
    },
  
    // 🍮 SIGNATURE
    {
      type: "coffee",
      category: "signature",
      slug: "caramel-macchiato",
      name: "Caramel Macchiato",
      description: "Vanilya ve karamel notalarıyla aromatik kahve.",
      image: "/menu/coffee/caramel-macchiato.jpg",
  
      intensity: 2,
      milk: true,
  
      tags: ["Tatlı", "Aromatik"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "signature",
      slug: "red-eye",
      name: "Red Eye",
      description: "Filtre kahve ve espresso birleşimi.",
      image: "/menu/coffee/red-eye.jpg",
  
      intensity: 5,
      milk: false,
  
      tags: ["Çok Güçlü"],
      allergens: [],
    },
  
    {
      type: "coffee",
      category: "signature",
      slug: "black-eye",
      name: "Black Eye",
      description: "Daha yoğun espresso eklenmiş filtre kahve.",
      image: "/menu/coffee/black-eye.jpg",
  
      intensity: 5,
      milk: false,
  
      tags: ["Ekstra Güçlü"],
      allergens: [],
    },
  
    {
      type: "coffee",
      category: "signature",
      slug: "dead-eye",
      name: "Dead Eye",
      description: "Maksimum sertlikte espresso ve filtre kahve karışımı.",
      image: "/menu/coffee/dead-eye.jpg",
  
      intensity: 5,
      milk: false,
  
      tags: ["Aşırı Güçlü"],
      allergens: [],
    },
  ];