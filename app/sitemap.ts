import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://instalatucamara.com.ar';
  
  const articles = await getAllArticles();
  
  const blogUrls = articles
    .filter(article => !article.frontmatter.noindex)
    .map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.frontmatter.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  const staticUrls = [
    '',
    '/camaras',
    '/marcas',
    '/comparar',
    '/solucionar',
    '/guias',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  return [...staticUrls, ...blogUrls];
}
