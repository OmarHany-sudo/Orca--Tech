'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaLock, FaDatabase, FaDesktop } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    desc: 'Modern, responsive websites.',
    icon: <FaCode className="text-3xl text-orca-blue" />,
    href: '/services/web-development',
  },
  {
    title: 'Cybersecurity',
    desc: 'Protect your digital assets.',
    icon: <FaLock className="text-3xl text-orca-blue" />,
    href: '/services/cybersecurity',
  },
  {
    title: 'Back-End Development',
    desc: 'Robust server infrastructure.',
    icon: <FaDatabase className="text-3xl text-orca-blue" />,
    href: '/services/backend',
  },
  {
    title: 'Desktop Applications',
    desc: 'Powerful internal tools.',
    icon: <FaDesktop className="text-3xl text-orca-blue" />,
    href: '/services/desktop-apps',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link
                href={service.href}
                className="block bg-soft-grey p-8 rounded-xl h-full border border-transparent group-hover:border-orca-blue transition-colors duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <span className="text-orca-blue font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}