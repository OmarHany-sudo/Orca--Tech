import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OrcaTech | Web Development & Cybersecurity Services",
  description:
    "OrcaTech provides professional web development, backend systems, penetration testing, and advanced cybersecurity services tailored for businesses.",
  keywords: [
    "OrcaTech",
    "Web development company",
    "Cybersecurity services",
    "Pentesting Egypt",
    "Website development",
    "Backend development",
    "Security audit",
    "Ethical hacking",
    "Vulnerability scanning",
    "Cybersecurity Egypt",
    "Web design Egypt",
    "WordPress security",
    "Pentesting services",
    "Secure web apps"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://orcatech.netlify.app/",
  },

  openGraph: {
    title: "OrcaTech | Web Development & Cybersecurity",
    description:
      "Professional web development, web security, vulnerability scanning, penetration testing, and backend systems.",
    url: "https://orcatech.netlify.app/",
    siteName: "OrcaTech",
    images: [
      {
        url: "https://orcatech.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrcaTech Services Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OrcaTech | Web Development & Cybersecurity",
    description:
      "Web development, backend systems, penetration testing, and full cybersecurity services.",
    images: ["https://orcatech.netlify.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
              url: "https://orcatech.netlify.app",
              logo: "https://orcatech.netlify.app/og-image.png",
              description:
                "Web development, backend development, penetration testing, and cybersecurity services.",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61583719363965",
                "https://github.com/OmarHany-sudo"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+201030634710",
                  contactType: "customer service",
                  email: "orcatech.service@gmail.com"
                }
              ]
            })
          }}
        />

        {/* ================================
            WEBSITE + SEARCH ACTION
        ================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "OrcaTech",
              url: "https://orcatech.netlify.app",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://orcatech.netlify.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })
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