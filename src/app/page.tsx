"use client";

import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <main>

      {/* 🔥 Primary SEO Header (H1) */}
      <h1 className="sr-only">
        OrcaTech – Professional Web Development, Backend Systems & Cybersecurity Services
      </h1>

      {/* 🔥 SEO Intro Paragraph */}
      <section className="px-6 pt-4 pb-2 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
        <p>
          OrcaTech is a professional web development and cybersecurity company
          delivering high-performance business websites, backend systems,
          penetration testing, vulnerability scanning, and full website
          security services across Egypt and the Middle East. We help businesses
          build fast, secure, SEO-optimized digital platforms.
        </p>

        {/* 🔗 Internal linking for Google SEO */}
        <p className="mt-3 text-sm">
          Learn more about our{" "}
          <a
            href="/services/web-development"
            className="text-orca-blue underline"
          >
            web development services
          </a>{" "}
          or explore our{" "}
          <a
            href="/services/cybersecurity"
            className="text-orca-blue underline"
          >
            cybersecurity and pentesting solutions
          </a>
          .
        </p>
      </section>

      {/* Hero Section */}
      <Hero />

      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>

      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </main>
  );
}