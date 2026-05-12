import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { ProductCard } from '@/components/ui/ProductCard';
import { getProductById } from '@/data/products';
import type { Article, FAQPage, WithContext } from 'schema-dts';
import React from "react";
import remarkGfm from 'remark-gfm';

// Configuración de componentes personalizados para MDX
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-6 text-text leading-tight" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-text" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-text" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-lg text-text-muted mb-6 leading-relaxed" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-6 mb-6 space-y-2 text-text-muted text-lg" {...props} />,
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-bold text-text" {...props} />,
  ProductCard: (props: { id: string, position?: number, articleSlug?: string }) => {
    const product = getProductById(props.id);
    if (!product) return null;
    return <div className="my-8"><ProductCard product={product} variant="card" position={props.position} articleSlug={props.articleSlug} /></div>;
  },
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Artículo no encontrado | InstalaTuCámara',
    };
  }

  return {
    title: `${article.frontmatter.title} | InstalaTuCámara`,
    description: article.frontmatter.description,
    keywords: article.frontmatter.keywords,
    alternates: {
      canonical: `https://instalatucamara.com.ar/blog/${params.slug}`,
    },
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      url: `https://instalatucamara.com.ar/blog/${params.slug}`,
      siteName: 'InstalaTuCámara',
      locale: 'es_AR',
      type: 'article',
      publishedTime: article.frontmatter.publishedAt,
      modifiedTime: article.frontmatter.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.frontmatter.title,
      description: article.frontmatter.description,
    },
    robots: article.frontmatter.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;

  const breadcrumbs = [
    { label: 'Blog', href: '/blog' },
    { label: frontmatter.title, href: `/blog/${params.slug}` },
  ];

  const articleSchema: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    author: [{ '@type': 'Organization', name: 'InstalaTuCámara' }],
    publisher: {
      '@type': 'Organization',
      name: 'InstalaTuCámara',
      logo: { '@type': 'ImageObject', url: 'https://instalatucamara.com.ar/logo.png' }
    },
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt,
  };

  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: frontmatter.faqs?.map((faq: { q: string; a: string }) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })) ?? [
      {
        '@type': 'Question',
        name: '¿Se puede instalar una cámara exterior sin electricista?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Totalmente. Las cámaras WiFi solo requieren hacer un par de agujeros con el taladro y enchufarlas a un toma común. Los sistemas DVR traen cables pre-armados (cable siamés) que llevan video y energía en un solo cable.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto almacenamiento necesito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Una tarjeta SD de 64GB en una cámara WiFi suele guardar entre 3 y 5 días de grabación continua. Un DVR con un disco de 1TB graba aproximadamente 15 días continuos de 4 cámaras.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Funcionan las cámaras WiFi con lluvia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, siempre y cuando estén certificadas como IP66 o superior. Lo que sí puede afectar la lluvia intensa es la señal WiFi si el router está muy lejos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué diferencia hay entre cámara WiFi y CCTV/DVR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La cámara WiFi es independiente: graba en su propia memoria y se conecta sin cables de video. El CCTV/DVR usa un grabador central conectado por cables. El WiFi es más fácil de instalar; el DVR es más seguro y estable a largo plazo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuántas cámaras necesito para cubrir el frente de mi casa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para un frente estándar de 8.66 metros en CABA o GBA, dos cámaras cruzadas en las esquinas superiores es lo ideal. Si es solo para ver la puerta, una sola enfocando al acceso basta.',
        },
      },
    ],
  };

  return (
    <article className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Article Header */}
      <header className="bg-primary pt-12 pb-24 px-4 text-surface">
        <div className="container mx-auto max-w-3xl">
          <BreadcrumbNav items={breadcrumbs} />
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            {frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-surface/80">
            <span>Actualizado: {new Date(frontmatter.updatedAt).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{frontmatter.readingTime} min de lectura</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto max-w-3xl px-4 -mt-16 mb-20 relative z-10">
        <div className="bg-surface rounded-2xl p-6 md:p-12 shadow-sm border border-border">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
            <MDXRemote 
              source={content} 
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              components={{
                ...components,
                ProductCard: (props: { id: string, position?: number }) => <components.ProductCard {...props} articleSlug={params.slug} />
              }} 
            />
          </div>
        </div>
      </main>
    </article>
  );
}
