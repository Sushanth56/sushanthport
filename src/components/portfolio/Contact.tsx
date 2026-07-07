import { motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 chars").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    // Fallback: open mail client. Recruiter-friendly & works without backend.
    const { name, email, message } = parsed.data;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:chigullapallysushanth563@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="I'm actively interviewing. Drop me a note and I'll reply within 24 hours."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong lg:col-span-2 rounded-3xl p-8"
        >
          <h3 className="font-display text-xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Prefer another channel? Any of these work.
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            {[
              { icon: Mail, label: "Email", value: "chigullapallysushanth563@gmail.com", href: "mailto:chigullapallysushanth563@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
              { icon: MapPin, label: "Location", value: "Hyderabad, India" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sushanth", href: "https://linkedin.com/" },
              { icon: Github, label: "GitHub", value: "github.com/sushanth", href: "https://github.com/" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-2 text-brand-2">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block truncate text-foreground transition-colors hover:text-brand-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-foreground">{item.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass lg:col-span-3 rounded-3xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Your name
              </label>
              <Input id="name" name="name" placeholder="Jane Recruiter" maxLength={100} required
                className="h-11 bg-surface/60 border-border" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="jane@company.com" maxLength={255} required
                className="h-11 bg-surface/60 border-border" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Message
            </label>
            <Textarea id="message" name="message" placeholder="Tell me about the role, team, or opportunity…"
              rows={6} maxLength={1000} required className="bg-surface/60 border-border" />
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Your message opens in your email client — no data stored.
            </p>
            <Button type="submit" variant="brand" size="lg" disabled={loading}>
              <Send className="h-4 w-4" />
              {loading ? "Sending…" : "Send message"}
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
