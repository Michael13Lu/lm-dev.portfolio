import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Full-stack technical expertise — Next.js, TypeScript, Node.js, PostgreSQL, AI integrations, DevOps, and more.",
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
        <AnimatedSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Technical skills
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            The right tools for the job
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I choose technologies based on what&apos;s right for the project — not just what&apos;s trendy. These
            are the tools I use daily and know deeply.
          </p>
        </AnimatedSection>
      </div>
      <SkillsSection />
      <CTASection />
    </div>
  );
}
