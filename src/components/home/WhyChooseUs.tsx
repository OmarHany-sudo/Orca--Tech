'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaShieldAlt, FaServer, FaPaintBrush } from 'react-icons/fa';

const features = [
  {
    title: 'Fast, SEO-Optimized Websites',
    desc: 'Built for speed and search visibility.',
    icon: <FaSearch className="text-2xl text-orca-blue" />,
  },
  {
    title: 'Strong Security & Vulnerability Testing',
    desc: 'Proactive defense against threats.',
    icon: <FaShieldAlt className="text-2xl text-orca-blue" />,
  },
  {
    title: 'Custom Back-End Systems',
    desc: 'Scalable, reliable server logic.',
    icon: <FaServer className="text-2xl text-orca-blue" />,
  },
  {
    title: 'Professional UI/UX Experience',
    desc: 'Intuitive and beautiful interfaces.',
    icon: <FaPaintBrush className="text-2xl text-orca-blue" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-soft-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose OrcaTech?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                borderColor: '#3FA9F5',
              }}
              className="bg-white p-6 rounded-xl border border-gray-100 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}