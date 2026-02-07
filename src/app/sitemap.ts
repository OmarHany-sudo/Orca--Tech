import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orcatech.online";
  const lastModified = new Date();

  /* ======================
     CORE PAGES
  ====================== */
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },

    // 🌍 Location Pages
    {
      url: `${baseUrl}/egypt`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/saudi-arabia`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/global`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🛠 Services
    {
      url: `${baseUrl}/services/web-development`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/cybersecurity`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/backend`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/desktop-apps`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  /* ======================
     BLOG – ENGLISH
  ====================== */
  const englishArticles = [
    "cost-of-building-business-website-2026",
    "how-to-choose-best-software-company",
    "website-vs-mobile-app-what-to-invest-first",
    "top-mistakes-companies-make-hiring-developers",
    "professional-website-increases-sales",
    "website-cybersecurity-tips",
    "how-hackers-attack-websites",
    "importance-of-backend",
    "web-performance-optimization",
    "penetration-testing-guide",
    "why-businesses-need-professional-website",
    "website-vs-mobile-app-which-to-choose",
    "how-to-choose-reliable-programming-company",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ======================
     BLOG – ARABIC
  ====================== */
  const arabicArticles = [
    "cost-of-building-website-2026-ar",
    "how-to-choose-reliable-programming-company-ar",
    "website-or-app-which-to-choose-ar",
    "common-mistakes-with-programming-companies-ar",
    "professional-website-increases-sales-ar",
    "why-businesses-need-professional-website-ar",
  ].map((slug) => ({
    url: `${baseUrl}/ar/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...englishArticles, ...arabicArticles];
}