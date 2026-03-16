import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navItems } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#06060f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-white font-bold text-lg tracking-tight hover:text-indigo-400 transition-colors"
            >
              <span className="text-indigo-400">&lt;</span>
              {siteConfig.name}
              <span className="text-indigo-400"> /&gt;</span>
            </Link>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs">
              Freelance full-stack developer building clean, scalable business software.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Github, href: siteConfig.socials.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/6 border border-white/6 hover:border-white/12 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {siteConfig.email}
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              </li>
              <li className="text-sm text-slate-500">{siteConfig.location}</li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {siteConfig.availability}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
