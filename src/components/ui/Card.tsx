import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  /** Adds a subtle top-border indigo accent glow */
  accent?: boolean;
}

export function Card({ children, className, hover = false, accent = false }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6",
        hover &&
          "transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40",
        accent && "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-indigo-500/60 before:to-transparent before:rounded-t-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
