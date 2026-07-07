import { motion } from "motion/react";
import { useState } from "react";
import { Github, ExternalLink, Gamepad2, ShieldCheck, LineChart, Bot } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  category: "Full Stack" | "Backend" | "Data" | "Automation";
  icon: React.ElementType;
  short: string;
  contributions?: string[];
  tech: string[];
  accent: string; // gradient css
};

const PROJECTS: Project[] = [
  {
    title: "Play Junction",
    category: "Full Stack",
    icon: Gamepad2,
    short:
      "Full-stack multiplayer gaming platform built during my Master's — real-time notifications, chat and game history.",
    contributions: [
      "Implemented Notification Management System",
      "Developed CRUD APIs with Spring Boot",
      "Built Notification Delivery Tracking",
      "Optimized SQL queries and indexes",
      "Implemented User Notification Preferences",
      "Developed Chat Notification Features",
      "Created Game History Interface",
      "End-to-end testing & QA",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "SQL", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
    accent: "from-indigo-500/30 to-cyan-400/20",
  },
  {
    title: "Policy Management & Claims Processing",
    category: "Backend",
    icon: ShieldCheck,
    short:
      "Secure cloud-native insurance platform for policy lifecycle and claims workflows with OAuth2 & JWT.",
    contributions: [
      "Designed microservices with Spring Cloud",
      "Implemented OAuth2 + JWT authentication",
      "Containerized services with Docker & K8s",
      "Deployed to AWS with auto-scaling",
    ],
    tech: ["Spring Boot", "Microservices", "OAuth2", "JWT", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
    accent: "from-emerald-400/25 to-teal-500/20",
  },
  {
    title: "Log Data Processing & Anomaly Detection",
    category: "Data",
    icon: LineChart,
    short:
      "Big-data pipeline ingesting server logs, processing with Spark, and surfacing anomalies via Tableau.",
    contributions: [
      "Built PySpark ETL pipelines on HDFS",
      "Modeled data warehouse tables in Hive",
      "Detected anomalies with statistical models",
      "Interactive Tableau dashboards",
    ],
    tech: ["Apache Spark", "PySpark", "HDFS", "Hive", "Tableau", "Big Data"],
    accent: "from-fuchsia-500/25 to-orange-400/20",
  },
  {
    title: "Automation Anywhere Bots",
    category: "Automation",
    icon: Bot,
    short:
      "RPA bots for file organization and email automation — reducing manual toil across daily operations.",
    contributions: [
      "File Organization Bot with rules engine",
      "Email Automation with attachment parsing",
      "Scheduled runs & error alerting",
    ],
    tech: ["Automation Anywhere", "RPA", "Python"],
    accent: "from-amber-400/25 to-rose-500/20",
  },
];

const FILTERS = ["All", "Full Stack", "Backend", "Data", "Automation"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects I'm proud of"
      description="A mix of full-stack, backend, data, and automation work — click any card for the case study."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              filter === f
                ? "bg-foreground text-background"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((p, i) => (
          <motion.button
            layout
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            onClick={() => setOpen(p)}
            className="glass group relative overflow-hidden rounded-3xl p-1 text-left transition-all hover:border-brand/40 hover:shadow-elegant"
          >
            <div className={`relative h-44 overflow-hidden rounded-[calc(theme(borderRadius.3xl)-4px)] bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid h-20 w-20 place-items-center rounded-2xl glass-strong shadow-elegant transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <p.icon className="h-10 w-10 text-foreground" />
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-full glass px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/80">
                {p.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface/60 px-2 py-0.5 text-[11px] text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 6 && (
                  <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground">
                    +{p.tech.length - 6} more
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm text-brand-2">
                Read case study
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fade-in"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 shadow-elegant"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-sm hover:bg-accent/50"
              aria-label="Close"
            >
              Close
            </button>
            <div className={`mb-6 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br ${open.accent}`}>
              <div className="grid h-16 w-16 place-items-center rounded-2xl glass-strong">
                <open.icon className="h-8 w-8" />
              </div>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{open.category}</div>
            <h3 className="mt-1 font-display text-2xl font-semibold">{open.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{open.short}</p>

            {open.contributions && (
              <>
                <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  My Contributions
                </h4>
                <ul className="mt-3 space-y-2">
                  {open.contributions.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-foreground/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                      {c}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Tech Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {open.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-surface/60 px-2 py-1 text-xs text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> View Code
                </a>
              </Button>
              <Button asChild variant="glass">
                <a href="#" target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </Section>
  );
}
