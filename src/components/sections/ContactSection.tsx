"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
];

interface FormState {
  name: string;
  email: string;
  budget: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", budget: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up to Formspree / Resend / API route
    // Simulating a short delay for demo purposes
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm(initialForm);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Let&apos;s talk about your project
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Tell me what you need. I&apos;ll read every message and respond personally within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-1 flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <Card key={label} className="flex items-start gap-4 py-4">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/12 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-300">{value}</p>
                  )}
                </div>
              </Card>
            ))}

            {/* Availability note */}
            <Card className="border-emerald-500/15 bg-emerald-500/[0.04] py-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">Currently available</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                I have capacity for new projects. Reach out and let&apos;s see if we&apos;re a good fit.
              </p>
            </Card>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <Card accent className="p-8">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-4">
                    <Send size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">
                      Project budget (approx.)
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" className="bg-[#0d0d1f]">Select a range…</option>
                      <option value="<5k" className="bg-[#0d0d1f]">Under $5,000</option>
                      <option value="5k-15k" className="bg-[#0d0d1f]">$5,000 – $15,000</option>
                      <option value="15k-50k" className="bg-[#0d0d1f]">$15,000 – $50,000</option>
                      <option value="50k+" className="bg-[#0d0d1f]">$50,000+</option>
                      <option value="ongoing" className="bg-[#0d0d1f]">Ongoing retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">
                      Tell me about your project
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe what you need — the more detail the better. What problem are you solving? What does success look like?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                    <Send size={16} />
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
