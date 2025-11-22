import { notFound } from 'next/navigation';

const articles: any = {
  /* -----------------------------------------------------
     ARTICLE 1
  ----------------------------------------------------- */
  'website-cybersecurity-tips': {
    title: 'Top 10 Cybersecurity Tips to Protect Your Website',
    content: `
<h2>1) Enable HTTPS & SSL Certificate</h2>
<p>HTTPS encrypts communication...</p>

<h2>2) Keep All Software Updated</h2>
<p>Outdated plugins, themes...</p>

<h2>3) Use Strong, Unique Passwords</h2>
<p>Use a password manager...</p>

<h2>4) Install a Web Application Firewall</h2>
<p>A WAF blocks malicious traffic...</p>

<h2>5) Enable Two-Factor Authentication</h2>
<p>Critical for admin panels...</p>

<h2>6) Limit Login Attempts</h2>
<p>Protects from brute-force...</p>

<h2>7) Backup Your Website Regularly</h2>
<p>Daily/weekly backups are essential...</p>

<h2>8) Scan Your Website for Malware</h2>
<p>Use Wordfence, Sucuri, VirusTotal...</p>

<h2>9) Secure File Uploads</h2>
<p>Never allow executables...</p>

<h2>10) Perform Regular Penetration Testing</h2>
<p>Test for SQLi, XSS, CSRF...</p>

<h2>Conclusion</h2>
<p>Security is continuous...</p>
    `,
  },

  /* ARTICLE 2 */
  'how-hackers-attack-websites': {
    title: 'How Hackers Attack Websites (Explained Simply)',
    content: `
<h2>1) SQL Injection</h2>
<p>Hackers inject SQL queries...</p>

<h2>2) Cross-Site Scripting</h2>
<p>Inject malicious JavaScript...</p>

<h2>3) Brute Force Attacks</h2>
<p>Trying thousands of passwords...</p>

<h2>4) File Upload Exploits</h2>
<p>Attackers upload shells...</p>

<h2>5) Cross-Site Request Forgery</h2>
<p>Forcing users to perform actions...</p>

<h2>6) DDoS Attacks</h2>
<p>Flooding server with traffic...</p>

<h2>Conclusion</h2>
<p>Understanding attacks helps defend...</p>
    `,
  },

  /* ARTICLE 3 */
  'importance-of-backend': {
    title: 'Why Backend Architecture Matters for Your Business',
    content: `
<h2>1) Performance</h2>
<p>Backend determines speed...</p>

<h2>2) Scalability</h2>
<p>Handles growing traffic...</p>

<h2>3) Security</h2>
<p>Protects sensitive data...</p>

<h2>4) Maintainability</h2>
<p>Clean architecture helps devs...</p>

<h2>5) Business Stability</h2>
<p>Reliable backend = reliable business...</p>

<h2>Conclusion</h2>
<p>Backend is the foundation...</p>
    `,
  },

  /* ARTICLE 4 */
  'web-performance-optimization': {
    title: 'The Importance of Web Performance Optimization',
    content: `
<h2>1) Speed Affects Conversions</h2>
<p>Every second reduces conversions...</p>

<h2>2) Google Ranking Depends on Speed</h2>
<p>Core Web Vitals matter...</p>

<h2>3) Optimized Images</h2>
<p>Use WebP, lazy-load...</p>

<h2>4) Caching</h2>
<p>CDN + browser caching...</p>

<h2>5) Minification</h2>
<p>Minify and bundle files...</p>

<h2>Conclusion</h2>
<p>Performance = SEO + UX...</p>
    `,
  },

  /* ARTICLE 5 */
  'penetration-testing-guide': {
    title: 'What Is Penetration Testing? A Complete Beginner’s Guide',
    content: `
<h2>1) What Is Pentesting?</h2>
<p>A simulated cyberattack...</p>

<h2>2) Importance</h2>
<p>Finds weaknesses...</p>

<h2>3) Types of Pentesting</h2>
<ul>
<li>Web Apps</li>
<li>Network</li>
<li>API</li>
<li>Wireless</li>
<li>Social Engineering</li>
</ul>

<h2>4) Methodology</h2>
<p>Enum → Scan → Exploit → Escalate → Report</p>

<h2>5) Tools</h2>
<ul>
<li>Burp</li>
<li>Nmap</li>
<li>Metasploit</li>
<li>ZAP</li>
<li>SQLmap</li>
</ul>

<h2>Conclusion</h2>
<p>Critical for modern security...</p>
    `,
  },
};

export default function BlogArticle({ params }: any) {
  const article = articles[params.slug];

  if (!article) return notFound();

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: "2025-02-21",
    dateModified: "2025-02-21",
    author: { "@type": "Organization", name: "OrcaTech" },
    publisher: {
      "@type": "Organization",
      name: "OrcaTech",
      logo: {
        "@type": "ImageObject",
        url: "https://orcatech.netlify.app/og-image.png",
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orcatech.netlify.app" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://orcatech.netlify.app/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://orcatech.netlify.app/blog/${params.slug}` }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>

        <>
          {/* Article Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />

          {/* Breadcrumb Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
        </>

        <article
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></article>

      </div>
    </section>
  );
}