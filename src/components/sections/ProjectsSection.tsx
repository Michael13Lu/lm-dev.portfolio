import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      {/* Subtle section bg */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Recent work"
              title="Projects that delivered results"
              description="A selection of client projects — each one focused on solving a real business problem."
              align="left"
            />
            <Button href="/projects" variant="secondary" className="shrink-0">
              All projects
              <ArrowRight size={15} />
            </Button>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Card hover accent className="h-full flex flex-col group">
                  {/* Category label */}
                  <Badge variant="indigo" className="mb-4 self-start">
                    {project.category.replace("-", " ")}
                  </Badge>

                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <div className="mb-5 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/12">
                      <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mb-2">
                        <TrendingUp size={12} />
                        Key outcomes
                      </p>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((r) => (
                          <li key={r} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
