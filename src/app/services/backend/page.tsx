'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function BackendPage() {
  const features = [
    {
      title: 'API Development',
      desc: 'Robust and secure RESTful and GraphQL APIs designed for scalability, multi-platform integration, and high-performance data delivery.',
    },
    {
      title: 'Authentication & Authorization',
      desc: 'Advanced user authentication with JWT, OAuth 2.0, and full role-based access control (RBAC) for enterprise-grade security.',
    },
    {
      title: 'Database Architecture & Optimization',
      desc: 'Well-structured relational and NoSQL database designs for faster queries, improved indexing, and optimized storage.',
    },
    {
      title: 'Scalability & High Availability',
      desc: 'Server-side systems engineered using microservices, caching, replication, and load balancing for long-term performance and reliability.',
    },
  ];

  return (
    <div className="bg-white">

      {/* 🔥 HERO + SEO Intro */}
      <section
        className="bg-soft-grey py-20"
        aria-label="Backend development services by OrcaTech"
      >
        <div className="container mx-auto px-4 text-center">
          
          {/* SEO H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Back-End Development Services
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-orca-blue mx-auto rounded-full mb-8"
          ></motion.div>

          {/* SEO paragraph */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            OrcaTech provides secure, scalable, and maintainable backend systems designed 
            for modern businesses. From database architecture to API development, 
            authentication, caching, microservices, and performance optimization — 
            we build strong foundations for your applications.
          </p>

          {/* INTERNAL LINK */}
          <p className="text-gray-600 text-sm mt-4">
            Need frontend too? Check our{' '}
            <a href="/services/web-development" className="text-orca-blue underline">
              Web Development Services
            </a>.
          </p>
        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Deliver in Back-End Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-soft-grey p-6 rounded-xl border border-gray-100"
                aria-label={feature.title}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-16 bg-soft-grey text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a Custom Back-End Solution?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Whether you're building a scalable application, internal system, or business 
            API — our backend engineers deliver secure and maintainable solutions built 
            for growth.
          </p>

          <Button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Discuss Your Project
          </Button>
        </div>
      </section>

      {/* 🔥 SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Back-End Development Services',
            provider: {
              '@type': 'Organization',
              name: 'OrcaTech',
              url: 'https://orcatech.netlify.app',
            },
            description:
              'Backend development services including API development, authentication, database architecture, caching, and scalability engineering.',
            serviceType: 'Backend Development',
            areaServed: ['Egypt', 'Middle East'],
          }),
        }}
      />
    </div>
  );
}