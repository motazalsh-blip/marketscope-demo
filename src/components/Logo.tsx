import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0B1B3A" />
      <path d="M7 22l6-7 5 4 7-9" fill="none" stroke="#34D399" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25" cy="10" r="2.2" fill="#34D399" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <LogoMark />
      <span className={`text-lg font-semibold tracking-tight ${inverted ? "text-white" : "text-navy-900"}`}>
        Market<span className="text-emerald-500">Scope</span>
      </span>
    </Link>
  );
}
