import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "OrcaTech Saudi Arabia | Web Development & Cybersecurity Company in KSA",
  description:
    "OrcaTech provides professional web development, custom software, and cybersecurity services for businesses and enterprises in Saudi Arabia.",
};

export default function SaudiArabiaPage() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">
        OrcaTech Saudi Arabia – Web Development & Cybersecurity Company
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        OrcaTech serves companies across Saudi Arabia with high-performance web
        development and advanced cybersecurity services designed for enterprise
        and high-growth businesses.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Web Development Services in Saudi Arabia
      </h2>
      <p className="mb-6">
        We build scalable websites, enterprise dashboards, and custom systems
        aligned with Saudi business standards and digital transformation goals.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Cybersecurity & Penetration Testing in Saudi Arabia
      </h2>
      <p>
        Our cybersecurity experts provide penetration testing, vulnerability
        assessments, and security hardening services to protect Saudi companies
        from evolving cyber risks.
      </p>
    </main>
  );
}