import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Alex Morgan — a freelance full-stack developer with 8+ years building business software, web apps, and data-driven tools.",
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
