'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function WebDevPage() {
  const features = [
    {
      title: 'Full Website Development',
      desc: 'End-to-end website development including planning, wireframing, design, development, testing, and deployment. Perfect for businesses that need a complete, custom-built online presence.',
    },
    {
      title: 'UI/UX Design',
      desc: 'Modern, user-focused interface design crafted to improve user experience, engagement, and conversions.',
    },
    {
      title: 'Responsive Design',
      desc: 'Fully responsive layouts for mobile, tablet, and desktop devices, ensuring the best performance on every screen size.',
    },
    {
      title: 'SEO Optimization',
      desc: 'Technical SEO, metadata structuring, optimized code, and performance tuning to improve rankings and organic visibility on Google.',
    },
    {
      title: 'Performance Boosting',
      desc: 'Advanced optimization techniques: image compression, caching, minifying, lazy-loading, and Core Web Vitals improvements.',
    },
  ];

  return (
    <div className="bg-white">
      
      {/* 🔥 SEO Intro Section */}
      <section
        className="bg-soft-grey py-20"
        aria-label="Web development services by OrcaTech"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Web Development Services
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-orca-blue mx-auto rounded-full mb-8"
          ></motion.div>

          {/* 🔥 SEO Paragraph */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At OrcaTech, we build fast, secure, customizable, and SEO-optimized 
            websites designed to grow your business. Our team provides full-stack 
            development, responsive design, UI/UX, backend engineering, and 
            performance optimization tailored to your goals.
          </p>

          {/* INTERNAL LINKING */}
          <p className="mt-4 text-gray-600 text-sm">
            Looking for security? Check out our{' '}
            <Link href="/services/cybersecurity" className="text-orca-blue underline">
              Cybersecurity Services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 🔥 FEATURES SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What’s Included in Our Web Development Service
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
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 CTA SECTION */}
      <section className="py-16 bg-soft-grey text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Your Next Website?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Contact OrcaTech today for a free consultation and see how we can bring 
            your website or platform idea to life with clean code, secure architecture, 
            and modern UI/UX design.
          </p>

          <Button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Get a Free Consultation
          </Button>
        </div>
      </section>

      {/* 🔥 SCHEMA MARKUP FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Web Development Services',
            provider: {
              '@type': 'Organization',
              name: 'OrcaTech',
              url: 'https://orcatech.netlify.app',
            },
            description:
              'Professional web development service including responsive design, UI/UX, backend development, SEO optimization and performance tuning.',
            serviceType: 'Web Development',
            areaServed: ['Egypt', 'Middle East'],
          }),
        }}
      />
    </div>
  );
}