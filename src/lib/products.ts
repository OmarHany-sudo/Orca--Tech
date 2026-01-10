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

export const WHATSAPP_NUMBER = "+201234567890"; // رقم واتساب ثابت للتواصل

export const products: Product[] = [
  {
    id: "1",
    name: "Smart WhatsApp AI Reply",
    category: "SaaS & Subscription",
    pricingType: "Subscription",
    description: "AI-powered WhatsApp auto-reply system that responds instantly to customer messages, understands intent, and improves sales and customer support efficiency."
  },
  {
    id: "2",
    name: "Restaurant Order Manager",
    category: "Web System",
    pricingType: "One-time",
    description: "Web-based system for managing restaurant orders, menus, and customer requests with real-time updates."
  },
  {
    id: "3",
    name: "Clinic Appointment App",
    category: "Mobile Application",
    pricingType: "Subscription",
    description: "Mobile app for booking medical appointments, managing schedules, and sending reminders to patients."
  },
  {
    id: "4",
    name: "Retail POS Desktop",
    category: "Desktop Application",
    pricingType: "One-time",
    description: "Point of Sale desktop application for retail stores with sales tracking, invoices, and daily reports."
  },
  {
    id: "5",
    name: "Company Profile Website Kit",
    category: "Ready-made Solution",
    pricingType: "One-time",
    description: "Ready-to-use professional company website template with contact forms, services section, and WhatsApp integration."
  }
];
