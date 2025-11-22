import { notFound } from 'next/navigation';

const articles: any = {
  'website-cybersecurity-tips': {
    title: 'Top 10 Cybersecurity Tips to Protect Your Website',
    content: `
### 1) Use HTTPS Everywhere  
HTTPS protects your website from data interception...

### 2) Enable a Firewall  
A Web Application Firewall (WAF) stops attacks...

### 3) Keep Plugins Updated  
Outdated software creates vulnerabilities...

(كمل بقية المحتوى زي ما تحب)
    `,
  },

  'how-hackers-attack-websites': {
    title: 'How Hackers Attack Websites (Explained Simply)',
    content: `
### 1) SQL Injection  
Hackers inject malicious queries into your database...

### 2) Brute Force  
They try thousands of password combinations...

### 3) Cross-Site Scripting  
Attackers inject malicious JavaScript...

(كمل المحتوى)
    `,
  },

  'importance-of-backend': {
    title: 'Why Backend Architecture Matters for Your Business',
    content: `
### 1) Performance  
Backend decisions affect loading speed...

### 2) Scalability  
A good backend prevents crashes when traffic increases...

### 3) Security  
Backend logic protects data and user access...

(كمل المحتوى)
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