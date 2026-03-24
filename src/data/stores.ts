export interface Store {
    id: number;
    slug: string;
    name: string;
    status: 'active' | 'soon';
    address?: string;
    phone?: string;
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
      slug: "arastapark",
      name: "Arastapark",
      status: "active",
      address: "Yahyakaptan, Arastapark AVM No:1, İzmit/Kocaeli",
      phone: "0262 311 11 11",
      hours: { weekdays: "08:00 - 22:00", weekend: "09:00 - 23:00" },
      mainImage: "/stores/arasta-main.jpg", 
      gallery: ["/stores/arasta-1.jpg", "/stores/arasta-2.jpg"]
    },
    {
      id: 2,
      slug: "carsi",
      name: "Çarşı",
      status: "active",
      address: "Ömerağa Mah. Hürriyet Cad. İzmit/Kocaeli",
      phone: "0262 322 22 22",
      mainImage: "/stores/carsi-main.jpg",
      gallery: []
    },
    { id: 3, slug: "yahyakaptan", name: "Yahyakaptan", status: "active", mainImage: "/stores/yahya-main.jpg", gallery: [] },
    { id: 4, slug: "degirmendere", name: "Değirmendere", status: "active", mainImage: "/stores/degirmen-main.jpg", gallery: [] },
    { id: 5, slug: "kosekoy", name: "Köseköy", status: "active", mainImage: "/stores/kosekoy-main.jpg", gallery: [] },
    // { id: 6, slug: "basiskele", name: "Başiskele", status: "soon", mainImage: "", gallery: [] },
    // { id: 7, slug: "golcuk", name: "Gölcük", status: "soon", mainImage: "", gallery: [] },
    // { id: 8, slug: "karamursel", name: "Karamürsel", status: "soon", mainImage: "", gallery: [] },
  ];