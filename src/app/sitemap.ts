import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orcatech.netlify.app";

  // Static Routes
  const routes = [
    "",
    "/services/web-development",
    "/services/cybersecurity",
    "/services/backend",
    "/services/desktop-apps",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.9,
  }));

  // Blog Articles (dynamically added)
  const blogArticles = [
    "website-cybersecurity-tips",
    "how-hackers-attack-websites",
    "importance-of-backend",
    "web-performance-optimization",
    "penetration-testing-guide",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...routes, ...blogArticles];
}