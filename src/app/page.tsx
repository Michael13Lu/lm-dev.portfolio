import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AutomationAISection } from "@/components/sections/AutomationAISection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowIWorkSection />
      <ProjectsSection />
      <AutomationAISection />
      <SkillsSection />
      <CTASection />
    </>
  );
}
