import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrcaTech Egypt | Web Development & Cybersecurity Company in Egypt",
  description:
    "OrcaTech Egypt is a professional web development and cybersecurity company providing secure websites, backend systems, and penetration testing services for businesses in Egypt.",
};

export default function EgyptPage() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">
        OrcaTech Egypt – Web Development & Cybersecurity Company
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        OrcaTech Egypt provides professional web development, backend systems,
        and cybersecurity services for startups, companies, and enterprises
        across Egypt. We help businesses build fast, secure, and scalable digital
        solutions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Web Development Services in Egypt
      </h2>
      <p className="mb-6">
        We design and develop modern websites, dashboards, and custom business
        systems using the latest frontend and backend technologies tailored for
        the Egyptian market.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Cybersecurity & Penetration Testing in Egypt
      </h2>
      <p>
        Our cybersecurity team offers vulnerability scanning, penetration
        testing, security audits, and full website hardening to protect Egyptian
        businesses from cyber threats.
      </p>
    </main>
  );
}