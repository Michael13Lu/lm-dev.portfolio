import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand the business first",
    description:
      "I start by learning the actual process — not just the feature list. Who uses the system? What decisions does it support? Where does complexity live? This prevents building the wrong thing correctly.",
  },
  {
    number: "02",
    title: "Define the system boundaries",
    description:
      "Before any code, I map out the data model, user roles, access rules, and integration points. Clear structure up front means less rework later and a codebase that can grow without falling apart.",
  },
  {
    number: "03",
    title: "Build iteratively with working software",
    description:
      "I deliver in working increments — not a big reveal at the end. Each iteration is functional, testable, and aligned with real usage. You see progress early and can redirect before it matters.",
  },
  {
    number: "04",
    title: "Focus on how it actually gets used",
    description:
      "Internal tools fail when they ignore the real user. I pay attention to the daily workflows, edge cases, and error conditions that business users actually encounter — not just the happy path.",
  },
  {
    number: "05",
    title: "Communicate clearly throughout",
    description:
      "I keep you informed at every stage — what's done, what's next, and when something needs a decision. No surprises. No technical jargon without explanation. Clear, direct updates.",
  },
  {
    number: "06",
    title: "Hand off properly",
    description:
      "Delivery doesn't end at deployment. I make sure the system is documented, the access is set up correctly, and the team knows how to use it. You own the system — I make sure you can run it.",
  },
];

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Process"
            title="How I work"
            description="Building internal systems is as much about process as it is about code. Here's how I approach every engagement."
          />
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-6 h-full hover:border-white/14 hover:bg-white/[0.035] transition-all duration-300">
                <span className="text-4xl font-black text-indigo-500/20 leading-none block mb-4">
                  {step.number}
                </span>
                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
