'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function DesktopAppsPage() {
  const features = [
    {
      title: 'Internal Business Tools',
      desc: 'Custom desktop software designed to automate workflows, optimize time, and streamline internal operations to increase productivity.',
    },
    {
      title: 'Process Automation',
      desc: 'Smart automation solutions that eliminate manual tasks using custom interfaces, background services, and automated triggers.',
    },
    {
      title: 'Secure Data Handling',
      desc: 'Enterprise-level applications built with encryption, data protection, and compliance-oriented architecture.',
    },
    {
      title: 'Cross-Platform Support',
      desc: 'Native or Electron-based desktop applications that run smoothly on Windows, macOS, and Linux.',
    },
  ];

  return (
    <div className="bg-white">

      {/* 🔥 HERO + SEO INTRO */}
      <section
        className="bg-soft-grey py-20"
        aria-label="Desktop application development services by OrcaTech"
      >
        <div className="container mx-auto px-4 text-center">

          {/* SEO H1 */}
          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
>
  OrcaTech Desktop Application Development
</motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-orca-blue mx-auto rounded-full mb-8"
          ></motion.div>

          {/* SEO Introduction */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            OrcaTech builds powerful, secure, and efficient desktop applications tailored 
            to business needs. We specialize in automation tools, cross-platform 
            applications, data-driven software, and internal systems designed to boost 
            performance and reliability.
          </p>

          {/* Internal Link */}
          <p className="text-gray-600 text-sm mt-4">
            Looking for backend integration? Check our{' '}
            <a href="/services/backend" className="text-orca-blue underline">
              Back-End Development Services
            </a>.
          </p>

        </div>
      </section>

      {/* 🔥 FEATURES LIST */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Build for Your Business
          </h2>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
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

      {/* 🔥 CTA */}
      <section className="py-16 bg-soft-grey text-center">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Build a Desktop App Your Team Will Love
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            From business automation tools to advanced enterprise systems, our desktop 
            applications improve performance, security, and workflow efficiency.
          </p>

          <Button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Start Your Project
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
            name: 'Desktop Application Development',
            provider: {
              '@type': 'Organization',
              name: 'OrcaTech',
              url: 'https://orcatech.netlify.app',
            },
            description:
              'Desktop development services including business tools, automation software, secure data handling, cross-platform applications, and enterprise systems.',
            serviceType: 'Desktop Applications',
            areaServed: ['Egypt', 'Middle East'],
          }),
        }}
      />
    </div>
  );
}