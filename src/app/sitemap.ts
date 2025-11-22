import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: "https://orcatech.netlify.app/",
      lastModified: "2025-02-21",
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: "https://orcatech.netlify.app/services/web-development",
      lastModified: "2025-02-21",
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: "https://orcatech.netlify.app/services/cybersecurity",
      lastModified: "2025-02-21",
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: "https://orcatech.netlify.app/services/backend",
      lastModified: "2025-02-21",
      changeFrequency: "weekly" as const,
      priority: 0.90,
    },
    {
      url: "https://orcatech.netlify.app/services/Desktop-apps",
      lastModified: "2025-02-21",
      changeFrequency: "weekly" as const,
      priority: 0.90,
    },
  ];

  const blogArticles = [
    "website-cybersecurity-tips",
    "how-hackers-attack-websites",
    "importance-of-backend",
    "web-performance-optimization",
    "penetration-testing-guide",
  ].map((slug) => ({
    url: `https://orcatech.netlify.app/blog/${slug}`,
    lastModified: "2025-02-21",
    changeFrequency: "weekly" as const,
    priority: 0.80,
  }));

  return [...routes, ...blogArticles];
}