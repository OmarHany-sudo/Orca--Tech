'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    tag: 'Web Development',
    desc: 'A high-performance responsive e-commerce web application with SEO optimization and secure checkout system.',
  },
  {
    title: 'Banking Security Audit',
    tag: 'Cybersecurity',
    desc: 'Full penetration testing, vulnerability assessment, and compliance auditing for a financial institution.',
  },
  {
    title: 'Inventory API',
    tag: 'Back-End Development',
    desc: 'Scalable REST API for inventory and warehouse automation with optimized database performance.',
  },
  {
    title: 'HR Management Tool',
    tag: 'Desktop Application',
    desc: 'Windows desktop system for HR tasks, employee management, and automated workflow processing.',
  },
  {
    title: 'Real Estate Portal',
    tag: 'Web Development',
    desc: 'Modern real estate listing platform with advanced filtering, property management, and SEO-focused architecture.',
  },
  {
    title: 'CMS Hardening Project',
    tag: 'Cybersecurity',
    desc: 'Full CMS security hardening, malware removal, and vulnerability patching for business clients.',
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-soft-grey"
      aria-label="OrcaTech recent projects in web development, cybersecurity, backend engineering, and desktop applications"
    >
      <div className="container mx-auto px-4">

        {/* 🔥 SEO-boosted Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Work & Project Highlights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Explore some of the professional web development, backend engineering,
            penetration testing, and desktop application projects delivered by OrcaTech.
            Each project demonstrates our commitment to building secure, scalable,
            and high-performance digital solutions.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black h-64 group"
              aria-label={project.title}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white pointer-events-none">
                <span className="text-light-blue text-sm">{project.tag}</span>
                <h3 className="text-xl font-bold">{project.title}</h3>

                {/* Hidden SEO description (Google loves this technique) */}
                <p className="hidden">
                  {project.desc}
                </p>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-orca-blue/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <motion.a
                  href="#"
                  aria-label={`View details of ${project.title}`}
                  className="flex items-center gap-2 text-white font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project <FiExternalLink />
                </motion.a>
              </motion.div>

              {/* Background hover zoom */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}