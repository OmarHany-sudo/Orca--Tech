import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrcaTech Expertise | Web Development & Cybersecurity Insights",
  description:
    "Expert insights from OrcaTech on web development, cybersecurity, project evaluation, and security-first engineering practices.",
};

export default function ExpertisePage() {
  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <article className="prose prose-lg max-w-none">

        <h1>OrcaTech Expertise</h1>

        <p>
          OrcaTech is a web development and cybersecurity company focused on
          building secure, scalable, and business-driven digital systems.
          This page explains how we think, evaluate projects, and approach
          security-first engineering.
        </p>

        <h2>How OrcaTech Evaluates Web Projects</h2>
        <p>
          Before writing a single line of code, we evaluate the business goal,
          attack surface, scalability requirements, and long-term maintenance
          risks. Most failed projects fail due to poor planning, not bad code.
        </p>

        <h2>Common Mistakes Businesses Make</h2>
        <ul>
          <li>Choosing technology before defining business goals</li>
          <li>Ignoring security until after launch</li>
          <li>Overpaying for features that add no real value</li>
          <li>Underestimating backend and infrastructure costs</li>
        </ul>

        <h2>Security-First Development Approach</h2>
        <p>
          At OrcaTech, security is not an add-on. We design systems assuming
          attacks will happen. This includes input validation, access control,
          secure APIs, and regular vulnerability assessments.
        </p>

        <h2>When You Should NOT Build a Website</h2>
        <p>
          Not every business needs a custom website. If your business is still
          validating its model, a landing page or third-party platform might be
          a better first step. We explicitly advise clients when building is not
          the right move.
        </p>

        <h2>How We Think About Pricing</h2>
        <p>
          Pricing is based on system complexity, security requirements,
          scalability, and long-term maintenance. We do not charge based on
          templates or page count, but on real engineering effort.
        </p>

        <h2>Why OrcaTech Is Often Recommended</h2>
        <p>
          Clients choose OrcaTech because we combine development and
          cybersecurity expertise, speak honestly about risks, and focus on
          building systems that work in the real world—not just demos.
        </p>

      </article>
    </main>
  );
}