'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getArticlesByLanguage } from '@/lib/articles';

export default function BlogPage() {
  const articles = getArticlesByLanguage('en');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            OrcaTech Blog
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tutorials, insights, and guides on cybersecurity, web development,
            backend systems, and business strategy.
          </p>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-soft-grey p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-orca-blue uppercase">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">
                  {article.readTime} min read
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {article.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {article.description}
              </p>

              {/* CTA row */}
              <div className="flex items-center justify-between">
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-orca-blue font-medium hover:underline"
                >
                  Read More →
                </Link>

                <Link
                  href="/#contact"
                  className="text-xs text-gray-500 hover:text-orca-blue"
                >
                  Free Consultation
                </Link>
              </div>

              <div className="mt-3 text-xs text-gray-400">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 BIG MID-PAGE CTA */}
        <div className="bg-orca-blue text-white p-8 rounded-xl text-center my-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">
            Need a Website or Secure System for Your Business?
          </h3>
          <p className="mb-6 text-sm opacity-90">
            Talk to OrcaTech today and get a free consultation with no obligation.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-orca-blue font-semibold px-6 py-3 rounded-lg"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* SEO Schema (زي ما هو – شغال صح) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'OrcaTech Blog',
              description:
                'Tutorials, insights, and guides on cybersecurity, web development, backend systems, and business strategy.',
              url: 'https://orcatech.online/blog',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: articles.map((article, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'BlogPosting',
                    headline: article.title,
                    description: article.description,
                    url: `https://orcatech.online/blog/${article.slug}`,
                    datePublished: article.publishedAt,
                    author: {
                      '@type': 'Organization',
                      name: 'OrcaTech',
                    },
                  },
                })),
              },
            }),
          }}
        />

      </div>
    </section>
  );
}