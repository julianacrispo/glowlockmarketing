"use client"

import Image from "next/image"

const screenshots = [
  {
    src: "/block-screenshot.png",
    alt: "GlowLock blocking screen - You're reclaiming your brain from the scroll",
    label: "BLOCK",
    description: "No willpower required. GlowLock will block the apps you struggle with most.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1438.PNG-VKjh4et6xF1jUtEtXR1oXbiaWocs6f.png",
    alt: "GlowLock gratitude recording interface with cassette tape UI",
    label: "REWIRE",
    description: "Redirect the scrolling impulse to a moment of gratitude. Rewiring your brain for introspection and positivity.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1442.PNG-KDwygADZPOKKJy0LJguzYk1zercarN.jpeg",
    alt: "GlowLock growth stats showing days of life saved and sessions avoided",
    label: "GROW",
    description: "Stay motivated by viewing your progress in real time. Add friends for more accountability.",
  },
]

export function AppShowcase() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            --- How It Works ---
          </p>
          <h2 className="font-serif text-3xl md:text-5xl italic text-foreground text-balance">
            Three steps to reclaim your brain
          </h2>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {screenshots.map((screenshot, index) => (
            <div key={screenshot.label} className="flex flex-col items-center">
              {/* Step number + label */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border shadow-[2px_3px_0px_0px] shadow-border text-sm font-bold text-foreground">
                  {index + 1}
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  {screenshot.label}
                </span>
              </div>

              {/* Description above phone */}
              <p className="text-sm leading-relaxed text-muted-foreground text-center max-w-[280px] mb-4">
                {screenshot.description}
              </p>

              {/* Phone mockup */}
              <div className="relative w-full max-w-[280px] mx-auto">
                <div className="relative rounded-[2rem] border-2 border-border bg-card p-2 shadow-lg overflow-hidden">
                  <div className="rounded-[1.5rem] overflow-hidden">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={390}
                      height={844}
                      className="w-full h-auto"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
