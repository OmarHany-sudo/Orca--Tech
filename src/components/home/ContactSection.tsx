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
    // Simulate API call
    console.log(data);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section id="contact" className="py-20 bg-soft-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 focus-within:shadow-lg focus-within:ring-2 focus-within:ring-orca-blue">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name *</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
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
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  placeholder="+20 103 063 4710"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  {...register('projectType', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orca-blue"
                  placeholder="Tell us about your project..."
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

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Email</h4>
                <a
                  href="mailto:orcatech.service@gmail.com"
                  className="text-orca-blue hover:underline"
                >
                  orcatech.service@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Phone</h4>
                <a href="tel:01030634710" className="text-orca-blue hover:underline">
                  01030634710
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Facebook</h4>
                <a
                  href="https://www.facebook.com/profile.php?id=61583719363965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orca-blue hover:underline"
                >
                  OrcaTech Page
                </a>
              </div>
            </div>
            <div className="mt-8 p-4 bg-orca-blue/10 rounded-lg border border-orca-blue/30">
              <p className="text-orca-blue text-sm">
                We respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}