export const coffeeProducts = [
    {
      type: "coffee",
      category: "iced",
      slug: "iced-americano",
      name: "Iced Americano",
      description: "Soğuk ve sert içimli klasik espresso bazlı kahve.",
      image: "/menu/coffee/iced-americano.jpg",
  
      intensity: 5,
      milk: false,
  
      tags: ["Sert", "Klasik"],
      allergens: [],
    },
  
    {
      type: "coffee",
      category: "iced",
      slug: "iced-latte",
      name: "Iced Latte",
      description: "Yumuşak içimli, süt dengesiyle hafif kahve deneyimi.",
      image: "/menu/coffee/iced-latte.jpg",
  
      intensity: 2,
      milk: true,
  
      tags: ["Yumuşak", "Sütlü"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "iced",
      slug: "iced-flat-white",
      name: "Iced Flat White",
      description: "Yoğun espresso ve süt dengesiyle güçlü ama pürüzsüz.",
      image: "/menu/coffee/iced-flat-white.jpg",
  
      intensity: 4,
      milk: true,
  
      tags: ["Yoğun", "Dengeli"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "flavored",
      slug: "iced-mocha",
      name: "Iced Mocha",
      description: "Çikolata ve kahvenin birleştiği yumuşak içimli karışım.",
      image: "/menu/coffee/iced-mocha.jpg",
  
      intensity: 3,
      milk: true,
      chocolate: true,
  
      tags: ["Çikolatalı", "Tatlı"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "flavored",
      slug: "iced-white-mocha",
      name: "Iced White Mocha",
      description: "Beyaz çikolata ile daha tatlı ve kremamsı bir deneyim.",
      image: "/menu/coffee/iced-white-mocha.jpg",
  
      intensity: 2,
      milk: true,
      chocolate: true,
  
      tags: ["Tatlı", "Kremamsı"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "flavored",
      slug: "iced-caramel-macchiato",
      name: "Iced Caramel Macchiato",
      description: "Karamel ve vanilya notalarıyla dengeli ve aromatik.",
      image: "/menu/coffee/iced-caramel-macchiato.jpg",
  
      intensity: 2,
      milk: true,
  
      tags: ["Karamel", "Aromatik"],
      allergens: ["Süt"],
    },
  
    {
      type: "coffee",
      category: "flavored",
      slug: "flavored-iced-latte",
      name: "Aromalı Soğuk Latte",
      description: "Karamel, vanilya veya mocha aromalarıyla zenginleştirilmiş latte.",
      image: "/menu/coffee/flavored-latte.jpg",
  
      intensity: 2,
      milk: true,
  
      tags: ["Aromalı", "Yumuşak"],
      allergens: ["Süt"],
    },
  ];