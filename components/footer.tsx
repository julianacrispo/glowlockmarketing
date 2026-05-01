import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/brain-icon.png"
            alt=""
            width={20}
            height={20}
            className="mix-blend-multiply opacity-70"
          />
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
            GlowLock
          </span>
        </div>

        <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
          Made for the ones who want their attention back. Designed with analog vibes in mind.
        </p>

        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">Support</Link>
        </div>

        <p className="text-[10px] text-muted-foreground/60 tracking-wider uppercase">
          {'2026 Metrics Health International. All Rights Reserved.'}
        </p>
      </div>
    </footer>
  )
}
