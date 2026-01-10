export type Category = 
  | "Mobile Application" 
  | "Web System" 
  | "Desktop Application" 
  | "Ready-made Solution" 
  | "SaaS & Subscription";

export type PricingType = "One-time" | "Subscription";

export interface Product {
  id: string;
  name: string;
  category: Category;
  pricingType: PricingType;
  description: string;
}

export const WHATSAPP_NUMBER = "+201234567890"; // سيتم استخدام هذا الرقم كمتغير ثابت

export const products: Product[] = [
  {
    id: "1",
    name: "E-Commerce Pro",
    category: "Web System",
    pricingType: "One-time",
    description: "A comprehensive e-commerce solution with advanced inventory management and secure payment integration."
  },
  {
    id: "2",
    name: "HealthTrack Mobile",
    category: "Mobile Application",
    pricingType: "Subscription",
    description: "Personal health monitoring app with real-time data tracking and professional medical insights."
  },
  {
    id: "3",
    name: "Inventory Master",
    category: "Desktop Application",
    pricingType: "One-time",
    description: "Powerful desktop software for managing large-scale warehouse operations and supply chain logistics."
  },
  {
    id: "4",
    name: "EduPortal",
    category: "Ready-made Solution",
    pricingType: "One-time",
    description: "A ready-to-deploy educational platform for schools and universities to manage online learning."
  },
  {
    id: "5",
    name: "CloudSaaS CRM",
    category: "SaaS & Subscription",
    pricingType: "Subscription",
    description: "Scalable customer relationship management system hosted on the cloud for modern businesses."
  }
];
