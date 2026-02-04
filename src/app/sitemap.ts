import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orcatech.online";
  
  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-02-03",
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: "2026-02-03",
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: "2026-02-03",
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/cybersecurity`,
      lastModified: "2026-02-03",
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/backend`,
      lastModified: "2026-02-03",
      changeFrequency: "weekly" as const,
      priority: 0.90,
    },
    {
      url: `${baseUrl}/services/desktop-apps`,
      lastModified: "2026-02-03",
      changeFrequency: "weekly" as const,
      priority: 0.90,
    },
  ];

  // English blog articles (original + new SEO articles)
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
    lastModified: "2026-02-03",
    changeFrequency: "monthly" as const,
    priority: 0.80,
  }));

  // Arabic blog articles
  const arabicArticles = [
    "cost-of-building-website-2026-ar",
    "how-to-choose-reliable-programming-company-ar",
    "website-or-app-which-to-choose-ar",
    "common-mistakes-with-programming-companies-ar",
    "professional-website-increases-sales-ar",
    "why-businesses-need-professional-website-ar",
  ].map((slug) => ({
    url: `${baseUrl}/ar/blog/${slug}`,
    lastModified: "2026-02-03",
    changeFrequency: "monthly" as const,
    priority: 0.80,
  }));

  return [...routes, ...englishArticles, ...arabicArticles];
}