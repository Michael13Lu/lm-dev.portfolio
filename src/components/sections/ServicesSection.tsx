import {
  Globe,
  LayoutDashboard,
  Plug,
  Zap,
  Brain,
  Wrench,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  LayoutDashboard,
  Plug,
  Zap,
  Brain,
  Wrench,
  ShieldCheck,
  BarChart3,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What I do"
            title="Services built around your business"
            description="I specialise in practical software solutions that solve real problems — not just code for the sake of it."
          />
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <StaggerItem key={service.id}>
                <Card hover accent className="h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/12 border border-indigo-500/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-indigo-400" />
                  </div>

                  <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {service.highlights.map((h) => (
                      <li key={h} className="text-xs text-slate-500 flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
