"use client"

import Image from "next/image"

const screenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1443.PNG-RGfoyJaxoK5EBJzCo3AI9ZREvFFKoM.png",
    alt: "GlowLock blocking Instagram - shows cassette tape icon with blocked message",
    label: "BLOCK",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1438.PNG-VKjh4et6xF1jUtEtXR1oXbiaWocs6f.png",
    alt: "GlowLock gratitude recording interface with cassette tape UI",
    label: "RECORD",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1442.PNG-KDwygADZPOKKJy0LJguzYk1zercarN.jpeg",
    alt: "GlowLock growth stats showing days of life saved and sessions avoided",
    label: "GROW",
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
            Three steps to take your attention back
          </h2>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {screenshots.map((screenshot, index) => (
            <div key={screenshot.label} className="flex flex-col items-center gap-4">
              {/* Step number as keyboard key */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border shadow-[2px_3px_0px_0px] shadow-border text-sm font-bold text-foreground">
                  {index + 1}
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  {screenshot.label}
                </span>
              </div>

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

        {/* Description under screenshots */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Open Instagram, TikTok, or any app you choose &mdash; GlowLock steps in and
            says not yet.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Record a voice note about what you are grateful for. Your gratitude is saved
            as a cassette tape you can replay anytime.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Track your growth. See days of life saved, scroll sessions avoided, and
            your gratitude streak over time.
          </p>
        </div>
      </div>
    </section>
  )
}
