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

      {/* 🔥 Primary SEO Header (Hidden from users) */}
      <h1 className="sr-only">
        OrcaTech – Professional Web Development, Backend Systems & Cybersecurity Services
      </h1>

      {/* 🔥 SEO Intro Paragraph (Hidden from users) */}
      <section className="sr-only">
        <p>
          OrcaTech is a professional web development and cybersecurity company
          delivering high-performance business websites, backend systems,
          penetration testing, vulnerability scanning, and full website security
          services across Egypt and the Middle East.
        </p>

        <p>
          Learn more about our web development services or explore our cybersecurity
          and pentesting solutions.
        </p>
      </section>

      {/* Actual displayed sections */}
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