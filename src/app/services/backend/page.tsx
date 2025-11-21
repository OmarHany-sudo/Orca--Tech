'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function BackendPage() {
  const features = [
    {
      title: 'API Development',
      desc: 'Robust RESTful or GraphQL APIs designed for scalability and integration.',
    },
    {
      title: 'Authentication & Authorization',
      desc: 'Secure user management with JWT, OAuth, and role-based access control.',
    },
    {
      title: 'Database Design',
      desc: 'Optimized relational or NoSQL schemas for performance and data integrity.',
    },
    {
      title: 'Scalability & Reliability',
      desc: 'Systems built to handle growth with microservices, caching, and load balancing.',
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
            Back-End Development
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-orca-blue mx-auto rounded-full mb-8"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, maintainable, and secure server-side systems.
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
            Need a custom back-end solution?
          </h2>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}