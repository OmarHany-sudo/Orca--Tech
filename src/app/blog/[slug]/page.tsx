import { notFound } from 'next/navigation';

const articles: any = {

  /* -----------------------------------------------------
     ARTICLE 1
  ----------------------------------------------------- */
  'website-cybersecurity-tips': {
    title: 'Top 10 Cybersecurity Tips to Protect Your Website',
    content: `
<h2>1) Enable HTTPS & SSL Certificate</h2>
<p>HTTPS encrypts communication between your server and visitors, protecting sensitive data from interception. Modern browsers also mark non-HTTPS sites as insecure.</p>

<h2>2) Keep All Software Updated</h2>
<p>Outdated plugins, themes, frameworks, or CMS cores introduce security vulnerabilities. Attackers actively scan for old versions of WordPress, Laravel, or Node.js packages.</p>

<h2>3) Use Strong, Unique Passwords</h2>
<p>Avoid password reuse across platforms. Use a password manager to generate strong, unique passwords for each login.</p>

<h2>4) Install a Web Application Firewall (WAF)</h2>
<p>A WAF blocks malicious traffic targeting your site including SQL injections, XSS payloads, and suspicious bots.</p>

<h2>5) Enable Two-Factor Authentication (2FA)</h2>
<p>Admin dashboards are prime targets for brute-force attacks. Enabling 2FA significantly reduces unauthorized access.</p>

<h2>6) Limit Login Attempts</h2>
<p>Blocking repeated failed login attempts prevents attackers from trying thousands of passwords in brute-force attacks.</p>

<h2>7) Backup Your Website Regularly</h2>
<p>Daily or weekly backups are essential so you can quickly restore your site if compromised.</p>

<h2>8) Scan Your Website for Malware</h2>
<p>Tools like Wordfence, Sucuri, and VirusTotal can detect malicious code, backdoors, and infected files.</p>

<h2>9) Secure File Uploads</h2>
<p>Never allow executable files inside upload directories. Always validate file extensions and MIME types.</p>

<h2>10) Perform Regular Penetration Testing</h2>
<p>A professional pentest identifies vulnerabilities before hackers find them. This includes testing for SQLi, XSS, CSRF, RCE, IDOR, and configuration issues.</p>

<h2>Conclusion</h2>
<p>Security is not a one-time task. Applying these tips will significantly reduce the risk of hacking and improve your overall website protection.</p>
    `,
  },

  /* -----------------------------------------------------
     ARTICLE 2
  ----------------------------------------------------- */
  'how-hackers-attack-websites': {
    title: 'How Hackers Attack Websites (Explained Simply)',
    content: `
<h2>1) SQL Injection</h2>
<p>Hackers inject malicious SQL queries into input fields to extract or modify your database. Unsafe queries allow attackers to bypass login systems or dump sensitive data.</p>

<h2>2) Cross-Site Scripting (XSS)</h2>
<p>XSS injects malicious JavaScript into your website. Attackers use it to steal cookies, impersonate users, or redirect victims to malicious pages.</p>

<h2>3) Brute Force Attacks</h2>
<p>Attackers try thousands of username-password combinations automatically until they find a match. Weak passwords make this attack trivial.</p>

<h2>4) File Upload Exploits</h2>
<p>If a website allows file uploads, attackers may upload shells or backdoors disguised as images or PDFs.</p>

<h2>5) Cross-Site Request Forgery (CSRF)</h2>
<p>CSRF forces users to perform unwanted actions like changing passwords or making purchases by tricking them into clicking disguised links.</p>

<h2>6) DDoS Attacks</h2>
<p>Distributed Denial-of-Service floods your server with traffic, making the website unavailable for real users.</p>

<h2>Conclusion</h2>
<p>Understanding how hackers think helps you defend your systems better. Preventing these attacks requires proper validation, secure coding, and regular security scanning.</p>
    `,
  },

  /* -----------------------------------------------------
     ARTICLE 3
  ----------------------------------------------------- */
  'importance-of-backend': {
    title: 'Why Backend Architecture Matters for Your Business',
    content: `
<h2>1) Performance</h2>
<p>Your backend determines how fast your application responds. Poorly structured logic leads to slow APIs and delayed loading times.</p>

<h2>2) Scalability</h2>
<p>Good backend architecture allows your system to handle growing traffic without crashing. Load balancing, database optimization, and caching all play key roles.</p>

<h2>3) Security</h2>
<p>The backend is the gatekeeper of sensitive data. Strong authentication, validation, and encryption are essential for protecting users.</p>

<h2>4) Maintainability</h2>
<p>Clean architecture makes it easy for developers to add new features or fix bugs without breaking existing functionality.</p>

<h2>5) Business Stability</h2>
<p>A strong backend ensures your website or app works reliably — directly impacting revenue and user satisfaction.</p>

<h2>Conclusion</h2>
<p>Backend architecture is the foundation of any serious digital product. Investing in it ensures long-term stability and performance.</p>
    `,
  },

  /* -----------------------------------------------------
     ARTICLE 4
  ----------------------------------------------------- */
  'web-performance-optimization': {
    title: 'The Importance of Web Performance Optimization',
    content: `
<h2>1) Speed Directly Affects Conversions</h2>
<p>Every extra second of load time reduces conversions by up to 20%. Users leave slow websites instantly.</p>

<h2>2) Google Ranking Depends on Performance</h2>
<p>PageSpeed, Core Web Vitals, and responsiveness all affect your SEO ranking. Fast sites rank higher.</p>

<h2>3) Optimized Images Matter</h2>
<p>Compressing images, using WebP, and lazy-loading improve performance dramatically.</p>

<h2>4) Caching for Instant Loads</h2>
<p>Browser caching, server caching, and CDN caching reduce load times across all devices.</p>

<h2>5) Minification & Bundling</h2>
<p>Minifying CSS/JS and bundling resources makes the site lighter and faster to deliver.</p>

<h2>Conclusion</h2>
<p>Performance optimization is not optional — it's a core part of modern web development that impacts SEO, user satisfaction, and business success.</p>
    `,
  },

  /* -----------------------------------------------------
     ARTICLE 5
  ----------------------------------------------------- */
  'penetration-testing-guide': {
    title: 'What Is Penetration Testing? A Complete Beginner’s Guide',
    content: `
<h2>1) What Is Penetration Testing?</h2>
<p>Penetration testing is a simulated cyberattack performed by security experts to find vulnerabilities before real attackers exploit them.</p>

<h2>2) Why Pentesting Is Important</h2>
<p>It identifies weaknesses, misconfigurations, insecure code, and access control issues in your system.</p>

<h2>3) Types of Penetration Testing</h2>
<ul>
  <li>Web Application Pentesting</li>
  <li>Network Pentesting</li>
  <li>API Pentesting</li>
  <li>Wireless Security Testing</li>
  <li>Social Engineering</li>
</ul>

<h2>4) Pentesting Methodology</h2>
<p>Enumeration → Vulnerability Scanning → Exploitation → Privilege Escalation → Reporting</p>

<h2>5) Tools Used in Pentesting</h2>
<ul>
  <li>Burp Suite</li>
  <li>Nmap</li>
  <li>Metasploit</li>
  <li>OWASP ZAP</li>
  <li>SQLmap</li>
</ul>

<h2>Conclusion</h2>
<p>Penetration testing helps businesses stay secure and compliant. It is one of the most important investments in modern cybersecurity.</p>
    `,
  },
};

export default function BlogArticle({ params }: any) {
  const article = articles[params.slug];

  if (!article) return notFound();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>

        <article
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></article>
      </div>
    </section>
  );
}