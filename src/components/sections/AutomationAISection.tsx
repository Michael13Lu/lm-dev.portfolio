import { ArrowRight, RefreshCw, Bot, FileSearch, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const capabilities = [
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    description: "Approval chains, data sync, scheduled tasks — repetitive steps replaced by reliable automated processes.",
  },
  {
    icon: Bot,
    title: "Internal AI Assistants",
    description: "AI embedded inside your existing platform, scoped to specific roles and tasks — not a standalone tool.",
  },
  {
    icon: FileSearch,
    title: "Document Processing",
    description: "Structured extraction from contracts, forms, and reports. AI reads it; your system acts on clean data.",
  },
  {
    icon: GitBranch,
    title: "System Integration",
    description: "Internal and external systems connected so information flows automatically — no manual data transfer.",
  },
];

export function AutomationAISection() {
  return (
    <section id="automation-ai" className="py-28 sm:py-36 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/6 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <AnimatedSection direction="left">
            <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Automation & AI
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.06] mb-6">
              Reduce manual work.
              <br />
              <span className="text-slate-400">Build smarter systems.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              I integrate automation and AI where they create measurable value — not where they look impressive on a slide.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-10">
              Every feature is grounded in a specific business problem. If it doesn&apos;t reduce real manual work or improve a real decision, it doesn&apos;t belong in the system.
            </p>
            <Button href="/services" variant="outline">
              See all services
              <ArrowRight size={16} />
            </Button>
          </AnimatedSection>

          {/* Right — capability cards 2×2 */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center mb-4">
                      <Icon size={15} className="text-indigo-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
