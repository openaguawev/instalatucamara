import { MLProduct } from "@/types/product";

export const products: MLProduct[] = [
  {
    id: "dvr-hikvision-8ch-1080p",
    name: "DVR 8 Canales Analógicos 1080p Hikvision DS-7208HGHI-M1",
    brand: "Hikvision",
    priceARS: 146000,
    priceUpdated: "2026-05-01",
    mlUrl: "https://articulo.mercadolibre.com.ar/MLA-123456-dvr", // placeholder
    category: "sistemas-dvr",
    commission: 0.15,
    rating: 4.7,
    reviewCount: 154,
    soldCount: "+5000 vendidos",
    isBestSeller: true,
    idealFor: "Sistemas CCTV de 4 a 8 cámaras para casas y comercios",
    pros: ["Alta confiabilidad de marca", "Compatible con cámaras 4 en 1", "Acceso remoto por app"],
    cons: ["Requiere configuración inicial técnica"],
    specs: { "Canales": "8", "Resolución": "1080p", "Compresión": "H.265+", "Almacenamiento": "Hasta 6TB HDD" },
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_667464-MLA71416576748_082023-F.webp", // placeholder ml image
    available: true,
  },
  {
    id: "baby-call-gadnic-camara",
    name: "Baby Call Cámara Gadnic Monitor Seguridad Bebés Visión Nocturna",
    brand: "Gadnic",
    priceARS: 73449,
    priceUpdated: "2026-05-01",
    mlUrl: "https://articulo.mercadolibre.com.ar/MLA-234567-camara", // placeholder
    category: "camaras-interiores",
    commission: 0.15,
    rating: 4.6,
    reviewCount: 89,
    soldCount: "+1000 vendidos",
    isBestSeller: false,
    idealFor: "Vigilancia de habitación de bebés o cuartos interiores",
    pros: ["Visión nocturna incluida", "Intercomunicador bidireccional", "Sin suscripción mensual"],
    cons: ["Rango de alcance limitado a WiFi del hogar"],
    specs: { "Conectividad": "WiFi 2.4GHz", "Visión nocturna": "Sí", "Audio": "Bidireccional" },
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_611801-MLA71416576748_082023-F.webp", // placeholder ml image
    available: true,
  },
  {
    id: "kit-camaras-gadnic-4ch",
    name: "Kit 4 Cámaras de Seguridad Gadnic + DVR",
    brand: "Gadnic",
    priceARS: 320000,
    priceUpdated: "2026-05-01",
    mlUrl: "https://articulo.mercadolibre.com.ar/MLA-345678-kit", // placeholder
    category: "kits-seguridad",
    commission: 0.15,
    rating: 4.5,
    reviewCount: 42,
    soldCount: "+500 vendidos",
    isBestSeller: true,
    idealFor: "Sistema completo para casa con jardín o comercio pequeño",
    pros: ["Todo incluido para instalación", "Sin abono mensual", "App de monitoreo gratis"],
    cons: ["Resolución 720p, no 1080p"],
    specs: { "Cámaras incluidas": "4", "DVR": "4 canales", "Almacenamiento": "64GB incluido" },
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_900000-MLA71416576748_082023-F.webp", // placeholder ml image
    available: true,
  }
];

export function getProductById(id: string): MLProduct | undefined {
  return products.find(p => p.id === id);
}
