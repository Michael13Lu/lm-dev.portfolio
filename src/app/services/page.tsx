import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web applications, admin dashboards, API integrations, process automation, AI solutions, and internal tools — built for businesses that need reliable software.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
        <AnimatedSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Software built around your business
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every engagement starts with understanding what your business actually needs — then
            building the right solution, not the most technically impressive one.
          </p>
        </AnimatedSection>
      </div>
      <ServicesSection />
      <CTASection />
    </div>
  );
}
