'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaLock, FaDatabase, FaDesktop } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development Services',
    desc: 'Responsive, SEO-optimized business websites built using modern technologies for speed, security, and usability.',
    icon: <FaCode className="text-3xl text-orca-blue" aria-hidden="true" />,
    href: '/services/web-development',
  },
  {
    title: 'Cybersecurity & Pentesting',
    desc: 'Professional penetration testing, vulnerability scanning, and full security hardening for websites and applications.',
    icon: <FaLock className="text-3xl text-orca-blue" aria-hidden="true" />,
    href: '/services/cybersecurity',
  },
  {
    title: 'Back-End Development',
    desc: 'Secure and scalable backend systems, database architecture, APIs, and optimized server-side logic.',
    icon: <FaDatabase className="text-3xl text-orca-blue" aria-hidden="true" />,
    href: '/services/backend',
  },
  {
    title: 'Desktop Application Development',
    desc: 'Custom Windows desktop apps built for internal tools, automation workflows, and business management systems.',
    icon: <FaDesktop className="text-3xl text-orca-blue" aria-hidden="true" />,
    href: '/services/desktop-apps',
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-20 bg-white"
      aria-label="OrcaTech professional web development, backend engineering, cybersecurity, and desktop application services"
    >
      <div className="container mx-auto px-4">

        {/* 🔥 SEO Heading + Paragraph */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Web Development & Cybersecurity Services
          </h2>

          <p className="text-gray-700 leading-relaxed">
            OrcaTech provides full-stack web development, backend systems, penetration
            testing, vulnerability scanning, and tailored desktop applications. Our
            solutions help businesses create secure, fast, and reliable digital
            platforms designed for long-term success.
          </p>
        </div>

        {/* 🔥 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group"
              aria-label={service.title}
            >
              <Link
                href={service.href}
                className="block bg-soft-grey p-8 rounded-xl h-full border border-transparent group-hover:border-orca-blue transition-colors duration-300"
              >
                <div className="mb-4 flex items-center justify-start">
                  {service.icon}
                </div>

                {/* SEO Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* SEO-rich description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.desc}
                </p>

                {/* Better anchor for SEO */}
                <span className="text-orca-blue font-medium group-hover:underline">
                  Learn more about {service.title.split(' ')[0].toLowerCase()} →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}