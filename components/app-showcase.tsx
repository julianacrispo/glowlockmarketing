"use client"

import Image from "next/image"

const screenshots = [
  {
    src: "/screenshot-shield.png",
    alt: "GlowLock customizable shield with prompts like 'Was that the plan?' and 'Nothing here will fix how you feel'",
    label: "PAUSE",
    description: "Your personalized shield creates the pause you need. Customize the prompts that remind you why you're here.",
  },
  {
    src: "/screenshot-insights.png",
    alt: "GlowLock insights showing emotions driving your opens and scroll patterns",
    label: "UNDERSTAND",
    description: "See which emotions drive your scrolling. Unlock real insights into your patterns after your first week.",
  },
  {
    src: "/screenshot-coach.png",
    alt: "GlowLock habit coach asking 'What are you trying to avoid right now?'",
    label: "REWIRE",
    description: "Get expert guidance from a habit coach grounded in psychology. Break the loop for good.",
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
            Built on what actually works in habit science
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
