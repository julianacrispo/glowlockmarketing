"use client"

import Image from "next/image"

export function TapeLibrary() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              --- Your Tape Library ---
            </p>
            <h2 className="font-serif text-3xl md:text-5xl italic text-foreground text-balance leading-[1.15]">
              Every day becomes a tape worth keeping
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-md">
              Each reflection is recorded as a cassette tape. Build a library
              celebrating your life. Replay them when you need a reminder of
              what matters most.
            </p>

            {/* Feature list styled as keyboard keys */}
            <div className="flex flex-col gap-3 mt-4">
              {[
                "Voice-recorded gratitude entries",
                "Organized by month, like a mixtape collection",
                "Replay your favorite tapes anytime",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-card border border-border shadow-[1px_2px_0px_0px] shadow-border">
                    <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Play screen screenshot */}
          <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="relative rounded-[2rem] border-2 border-border bg-card p-2 shadow-lg overflow-hidden">
              <div className="rounded-[1.5rem] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play%20screen-VSAYry9BvJAcWMO3EeMwxbabFoTEDf.png"
                  alt="GlowLock Play screen showing cassette tape library of gratitude recordings organized by date"
                  width={390}
                  height={844}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
