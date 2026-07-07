import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sushanth Chigullapally — Software Engineer & Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sushanth Chigullapally — Software Engineer specializing in Java, Spring Boot, Microservices, React, AWS, and AI & Data Engineering.",
      },
      { property: "og:title", content: "Sushanth Chigullapally — Software Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Backend, cloud-native, and AI-driven software engineer. Java · Spring Boot · React · Microservices · AWS · Data Engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sushanth Chigullapally — Software Engineer" },
      {
        name: "twitter:description",
        content:
          "Java Full Stack, Backend, AI & Data Engineering portfolio.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sushanth Chigullapally",
          jobTitle: "Software Engineer",
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "University of North Texas" },
            { "@type": "CollegeOrUniversity", name: "KL University" },
          ],
          knowsAbout: [
            "Java", "Spring Boot", "Microservices", "React", "AWS",
            "Kubernetes", "Data Engineering", "Machine Learning", "LLMs",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
