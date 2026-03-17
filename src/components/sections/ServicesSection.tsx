import { Globe, LayoutDashboard, Plug, Zap, Brain, ShieldCheck, BarChart3 } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  LayoutDashboard,
  Plug,
  Zap,
  Brain,
  ShieldCheck,
  BarChart3,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left — heading */}
          <AnimatedSection direction="left" className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Services"
              title="What I build for businesses"
              description="Not generic web development — concrete systems that solve operational problems and keep working reliably."
              align="left"
            />
          </AnimatedSection>

          {/* Right — cards grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <StaggerItem key={service.id}>
                  <div className="group rounded-2xl border border-white/8 bg-white/[0.025] p-6 h-full hover:border-indigo-500/25 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/18 flex items-center justify-center mb-5">
                      <Icon size={17} className="text-indigo-400" />
                    </div>
                    <h3 className="text-white font-semibold text-[15px] mb-2.5 group-hover:text-indigo-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
