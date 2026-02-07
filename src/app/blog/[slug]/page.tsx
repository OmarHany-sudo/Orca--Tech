import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/lib/articles';
import type { Metadata } from 'next';
import BlogArticleClient from './BlogArticleClient';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default function BlogArticlePage({ params }: any) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <BlogArticleClient
      article={article}
      slug={params.slug}
    />
  );
}