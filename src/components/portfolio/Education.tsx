import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const EDU = [
  {
    school: "University of North Texas",
    degree: "Master of Science in Computer Science",
    range: "2023 – 2025",
    place: "Denton, TX, USA",
  },
  {
    school: "KL University",
    degree: "Bachelor of Technology in Computer Science",
    range: "2019 – 2023",
    place: "Andhra Pradesh, India",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation"
      description="Formal training in computer science with a focus on modern systems and AI."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand/60 via-border to-transparent" />
        <div className="space-y-6">
          {EDU.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14"
            >
              <div className="absolute left-4 top-4 -translate-x-1/2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand shadow-glow">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="glass-strong rounded-2xl p-6">
                <div className="text-xs uppercase tracking-widest text-brand-2">{e.range}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{e.school}</h3>
                <div className="mt-1 text-foreground/85">{e.degree}</div>
                <div className="mt-1 text-sm text-muted-foreground">{e.place}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
