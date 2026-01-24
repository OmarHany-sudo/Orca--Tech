import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://orcatech.online";

  const posts = [
    {
      slug: "website-cybersecurity-tips",
      title: "Top 10 Cybersecurity Tips to Protect Your Website",
    },
    {
      slug: "how-hackers-attack-websites",
      title: "How Hackers Attack Websites (Explained Simply)",
    },
    {
      slug: "importance-of-backend",
      title: "Why Backend Architecture Matters for Your Business",
    },
    {
      slug: "web-performance-optimization",
      title: "The Importance of Web Performance Optimization",
    },
    {
      slug: "penetration-testing-guide",
      title: "What Is Penetration Testing? A Complete Beginner’s Guide",
    },
  ];

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
    </item>
  `
    )
    .join("");

  const xml = `
  <rss version="2.0">
    <channel>
      <title>OrcaTech Blog</title>
      <link>${baseUrl}</link>
      <description>Cybersecurity & Web Development insights.</description>
      ${items}
    </channel>
  </rss>
`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}