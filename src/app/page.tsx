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

      {/* ✅ HERO = Real SEO H1 (same design) */}
      <Hero />

      {/* ✅ Visible SEO intro – بنفس شكل الموقع */}
      <section className="max-w-3xl mx-auto mt-8 px-4 text-center text-muted-foreground">
        <p>
          <strong>OrcaTech</strong> is a professional web development and cybersecurity
          company delivering secure, high-performance websites, backend systems,
          and penetration testing services for businesses in Egypt and worldwide.
        </p>
      </section>

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