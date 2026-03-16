import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of client projects — web apps, dashboards, API integrations, AI tools, and automation systems built for real businesses.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
        <AnimatedSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Projects that delivered results
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of client work — each project had a real business problem that needed a real
            solution. Here&apos;s what I built and what it achieved.
          </p>
        </AnimatedSection>
      </div>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Card hover accent className="h-full flex flex-col group">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="indigo">{project.category.replace("-", " ")}</Badge>
                    {project.featured && (
                      <Badge variant="amber">Featured</Badge>
                    )}
                  </div>

                  <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.longDescription ?? project.description}
                  </p>

                  {project.results && project.results.length > 0 && (
                    <div className="mb-5 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/12">
                      <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mb-2.5">
                        <TrendingUp size={12} />
                        Outcomes
                      </p>
                      <ul className="space-y-1.5">
                        {project.results.map((r) => (
                          <li key={r} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
