import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    title: "Business-first thinking",
    description:
      "I focus on what the software needs to do for the business — not just on making the code work technically.",
  },
  {
    title: "Structured, maintainable code",
    description:
      "Clean architecture, clear separation of concerns, and code that the next developer can understand.",
  },
  {
    title: "Practical over complicated",
    description:
      "I choose solutions that fit the problem. No unnecessary layers, no over-engineering.",
  },
  {
    title: "Reliable delivery",
    description:
      "Clear communication, honest progress updates, and software that works as described.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual block */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Avatar placeholder */}
              <div className="w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-[#0d0d1f] border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-500/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-indigo-400">ML</span>
                  </div>
                  <p className="text-slate-400 text-sm">Michael Lu</p>
                  <p className="text-slate-600 text-xs mt-1">Full-Stack Developer · Israel</p>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl border border-white/10 bg-[#0d0d1f]/90 backdrop-blur text-center shadow-xl">
                  <p className="text-2xl font-bold text-white">Angular</p>
                  <p className="text-xs text-slate-500">+ ASP.NET Core</p>
                </div>
                <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl border border-indigo-500/20 bg-indigo-950/80 backdrop-blur text-center shadow-xl">
                  <p className="text-2xl font-bold text-white">Open</p>
                  <p className="text-xs text-slate-500">For projects</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <AnimatedSection direction="right">
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
              A developer who builds software that solves real problems.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;m Michael — a full-stack developer based in Israel focused on building
                practical business software. My core stack is Angular on the frontend and
                ASP.NET Core (C#) on the backend.
              </p>
              <p>
                I work on internal systems, admin panels, business dashboards, and
                role-based platforms — the kind of software that organizations use to manage
                their operations. I pay attention to how the business actually works, not
                just what the ticket says.
              </p>
              <p>
                I also work on API integrations, background automation, and AI-assisted
                tooling — connecting systems and reducing manual work where it makes sense.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <CheckCircle2 size={17} className="text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{v.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/contact" size="lg">
              Work with me
              <ArrowRight size={16} />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
