"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

function DashboardMock() {
  const bars = [38, 52, 42, 70, 48, 84, 63, 76, 54, 91, 68, 82];
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#07071a] overflow-hidden shadow-2xl shadow-black/70">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/6 bg-white/[0.018]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="mx-auto flex items-center gap-2 px-4 py-1 rounded-md bg-white/[0.04] border border-white/6">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
          <span className="text-[11px] text-slate-500 font-mono">ops-platform / dashboard</span>
        </div>
        <div className="w-16" />
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Active Users", value: "1,248", delta: "+12%", color: "text-emerald-400" },
            { label: "Tasks Done", value: "3,892", delta: "+8%", color: "text-emerald-400" },
            { label: "Pending Review", value: "17", delta: "3 overdue", color: "text-amber-400" },
            { label: "Uptime", value: "99.9%", delta: "Stable", color: "text-indigo-400" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/6 bg-white/[0.025] px-3.5 py-3">
              <p className="text-[10px] text-slate-600 mb-1.5">{s.label}</p>
              <p className="text-white font-bold text-lg leading-none mb-2">{s.value}</p>
              <span className={`text-[10px] font-medium ${s.color}`}>{s.delta}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-xl border border-white/6 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] text-slate-400 font-medium">System Activity</p>
              <div className="flex gap-0.5">
                {["24h", "7d", "30d"].map((t, i) => (
                  <span key={t} className={`text-[9px] px-2 py-0.5 rounded ${i === 1 ? "bg-indigo-500/20 text-indigo-400" : "text-slate-600"}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-end gap-1 h-14">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i >= 9 ? "rgba(99,102,241,0.75)" : i >= 6 ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 rounded-xl border border-white/6 bg-white/[0.02] overflow-hidden">
            <div className="px-3.5 py-2.5 border-b border-white/5 flex items-center gap-2">
              <div className="h-2 w-14 rounded bg-white/8" />
              <div className="ml-auto text-[9px] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">RBAC</div>
            </div>
            {[
              { role: "Admin", color: "bg-indigo-500/25 text-indigo-400" },
              { role: "Manager", color: "bg-emerald-500/20 text-emerald-400" },
              { role: "Operator", color: "bg-white/6 text-slate-500" },
            ].map(({ role, color }) => (
              <div key={role} className="flex items-center gap-2.5 px-3.5 py-2.5 border-b border-white/[0.03] last:border-0">
                <div className="w-5 h-5 rounded-full bg-white/8 shrink-0" />
                <div className="h-2 rounded bg-white/6 flex-1" />
                <span className={`text-[9px] px-1.5 py-0.5 rounded ${color}`}>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-24 pb-0 min-h-screen">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-violet-600/6 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {siteConfig.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-5xl sm:text-6xl lg:text-[4.75rem] font-bold text-white tracking-tight leading-[1.05] mb-6"
        >
          Internal systems,{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
            dashboards,
          </span>
          <br />
          and automation tools.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10"
        >
          I build the backend of your business — admin platforms, access control, reporting tools,
          and workflow automation. End-to-end. Production-ready. Remote.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button href="/contact" size="lg">
            Start a conversation
            <ArrowRight size={17} />
          </Button>
          <Button href="/projects" size="lg" variant="secondary">
            View my work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42 }}
          className="relative w-full"
        >
          <div className="absolute -inset-x-8 -top-4 h-16 bg-indigo-600/12 blur-3xl rounded-full pointer-events-none" />
          <DashboardMock />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080812] to-transparent pointer-events-none rounded-b-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
