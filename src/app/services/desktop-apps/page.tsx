'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function DesktopAppsPage() {
  const features = [
    {
      title: 'Internal Business Tools',
      desc: 'Custom desktop applications to streamline operations and boost productivity.',
    },
    {
      title: 'Process Automation',
      desc: 'Eliminate repetitive tasks with intelligent automation scripts and UIs.',
    },
    {
      title: 'Secure Data Handling',
      desc: 'Applications designed with data privacy and encryption at their core.',
    },
    {
      title: 'Cross-Platform Support',
      desc: 'Native or Electron-based apps for Windows, macOS, and Linux.',
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
            Desktop Applications
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-orca-blue mx-auto rounded-full mb-8"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, secure, and user-friendly desktop software for your team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
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
            Build a tool your team will love
          </h2>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}