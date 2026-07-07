import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Section } from "./Section";

const BULLETS = [
  "Developed scalable backend applications using Java, Spring Boot, Spring Cloud, and Hibernate.",
  "Built RESTful APIs and integrated enterprise services across distributed systems.",
  "Developed responsive frontend modules using React.js and Vue.js.",
  "Implemented OAuth2, JWT, RBAC, and OpenID Connect authentication.",
  "Containerized applications using Docker and Kubernetes for cloud-native deployment.",
  "Optimized PostgreSQL and Oracle database queries for enterprise workloads.",
  "Wrote unit and integration tests using JUnit, Mockito, and Selenium.",
  "Worked in Agile teams using Git, Jenkins, Maven, and Jira.",
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've made an impact"
      description="Real-world engineering across backend, frontend, and cloud."
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Timeline rail */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand/60 via-border to-transparent md:left-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative md:pl-0"
        >
          <div className="md:ml-auto md:w-1/2 md:pl-10 pl-12">
            <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand shadow-glow">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> Jun 2022 – Dec 2022
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Remote
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">Java Developer Intern</h3>
              <div className="text-brand-2 font-medium">Data Speaks</div>
              <ul className="mt-5 space-y-2.5">
                {BULLETS.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
