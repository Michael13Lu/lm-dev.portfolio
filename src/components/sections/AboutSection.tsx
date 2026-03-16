import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    title: "Business-first thinking",
    description:
      "I don't just write code — I understand your goals and deliver software that moves your business forward.",
  },
  {
    title: "Clean, maintainable code",
    description:
      "Every project is built to last. Clear architecture, good documentation, and no unnecessary complexity.",
  },
  {
    title: "Transparent communication",
    description:
      "You're never left in the dark. Regular updates, honest timelines, and clear progress reports.",
  },
  {
    title: "Reliable delivery",
    description:
      "I've built software across industries for 8 years. I know what it takes to ship on time and on budget.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual block */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Avatar placeholder */}
              <div className="w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-[#0d0d1f] border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-500/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-indigo-400">AM</span>
                  </div>
                  <p className="text-slate-400 text-sm">Alex Morgan</p>
                  <p className="text-slate-600 text-xs mt-1">Full-Stack Developer</p>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl border border-white/10 bg-[#0d0d1f]/90 backdrop-blur text-center shadow-xl">
                  <p className="text-2xl font-bold text-white">8+</p>
                  <p className="text-xs text-slate-500">Years experience</p>
                </div>
                <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl border border-indigo-500/20 bg-indigo-950/80 backdrop-blur text-center shadow-xl">
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-xs text-slate-500">Projects shipped</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <AnimatedSection direction="right">
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
              A developer who takes your business seriously.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;m Alex — a freelance full-stack developer with 8 years of experience building
                web applications, internal tools, and data-driven systems for businesses across
                multiple industries.
              </p>
              <p>
                I started as a backend developer, grew into full-stack, and over the years I&apos;ve
                developed a strong eye for product thinking, system design, and turning complex
                requirements into clean, working software.
              </p>
              <p>
                My clients range from early-stage startups to established companies. What they have
                in common is that they needed reliable software built by someone who understood their
                business — not just their ticket list.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <CheckCircle2 size={17} className="text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{v.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/contact" size="lg">
              Work with me
              <ArrowRight size={16} />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
