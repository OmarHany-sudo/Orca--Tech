'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function CybersecurityPage() {
  const services = [
    {
      title: 'Vulnerability Assessment',
      desc: 'Comprehensive scanning to identify security weaknesses before attackers do.',
    },
    {
      title: 'Malware Removal',
      desc: 'Detection and elimination of malicious software from your systems.',
    },
    {
      title: 'WordPress Hardening',
      desc: 'Secure your WordPress site with advanced configuration and monitoring.',
    },
    {
      title: 'Penetration Testing',
      desc: 'Ethical hacking to test your defenses under real-world attack scenarios.',
    },
    {
      title: 'Monitoring & Alerts',
      desc: '24/7 surveillance with instant notifications of suspicious activity.',
    },
  ];

  return (
    <div className="bg-black text-white">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Cybersecurity
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-light-blue mx-auto rounded-full mb-8"
          ></motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proactive protection against evolving digital threats.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-orca-blue/30 rounded-xl bg-gray-900/50"
              >
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Scan Visual */}
      <section className="py-16 flex justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full border-4 border-orca-blue animate-pulse-glow"></div>
          <div className="absolute inset-4 rounded-full border-4 border-light-blue animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-light-blue">98%</div>
              <div className="text-gray-300">Security Score</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Secure your business today</h2>
          <Button
            variant="primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orca-blue hover:bg-orca-blue-darker"
          >
            Request a Security Audit
          </Button>
        </div>
      </section>
    </div>
  );
}