import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = [
  "Software Engineer",
  "Java Full Stack Developer",
  "Backend Engineer",
  "AI & Data Engineering Enthusiast",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => (v + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient-brand">
      {text}
      <span className="ml-0.5 inline-block w-[3px] -translate-y-1 bg-current animate-blink">&nbsp;</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-40 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-2/15 blur-[120px] animate-float-slow-2" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for full-time opportunities
          <Sparkles className="h-3 w-3" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-muted-foreground text-2xl sm:text-3xl md:text-4xl font-normal font-sans mb-4">
            Hi, I'm
          </span>
          <span className="text-gradient">Sushanth</span>
          <br />
          <span className="text-gradient">Chigullapally</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 h-9 text-xl sm:text-2xl md:text-3xl font-display font-medium"
        >
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I build scalable backend applications, cloud-native systems, and modern web
          products powered by <span className="text-foreground">Java, Spring Boot, React,
          Microservices, Docker, Kubernetes, AWS</span> and modern <span className="text-foreground">AI &
          Data Engineering</span> stacks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild variant="brand" size="lg">
            <a href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="glass" size="lg">
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
            <a href="#contact">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex items-center justify-center gap-5 text-sm text-muted-foreground"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <span className="text-border">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> Hyderabad, India
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mx-auto mt-16 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span>Scroll</span>
          <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-border p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-foreground"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
