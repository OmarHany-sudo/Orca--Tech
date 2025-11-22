'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 🔥 SEO-Rich Testimonials
const testimonials = [
  {
    name: 'Ahmed Mahmoud',
    role: 'CEO, TechStart',
    content:
      'OrcaTech delivered our website ahead of schedule with flawless security integration. Highly recommended for web development and cybersecurity work.',
  },
  {
    name: 'Layla Hassan',
    role: 'CTO, FinSecure',
    content:
      'Their cybersecurity audit uncovered critical vulnerabilities we had no idea existed. One of the most professional penetration testing teams we worked with.',
  },
  {
    name: 'Karim Nabil',
    role: 'Founder, ShopEase',
    content:
      'The performance boost they gave our e-commerce site increased conversions by 40%. Fantastic frontend and backend development quality.',
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

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 bg-white"
      aria-label="Client reviews for OrcaTech web development and cybersecurity services"
    >
      <div className="container mx-auto px-4">
        
        {/* 🔥 SEO HEADING + PARAGRAPH */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About OrcaTech
          </h2>

          <p className="text-gray-700 leading-relaxed">
            OrcaTech is trusted by startups, enterprises, and tech companies for 
            secure, high-performance web development and cybersecurity services. 
            Here's what our clients say about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">

          {/* 🔥 SCHEMA MARKUP (Google Review Boost) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Review',
                itemReviewed: {
                  '@type': 'Organization',
                  name: 'OrcaTech',
                },
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5',
                },
                author: {
                  '@type': 'Person',
                  name: current.name,
                },
                reviewBody: current.content,
              }),
            }}
          />

          {/* 🔥 Animated Review */}
          <AnimatePresence mode="wait">
            <motion.article
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-soft-grey p-8 rounded-xl shadow-sm border-l-4 border-orca-blue"
              aria-label={`Testimonial from ${current.name}`}
            >
              <p className="text-gray-700 text-lg italic mb-6">
                "{current.content}"
              </p>

              <div>
                <p className="font-bold text-gray-900">{current.name}</p>
                <p className="text-gray-600">{current.role}</p>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* 🔘 Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-orca-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🔥 Optional SEO CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="text-orca-blue font-medium underline"
          >
            Contact us to start your project →
          </a>
        </div>
      </div>
    </section>
  );
}