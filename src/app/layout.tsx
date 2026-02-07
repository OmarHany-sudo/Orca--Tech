import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "OrcaTech | Software & Cybersecurity Company",
    template: "%s | OrcaTech",
  },
  description:
    "OrcaTech is a professional software, web development, and cybersecurity company serving businesses in Egypt, Saudi Arabia, and worldwide.",
  keywords: [
    "OrcaTech",
    "Software company",
    "Web development company",
    "Cybersecurity services",
    "Penetration testing",
    "Pentesting Egypt",
    "Web development Egypt",
    "Cybersecurity Saudi Arabia",
    "Backend development",
    "Security audit",
    "Ethical hacking",
    "Vulnerability scanning",
    "Secure web applications",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://orcatech.online/",
  },

  openGraph: {
    title: "OrcaTech | Software & Cybersecurity Company",
    description:
      "Professional web development, backend systems, and cybersecurity services for businesses in Egypt, Saudi Arabia, and worldwide.",
    url: "https://orcatech.online/",
    siteName: "OrcaTech",
    images: [
      {
        url: "https://orcatech.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrcaTech Software & Cybersecurity Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OrcaTech | Software & Cybersecurity Company",
    description:
      "Web development, backend systems, penetration testing, and cybersecurity services.",
    images: ["https://orcatech.online/og-image.png"],
  },

  icons: {
    icon: "/OrcaTech.ico",
    shortcut: "/OrcaTech.ico",
    apple: "/OrcaTech.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Language Alternates */}
        <link rel="alternate" hrefLang="en-US" href="https://orcatech.online/" />
        <link rel="alternate" hrefLang="ar-EG" href="https://orcatech.online/ar/" />
        <link rel="alternate" hrefLang="x-default" href="https://orcatech.online/" />

        {/* ================================
            ORGANIZATION SCHEMA
        ================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OrcaTech",
              url: "https://orcatech.online",
              logo: "https://orcatech.online/og-image.png",
              description:
                "OrcaTech is a professional web development and cybersecurity company serving businesses in Egypt, Saudi Arabia, and worldwide.",
              areaServed: [
                { "@type": "Country", name: "Egypt" },
                { "@type": "Country", name: "Saudi Arabia" },
                { "@type": "Place", name: "Worldwide" },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61583719363965",
                "https://github.com/OmarHany-sudo",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+201033496278",
                  contactType: "customer service",
                  email: "orcatech.service@gmail.com",
                  availableLanguage: ["English", "Arabic"],
                },
              ],
            }),
          }}
        />

        {/* ================================
            WEBSITE + SEARCH ACTION SCHEMA
        ================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "OrcaTech",
              url: "https://orcatech.online",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://orcatech.online/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}