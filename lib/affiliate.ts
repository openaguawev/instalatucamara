export function generateAffiliateUrl(mlUrl: string, articleSlug: string, position: number = 1): string {
  const url = new URL(mlUrl);
  url.searchParams.set("utm_source", "instalatucamara.com.ar");
  url.searchParams.set("utm_medium", "afiliado");
  url.searchParams.set("utm_campaign", articleSlug);
  url.searchParams.set("utm_content", `product-card-${position}`);
  return url.toString();
}
