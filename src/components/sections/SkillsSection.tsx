import { skillGroups, techStack } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

function LevelDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i < level ? "bg-indigo-400" : "bg-white/10"}`}
        />
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/6 mb-20" />

        <AnimatedSection className="mb-16">
          <SectionHeading
            eyebrow="Stack"
            title="The tools I use daily"
            description="Chosen for reliability and production-readiness — not trends."
          />
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 h-full">
                <p className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest mb-5">
                  {group.category}
                </p>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <LevelDots level={skill.level} />
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tech tag cloud */}
        <AnimatedSection delay={0.2} className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full border border-white/8 bg-white/[0.02] text-slate-500 text-xs font-medium hover:text-slate-300 hover:border-white/14 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
