'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Ahmed Mahmoud',
    role: 'CEO, TechStart',
    content:
      'OrcaTech delivered our website ahead of schedule with flawless security integration. Highly recommended!',
  },
  {
    name: 'Layla Hassan',
    role: 'CTO, FinSecure',
    content:
      'Their cybersecurity audit uncovered critical vulnerabilities we had no idea existed. Saved us from disaster.',
  },
  {
    name: 'Karim Nabil',
    role: 'Founder, ShopEase',
    content:
      'The performance boost they gave our e-commerce site increased conversions by 40%. Incredible work.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-soft-grey p-8 rounded-xl shadow-sm border-l-4 border-orca-blue"
            >
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <p className="font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-orca-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}