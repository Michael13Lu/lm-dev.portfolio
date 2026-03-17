import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    title: "Business logic first",
    description:
      "Before writing code, I understand the business process — who does what, what data matters, and where the real complexity is.",
  },
  {
    title: "Practical over clever",
    description:
      "I choose the solution that fits the problem. No over-engineering — just reliable software that teams can actually work with every day.",
  },
  {
    title: "Built for daily operational use",
    description:
      "The systems I build are designed to be used by real people under real conditions — with proper access control, clear interfaces, and room to grow.",
  },
  {
    title: "End-to-end ownership",
    description:
      "From gathering requirements and designing architecture to deployment and handoff — I take full responsibility for the system I deliver.",
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
              <div className="w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-[#0d0d1f] border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-500/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-indigo-400">ML</span>
                  </div>
                  <p className="text-slate-400 text-sm">Michael Lu</p>
                  <p className="text-slate-600 text-xs mt-1">Full-Stack Developer · Remote</p>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl border border-white/10 bg-[#0d0d1f]/90 backdrop-blur text-center shadow-xl">
                  <p className="text-lg font-bold text-white">Angular</p>
                  <p className="text-xs text-slate-500">+ ASP.NET Core</p>
                </div>
                <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl border border-indigo-500/20 bg-indigo-950/80 backdrop-blur text-center shadow-xl">
                  <p className="text-lg font-bold text-white">Open</p>
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
              I build software that organizations actually depend on.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;m Michael — a full-stack developer focused on internal business systems:
                admin platforms, management tools, operational dashboards, access control systems,
                and workflow automation. The kind of software that doesn&apos;t get showcased
                publicly but keeps the business running.
              </p>
              <p>
                My core stack is Angular on the frontend and ASP.NET Core with C# on the backend.
                I build with SQL Server, REST APIs, JWT authentication, and role-based access
                control as standard parts of every system — not add-ons, but foundations.
              </p>
              <p>
                Beyond CRUD: I handle the hard parts — multi-level permissions, complex approval
                workflows, cross-system integrations, and business process automation. I&apos;m
                also integrating AI into internal tools where it reduces real manual work, not
                just for the sake of it.
              </p>
              <p>
                I work remotely with clients across industries who need systems built correctly —
                not fast prototypes, but production-grade software their teams can rely on.
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
