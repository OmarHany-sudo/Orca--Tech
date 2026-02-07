import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrcaTech Global | International Web Development & Cybersecurity",
  description:
    "OrcaTech is a global software company delivering web development, backend systems, and cybersecurity services to clients worldwide.",
};

export default function GlobalPage() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">
        OrcaTech Global – Web Development & Cybersecurity Services Worldwide
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        OrcaTech works with international clients worldwide, delivering secure,
        scalable web applications, backend systems, and cybersecurity solutions
        remotely with the highest professional standards.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Global Web Development Services
      </h2>
      <p className="mb-6">
        We design and develop fast, SEO-optimized websites and applications for
        global startups and companies using modern technologies.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Global Cybersecurity Services
      </h2>
      <p>
        Our cybersecurity services include penetration testing, vulnerability
        scanning, and security audits for international clients across multiple
        industries.
      </p>
    </main>
  );
}