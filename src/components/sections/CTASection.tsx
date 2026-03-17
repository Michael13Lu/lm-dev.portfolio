import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/60 via-[#0d0d1f] to-[#080812] overflow-hidden p-10 sm:p-16 text-center">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/15 rounded-full blur-[80px] pointer-events-none"
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

            <div className="relative">
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Let&apos;s work together
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 max-w-2xl mx-auto">
                Need a system built right?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                Tell me what you&apos;re solving. I&apos;ll tell you exactly how I&apos;d approach it — clearly, directly, no sales pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" size="lg">
                  Start a conversation
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href={siteConfig.bookingUrl}
                  external
                  size="lg"
                  variant="secondary"
                >
                  <Calendar size={16} />
                  Book a free call
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
