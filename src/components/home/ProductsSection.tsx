import React from 'react';

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-soft-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <div className="w-20 h-1.5 bg-orca-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality digital solutions designed to empower your business and streamline your operations.
          </p>
        </div>

        <div className="text-center text-gray-500 text-lg">
          Products will be available soon.
        </div>
      </div>
    </section>
  );
}
