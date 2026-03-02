"use client"

import { Apple } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center px-6 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle tape lines decoration */}
      <div className="absolute top-12 left-0 right-0 flex justify-center opacity-20 pointer-events-none" aria-hidden="true">
        <div className="w-full max-w-2xl h-px bg-border" />
      </div>

      {/* Main headline */}
      <h1 className="text-center max-w-4xl">
        <span className="block font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground text-balance italic">
          Glow before
        </span>
        <span className="block font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground text-balance italic">
          you scroll.
        </span>
      </h1>

      {/* Sub headline */}
      <p className="mt-6 max-w-lg text-center text-base md:text-lg leading-relaxed text-muted-foreground">
        GlowLock blocks your most addictive apps until you complete a gratitude
        reflection. Take back your days, one reflection at a time.
      </p>

      {/* CTA Button */}
      <a
        href="#"
        className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-primary-foreground text-sm uppercase tracking-[0.15em] font-bold transition-all hover:bg-foreground hover:scale-[1.02] active:scale-[0.98]"
      >
        <Apple className="h-5 w-5" />
        Get on iOS Now
      </a>

      {/* Social proof mini */}
      <div className="mt-6 flex items-center gap-2">
        <div className="flex -space-x-1" aria-label="5 star rating">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-accent fill-accent"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-muted-foreground tracking-wider uppercase">
          96+ Five-Star Reviews
        </span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground tracking-wider">
        Former doomscrollers love us
      </p>


    </section>
  )
}
