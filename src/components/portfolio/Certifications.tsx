import { motion } from "motion/react";
import { Award } from "lucide-react";
import { Section } from "./Section";

const CERTS = [
  { name: "Oracle Certified Foundations Associate", issuer: "Oracle" },
  { name: "Certified PEGA System Architect 8.7", issuer: "Pegasystems" },
  { name: "Automation Anywhere Certified", issuer: "Automation Anywhere" },
  { name: "Full Stack Django Framework", issuer: "Coursework" },
  { name: "Python Programming", issuer: "Coursework" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuously learning"
      description="Formal certifications and coursework that back up my hands-on work."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:border-brand/40 hover:shadow-glow"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.issuer}
                </div>
                <div className="mt-1 font-display text-base font-semibold leading-snug">
                  {c.name}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
