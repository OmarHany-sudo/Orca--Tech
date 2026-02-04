import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/lib/articles';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
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

export default function BlogArticle({ params }: any) {
  const article = getArticleBySlug(params.slug);

  if (!article) return notFound();

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { "@type": "Organization", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "OrcaTech",
      logo: {
        "@type": "ImageObject",
        url: "https://orcatech.online/og-image.png",
      },
    },
    keywords: article.keywords.join(", "),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orcatech.online" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://orcatech.online/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://orcatech.online/blog/${params.slug}` }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-orca-blue uppercase">
              {article.category}
            </span>
            <span className="text-sm text-gray-500">
              {article.readTime} min read
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-600 border-t border-b border-gray-200 py-4">
            <span>By {article.author}</span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>

        <>
          {/* Article Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />

          {/* Breadcrumb Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
        </>

        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></article>

        {/* Related Articles Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            More Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/blog" className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Back to Blog</h4>
              <p className="text-sm text-gray-600">Browse all articles and guides</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
