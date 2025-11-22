'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
};

const projectTypes = [
  'Website Development',
  'Cybersecurity Audit',
  'Back-End System',
  'Desktop Application',
  'Other',
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    console.log(data); // Simulating an API request
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-soft-grey"
      aria-label="Contact OrcaTech for web development and cybersecurity services"
    >
      <div className="container mx-auto px-4">

        {/* 🔥 SEO Heading + intro paragraph */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact OrcaTech – Web Development & Cybersecurity Experts
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Have a project in mind? Whether you need a website, backend system,
            penetration testing, or cybersecurity services, our team is ready
            to help you. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPoint',
              telephone: '+201030634710',
              contactType: 'customer service',
              email: 'orcatech.service@gmail.com',
              availableLanguage: ['English', 'Arabic'],
              areaServed: 'EG',
            }),
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* 🔥 CONTACT FORM */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 focus-within:shadow-lg focus-within:ring-2 focus-within:ring-orca-blue">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  placeholder="John Doe"
                  aria-label="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  placeholder="you@example.com"
                  aria-label="Your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  placeholder="+20 103 063 4710"
                  aria-label="Your phone number"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-gray-700 mb-2">Project Type *</label>
                <select
                  {...register('projectType', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  aria-label="Choose your project type"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 mb-2">Project Details *</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  placeholder="Tell us about your project, goals, or challenges..."
                  aria-label="Describe your project"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full py-4 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* 🔥 CONTACT INFO SECTION */}
          <address className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 not-italic">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:orcatech.service@gmail.com"
                  className="text-orca-blue hover:underline"
                >
                  orcatech.service@gmail.com
                </a>
              </div>

              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+201030634710"
                  className="text-orca-blue hover:underline"
                >
                  +20 103 063 4710
                </a>
              </div>

              <div>
                <h4 className="font-medium">Facebook</h4>
                <a
                  href="https://www.facebook.com/profile.php?id=61583719363965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orca-blue hover:underline"
                >
                  OrcaTech Facebook Page
                </a>
              </div>
            </div>

            <div className="mt-8 p-4 bg-orca-blue/10 rounded-lg border border-orca-blue/30">
              <p className="text-orca-blue text-sm">
                We respond to all inquiries within 24 hours — guaranteed.
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              By contacting us, you agree to our privacy and data usage policy.
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}