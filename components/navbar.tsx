"use client"

import { useState, useEffect } from "react"
import { Apple } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/brain-icon.png"
            alt=""
            width={24}
            height={24}
            className=""
          />
          <span className="font-serif text-lg italic text-foreground">
            GlowLock
          </span>
        </div>

        {/* CTA */}
        <a
          href="https://apps.apple.com/app/glowlock"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground text-[11px] uppercase tracking-[0.15em] font-bold transition-all hover:bg-foreground hover:scale-[1.02] active:scale-[0.98]"
        >
          <Apple className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Get on iOS</span>
          <span className="sm:hidden">iOS</span>
        </a>
      </nav>
    </header>
  )
}
