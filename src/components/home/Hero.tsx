'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-orca-blue to-black overflow-hidden"
      aria-label="OrcaTech Web Development and Cybersecurity Services"
    >
      <div className="absolute inset-0 circuit-bg opacity-10"></div>

      {/* OrcaTech Visual Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 border-4 border-orca-blue rounded-full opacity-10 transform -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 border-4 border-light-blue rounded-full opacity-10 transform -translate-y-1/2 -translate-x-4"></div>

      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">

        {/* LEFT SIDE — SEO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-12 md:mb-0 z-10"
        >

          {/* 🔥 H2 SEO — مهم جدًا */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
  OrcaTech – Professional Web Development & Cybersecurity Solutions
</h1>

          {/* 🔥 SEO PARAGRAPH */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            OrcaTech builds fast, secure, SEO-optimized business websites with modern
            frontend and backend systems. Our cybersecurity team provides vulnerability
            scanning, penetration testing, and full website hardening to protect your
            digital presence from threats.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="primary"
                aria-label="Request a website or cybersecurity service quote"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Get a Free Quote
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="outline"
                aria-label="View our web development and cybersecurity services"
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Animated Code Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-1/2 flex justify-center relative z-10"
        >
          <div className="relative" aria-label="OrcaTech code illustration">
            <div className="w-80 h-60 bg-gray-800 rounded-xl shadow-2xl overflow-hidden border-2 border-orca-blue relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orca-blue/10 to-transparent"></div>

              {/* Code UI */}
              <div className="p-4 text-orca-blue font-mono text-xs space-y-1">
                <div className="flex">
                  <span className="text-light-blue">const</span> solution = {'{'}
                </div>
                <div className="pl-4">web: true,</div>
                <div className="pl-4">security: true,</div>
                <div className="pl-4">performance: 'optimized'</div>
                <div>{'};'}</div>
                <div className="text-light-blue mt-2">
                  console.log('OrcaTech');
                </div>
              </div>
            </div>

            {/* Light Glow Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-orca-blue/20 blur-xl"
            ></motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}