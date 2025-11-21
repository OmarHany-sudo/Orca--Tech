'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function WebDevPage() {
  const features = [
    {
      title: 'Full Website Development',
      desc: 'From concept to launch, we build complete, custom websites tailored to your brand and goals.',
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centered design that enhances engagement and conversion through intuitive interfaces.',
    },
    {
      title: 'Responsive Design',
      desc: 'Flawless experience on every device — mobile, tablet, and desktop.',
    },
    {
      title: 'SEO Optimization',
      desc: 'Built-in SEO best practices to improve visibility and organic traffic.',
    },
    {
      title: 'Performance Boosting',
      desc: 'Optimized assets, clean code, and caching strategies for lightning-fast load times.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-soft-grey py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Web Development
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-orca-blue mx-auto rounded-full mb-8"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, secure, and high-performing websites built to drive your business forward.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-soft-grey p-6 rounded-xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-grey text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to build your website?
          </h2>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}