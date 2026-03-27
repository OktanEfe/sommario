export interface Store {
  id: number;
  slug: string;
  name: string;
  status: "active" | "soon";
  address?: string;
  phone?: string;
  openingHours: {
    open: string;
    close: string;
  };
  hours?: {
    weekdays: string;
    weekend: string;
  };
  mainImage: string;
  gallery: string[];
}

export const stores: Store[] = [
  {
    id: 1,
    slug: "kent-meydani",
    name: "Kent Meydanı",
    status: "active",
    address: "Karabaş, Rauf Orbay Sk. No: 11, 41040 İzmit/Kocaeli",
    phone: "0533 415 2925",
    openingHours: {
      open: "09:00",
      close: "00:00",
    },
    mainImage: "/stores/kent-meydani/main.webp",
    gallery: [],
  },
  {
    id: 2,
    slug: "kaptan-subesi",
    name: "Kaptan Şubesi",
    status: "active",
    address: "Alikahya Fatih, Akarca Cd. No: 14, 41310 İzmit/Kocaeli",
    phone: "0533 415 2925",
    openingHours: {
      open: "08:00",
      close: "00:00",
    },
    mainImage: "/stores/kaptan-subesi/main.webp",
    gallery: [],
  },
  {
    id: 3,
    slug: "arasta",
    name: "Arasta",
    status: "active",
    address:
      "Akasyalar Caddesi, Yahyakaptan, Arastapark AVM No: 24, 41100 İzmit/Kocaeli",
    phone: "0533 415 2925",
    openingHours: {
      open: "09:00",
      close: "00:30",
    },
    mainImage: "/stores/arasta/main.webp",
    gallery: [],
  },
  {
    id: 4,
    slug: "degirmendere",
    name: "Değirmendere",
    status: "active",
    address:
      "Değirmendere Merkez, Prof. Muammer Aksoy Cd., 41000 Gölcük/Kocaeli",
    phone: "0530 135 7470",
    openingHours: {
      open: "08:00",
      close: "00:00",
    },
    mainImage: "/stores/degirmendere/main.webp",
    gallery: [],
  },
  {
    id: 5,
    slug: "kosekoy",
    name: "Köseköy",
    status: "soon",
    address: "Dumlupınar, Atlas Sk. No: 102, 41250 Kartepe/Kocaeli",
    phone: "",
    openingHours: {
      open: "",
      close: "",
    },
    mainImage: "/stores/kosekoy/main.webp",
    gallery: [],
  },
];