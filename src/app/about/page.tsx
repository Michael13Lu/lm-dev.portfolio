import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Michael Lu — full-stack developer specialising in internal business systems, admin platforms, dashboards, and workflow automation. Available for remote projects.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-16">
        <AboutSection />
        <CTASection />
      </div>
    </>
  );
}
