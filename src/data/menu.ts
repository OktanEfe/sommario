import { hotCoffeeProducts } from "./hot-coffee";
import { coffeeProducts } from "./coffee";
import { freddoProducts } from "./freddo";
import { frozenProducts } from "./frozen";
import { coldBrewProducts } from "./coldbrew";
import { refreshers } from "./menuRefreshers";
import { milkshakeProducts } from "./milkshake";
import { mocktailProducts } from "./mokteyl";
import { winterSeasonalProducts } from "./winter";

export interface Product {
  id?: number;
  slug: string;
  name: string;
  category: string;
  type: string;
  description: string;
  image: string;

  // Kahve özellikleri
  intensity?: number;
  sweetness?: number;
  creaminess?: number;
  density?: number;

  // İçerik bayrakları
  hasCoffee?: boolean;
  hasChocolate?: boolean;
  milk?: boolean;
  foam?: boolean;
  chocolate?: boolean;

  // Mocktail için
  taste?: {
    sweetness?: number;
    sourness?: number;
    freshness?: number;
  } | string;

  // Diğer
  brewTime?: string;
  code?: string;
  season?: string;
  size?: string | null;

  tags?: string[];
  allergens: string[];
  milkOptions?: string[];
  isRecommended?: boolean;
}

export const categories = [
  { name: "Sıcak Kahve", slug: "sicak-kahve", icon: "/icons/hot-coffee.png" },
  { name: "Soğuk Kahve", slug: "soguk-kahve", icon: "/icons/cold-coffee.png" },
  { name: "Freddo", slug: "freddo", icon: "/icons/freddo.png" },
  { name: "Frozen", slug: "frozen", icon: "/icons/frozen.png" },
  { name: "Cold Brew", slug: "cold-brew", icon: "/icons/cold-brew.png" },
  { name: "Refreshers", slug: "refreshers", icon: "/icons/refreshers.png" },
  { name: "Milkshake", slug: "milkshake", icon: "/icons/milkshake.png" },
  { name: "Mokteyl", slug: "mokteyl", icon: "/icons/mocktail.png" },
  { name: "Kış Özel", slug: "winter", icon: "/icons/winter.png" },
];

const tag = (type: string) =>
  ({
    "coffee": "sicak-kahve",
    "iced": "soguk-kahve",
    "freddo": "freddo",
    "frozen": "frozen",
    "cold-brew": "cold-brew",
    "refresher": "refreshers",
    "milkshake": "milkshake",
    "mocktail": "mokteyl",
    "seasonal": "winter",
  })[type] ?? type;

export const products: Product[] = [
  ...hotCoffeeProducts.map((p, i) => ({
    ...p,
    id: 100 + i,
    category: "sicak-kahve",
    isRecommended: false,
  })),
  ...coffeeProducts.map((p, i) => ({
    ...p,
    id: 200 + i,
    category: "soguk-kahve",
    isRecommended: false,
  })),
  ...freddoProducts.map((p, i) => ({
    ...p,
    id: 300 + i,
    category: "freddo",
    isRecommended: i < 2,
  })),
  ...frozenProducts.map((p, i) => ({
    ...p,
    id: 400 + i,
    category: "frozen",
    isRecommended: false,
  })),
  ...coldBrewProducts.map((p, i) => ({
    ...p,
    id: 500 + i,
    category: "cold-brew",
    isRecommended: false,
  })),
  ...refreshers.map((p, i) => ({
    ...p,
    id: 600 + i,
    slug: p.name.toLowerCase().replace(/\s+/g, "-") + (p.size ? `-${p.size}` : ""),
    type: "refresher",
    category: "refreshers",
    isRecommended: false,
    allergens: p.allergens ?? [],
  })),
  ...milkshakeProducts.map((p, i) => ({
    ...p,
    id: 700 + i,
    category: "milkshake",
    isRecommended: false,
  })),
  ...mocktailProducts.map((p, i) => ({
    ...p,
    id: 800 + i,
    category: "mokteyl",
    isRecommended: i < 2,
  })),
  ...winterSeasonalProducts.map((p, i) => ({
    ...p,
    id: 900 + i,
    category: "winter",
    isRecommended: false,
  })),
];