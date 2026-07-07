import { motion } from "motion/react";
import { GraduationCap, Server, Sparkles } from "lucide-react";
import { Section } from "./Section";

const STATS = [
  { k: "5+", v: "Years coding" },
  { k: "10+", v: "Projects shipped" },
  { k: "20+", v: "Technologies" },
  { k: "2", v: "Degrees" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building reliable systems, end to end"
      description="Master's-trained software engineer with a passion for clean architecture, distributed systems, and applied AI."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong lg:col-span-3 rounded-3xl p-8 md:p-10"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm <span className="text-gradient-brand font-medium">Sushanth Chigullapally</span>, a
            Software Engineer with a Master's in Computer Science from the{" "}
            <span className="text-foreground">University of North Texas</span>. I specialize in
            Java, Spring Boot, Microservices, REST APIs, React, SQL, Docker, Kubernetes, and AWS.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            During my internship at <span className="text-foreground">Data Speaks</span>, I built
            scalable microservices, secure REST APIs, and optimized enterprise application
            performance. I'm continuously exploring modern AI — LLMs, RAG, LangChain, vector
            databases, and MLOps — to bring intelligent capabilities to production systems.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Currently seeking <span className="text-foreground">Software Engineer</span>,{" "}
            <span className="text-foreground">Backend Developer</span>,{" "}
            <span className="text-foreground">Java Full Stack</span>,{" "}
            <span className="text-foreground">AI Engineer</span>, and{" "}
            <span className="text-foreground">Data Engineer</span> opportunities.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.v} className="rounded-2xl border border-border/60 bg-surface/40 p-4">
                <div className="text-2xl font-semibold text-gradient-brand">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {[
            {
              icon: Server,
              title: "Backend & Cloud",
              body: "Java, Spring Boot, Microservices, REST, Kafka, PostgreSQL, Docker, Kubernetes, AWS.",
            },
            {
              icon: Sparkles,
              title: "AI & Data",
              body: "Python, PyTorch, LLMs, RAG, LangChain, Vector DBs, Spark, Airflow, Snowflake.",
            },
            {
              icon: GraduationCap,
              title: "Foundations",
              body: "System design, SOLID, design patterns, CI/CD, testing with JUnit, Mockito, Selenium.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all hover:border-brand/40 hover:shadow-glow"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
