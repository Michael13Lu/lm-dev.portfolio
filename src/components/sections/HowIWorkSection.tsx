import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I learn the actual business process — who uses it, what decisions it supports, and where complexity really lives. This prevents building the wrong thing correctly.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Before any code: data model, user roles, access rules, integration points. Clear architecture up front means less rework and a system that can grow.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I deliver in working increments — not a big reveal at the end. You see real progress early and can redirect before it matters.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Deployment, documentation, access setup, team handoff. Delivery doesn't end at go-live — you own the system and can run it independently.",
  },
];

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="py-28 sm:py-36">
      {/* Subtle section separator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/6 mb-20" />

        <AnimatedSection className="mb-16">
          <SectionHeading
            eyebrow="Process"
            title="How every project runs"
            description="Clear process means fewer surprises, better decisions, and software that actually works for the people using it."
          />
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex flex-col">
                  {/* Number circle */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border border-indigo-500/30 bg-indigo-500/8 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-indigo-400">{step.number}</span>
                    </div>
                    {/* Mobile connector */}
                    {i < steps.length - 1 && (
                      <div className="lg:hidden flex-1 h-px bg-white/8" />
                    )}
                  </div>

                  <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.2} className="mt-16">
          <div className="border-t border-white/6 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-slate-500 text-sm max-w-lg">
              I keep you informed at every stage — what&apos;s done, what&apos;s next, and when something needs a decision. No surprises, no technical jargon without explanation.
            </p>
            <span className="shrink-0 text-xs text-indigo-400 border border-indigo-500/20 bg-indigo-500/6 px-3 py-1.5 rounded-full">
              Clear communication throughout
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
