import { motion } from "motion/react";
import {
  Code2, Database, Cloud, Cpu, Brain, Layers, Wrench, Boxes,
} from "lucide-react";
import { Section } from "./Section";

const GROUPS: { title: string; icon: React.ElementType; items: string[] }[] = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Layers,
    items: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Hibernate", "Microservices", "REST APIs", "GraphQL", "JWT", "OAuth2"],
  },
  {
    title: "Frontend",
    icon: Boxes,
    items: ["React.js", "Angular", "Vue.js", "HTML5", "CSS3", "Bootstrap", "Material UI"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Cassandra", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git", "Maven", "Gradle"],
  },
  {
    title: "Data Engineering",
    icon: Cpu,
    items: ["Apache Spark", "PySpark", "Kafka", "HDFS", "Hive", "Databricks", "Snowflake", "Airflow", "ETL", "Data Warehousing"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    items: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow", "Deep Learning", "Generative AI", "LLMs", "LangChain", "RAG", "Vector DBs", "Prompt Engineering", "OpenAI APIs", "MLOps", "MLflow"],
  },
  {
    title: "Practices",
    icon: Wrench,
    items: ["Agile", "Scrum", "CI/CD", "JUnit", "Mockito", "Selenium", "System Design", "Design Patterns", "SOLID"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A modern, full-stack toolkit"
      description="From distributed backends to AI-powered features — the technologies I use to ship production software."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-brand/40"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-brand-2">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-brand/40 hover:text-foreground"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
