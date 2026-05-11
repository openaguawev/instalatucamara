export interface MLProduct {
  id: string
  name: string
  brand: string
  priceARS: number
  priceUpdated: string           // ISO date
  mlUrl: string                  // URL original de ML
  category: string
  subcategory?: string
  rating: number                 // 1–5
  reviewCount: number
  soldCount: string              // "+1000 vendidos"
  commission: number             // 0.15 = 15%
  isBestSeller: boolean
  pros: string[]
  cons: string[]
  specs: Record<string, string>  // { "Resolución": "1080p", "Visión nocturna": "30m" }
  image: string
  idealFor: string               // "Para casas medianas con jardín"
  available: boolean
}
