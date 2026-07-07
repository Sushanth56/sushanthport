import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
