"use client";

import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import Portfolio from "@/components/home/Portfolio";
import ProductsSection from "@/components/home/ProductsSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function HomeClient() {
  return (
    <main>
      <Hero />

      <section className="max-w-3xl mx-auto mt-8 px-4 text-center text-muted-foreground">
        <p>
          <strong>OrcaTech</strong> is a professional web development and
          cybersecurity company delivering secure, high-performance websites,
          backend systems, and penetration testing services for businesses in
          Egypt, Saudi Arabia, and worldwide.
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
        <ProductsSection />
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