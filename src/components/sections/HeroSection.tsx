"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const stats = [
  { value: "Angular", label: "Primary frontend" },
  { value: ".NET", label: "Backend stack" },
  { value: "Remote", label: "Available worldwide" },
];

const floatingFeatures = [
  "Internal Admin Systems & Platforms",
  "Role & Permission-Based Access Control",
  "Business Dashboards & Reporting",
  "Workflow & Approval Automation",
  "API Integrations & Data Pipelines",
  "AI-Assisted Internal Tools",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-cyan-500/6 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Main content */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {siteConfig.availability}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
            >
              I build{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  business systems
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/0 via-indigo-400/60 to-indigo-500/0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
              {", dashboards,"}
              <br />
              {"and internal tools."}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-3 max-w-lg"
            >
              I design and build the internal software that keeps businesses running — admin platforms,
              access control systems, operational dashboards, and workflow automation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              End-to-end ownership: from business requirements to deployed, production-ready systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Button href="/projects" size="lg">
                View Projects
                <ArrowRight size={18} />
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Work With Me
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Feature card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 overflow-hidden">
                {/* Card top glow */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-5">
                  What I build
                </p>
                <ul className="space-y-3">
                  {floatingFeatures.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-3 text-slate-300 text-sm"
                    >
                      <CheckCircle size={15} className="text-indigo-400 shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-white/6">
                  <a
                    href={siteConfig.bookingUrl}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <Mail size={15} className="text-indigo-400" />
                    Get in touch
                    <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>

              {/* Floating accent badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl border border-indigo-500/30 bg-indigo-950/80 backdrop-blur text-xs font-semibold text-indigo-300 shadow-xl shadow-indigo-950/60"
              >
                Angular · ASP.NET Core · AI
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
