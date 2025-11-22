'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function CybersecurityPage() {
  const services = [
    {
      title: 'Vulnerability Assessment',
      desc: 'In-depth security scanning using industry standards to identify vulnerabilities across servers, web applications, and internal systems.',
    },
    {
      title: 'Malware Removal',
      desc: 'Complete detection, isolation, and removal of malware, ransomware, and malicious scripts from websites and servers.',
    },
    {
      title: 'WordPress Hardening',
      desc: 'Advanced WordPress protection including firewall setup, plugin auditing, brute-force protection, and real-time monitoring.',
    },
    {
      title: 'Penetration Testing',
      desc: 'Ethical hacking assessments that simulate real-world cyberattacks to evaluate your system’s resilience against threats.',
    },
    {
      title: 'Monitoring & Alerts',
      desc: '24/7 surveillance, intrusion detection, and instant alert systems to protect your business from active cyber threats.',
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* 🔥 HERO + SEO Intro */}
      <section
        className="py-20"
        aria-label="Cybersecurity services including penetration testing, vulnerability scanning, and malware removal"
      >
        <div className="container mx-auto px-4 text-center">
          
          {/* SEO Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Cybersecurity Services & Penetration Testing
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-light-blue mx-auto rounded-full mb-8"
          ></motion.div>

          {/* SEO paragraph */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            OrcaTech provides enterprise-grade cybersecurity services including 
            penetration testing, vulnerability assessment, incident response, malware 
            removal, and continuous monitoring. We help businesses stay protected from 
            evolving cyber threats with advanced security techniques.
          </p>

          {/* Internal Link */}
          <p className="text-gray-400 text-sm mt-4">
            Need a secure website? Check our{' '}
            <Link href="/services/web-development" className="text-light-blue underline">
              Web Development Services
            </Link>.
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES LIST */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Cybersecurity Solutions We Offer
          </h2>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-orca-blue/30 rounded-xl bg-gray-900/50"
                aria-label={service.title}
              >
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Security Score Visual */}
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

      {/* 🔥 CTA */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Secure Your Business Today</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Let our cybersecurity specialists test, protect, and harden your business 
            infrastructure with industry-leading techniques and real-world attack 
            simulations.
          </p>

          <Button
            variant="primary"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="bg-orca-blue hover:bg-orca-blue-darker"
          >
            Request a Security Audit
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
            name: 'Cybersecurity Services & Penetration Testing',
            provider: {
              '@type': 'Organization',
              name: 'OrcaTech',
              url: 'https://orcatech.netlify.app',
            },
            description:
              'Cybersecurity services including penetration testing, vulnerability scanning, malware removal, WordPress security hardening, and 24/7 monitoring.',
            serviceType: 'Cybersecurity',
            areaServed: ['Egypt', 'Middle East'],
            offers: {
              '@type': 'Offer',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'EGP',
                price: '0',
                description: 'Custom quotes available based on project requirements.',
              },
            },
          }),
        }}
      />
    </div>
  );
}