import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Work"
            title="Projects that solved real problems"
            description="Each project started with a business problem — not a technology preference."
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
              <div className="group rounded-2xl border border-white/8 bg-white/[0.025] p-6 h-full flex flex-col hover:border-white/16 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5">
                {/* Category */}
                <div className="mb-5">
                  <Badge variant="indigo">{project.category.replace("-", " ")}</Badge>
                </div>

                {/* Title + description */}
                <h3 className="text-white font-semibold text-[15px] mb-2.5 group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-lg border border-white/8 bg-white/[0.03] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
