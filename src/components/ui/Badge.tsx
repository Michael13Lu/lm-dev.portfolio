import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "indigo" | "green" | "amber";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-white/6 text-slate-400 border border-white/8",
  indigo: "bg-indigo-500/12 text-indigo-400 border border-indigo-500/20",
  green: "bg-emerald-500/12 text-emerald-400 border border-emerald-500/20",
  amber: "bg-amber-500/12 text-amber-400 border border-amber-500/20",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
