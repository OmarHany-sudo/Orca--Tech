import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "OrcaTech | Web Development & Cybersecurity Services",
  description:
    "OrcaTech provides professional web development, backend systems, penetration testing, and full cybersecurity services in Egypt and the Middle East.",
  keywords: [
    "OrcaTech",
    "Web development company",
    "Cybersecurity services",
    "Pentesting Egypt",
    "Website development",
    "Backend development",
    "Security audit",
    "Ethical hacking",
    "Vulnerability scanning"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://orcatech.netlify.app/",
  },
  openGraph: {
    title: "OrcaTech | Web Development & Cybersecurity",
    description:
      "Professional web development, penetration testing, vulnerability scanning, and backend systems.",
    url: "https://orcatech.netlify.app/",
    siteName: "OrcaTech",
    images: [
      {
        url: "https://orcatech.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrcaTech Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}