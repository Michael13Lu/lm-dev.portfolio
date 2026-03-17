import { Bot, RefreshCw, FileSearch, GitBranch, Cpu } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const items = [
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    description:
      "Replacing manual, repetitive steps with automated processes — data sync between systems, approval chains, scheduled reports, and triggered actions based on business events.",
  },
  {
    icon: Bot,
    title: "Internal AI Assistants",
    description:
      "AI assistants embedded inside your existing internal platforms. They work within your access control model, assist specific roles with specific tasks, and stay scoped to what's useful.",
  },
  {
    icon: FileSearch,
    title: "Document Processing",
    description:
      "Structured extraction from unstructured inputs — contracts, intake forms, reports. AI reads the document; your system gets clean, structured data it can act on.",
  },
  {
    icon: GitBranch,
    title: "Process Integration",
    description:
      "Connecting internal systems, external APIs, and data sources so information flows automatically — without staff manually moving it from one place to another.",
  },
  {
    icon: Cpu,
    title: "AI Inside Real Systems",
    description:
      "AI capabilities built into the systems your team already uses — not standalone tools that require a separate login and a separate habit. Useful AI, in context.",
  },
];

export function AutomationAISection() {
  return (
    <section id="automation-ai" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Automation & AI"
            title="Reduce manual work. Build smarter systems."
            description="I integrate automation and AI into internal tools where it creates real, measurable value — not where it looks impressive on a slide."
          />
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Card hover className="h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/12 border border-indigo-500/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <AnimatedSection className="mt-12">
          <div className="rounded-2xl border border-indigo-500/15 bg-indigo-500/[0.04] px-8 py-6 text-center max-w-2xl mx-auto">
            <p className="text-slate-300 text-sm leading-relaxed">
              Every automation or AI feature I build is grounded in a specific business problem — not added because the technology exists. If it doesn&apos;t reduce real manual work or improve a real decision, it doesn&apos;t belong in the system.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
