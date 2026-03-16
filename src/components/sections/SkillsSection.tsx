import { skillGroups, techStack } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

function SkillBar({ level }: { level: number }) {
  const pct = (level / 5) * 100;
  return (
    <div className="w-16 h-1.5 rounded-full bg-white/6 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-400"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Expertise"
            title="The tools I use to get it done"
            description="A practical set of technologies — chosen for reliability, performance, and developer experience."
          />
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <Card className="h-full">
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-5">
                  {group.category}
                </p>
                <ul className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <SkillBar level={skill.level} />
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tech cloud */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-slate-400 text-xs font-medium hover:text-white hover:border-indigo-500/30 transition-colors cursor-default"
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
