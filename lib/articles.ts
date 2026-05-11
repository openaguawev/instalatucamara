import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleFrontmatter } from '@/types/article';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export async function getArticleBySlug(slug: string) {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontmatter: data as ArticleFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllArticles() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const slugs = fs.readdirSync(articlesDirectory);
  const articles = await Promise.all(
    slugs
      .filter((slug) => slug.endsWith('.mdx'))
      .map(async (slug) => {
        const article = await getArticleBySlug(slug);
        return article;
      })
  );

  return articles
    .filter((article): article is NonNullable<typeof article> => article !== null)
    .sort((a, b) => 
      new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime()
    );
}

export async function getRelatedArticles(slugs: string[]) {
  const articles = await getAllArticles();
  return articles.filter(article => slugs.includes(article.slug));
}
