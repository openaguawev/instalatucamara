export interface ArticleFrontmatter {
  title: string
  description: string
  slug: string
  publishedAt: string           // ISO date
  updatedAt: string             // ISO date
  category: string
  keywords: string[]
  featuredProduct?: string      // id del producto destacado
  relatedArticles: string[]     // slugs
  wordCount: number
  readingTime: number           // minutos
  noindex?: boolean
  faqs?: { q: string; a: string }[] // optional FAQ pairs for FAQPage schema
}
