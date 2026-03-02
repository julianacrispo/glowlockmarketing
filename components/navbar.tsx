"use client"

import { useState, useEffect } from "react"
import { Apple } from "lucide-react"

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
          <div className="flex items-center gap-1" aria-hidden="true">
            <div className="h-5 w-5 rounded-full border-2 border-foreground" />
            <div className="h-2.5 w-3 bg-foreground rounded-sm -mx-0.5" />
            <div className="h-5 w-5 rounded-full border-2 border-foreground" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-foreground ml-1">
            GlowLock
          </span>
        </div>

        {/* CTA */}
        <a
          href="#"
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
