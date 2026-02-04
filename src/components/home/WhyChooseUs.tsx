'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaShieldAlt, FaServer, FaPaintBrush } from 'react-icons/fa';

const features = [
  {
    title: 'Fast, SEO-Optimized Websites',
    desc: 'High-performance websites optimized for loading speed, search engine visibility, and business conversion.',
    icon: <FaSearch className="text-2xl text-orca-blue" aria-hidden="true" />,
    href: '/services/web-development',
  },
  {
    title: 'Strong Security & Vulnerability Testing',
    desc: 'Advanced penetration testing, vulnerability assessments, and full website security hardening.',
    icon: <FaShieldAlt className="text-2xl text-orca-blue" aria-hidden="true" />,
    href: '/services/cybersecurity',
  },
  {
    title: 'Custom Back-End Systems',
    desc: 'Scalable, secure, and reliable backend development for business applications and high-traffic platforms.',
    icon: <FaServer className="text-2xl text-orca-blue" aria-hidden="true" />,
    href: '/services/backend',
  },
  {
    title: 'Professional UI/UX Experience',
    desc: 'Modern user interfaces designed for smooth interaction, accessibility, and enhanced business engagement.',
    icon: <FaPaintBrush className="text-2xl text-orca-blue" aria-hidden="true" />,
    href: '/services/web-development',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-20 bg-soft-grey"
      aria-label="Why clients choose OrcaTech for web development and cybersecurity services"
    >
      <div className="container mx-auto px-4">
        {/* 🔥 SEO-Optimized Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose OrcaTech for Web Development & Cybersecurity?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            OrcaTech delivers high-quality web development, backend engineering,
            and advanced cybersecurity testing. Our solutions focus on speed,
            stability, secure coding, and long-term business growth.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                borderColor: '#3FA9F5',
              }}
              className="bg-white p-6 rounded-xl border border-gray-100 transition-all duration-300"
              aria-label={feature.title}
            >
              <div className="mb-4 flex items-center justify-start">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

              {/* Small SEO internal link */}
              <a
                href={feature.href}
                className="text-orca-blue underline text-sm mt-3 inline-block"
              >
                Learn more →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}