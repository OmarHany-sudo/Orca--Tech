import React from 'react';
import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Product, WHATSAPP_NUMBER } from '@/lib/products';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const message = `Hello, I am interested in the ${product.name} (${product.category} - ${product.pricingType}) from OrcaTech.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="h-full flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold px-2 py-1 bg-orca-blue/10 text-orca-blue rounded-full">
            {product.category}
          </span>
          <span className="text-xs font-medium text-gray-500">
            {product.pricingType}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {product.description}
        </p>
      </div>
      <Button 
        variant="primary" 
        className="w-full flex items-center justify-center gap-2"
        onClick={() => window.open(whatsappUrl, '_blank')}
      >
        <FaWhatsapp className="text-xl" />
        Contact via WhatsApp
      </Button>
    </Card>
  );
}
