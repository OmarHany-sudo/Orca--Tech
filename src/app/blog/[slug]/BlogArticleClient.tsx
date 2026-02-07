'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function BlogArticleClient({ article, slug }: any) {

  /* ================= TRACK VIEW ================= */
  useEffect(() => {
    fetch(`/netlify/functions/articles?track=view&slug=${slug}`);
  }, [slug]);

  const trackLead = () => {
    fetch(`/netlify/functions/articles?track=lead&slug=${slug}`);
  };

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
      { "@type": "ListItem", position: 3, name: article.title }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA */}
        <div className="bg-orca-blue text-white p-8 rounded-xl text-center my-16">
          <h3 className="text-2xl font-bold mb-3">
            Need a Professional Website or Secure System?
          </h3>
          <Link
            href="/#contact"
            onClick={trackLead}
            className="inline-block bg-white text-orca-blue px-6 py-3 rounded-lg font-semibold"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}