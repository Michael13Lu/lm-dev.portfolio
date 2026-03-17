import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl border border-white/8 bg-white/[0.02] overflow-hidden px-10 py-20 sm:px-20 sm:py-28 text-center">
            {/* Glows */}
            <div
              aria-hidden
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-600/14 rounded-full blur-[80px] pointer-events-none"
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

            <div className="relative">
              <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-5">
                Let&apos;s work together
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5 max-w-2xl mx-auto leading-[1.05]">
                Let&apos;s build your system.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto mb-10">
                Tell me what you&apos;re solving. I&apos;ll tell you how I&apos;d approach it — directly, clearly, no sales pitch.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 text-white font-medium text-base hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/40 active:scale-[0.98]"
                >
                  Start a conversation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-slate-300 font-medium text-base hover:bg-white/8 hover:text-white transition-colors active:scale-[0.98]"
                >
                  See my work first
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
