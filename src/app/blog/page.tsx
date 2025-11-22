'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Top 10 Cybersecurity Tips to Protect Your Website',
    slug: 'website-cybersecurity-tips',
    desc: 'Learn essential security practices used by cybersecurity experts to keep websites safe from attacks.',
  },
  {
    title: 'How Hackers Attack Websites (Explained Simply)',
    slug: 'how-hackers-attack-websites',
    desc: 'A simplified guide explaining real-world hacking techniques and how to defend against them.',
  },
  {
    title: 'Why Backend Architecture Matters for Your Business',
    slug: 'importance-of-backend',
    desc: 'Discover how backend systems impact performance, scalability, and user experience.',
  },
];

export default function BlogPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            OrcaTech Blog
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tutorials, insights, and guides on cybersecurity, web development, and backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-soft-grey p-6 rounded-xl border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.desc}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-orca-blue font-medium underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}