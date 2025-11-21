'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  { title: 'E-Commerce Platform', tag: 'Web Development' },
  { title: 'Banking Security Audit', tag: 'Cybersecurity' },
  { title: 'Inventory API', tag: 'Back-End' },
  { title: 'HR Management Tool', tag: 'Desktop App' },
  { title: 'Real Estate Portal', tag: 'Web Development' },
  { title: 'CMS Hardening', tag: 'Cybersecurity' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-soft-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black h-64"
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-light-blue text-sm">{project.tag}</span>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <motion.div
                className="absolute inset-0 bg-orca-blue/60 flex items-center justify-center opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="flex items-center gap-2 text-white font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project <FiExternalLink />
                </motion.button>
              </motion.div>
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}