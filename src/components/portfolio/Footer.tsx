import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground"
        >
          Designed & Developed by{" "}
          <span className="font-display font-medium text-gradient-brand">
            Sushanth Chigullapally
          </span>
          <span className="mx-2 text-border">·</span>© {new Date().getFullYear()}
        </motion.div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sushanth81/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:chigullapallysushanth563@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:border-brand/40 hover:text-brand-2"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        Crafted with <Heart className="h-3 w-3 text-rose-400" /> in Hyderabad
      </div>
    </footer>
  );
}
